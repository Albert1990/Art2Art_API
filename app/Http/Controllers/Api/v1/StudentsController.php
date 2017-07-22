<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Helpers;
use App\Library\Transformers\UserTransformer;
use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mockery\CountValidator\Exception;
use Illuminate\Support\Facades\Auth;

class StudentsController extends ApiController
{
    /**
     * @api {get} /students Students List
     * @apiName Students List-access by  teacher-
     * @apiGroup Students
     *
     *
     * @apiSuccessExample {json} Success-Response:
     * 
     *{"data":[{"id":"946","type":"student","email":"student_mail@yopmail.com","first_name":"mhd","last_name":"student","gender":"M","address":"test","birthday":"2017-10-05","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"19","name":"Barbados ","code":"1-246"},"school":{"id":"944","email":"shalabi.eng@gmail.com","name":"test school","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}}]}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Api\/v1\/StudentsController.php in Line :127","details":[]}}
     */
    public function index(){
        $user=Auth::User();
        try{
            $students = User::where(['user_teacher_id' => $user->user_id,'user_status' => 1])->get();
            return $this->respond(['data' => Helpers::transformArray($students,new UserTransformer())]);
        }catch (Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }
}
