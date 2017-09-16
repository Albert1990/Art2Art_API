<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Helpers;

class Artwork extends BaseModel
{
    protected $table = 'artworks';
    protected $primaryKey = 'art_id';
    public $timestamps = false;

    protected $fillable = [
        'art_title',
        'art_display_status',
        'art_keywords',
        'art_subject_id',
        'art_student_id',
        'art_comment_1',
        'art_creation_date',
        'art_upload_date',
        'art_img_path',
        'art_teacher_id',
        'art_student_age',
    ];

    public function subject()
    {
        return $this->hasOne('App\Models\Subject','sub_id','art_subject_id');
    }

    public function student()
    {
        return $this->hasOne('App\Models\User','user_id','art_student_id');
    }


    public static function getWithKeys($parameters) {
        $withKeys = [];

        if (isset($parameters['include'])) {
            $includeParms = explode(',', $parameters['include']);
            $includes = array_intersect($this->supportedIncludes, $includeParms);
            $withKeys = array_keys($includes);
        }

        return $withKeys;
    }

    public static function getWhereClause($parameters,$clauseProperties) {
        $clause = [];
        $clause['like_type']=[];
        $clause['normal_type']=[];
        $clause['in_type']=[];
        $users_ids_fillter=false;
        $users_fillter=false;
        foreach ($clauseProperties as $prop) {
            if (in_array($prop, array_keys($parameters))) {
                $users=false;
                if ($prop =='keyword'){
                     $clause['like_type']['art_title'] = '%'.$parameters[$prop].'%';
                     $clause['like_type']['art_keywords'] = '%'.$parameters[$prop].'%';
                }elseif($prop =='school'){
                    $users = User::where(['user_school_id' => $parameters[$prop],'user_type'=>'student'])->get();
                    $users_fillter=true;
                }elseif($prop =='curriculum'){
                    $users = User::where(['user_curriculum' => $parameters[$prop],'user_type'=>'student'])->get();
                    $users_fillter=true;
                }elseif($prop == 'country'){
                    $users = User::where(['user_country' => $parameters[$prop],'user_type'=>'student'])->get();
                    $users_fillter=true;
                }elseif($prop =='age'){
                   $clause['normal_type']['art_student_age'] = $parameters[$prop];
                }

               if($users){
                    $users_ids=[];
                    foreach ($users as $key => $user) {
                       $users_ids[]=$user->user_id;
                    }
                    if(!$users_ids_fillter){
                        $users_ids_fillter = $users_ids;
                    }else{
                        $users_ids_fillter = array_intersect($users_ids,$users_ids_fillter);
                    }
                }

            }
        }
        if($users_fillter){
            $clause['in_type']['art_student_id'] = $users_ids_fillter;
        }
         // var_dump($clause['in_type']);die('ss');

        $clause['normal_type']['art_display_status'] =1;
        $clause['normal_type']['art_status'] = 1;

        return $clause;
    }

    public static function get_all_with_filter($whereClauses,$limit){
        $limit = Helpers::getPaginationLimit($limit);

        $artworks = self::where(function($q) use ($whereClauses){
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
                        $q->where($key,$value);
                    }
                })->paginate($limit);
        return $artworks;

    }

}
