<?php
/**
 * Created by PhpStorm.
 * User: Albert
 * Date: 6/13/17
 * Time: 11:27 PM
 */

namespace App\Library\Transformers;


use App\Models\Subject;
use League\Fractal\TransformerAbstract;
use App\Http\Helpers;

class SubjectTransformer extends BaseTransformerAbstract {
    protected $defaultIncludes = [

    ];  

    public function transform(Subject $item){
        return $this->beatify([
            'id'=> (string)$item->sub_id,
            'name'=>$item->sub_name,
            // 'status'=>$item->sub_status,
            // 'createdAt' => $item->sub_created,
        ]);
    }
}