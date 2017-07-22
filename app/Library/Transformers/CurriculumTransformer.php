<?php
/**
 * Created by PhpStorm.
 * User: Albert
 * Date: 6/13/17
 * Time: 11:27 PM
 */

namespace App\Library\Transformers;


use App\Models\Curriculum;
use League\Fractal\TransformerAbstract;
use App\Http\Helpers;

class CurriculumTransformer extends BaseTransformerAbstract {
    protected $defaultIncludes = [

    ];  

    public function transform(Curriculum $item){
        return $this->beatify([
            'id'=> (string)$item->cu_id,
            'title'=>$item->cu_title
        ]);
    }
}