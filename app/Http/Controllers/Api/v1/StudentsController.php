<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Helpers;
use App\Library\Transformers\UserTransformer;
use App\Library\Transformers\ArtworkTransformer;
use App\Models\User;
use App\Models\Artwork;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mockery\CountValidator\Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;

class StudentsController extends ApiController
{

    private $clauseProperties = [
        'keyword',
        'age',
        'school',
        'curriculum',
        'country'
    ];


    /**
     * @api {get} /students Students List
     * @apiName Students List for teacher as my studets -access by  teacher-
     * @apiDescription Students List for teacher as my studets -access by  teacher role-
     * @apiGroup Students
     *
     * @apiSuccessExample {json} Success-Response:
     * 
     *{"data":[{"id":"946","type":"student","email":"student_mail@yopmail.com","first_name":"mhd","last_name":"student","gender":"M","address":"test","birthday":"2000-10-05","photo":"http://localhost:8888/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"19","name":"Barbados ","code":"1-246"},"school":{"id":"944","email":"shalabi.eng@gmail.com","name":"test school","photo":"http://localhost:8888/public/images/uploads/users/default-user.jpg","country":{"id":"200","name":"Syria ","code":"00963"}},"artworks":[{"id":"28","title":"new","comment_1":"ssssss","comment_2":"","image":"http://localhost:8888/public/images/uploads/arts/1000/jh454erg75fdg8rg.jpg","image_500":"http://localhost:8888/public/images/uploads/arts/500/jh454erg75fdg8rg.jpg","image_300":"http://localhost:8888/public/images/uploads/arts/300/jh454erg75fdg8rg.jpg","image_160":"http://localhost:8888/public/images/uploads/arts/160/jh454erg75fdg8rg.jpg","image_60":"http://localhost:8888/public/images/uploads/arts/60/jh454erg75fdg8rg.jpg","croppedImage":"http://localhost:8888/public/images/uploads/arts/cropped/jh454erg75fdg8rg.jpg","createdAt":"2017-07-29","uploadedAt":"2017-07-29","keywords":"Eid,Festival","studentAge":3,"subject":{"id":"36","name":"Arabic Language"},"student":{"id":"946","email":"student_mail@yopmail.com","first_name":"mhd","last_name":"student","photo":"http://localhost:8888/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"19","name":"Barbados ","code":"1-246"}}}]}],"paginator":{"total_count":1,"total_pages":1,"current_page":1,"limit":10}}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Api\/v1\/StudentsController.php in Line :127","details":[]}}
     */
    public function index(){
        $user=Auth::User();
        try{
            $limit = Helpers::getPaginationLimit(Input::get('limit') );
            $students = User::where(['user_teacher_id' => $user->user_id,'user_status' => 1,'user_type'=>'student'])->paginate($limit);
            return $this->respondWithPagination($students, [
                'data' => $this->include_artworks(Helpers::transformArray($students->all(), new UserTransformer()))
            ]);
        }catch (Exception $ex){
            return $this->respondUnknownException($ex);
        }

        // try{
        //     $limit = Helpers::getPaginationLimit(Input::get('limit') );
        //     $students = User::where(['user_status' => 1,'user_type'=>'student'])->paginate($limit);
        //     return $this->respondWithPagination($students, [
        //         'data' => Helpers::transformArray($students->all(), new UserTransformer())
        //     ]);
        // }catch (Exception $ex){
        //     return $this->respondUnknownException($ex);
        // }
    }

    /**
     * @api {get} /teachers/{id}/students Students List for specific teacher
     * @apiName Students List for specific teacher(access by  school)
     * @apiDescription Students List for specific teacher(access by  school role)
     * @apiGroup Students
     *
     * @apiParam {Number} age Optional (query parameter).
     * @apiParam {String} keyword Optional (query parameter).
     * @apiParam {Number} school Optional (query parameter).
     * @apiParam {Number} curriculum Optional (query parameter).
     * @apiParam {Number} country Optional (query parameter).
     *
     * @apiSuccessExample {json} Success-Response:
     * 
     *{"data":[{"id":"946","type":"student","email":"student_mail@yopmail.com","first_name":"mhd","last_name":"student","gender":"M","address":"test","birthday":"2000-10-05","photo":"http://localhost:8888/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"19","name":"Barbados ","code":"1-246"},"school":{"id":"944","email":"shalabi.eng@gmail.com","name":"test school","photo":"http://localhost:8888/public/images/uploads/users/default-user.jpg","country":{"id":"200","name":"Syria ","code":"00963"}},"artworks":[{"id":"28","title":"new","comment_1":"ssssss","comment_2":"","image":"http://localhost:8888/public/images/uploads/arts/1000/jh454erg75fdg8rg.jpg","image_500":"http://localhost:8888/public/images/uploads/arts/500/jh454erg75fdg8rg.jpg","image_300":"http://localhost:8888/public/images/uploads/arts/300/jh454erg75fdg8rg.jpg","image_160":"http://localhost:8888/public/images/uploads/arts/160/jh454erg75fdg8rg.jpg","image_60":"http://localhost:8888/public/images/uploads/arts/60/jh454erg75fdg8rg.jpg","croppedImage":"http://localhost:8888/public/images/uploads/arts/cropped/jh454erg75fdg8rg.jpg","createdAt":"2017-07-29","uploadedAt":"2017-07-29","keywords":"Eid,Festival","studentAge":3,"subject":{"id":"36","name":"Arabic Language"},"student":{"id":"946","email":"student_mail@yopmail.com","first_name":"mhd","last_name":"student","photo":"http://localhost:8888/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"19","name":"Barbados ","code":"1-246"}}}]}],"paginator":{"total_count":1,"total_pages":1,"current_page":1,"limit":10}}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Api\/v1\/StudentsController.php in Line :127","details":[]}}
     */
    public function students_by_teacher($teacher_id){
        $parameters = request()->input();
        $whereClauses = $this->getWhereClause($parameters);
        $whereClauses['normal_type']['user_teacher_id'] = $teacher_id;
        try {
            $limit = Helpers::getPaginationLimit(Input::get('limit') );

            $students = User::where(function($q) use ($whereClauses){
                        foreach($whereClauses['like_type'] as $key => $value){
                            $q->orWhere($key, 'LIKE', $value);
                        }
                        foreach($whereClauses['in_type'] as $key => $value){
                            if(empty($value)){
                                $value=['-1'];
                            }
                            $q->whereIn($key,$value);
                        }
                        foreach($whereClauses['normal_type'] as $key => $value){
                            if($key =="user_dob"){
                                $q->whereYear($key, '=', date('Y') - $value);
                            }else{
                                $q->where($key,$value);
                            }
                            
                        }
                        foreach($whereClauses['compare_type'] as $key => $value){
                            $q->where($key,$value[0],$value[1]);
                        }
                    })->paginate($limit);


            return $this->respondWithPagination($students, [
                'data' => $this->include_artworks(Helpers::transformArray($students->all(), new UserTransformer()))
            ]);

        } catch (Exception $ex) {
            return $this->respondUnknownException($ex);
        }
    }


    //Private Functions
    private function getWhereClause($parameters) {
        $clause = [];
        $clause['like_type']=[];
        $clause['normal_type']=[];
        $clause['in_type']=[];
        $clause['compare_type']=[];
        $users_ids_fillter=false;
        $users_fillter=false;
        foreach ($this->clauseProperties as $prop) {
            if (in_array($prop, array_keys($parameters))) {
                $users=false;
                if ($prop =='keyword'){
                     $clause['like_type']['user_full_name'] = '%'.$parameters[$prop].'%';
                }elseif($prop =='school'){
                    $clause['normal_type']['user_school_id'] = $parameters[$prop];
                }elseif($prop =='curriculum'){
                    $users = User::where(['user_curriculum' => $parameters[$prop],'user_type'=>'student'])->get();
                    $users_fillter=true;
                }elseif($prop == 'country'){
                    $clause['normal_type']['user_country'] = $parameters[$prop];
                }elseif($prop =='age'){
                   // $clause['compare_type']['user_dob'] =['>=', Helpers::reverse_birthday($parameters[$prop])];
                    $clause['normal_type']['user_dob'] =$parameters[$prop];   
                }
            }
        }

        $clause['normal_type']['user_status'] = 1;
        $clause['normal_type']['user_type'] = "student";
        return $clause;
    }

    private function include_artworks($students){
        foreach ($students as $key => $student) {
            $artworks=Artwork::where([
                'art_student_id' => $student['id'],
                'art_display_status' => 1,
                'art_status' => 1])->limit(4)->get();
            $students[$key]['artworks']= Helpers::transformArray($artworks, new ArtworkTransformer());
        }
        return $students;
    }


}
