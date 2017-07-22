<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Helpers;
use App\Library\Transformers\ArtworkTransformer;
use App\Models\Artwork;
use App\Models\User;
use Illuminate\Http\Request;
// use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mockery\CountValidator\Exception;
use Illuminate\Support\Facades\Input;



class ArtworksController extends ApiController
{

    // protected $supportedIncludes = [
    //     'arrivalAirport' => 'arrival',
    //     'departureAirport' => 'departure'
    // ];

    private $clauseProperties = [
        'keyword',
        'age',
        'school',
        'curriculum',
        'country'
    ];

    /**
     * @api {get} /artworks Artworks List
     * @apiName Artworks List
     * @apiGroup Artworks
     *
     * @apiParam {Number} age Optional (query parameter).
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
    public function index()
    {
        $parameters = request()->input();
        // $withKeys = $this->getWithKeys($parameters);
        $whereClauses = $this->getWhereClause($parameters);

        try {
            $limit = Helpers::getPaginationLimit(Input::get('limit') );

            $artworks = Artwork::where(function($q) use ($whereClauses){
                        foreach($whereClauses['like_type'] as $key => $value){
                            $q->orWhere($key, 'LIKE', $value);
                        }
                        foreach($whereClauses['in_type'] as $key => $value){
                            if(empty($value)){
                                $value=['-1'];
                            }
                            $q->whereIn($key,$value);
                        }
                        foreach($whereClauses['normal_type'] as $key => $value){
                            $q->where($key,$value);
                        }
                    })->paginate($limit);

            return $this->respondWithPagination($artworks, [
                'data' => Helpers::transformArray($artworks->all(), new ArtworkTransformer())
            ]);

        } catch (Exception $ex) {
            return $this->respondUnknownException($ex);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /**
     * @api {get} /artworks/{id} Show Artwork
     * @apiName Show Artwork
     * @apiGroup Artworks
     *
     * @apiParam {Number} id Artwork unique ID
     *
     * @apiSuccessExample {json} Success-Response: Without access token
     * 
     *{"data":{"id":"25","title":"Map","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491584181-23669.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491584181-23669.jpg","createdAt":"","uploadedAt":"2017-04-07","keywords":"","studentAge":"","subject":"","student":""}}
     *
     * @apiSuccessExample {json} Success-Response: With access token
     * 
     *{"data":{"id":"25","title":"Map","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/samplemap2-1491584181-23669.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/samplemap2-1491584181-23669.jpg","createdAt":"","uploadedAt":"2017-04-07","keywords":"","studentAge":"","subject":"","student":{"id":"943","email":"gabreal78@gmail.com","first_name":"Student1","last_name":"Last1","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"79","name":"Germany","code":"0049"},"school":{"id":"937","email":"shoshaho@gmail.com","name":"School1","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"215","name":"United Arab Emirates","code":"00971"}}}}}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Api\/v1\/ArtworksController.php in Line :127","details":[]}}
     */
    public function show($id)
    {
        $artwork = Artwork::find($id);
        try {
            if(!$artwork)
            {
                return $this->respondNotFound('Artwork does not exist.');
            }

            return $this->respond([
                'data' => Helpers::transformObject($artwork, new ArtworkTransformer())
            ]);
        } catch (Exception $ex) {
            return $this->respondUnknownException($ex);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    //Private Functions
    private function getWithKeys($parameters) {
        $withKeys = [];

        if (isset($parameters['include'])) {
            $includeParms = explode(',', $parameters['include']);
            $includes = array_intersect($this->supportedIncludes, $includeParms);
            $withKeys = array_keys($includes);
        }

        return $withKeys;
    }

    private function getWhereClause($parameters) {
        $clause = [];
        $clause['like_type']=[];
        $clause['normal_type']=[];
        $clause['in_type']=[];
        $users_ids_fillter=false;
        $users_fillter=false;
        foreach ($this->clauseProperties as $prop) {
            if (in_array($prop, array_keys($parameters))) {
                $users=false;
                if ($prop =='keyword'){
                     $clause['like_type']['art_title'] = '%'.$parameters[$prop].'%';
                     $clause['like_type']['art_keywords'] = '%'.$parameters[$prop].'%';
                }elseif($prop =='school'){
                    $users = User::where(['user_school_id' => $parameters[$prop],'user_type'=>'student'])->get();
                    $users_fillter=true;
                }elseif($prop =='curriculum'){
                    $users = User::where(['user_curriculum' => $parameters[$prop],'user_type'=>'student'])->get();
                    $users_fillter=true;
                }elseif($prop == 'country'){
                    $users = User::where(['user_country' => $parameters[$prop],'user_type'=>'student'])->get();
                    $users_fillter=true;
                }elseif($prop =='age'){
                   $clause['normal_type']['art_student_age'] = $parameters[$prop];
                }

               if($users){
                    $users_ids=[];
                    foreach ($users as $key => $user) {
                       $users_ids[]=$user->user_id;
                    }
                    if(!$users_ids_fillter){
                        $users_ids_fillter = $users_ids;
                    }else{
                        $users_ids_fillter = array_intersect($users_ids,$users_ids_fillter);
                    }
                }

            }
        }
        if($users_fillter){
            $clause['in_type']['art_student_id'] = $users_ids_fillter;
        }
         // var_dump($clause['in_type']);die('ss');

        $clause['normal_type']['art_display_status'] =1;
        $clause['normal_type']['art_status'] = 1;

        return $clause;
    }

}
