<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Helpers;
use App\Library\Transformers\SubjectTransformer;
use App\Models\Subject;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mockery\CountValidator\Exception;

class SubjectsController extends ApiController
{
    /**
     * @api {get} /subjects Subjects List
     * @apiName Subjects List
     * @apiGroup Subjects
     *
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":[{"id":"36","name":"Arabic Language"},{"id":"37","name":"Art and Design"},{"id":"38","name":"Citizenship"},{"id":"39","name":"Design"},{"id":"40","name":"Drama"},{"id":"41","name":"English"},{"id":"42","name":"ESL"},{"id":"43","name":"French"},{"id":"44","name":"Geography"},{"id":"45","name":"German"},{"id":"46","name":"Health"},{"id":"47","name":"History"},{"id":"48","name":"Humanities"},{"id":"49","name":"Islamic Studies"},{"id":"50","name":"IT"},{"id":"51","name":"Language Arts"},{"id":"52","name":"Mathematics"},{"id":"53","name":"Music"},{"id":"54","name":"Physical Education"},{"id":"55","name":"Science"},{"id":"56","name":"Social Sciences"},{"id":"57","name":"Spanish"},{"id":"58","name":"Speech and Debate"},{"id":"59","name":"Unit of Inquiry"},{"id":"60","name":"Cultural Studies"}]}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Api\/v1\/SubjectsController.php in Line :127","details":[]}}
     */
    public function index(){
        try{
            $subjects = Subject::where(['sub_status' => 1])->get();
            return $this->respond(['data' => Helpers::transformArray($subjects,new SubjectTransformer())]);
        }catch (Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }
}
