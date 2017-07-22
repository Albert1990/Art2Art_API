<?php
/**
 * Created by PhpStorm.
 * User: Albert
 * Date: 6/13/17
 * Time: 11:27 PM
 */

namespace App\Library\Transformers;


use App\Models\Category;
use League\Fractal\TransformerAbstract;

class CategoryTransformer extends BaseTransformerAbstract {
    protected $defaultIncludes = [

    ];

    public function transform(Category $item){
        return $this->beatify([
            'id'=> (string)$item->id,
            'nameEn'=>$item->name_en,
            'nameAr'=>$item->name_ar,
            'cover' => $item->cover,
            'icon' => $item->icon,
        ]);
    }
}