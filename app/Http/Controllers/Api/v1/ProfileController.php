<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Helpers;
use App\Library\Transformers\ArtworkTransformer;
use App\Library\Transformers\UserTransformer;
use App\Models\Artwork;
use App\Models\User;
use App\Http\Requests\UserUpdateProfileRequest;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mockery\CountValidator\Exception;
use Illuminate\Support\Facades\Input;



class ProfileController extends ApiController
{


    /**
     * @api {get} /profile/artworks Artworks List
     * @apiName Artworks List 
     * @apiDescription access by student
     * @apiGroup Profile
     *
     * @apiParam {Number} ageMin Optional (query parameter).
     * @apiParam {Number} ageMax Optional (query parameter).
     * @apiParam {String} keyword Optional (query parameter).
     * @apiParam {Number} school Optional (query parameter).
     * @apiParam {Number} curriculum Optional (query parameter).
     * @apiParam {Number} country Optional (query parameter).
     *
     * @apiSuccessExample {json} Success-Response: Without access token
     * {"data":[{"id":"18","title":"Ipad","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/image-1458211130-54373.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/image-1458211130-54373.jpg","createdAt":"","uploadedAt":"2016-03-17","keywords":"Toys","studentAge":4,"subject":{"id":"37","name":"Art and Design"},"student":""},{"id":"25","title":"Map","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491584181-23669.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491584181-23669.jpg","createdAt":"","uploadedAt":"2017-04-07","keywords":"","studentAge":"","subject":"","student":""},{"id":"26","title":"Map","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491584320-39063.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491584320-39063.jpg","createdAt":"","uploadedAt":"2017-04-07","keywords":"UAE, Map","studentAge":5,"subject":{"id":"44","name":"Geography"},"student":""},{"id":"27","title":"Map2","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491585701-84711.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491585701-84711.jpg","createdAt":"","uploadedAt":"2017-04-07","keywords":"Map","studentAge":"","subject":{"id":"47","name":"History"},"student":""}],"paginator":{"total_count":4,"total_pages":1,"current_page":1,"limit":10}}
     *
     * @apiSuccessExample {json} Success-Response: With access token
     * 
     *{"data":[{"id":"18","title":"Ipad","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/image-1458211130-54373.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/image-1458211130-54373.jpg","createdAt":"","uploadedAt":"2016-03-17","keywords":"Toys","studentAge":4,"subject":{"id":"37","name":"Art and Design"},"student":{"id":"921","email":"shoshaho@hotmail.com","first_name":"shoshaho","last_name":"shoshaho","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"215","name":"United Arab Emirates","code":"00971"},"school":{"id":"909","email":"mhd.oubaid@gmail.com","name":"Oubaid","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"215","name":"United Arab Emirates","code":"00971"}}}},{"id":"25","title":"Map","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491584181-23669.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491584181-23669.jpg","createdAt":"","uploadedAt":"2017-04-07","keywords":"","studentAge":"","subject":"","student":{"id":"943","email":"gabreal78@gmail.com","first_name":"Student1","last_name":"Last1","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"79","name":"Germany","code":"0049"},"school":{"id":"937","email":"shoshaho@gmail.com","name":"School1","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"215","name":"United Arab Emirates","code":"00971"}}}},{"id":"26","title":"Map","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491584320-39063.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491584320-39063.jpg","createdAt":"","uploadedAt":"2017-04-07","keywords":"UAE, Map","studentAge":5,"subject":{"id":"44","name":"Geography"},"student":{"id":"943","email":"gabreal78@gmail.com","first_name":"Student1","last_name":"Last1","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"79","name":"Germany","code":"0049"},"school":{"id":"937","email":"shoshaho@gmail.com","name":"School1","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"215","name":"United Arab Emirates","code":"00971"}}}},{"id":"27","title":"Map2","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491585701-84711.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491585701-84711.jpg","createdAt":"","uploadedAt":"2017-04-07","keywords":"Map","studentAge":"","subject":{"id":"47","name":"History"},"student":{"id":"943","email":"gabreal78@gmail.com","first_name":"Student1","last_name":"Last1","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"79","name":"Germany","code":"0049"},"school":{"id":"937","email":"shoshaho@gmail.com","name":"School1","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"215","name":"United Arab Emirates","code":"00971"}}}}],"paginator":{"total_count":4,"total_pages":1,"current_page":1,"limit":10}}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Api\/v1\/ArtworksController.php in Line :127","details":[]}}
     */
    public function artworks()
    {
        // $user=Auth::User();
        // $whereClauses=['art_student_id' => $user->user_id];
        // try {
        //     $limit = Helpers::getPaginationLimit(Input::get('limit') );

        //     $artworks = Artwork::where($whereClauses)->paginate($limit);

        //     return $this->respondWithPagination($artworks, [
        //         'data' => Helpers::transformArray($artworks->all(), new ArtworkTransformer())
        //     ]);

        // } catch (Exception $ex) {
        //     return $this->respondUnknownException($ex);
        // }
        $user=Auth::User();
        $clauseProperties = [
            'keyword',
            'ageMin',
            'ageMax',
            'school',
            'curriculum',
            'country'
        ];
        $parameters = request()->input();
        // $withKeys = $this->getWithKeys($parameters);
        $whereClauses = Artwork::getWhereClause($parameters,$clauseProperties);
        $whereClauses['normal_type']['art_student_id' ] = $user->user_id;
        unset($whereClauses['normal_type']['art_display_status']);
        //print_r($whereClauses);die();
        try {
            $limit = Input::get('limit');

            $artworks = Artwork::get_all_with_filter($whereClauses,$limit);

            return $this->respondWithPagination($artworks, [
                'data' => Helpers::transformArray($artworks->all(), new ArtworkTransformer())
            ]);
        } catch (Exception $ex) {
            return $this->respondUnknownException($ex);
        }
    }
   
    /**
     * @api {put} /profile Update Profile
     * @apiName UpdateProfile
     * @apiDescription Update Profile access by student
     * @apiGroup Profile
     *
     * @apiParam {Boolean} artwork_default_display_status (0 privat ,1 public)
     * @apiParam {String} first_name first name of the User.
     * @apiParam {String} last_name last name of the User.
     * @apiParam {String} phone  phone of the User.
     * @apiParam {String} gender  gender of the User (M | F).
     * @apiParam {Date} birthday  birthday of the User (UTC format 2017-07-19 21:16:04.000000).
     * @apiParam {Number} countryId  user country id.
     * @apiParam {File} [photo]  user photo (mimetypes:image/png,image/jpeg,image/bmp|max:1000).
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":{"id":"946","type":"student","email":"student_mail@yopmail.com","first_name":"mhd","last_name":"student","gender":"M","artwork_default_display_status":1,"address":"test","birthday":"2000-10-05","photo":"http://localhost:8888/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"19","name":"Barbados ","code":"1-246"},"school":{"id":"944","email":"shalabi.eng@gmail.com","name":"test school","photo":"http://localhost:8888/public/images/uploads/users/default-user.jpg","country":{"id":"200","name":"Syria ","code":"00963"}}},"message":"Item updated successfully"}
     *
     * @apiError {json} MODEL_NOT_FOUND MODEL NOT FOUND.
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in Api\/v1\/ProfileController.php in Line :127","details":[]}}
     */
    public function update(UserUpdateProfileRequest $request)
    {
        $student=Auth::User();
        try{
            if($student == null)
                return $this->respondModelNotFound();

            //check if photo uploaded
            $file = $request->file('photo');
            $filename='';
            if($file){
                Helpers::deleteFile(UserTransformer::IMAGES_PATH . $student->user_image);
                $student->user_image=Helpers::uploadFile($file,UserTransformer::IMAGES_PATH);
                $student->user_image_verified=1;
            }
            if($request->has('artwork_default_display_status')){
                $student->user_artwork_default_display_status =$request->input('artwork_default_display_status','');
            }
            if($request->input('first_name','')){
                $student->user_first_name =$request->input('first_name','');    
            }
            if($request->input('last_name','')){
                $student->user_last_name =$request->input('last_name','');    
            }
            if($request->input('gender','')){
                $student->user_gender =$request->input('gender','');
            }
            if($request->input('phone','')){
               $student->user_phonenumber =$request->input('phone',''); 
            }
            if($request->input('birthday','')){
                $student->user_dob =$request->input('birthday','');
            }
            if($request->input('countryId','')){
                $student->user_country =$request->input('countryId','');
            }
             if($request->input('first_name','') || $request->input('last_name','')){
                $student->user_full_name= $student->user_first_name.' '.$student->user_last_name;
            }
            $student->save();

            return $this->respondUpdated(Helpers::transformObject($student, new UserTransformer()));
        }catch (\Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }

}
