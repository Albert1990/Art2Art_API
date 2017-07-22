<?php
/**
 * Created by PhpStorm.
 * User: Albert
 * Date: 6/15/17
 * Time: 1:22 AM
 */

namespace App\Library\Transformers;


use App\Models\City;
use League\Fractal\TransformerAbstract;

class CityTransformer extends BaseTransformerAbstract{
    protected $defaultIncludes = [

    ];

    public function transform(City $item){
        return $this->beatify([
            'id' => (string)$item->cityID,
            'country_id' => (string)$item->countryID,
            'name_en' => $item->cityName_en,
            'name_ar' => $item->cityName_ar,
        ]);
    }
}