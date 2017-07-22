<?php
/**
 * Created by PhpStorm.
 * User: Albert
 * Date: 4/8/2016
 * Time: 11:08 AM
 */

namespace App\Http;

use App\Http\Enums\FileTypes;
use App\Http\Enums\MediaTypes;
use App\Http\Enums\VerificationSendingWays;
use App\Models\Verification;
use Illuminate\Support\Facades\URL;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use App\Library\MyCustomArraySerializer;
use Mockery\CountValidator\Exception;

use Illuminate\Support\Facades\Auth;


class Helpers {
    private static $fractal=null;
    const PAGINATION_DEFAULT = 10;

    public static function getRandomInteger($min = 1, $max = 1000000)
    {
        return rand($min, $max);
    }

    public static function transformObject($object,$transformer)
    {
        if(Helpers::$fractal==null) {
            Helpers::$fractal = new Manager();
            Helpers::$fractal->setSerializer(new MyCustomArraySerializer());
        }
        $item = new Item($object,$transformer);
        $responseData = Helpers::$fractal->createData($item)->toArray();
        return $responseData;
    }

    public static function transformArray($arr,$transformer)
    {
        if(Helpers::$fractal==null) {
            Helpers::$fractal = new Manager();
            Helpers::$fractal->setSerializer(new MyCustomArraySerializer());
        }
        $collection = new Collection($arr,$transformer);
        $responseData = Helpers::$fractal->createData($collection)->toArray();
        return $responseData;
    }

    public static function checkMobileNumberFormat($mobile_number)
    {
        $mobile_number_result=null;
        $number_key=substr($mobile_number,0,1);
        if($number_key=='+')
            $mobile_number_result=$mobile_number;
        else{
            $number_key=substr($mobile_number,0,2);
            if($number_key=='00')
                $mobile_number_result='+'.substr($mobile_number,2,strlen($mobile_number));
        }
        return $mobile_number_result;

    }

    public static function getImageFullPath($file,$path = '')
    {
        if(empty($file))
            return "";

        return asset($path.$file);
    }

    public static function generateQrCode()
    {
        return rand(1, 10000000);
    }

    public static function formatValidationRules($rules)
    {
        $finalRules='';
        foreach($rules as $rule)
            $finalRules.=$rule.'|';
        $finalRules=substr($finalRules,0,strlen($finalRules)-1);
        return $finalRules;
    }

    public static function getFileType($filename)
    {
        $extension = pathinfo($filename, PATHINFO_EXTENSION);

        $photoExtensions = ['jpg','png','bmp','gif','jpeg'];
        $videoExtensions = ['mp4','flv','mov'];

        $mediaType = MediaTypes::UNKNOWN;
        if(in_array($extension,$photoExtensions))
            $mediaType = MediaTypes::IMAGE;
        if(in_array($extension,$videoExtensions))
            $mediaType = MediaTypes::VIDEO;
        return $mediaType;
    }

    public static function generateEnumValidation($values)
    {
        return "in:".implode(",", $values);
    }

    public static function getAttachableArray($items,$fields)
    {
        $new_items = array();
        foreach ($items as $item) {
            $id = $item['id'];
            //unset($item['id']);
            $new_items[$id] = array_intersect_key($item, array_flip($fields));
        }
        return $new_items;
    }

    public static function getPaginationLimit($limit)
    {
        return $limit != null && is_numeric($limit) /*&& $limit < 40*/ ? $limit : Helpers::PAGINATION_DEFAULT;
    }

    public static function randString($length) {
        $char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $char = str_shuffle($char);
        for($i = 0, $rand = '', $l = strlen($char) - 1; $i < $length; $i ++) {
            $rand .= $char{mt_rand(0, $l)};
        }
        return $rand;
    }

    public static function sendSMS($phone, $text)
    {
        //here should we enter SMS api info..
    }

    public static function uploadFile($file,$filePath = "images/uploads",$prefix = "_file")
    {
        if(empty($file)) return "";

        $filename = uniqid($prefix).".".$file -> getClientOriginalExtension();
        $file->move($filePath,$filename);
        return $filename;
        //return $filePath.$filename;
    }

    public static function deleteFile($file)
    {
        if(is_file($file))
            unlink($file);
    }

    public static function generateVerificationCode($user)
    {
        try {
            $verification = new Verification();
            $verification->user_id = $user->id;
            $verification->code = Helpers::getRandomInteger(1000, 9999);
            $verification->sent_over = VerificationSendingWays::SMS;
            $verification->has_destroyed = false;
            $verification->save();
            return $verification;
        }catch (\Exception $ex){
            return null;
        }
    }

//    public static function generateThumb($file,$filePath = "images/uploads",$prefix = "_thumb")
//    {
//        if(empty($file)) return "";
//
//        set_error_handler(function($errno, $errstr, $errfile, $errline ){
//            throw new Exception($errstr, $errno, 0, $errfile, $errline);
//        });
//
//        try{
//            $ffmpeg = FFMpeg::create();
//            $video = $ffmpeg->open($filePath."/".$file);
//
//            $thumb = uniqid($prefix).'.jpg';
//            $video
//                ->frame(TimeCode::fromSeconds(3))
//                ->save($filePath."/".$thumb);
//
//            return $thumb;
//        }catch(ExecutableNotFoundException $e){
//            return "";
//        }catch(Exception $e){
//            return "";
//        }
//    }

}