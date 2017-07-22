<?php

namespace App\Http\Middleware;

use App\Http\Enums\ErrorMessages;
use App\Http\Enums\ErrorObject;
use Closure;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Middleware\BaseMiddleware;

class CheckUserToken extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $optional = false)
    {
        try {
            $token=$request->header('token',false);
            if(!$token) $token = $request->input('token',false);
            $user = false;

            if(!$token && !$optional)
                return $this->respond('tymon.jwt.absent', [
                    "code" => ErrorMessages::TOKEN_NOT_PROVIDED,
                    "message" => "You must provide token to access this url"
                ], 400);

            if($token)
                $user = $this->auth->authenticate($token);

        } catch (TokenExpiredException $e) {
            return $this->respond('tymon.jwt.expired', [
                "code" => ErrorMessages::TOKEN_EXPIRED,
                "message" => "Your token is expired re-login again"
            ], $e->getStatusCode(), [$e]);
        } catch (JWTException $e) {
            return $this->respond('tymon.jwt.invalid', [
                "code" => ErrorMessages::TOKEN_INVALID,
                "message" => "Your token is invalid re-login again"
            ], $e->getStatusCode(), [$e]);
        }

        if (!$user && !$optional) {
            return $this->respond('tymon.jwt.user_not_found', [
                "code" => ErrorMessages::USER_NOT_FOUND,
                "message" => "Your token does not match any user"
            ], 404);
        }

        $this->events->fire('tymon.jwt.valid', $user);
        return $next($request);
    }
}
