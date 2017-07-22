<?php
/**
 * Created by PhpStorm.
 * User: Albert
 * Date: 6/14/17
 * Time: 4:28 AM
 */

namespace App\Library\Transformers;


use App\Http\Enums\SocialPlatform;
use App\Http\Helpers;
use App\Models\User;
use App\Models\Country;
use League\Fractal\TransformerAbstract;

class UserTransformer extends BaseTransformerAbstract{
    // const IMAGES_PATH = "images/uploads/users/";
    const IMAGES_PATH='http://www.art2artgallery.com/public/resources/profile_images/';

    private $is_minified = false;
    private $default_user_image = 'http://www.art2artgallery.com/public/img/default/default.jpg';

    protected $defaultIncludes = [

    ];

    public function __construct($isMinified = false,$withCountry = true){
        $this->isMinified = $isMinified;

        if($withCountry) $this->defaultIncludes = ['country'];
    }

    public function transform(User $item){
        
        if($item->user_type=='student'){
            $this->defaultIncludes[] = 'school';
        }

        $returned_date = [];
        if($this->isMinified){
            if($item->user_type=='student'){
                $returned_date = $this->beatify([
                    'id' => (string)$item->user_id,
                    'email' => $item->user_email,
                    'first_name' =>$item->user_first_name,
                    'last_name' =>$item->user_last_name,
                    'photo' => !($item->user_image && $item->user_image_verified)? $this->default_user_image:(IMAGES_PATH.$item->user_image),
                    'isActive' => $item->user_status == 1 ? true : false,
                    'isVerified' => $item->user_email_verified == 1 ? true : false,
                ]);
            }elseif($item->user_type=='school'){
                $returned_date = $this->beatify([
                    'id' => (string)$item->user_id,
                    'email' => $item->user_email,
                    'name' =>$item->user_school_name,
                    'photo' => !($item->user_image && $item->user_image_verified)? $this->default_user_image:(IMAGES_PATH.$item->user_image),
                    'isActive' => $item->user_status == 1 ? true : false,
                    'isVerified' => $item->user_email_verified == 1 ? true : false,
                ]);
            }

        }else{
             if($item->user_type=='student'){
                $returned_date = $this->beatify([
                    'id' => (string)$item->user_id,
                    'type' =>$item->user_type,
                    'email' => $item->user_email,
                    'first_name' =>$item->user_first_name,
                    'last_name' =>$item->user_last_name,
                    'gender' => $item->user_gender,
                    // 'phone' => $item->user_phonenumber,
                    'address' => $item->user_address,
                    'birthday' => $item->user_dob,
                    // 'photo' => $item->user_image == '' ? Helpers::getImageFullPath($this->default_user_image,self::IMAGES_PATH) : Helpers::getImageFullPath($item->user_image,self::IMAGES_PATH),
                    'photo' => !($item->user_image && $item->user_image_verified)? $this->default_user_image:(IMAGES_PATH.$item->user_image),
                    'isActive' => $item->user_status == 1 ? true : false,
                    'isVerified' => $item->user_email_verified == 1 ? true : false,
                ]);
            }elseif($item->user_type=='school'){
                $returned_date = $this->beatify([
                    'id' => (string)$item->user_id,
                    'type' =>$item->user_type,
                    'email' => $item->user_email,
                    'first_name' =>$item->user_first_name,
                    'last_name' =>$item->user_last_name,
                    'name' =>$item->user_school_name,
                    'phone' => $item->user_phonenumber,
                    'photo' => !($item->user_image && $item->user_image_verified)? $this->default_user_image:(IMAGES_PATH.$item->user_image),
                    'isActive' => $item->user_status == 1 ? true : false,
                    'isVerified' => $item->user_email_verified == 1 ? true : false,
                ]);
            }
        }
        if($item->social_id != '' && $item->social_platform == SocialPlatform::FACEBOOK)
            $returned_date['photo'] = "https://graph.facebook.com/{$item->social_id}/picture?type=normal";

        return $returned_date;
    }

    public function includeCountry(User $item){
        $country=Country::find($item->user_country);
        return $this->item($country,new CountryTransformer(false));
    }

    public function includeSchool(User $item){
        $school=User::find($item->user_school_id);
        return $this->item($school,new UserTransformer(true));
    }
}