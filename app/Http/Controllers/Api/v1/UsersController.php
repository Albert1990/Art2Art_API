<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Enums\ErrorMessages;
use App\Http\Enums\Gender;
use App\Http\Enums\SocialPlatform;
use App\Http\Helpers;
use App\Http\PasswordResetEmail;
use App\Library\Transformers\UserTransformer;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\UserUpdateProfileRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserSocialRegisterRequest;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Mockery\CountValidator\Exception;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;

class UsersController extends ApiController
{

    /**
     * @api {post} /auth/login Login
     * @apiName UserLogin
     * @apiDescription this field shown just for student artwork_default_display_status
     * @apiGroup Auth
     *
     * @apiParam {String} email Mandatory Email.
     * @apiParam {String} password Mandatory Password.
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":{"id":"946","type":"student","email":"student_mail@yopmail.com","first_name":"mhd","last_name":"student","gender":"M","artwork_default_display_status":1,"address":"test","birthday":"2000-10-05","photo":"http://localhost:8888/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"19","name":"Barbados ","code":"1-246"},"school":{"id":"944","email":"shalabi.eng@gmail.com","name":"test school","photo":"http://localhost:8888/public/images/uploads/users/default-user.jpg","country":{"id":"200","name":"Syria ","code":"00963"}}},"message":"Item updated successfully"}
     *
     *
     * @apiError UserNotFound User not found.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"INCORRECT_EMAIL_OR_PASSWORD","message":"","details":[]}}
     *
     * @apiError ValidationError validation error.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"VALIDATION_ERROR","message":"","details":{"password":["The password field is required."]}}}
     *
     * @apiError {String} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Applications\/MAMP\/htdocs\/tapdrive\/api\/app\/Http\/Controllers\/Api\/v1\/UsersController.php in Line :127","details":[]}}
     */
    public function login(UserLoginRequest $request)
    {
        try {
            $user_attributes = [
                'email' => $request->input('email','required'),
                'password' => $request->input('password','required'),
                // 'social_id' => $request->input('socialId',''),
                // 'social_platform' => ($request->input('socialPlatform',SocialPlatform::NONE)),
            ];

            if($user_attributes['email'] != '')
                $user = User::where('user_email', $user_attributes['email'])->first();
            // if($user_attributes['social_id'] != '')
            //     $user = User::where('social_id',$user_attributes['social_id'])
            //         ->where('social_platform',$user_attributes['social_platform'])
            //         ->first();
            if ($user == null)
                return $this->respondError(ErrorMessages::MODEL_NOT_FOUND);



            // if (!Hash::check($user_attributes['password'], $user->user_password))
            if (md5($user_attributes['password']) !=  $user->user_password)
                return $this->respondError(ErrorMessages::INCORRECT_EMAIL_OR_PASSWORD);

            $transformedUser=Helpers::transformObject($user, new UserTransformer());
            $transformedUser['token'] = JWTAuth::fromUser($user);
            return $this->respond(['data' => $transformedUser]);
        } catch (Exception $ex) {
            return $this->respondUnknownException($ex);
        }
    }

    /**
     * Forget password
     *
     * @api {post} /auth/forget_password Forget Password
     * @apiName ForgetPassword
     * @apiGroup Auth
     *
     * @apiParam {String} email User email
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":[],"message":"RESET_LINK_SENT"}
     *
     * @apiError {json} VALIDATION_ERROR 
     *
     * @apiError {json} INVALID_USER 
     *
     * @apiError {json} UNKNOWN_EXCEPTION
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"CANT_RESET_PASSWORD","message":"Could not reset password","details":[]}}
     *
     * @apiErrorExample {json} Error-Response: VALIDATION_ERROR
     * {"error":{"code":"VALIDATION_ERROR","message":"","details":{"email":["The email must be a valid email address."]}}}
     *
     * @apiErrorExample {json} Error-Response: UNKNOWN_EXCEPTION
     *
     *{"error":{"code":"UNKNOWN_EXCEPTION","message":"Error Processing Request in /Api/v1/UsersController.php in Line :296","details":[]}}
     *
     * @apiErrorExample {json} Error-Response:
     *    {"error":{"code":"INVALID_USER","message":"We couldn't find your account with that information.","details":[]}}
     *
     */
    public function forgetPassword(Request $request)
    {
        try{
            $validator = Validator::make($request->all(),[
                    'email' => 'required|email',
                ]);

            if($validator->fails())
                    return $this->respondValidationFailed($validator->errors());

              $credentials =$request->only('email');
              $credentials['user_email']=$credentials['email'];
              unset($credentials['email']);
            $response = Password::sendResetLink($credentials, function (Message $message) {
                $message->subject("Your Password Reset Token");
            });
            switch ($response) {
                case Password::RESET_LINK_SENT:
                    return $this -> respondCreated([],"RESET_LINK_SENT");
                case Password::INVALID_USER:
                    return $this -> respondError("INVALID_USER",'We couldn\'t find your account with that information.');
            }
         } catch (Exception $ex) {
            return $this->respondUnknownException($ex);
        }
    }


    /**
     * Reset password
     *
     * @api {post} /auth/reset_password Reset Password
     * @apiName ResetPassword
     * @apiGroup Auth
     *
     * @apiParam {string} email user email.
     * @apiParam {string} token Reset password token
     * @apiParam {string} password New password
     * @apiParam {string} password_confirmation New password confirmation
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":[],"message":"PASSWORD_RESET"}
     *
     * @apiError {json} VALIDATION_ERROR 
     *
     * @apiError {json} UNKNOWN_EXCEPTION
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"CANT_RESET_PASSWORD","message":"Could not reset password","details":[]}}
     *
     * @apiErrorExample {json} Error-Response: VALIDATION_ERROR
     * {"error":{"code":"VALIDATION_ERROR","message":"","details":{"email":["The email must be a valid email address."]}}}
     *
     * @apiErrorExample {json} Error-Response: UNKNOWN_EXCEPTION
     *
     *{"error":{"code":"UNKNOWN_EXCEPTION","message":"Error Processing Request in /Api/v1/UsersController.php in Line :296","details":[]}}
     *
     */
    public function resetPassword(Request $request)
    {
        try{
            $validator = Validator::make($request->all(),[
                    'email' => 'required|email|exists:users,user_email',
                ]);

            if($validator->fails())
                    return $this->respondValidationFailed($validator->errors());

            $credentials = $request->only(
                'password', 'password_confirmation', 'token','email'
            );
            $credentials['user_email']=$credentials['email'];
            unset($credentials['email']);
            $response = Password::reset($credentials, function ($user, $password) {
                $user->user_password = md5($password);
                $user->save();
            });

            switch ($response) {
                case Password::PASSWORD_RESET:
                    return $this -> respondCreated([],"PASSWORD_RESET");
                    return;
                default:
                    return $this -> respondError("CANT_RESET_PASSWORD",'Could not reset password');
            }
         } catch (Exception $ex) {
            return $this->respondUnknownException($ex);
        }
    }
}
