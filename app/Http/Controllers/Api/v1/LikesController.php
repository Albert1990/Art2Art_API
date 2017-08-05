<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Helpers;
use App\Models\Like;
use App\Models\Artwork;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LikeRequest;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mockery\CountValidator\Exception;

use App\Library\Transformers\UserTransformer;

class LikesController extends ApiController
{

   /**
     * @api {get} /artworks/{id}/likes Likes List
     * @apiName likes List
     * @apiGroup Artworks
     *
     *
     * @apiSuccessExample {json} Success-Response:
     * 
     *{"data":[{"id":"946","email":"student_mail@yopmail.com","first_name":"mhd","last_name":"student","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true}]}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Api\/v1\/commentsController.php in Line :127","details":[]}}
     */
    public function index($artwork_id){
        try{
            $artwork=Artwork::find($artwork_id);
            if($artwork == null){
                return $this->respondModelNotFound();
            }

            $likes = Like::where(['like_art_id' => $artwork_id])->get();
            if($likes){
                $users_ids=[];
                foreach ($likes as $key => $like) {
                   $users_ids[]=$like->like_user_id;
                }
            }else{
                $users_ids[]=-1;
            }

            $users=User::where(function($q) use ($users_ids){
                $q->whereIn('user_id',$users_ids);
            })->get();

            return $this->respond(['data' => Helpers::transformArray($users,new UserTransformer(true,false))]);
        }catch (Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }

    /**
     * @api {post} /Likes Toggel Like
     * @apiName  Toggel Like (if not like store else delete like)
     * @apiGroup Likes
     *
     *
     * @apiSuccessExample {json} Success-Response:
     *{"data":"","message":"Item created successfully"}
     *
     * @apiError {json} VALIDATION_ERROR validation failed
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in Api\/v1\/LikesController.php in Line :127","details":[]}}
     */
    public function store(LikeRequest $request)
    {
        try{
            $user=Auth::User();

            $Like_attributes = [
                'like_art_id' => $request->input('artwork_id',''),
                'like_user_id' =>$user->user_id,
            ];

            $like= Like::where($Like_attributes)->first();

            if($like == null){
                $Like = Like::create($Like_attributes);
                return $this->respondCreated('');
            }else{
                $like->delete();
                return $this->respondDeleted();
            }

        }catch (\Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }
}
