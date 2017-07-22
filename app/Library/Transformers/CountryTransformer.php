<?php
/**
 * Created by PhpStorm.
 * User: Albert
 * Date: 6/14/17
 * Time: 4:34 AM
 */

namespace App\Library\Transformers;


use App\Models\Country;
use League\Fractal\TransformerAbstract;

class CountryTransformer extends BaseTransformerAbstract{
    protected $defaultIncludes = [

    ];

    public function __construct(){

    }

    public function transform(Country $item){
        return $this->beatify([
            'id' => (string)$item->country_id,
            'name' => $item->country_name,
            'code' => $item->isd_code,
            // 'timeDiffe' => $item->country_time_diff,
            // 'timezone' => $item->country_timezone,
            // 'ttf' => $item->country_ttf
        ]);
    }

}