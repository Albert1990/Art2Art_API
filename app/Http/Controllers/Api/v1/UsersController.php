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
     * @api {post} /auth/register Register
     * @apiName UserRegister
     * @apiGroup Auth
     *
     * @apiParam {String} [email] (optional if social_id & social_platform are exists).
     * @apiParam {String} [password] (optional if social_id & social_platform are exists).
     * @apiParam {String} name  full name of the User.
     * @apiParam {String} phone  phone of the User.
     * @apiParam {String} gender  gender of the User (MALE | FEMALE).
     * @apiParam {Date} birthday  birthday of the User (UTC format 2017-07-19 21:16:04.000000).
     * @apiParam {Number} countryId  user country id.
     * @apiParam {File} [photo]  user photo (mimetypes:image/png,image/jpeg,image/bmp|max:1000).
     * @apiParam {String} [socialId] user social platform id.
     * @apiParam {Number} [socialPlatform] (FACEBOOK, GOOGLE_PLUS,TWITTER).
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":{"id":"2","email":"","name":"samer shatta","gender":"MALE","phone":"76309032","address":"","birthday":"11\/09\/1990","photo":"https:\/\/graph.facebook.com\/bbbdgdg\/picture?type=normal","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwOC9hcGkvdjEvYXV0aC9yZWdpc3RlciIsImlhdCI6MTQ5ODE4OTgyNSwiZXhwIjoxNDk4MTkzNDI1LCJuYmYiOjE0OTgxODk4MjUsImp0aSI6IjNhSm5PNHZOODFOQWtWWEsifQ.H3L-bgou3hT7q5a7vYSDm1l2G8Xh7wc8gcibVusb1cM","isActive":true,"isVerified":"","country":{"id":"4","name":"Afghanistan"}}}
     *
     * @apiError ValidationError Validation error.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"USER_EXIST_BEFORE","message":"","details":[]}}
     *
     * @apiError {String} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Applications\/MAMP\/htdocs\/tapdrive\/api\/app\/Http\/Controllers\/Api\/v1\/UsersController.php in Line :127","details":[]}}
     */
    public function register(UserRegisterRequest $request)
    {
        try {
            $user_attributes = [
                'email' => $request->input('email',''),
                'password' => bcrypt($request->input('password','')),
                'name' => $request['name'],
                'gender' => $request['gender'],
                'phone' => $request['phone'],
                'birthday' => $request['birthday'],
                'country_id' => $request['countryId'],
                'photo' => $request->hasFile('photo') ? Helpers::uploadFile($request->file('photo'), UserTransformer::IMAGES_PATH, 'photo_') : '',
                'social_id' => $request->input('socialId',''),
                'social_platform' => $request->input('socialPlatform',false) ? $request['socialPlatform'] : SocialPlatform::NONE,
                'is_active' => true,
                'is_verified' => false,
            ];

            if($user_attributes['email'] != '') {
                if (User::where('email', $user_attributes['email'])->first() != null)
                    return $this->respondError(ErrorMessages::USER_EXIST_BEFORE);
            }

            if($user_attributes['social_id'] != '') {
                if (User::where('social_id', $user_attributes['social_id'])
                        ->where('social_platform', $user_attributes['social_platform'])
                        ->first() != null)
                    return $this->respondError(ErrorMessages::USER_EXIST_BEFORE);
            }

            $user = User::create($user_attributes);
            $user->token = JWTAuth::fromUser($user);
            return $this->respond(['data' => Helpers::transformObject($user, new UserTransformer())]);

        } catch (\Exception $ex) {
            return $this->respondUnknownException($ex);
        }
    }

    /**
     * @api {post} /auth/login Login
     * @apiName UserLogin
     * @apiGroup Auth
     *
     * @apiParam {String} email Mandatory Email.
     * @apiParam {String} password Mandatory Password.
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":{"id":"946","type":"student","email":"student_mail@yopmail.com","first_name":"mhd","last_name":"student","gender":"M","address":"test","birthday":"2017-10-05","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"19","name":"Barbados ","code":"1-246"},"school":{"id":"944","email":"shalabi.eng@gmail.com","name":"test school","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}},"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjk0NiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNTAwNzM0MDI0LCJleHAiOjE1MDA3NTIwMjQsIm5iZiI6MTUwMDczNDAyNCwianRpIjoiY0xud2dkUVZTRUZ4SWZEWCJ9.99WtzPOmqT5HKgMOIHlLsVunjbEwbkixVLElieJiZSA"}}
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
     * @api {put} /users Update User Profile
     * @apiHeader {string} token User Auth Token
     * @apiName UpdateUserProfile
     * @apiGroup Users
     *
     * @apiParam {String} name name of the User.
     * @apiParam {String} phone  phone of the User.
     * @apiParam {String} gender  gender of the User (MALE | FEMALE).
     * @apiParam {Date} birthday  birthday of the User (UTC format 2017-07-19 21:16:04.000000).
     * @apiParam {Number} countryId  user country id.
     * @apiParam {File} [photo]  user photo (mimetypes:image/png,image/jpeg,image/bmp|max:1000).
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":{"id":"1","email":"samer.shatta@gmail.com","name":"Ziad shatta","gender":"FEMALE","phone":"76309032","address":"","birthday":"11\/09\/1990","photo":"http:\/\/localhost:3008\/images\/uploads\/users\/default-user.jpg","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwOC9hcGkvdjEvdXNlcnMiLCJpYXQiOjE0OTgyNTE1NzYsImV4cCI6MTQ5ODI1NTE3NiwibmJmIjoxNDk4MjUxNTc2LCJqdGkiOiJMSHBCQmJQYld3YXpuT2xXIn0.jpk6zH5wf9Rdy-XzP_FbqINmuS0jTZVV6JvjfXPXY7U","isActive":true,"isVerified":true,"country":{"id":"4","name":"Afghanistan"}},"message":"Item updated successfully"}
     *
     * @apiError ValidationError Validation error.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"USER_EXIST_BEFORE","message":"","details":[]}}
     *
     * @apiError {String} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Applications\/MAMP\/htdocs\/tapdrive\/api\/app\/Http\/Controllers\/Api\/v1\/UsersController.php in Line :127","details":[]}}
     */
    public function update(UserUpdateProfileRequest $request)
    {
        try {
            $user = Auth::user();
            if ($user == null)
                return $this->respondModelNotFound();

            $user->name = $request['name'];
            $user->gender = $request['gender'];
            $user->phone = $request['phone'];
            $user->birthday = $request['birthday'];
            $user->country_id = $request['countryId'];
            //if (!empty($request['password']))
            //    $user->password = bcrypt($request['password']);

            //check if photo uploaded
            if ($request->hasFile('photo')) {
                //delete old photo..
                Helpers::deleteFile(UserTransformer::IMAGES_PATH . $user->userPhoto);
                $user->photo = Helpers::uploadFile($request->file('photo'), UserTransformer::IMAGES_PATH, 'photo_');
            }
            $user->token = JWTAuth::fromUser($user);
            $user->save();

            return $this->respondUpdated(Helpers::transformObject($user, new UserTransformer()));
        } catch (Exception $ex) {
            return $this->respondUnknownException($ex);
        }
    }

    /**
     * Forget password
     *
     * @api {post} /auth/forgetPassword Forget Password
     * @apiName ForgetPassword
     * @apiGroup Auth
     *
     * @apiParam {String} email User email
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":[],"message":"RESET_LINK_SENT"}
     *
     * @apiError {String} VALIDATION_ERROR validation failed
     * @apiError {String} UNKNOWN_EXCEPTION
     *
     * @apiErrorExample {json} Error-Response:
     *    {"error":{"code":"INVALID_USER","message":"We couldn't find your account with that information.","details":[]}}
     *
     */
    public function forgetPassword(Request $request)
    {
        $validator = Validator::make($request->all(),[
                'email' => 'required|email|exists:users,user_email',
            ]);

            if($validator->fails())
                return $this->respondValidationFailed($validator->errors());
          //var_dump($request->only('email')); 
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
     * @apiError {String} VALIDATION_ERROR validation failed
     * @apiError {String} UNKNOWN_EXCEPTION
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"CANT_RESET_PASSWORD","message":"Could not reset password","details":[]}}
     *
     */
    public function resetPassword(Request $request)
    {
      //  var_dump( $user = Auth::user());die();

       //  $token = JWTAuth::getToken();
       //  //JWTAuth::setToken($token);
       //  $user = JWTAuth::parseToken()->authenticate();

       //  //echo $token;
       // echo $user->user_email;
       //  var_dump($user);
       //  die();
        //$user =function() use($user){  ... }
        // $this->events->fire('tymon.jwt.valid', $user);

        $credentials = $request->only(
            'password', 'password_confirmation', 'token'
        );
        // $credentials['user_email']=$credentials['email'];
        // unset($credentials['email']);
        //var_dump($credentials);die();
        $response = Password::reset($credentials, function ($user, $password) {
            // dd($user);
            // $user->password = bcrypt($password);
            $user->user_password = md5($password);
            $user->save();
            echo "string";
           //$this->auth->login($user);
        });

        // $user->password = md5($password);
        // $user->save();
        //echo Password::PASSWORD_RESET;
         print_r($response);die();
        switch ($response) {
            case Password::PASSWORD_RESET:
                return $this -> respondCreated([],"PASSWORD_RESET");
                return;
            default:
                return $this -> respondError("CANT_RESET_PASSWORD",'Could not reset password');
        }
    }
}
