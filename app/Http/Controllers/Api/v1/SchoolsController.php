<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Helpers;
use App\Library\Transformers\UserTransformer;
use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mockery\CountValidator\Exception;

class SchoolsController extends ApiController
{
    /**
     * @api {get} /schools School List
     * @apiName Schools List 
     * @apiDescription School List 
     * @apiGroup Schools
     *
     * @apiSuccessExample {json} Success-Response:
     * 
     *{"data":[{"id":"944","email":"shalabi.eng@gmail.com","name":"test school","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","country":{"id":"200","name":"Syria ","code":"00963"}}]}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Api\/v1\/StudentsController.php in Line :127","details":[]}}
     */
    public function index(){
        try{
            $shools = User::where(['user_type'=>'school','user_status' => 1])->get();
            return $this->respond( [
                'data' => Helpers::transformArray($shools, new UserTransformer(true))
            ]);
        }catch (Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }
}
