<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Helpers;
use App\Library\Transformers\CurriculumTransformer;
use App\Models\Curriculum;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mockery\CountValidator\Exception;

class CurriculumsController extends ApiController
{
    /**
     * @api {get} /curriculums Curriculums List
     * @apiName Curriculums List
     * @apiGroup Curriculums
     *
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":[{"id":"1","title":"US"},{"id":"2","title":"UK"},{"id":"3","title":"INDIAN"},{"id":"4","title":"MOE"},{"id":"5","title":"IB"},{"id":"6","title":"FRENCH"},{"id":"7","title":"GERMANY"},{"id":"8","title":"IRANIAN"},{"id":"9","title":"JAPANESE"},{"id":"10","title":"PHILIPPINE"},{"id":"11","title":"RUSSIAN"},{"id":"12","title":"PAKISTANI"},{"id":"13","title":"SABIS"}]}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Api\/v1\/CurriculumsController.php in Line :127","details":[]}}
     */
    public function index(){
        try{
            $curriculums = Curriculum::where(['cu_status' => 1])->get();
            return $this->respond(['data' => Helpers::transformArray($curriculums,new CurriculumTransformer())]);
        }catch (Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }
}
