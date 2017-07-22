<?php

namespace App\Http\Middleware;

use App\Http\Enums\ErrorMessages;
use App\Http\Enums\ErrorObject;
use Closure;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Middleware\BaseMiddleware;

use Mockery\CountValidator\Exception;

class CheckUserRole extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $role = false)
    {
        try {
            $user = JWTAuth::parseToken()->toUser();
            if($user->user_type != $role){
                 return $this->respond('', [
                    "code" => ErrorMessages::UNAUTHORIZED,
                    "message" => "You must have privilege to access this url"
                ], 400);
            }

        } catch (Exception $ex){
            return $this->respond('', [
                    "code" => ErrorMessages::UNKNOWN_EXCEPTION,
                    "message" => $ex->getMessage().' in '.$ex->getFile().' in Line :'.$ex->getLine()
                ], 400);
        }

        return $next($request);
    }
}
