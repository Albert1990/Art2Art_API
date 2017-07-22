<?php
/**
 * Created by PhpStorm.
 * User: Albert
 * Date: 6/14/17
 * Time: 11:47 PM
 */

namespace App\Library\Transformers;


use League\Fractal\TransformerAbstract;

class BaseTransformerAbstract extends TransformerAbstract{

    protected function beatify($arr){
        foreach($arr as $key => $value){
            if($arr[$key] == null)
                $arr[$key] = '';
        }
        return $arr;
    }
}