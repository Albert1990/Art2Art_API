<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Helpers;
use App\Models\User;

class Student extends BaseModel
{
    protected $table = 'users';
    protected $primaryKey = 'user_id';
    public $timestamps = false;

	public static function get_all_with_filter($whereClauses,$limit){
        $limit = Helpers::getPaginationLimit($limit);

		$students = User::where(function($q) use ($whereClauses){
		        if(isset($whereClauses['like_type'])){
                    foreach($whereClauses['like_type'] as $key => $value){
                        $q->where($key, 'LIKE', $value);
                    }
                }
                if($whereClauses['in_type']){
                   foreach($whereClauses['in_type'] as $key => $value){
                        if(empty($value)){
                            $value=['-1'];
                        }
                        $q->whereIn($key,$value);
                    } 
                }
		        if(isset($whereClauses['normal_type'])){
                   foreach($whereClauses['normal_type'] as $key => $value){
                        if($key =="user_dob"){
                           //$q->whereYear($key, '=', date('Y') - $value);
                        }else{
                            $q->where($key,$value);
                        }
                        
                    } 
                }
		        if($whereClauses['compare_type']){
                   foreach($whereClauses['compare_type'] as $key => $value){
                        if($key =="ageMin"){
                            $q->where("user_dob",$value[0],$value[1]);
                        }elseif($key =="ageMax"){
                            $q->where("user_dob",$value[0],$value[1]);
                        }else{
                            $q->where($key,$value[0],$value[1]);
                        }
                    } 
                }
		        
		    })
            ->orderBy('user_first_name','asc')
            ->paginate($limit);
		return $students;
    }

    public static function getWhereClause($parameters,$clauseProperties) {
        $clause = [];
        $clause['like_type']=[];
        $clause['normal_type']=[];
        $clause['in_type']=[];
        $clause['compare_type']=[];
        foreach ($clauseProperties as $prop) {
            if (in_array($prop, array_keys($parameters))) {
                $users=false;
                if ($prop =='keyword'){
                     $clause['like_type']['user_full_name'] = '%'.$parameters[$prop].'%';
                }elseif($prop =='school'){
                    $clause['normal_type']['user_school_id'] = $parameters[$prop];
                }elseif($prop =='curriculum'){
                    $clause['normal_type']['user_curriculum'] = $parameters[$prop];
                }elseif($prop == 'country'){
                    $clause['normal_type']['user_country'] = $parameters[$prop];
                }elseif($prop =='ageMin'){
                    $clause['compare_type']['ageMin'] =['<=', Helpers::reverse_birthday($parameters[$prop])];
                    //die($clause['compare_type']['user_dob'][1]);
                    //$clause['normal_type']['user_dob'] =$parameters[$prop];   
                }elseif($prop =='ageMax'){
                    $clause['compare_type']['ageMax'] =['>=', Helpers::reverse_birthday($parameters[$prop])];
                    //die($clause['compare_type']['user_dob'][1]);
                    //$clause['normal_type']['user_dob'] =$parameters[$prop];   
                }
            }
        }

        //$clause['normal_type']['user_status'] = 1;
        $clause['normal_type']['user_type'] = "student";
        return $clause;
    }

}
