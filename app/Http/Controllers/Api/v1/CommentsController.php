<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Helpers;
use App\Library\Transformers\CommentTransformer;
use App\Models\Comment;
use App\Models\Artwork;
use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Mockery\CountValidator\Exception;

class CommentsController extends ApiController
{

    /**
     * @api {get} /artworks/{id}/comments comments List
     * @apiName comments List
     * @apiGroup Artworks
     *
     *
     * @apiSuccessExample {json} Success-Response:
     * 
     *{"data":[{"id":"25","artwork":20,"user":{"id":"939","email":"molham.mah@gmail.com","first_name":"Tarazan","last_name":"tr","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}},"comment":"school gallery opening day"},{"id":"35","artwork":20,"user":{"id":"946","email":"student_mail@yopmail.com","first_name":"mhd","last_name":"student","photo":"http://www.art2artgallery.com/public/img/default/default.jpg","isActive":true,"isVerified":true,"country":{"id":"19","name":"Barbados ","code":"1-246"}},"comment":"comment mmmm put"}]}
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

            $comments = Comment::where(['com_art_id' => $artwork_id])->get();
            return $this->respond(['data' => Helpers::transformArray($comments,new CommentTransformer())]);
        }catch (Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }

    /**
     * @api {post} /comments Store Comment
     * @apiName Store Comment
     * @apiGroup Comments
     *
     *
     * @apiParam {Number} artwork_id  
     * @apiParam {String} comment 
     *
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":{"id":"36","artwork":20,"user":946,"comment":"comment test"},"message":"Item created successfully"}
     *
     * @apiError {json} MODEL_NOT_FOUND MODEL NOT FOUND.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"VALIDATION_ERROR","message":"","details":{"artwork_id":["The selected artwork id is invalid."]}}}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in Api\/v1\/CommentsController.php in Line :127","details":[]}}
     */
    public function store(CommentRequest $request)
    {
        try{
            $user=Auth::User();

            $Comment_attributes = [
                'com_comment' => $request->input('comment',''),
                'com_art_id' => $request->input('artwork_id',''),
                'com_user_id' =>$user->user_id,
            ];

            $Comment = Comment::create($Comment_attributes);
            return $this->respondCreated(Helpers::transformObject($Comment, new CommentTransformer(true)));
        }catch (\Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }
    
    /**
     * @api {put} /comments Update Comment
     * @apiName Update Comment
     * @apiGroup Comments
     *
     * @apiParam {String} comment 
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":{"id":"36","artwork":20,"user":946,"comment":"comment test update"},"message":"Item updated successfully"}
     *
     * @apiError {json} MODEL_NOT_FOUND MODEL NOT FOUND.
     * @apiError {json} VALIDATION_ERROR validation failed
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in Api\/v1\/CommentsController.php in Line :127","details":[]}}
     */
    public function update(request $request, $id)
    {
        try{
            $Comment = Comment::find($id);
            if($Comment == null)
                return $this->respondModelNotFound();

            $user=Auth::User();
            if($Comment->com_user_id != $user->user_id)
                return $this->respondUnauthorized('You must have privilege to access this resource');


            $Comment->com_comment = $request->input('comment','required|string');
            $Comment->save();
            return $this->respondUpdated(Helpers::transformObject($Comment,new CommentTransformer(true)));
        }catch (\Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }

    /**
     * @api {delete} /comments/{id} Delete Comment
     * @apiName Delete Comment
     * @apiGroup Comments
     *
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":[],"message":"Item deleted successfully"}
     *
     * @apiError {json} MODEL_NOT_FOUND MODEL NOT FOUND.
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in Api\/v1\/CommentsController.php in Line :127","details":[]}}
     */
    public function destroy($id)
    {
        try{
            $Comment = Comment::find($id);
            if($Comment == null)
                return $this->respondModelNotFound();

            $user=Auth::User();
            if($Comment->com_user_id != $user->user_id)
                return $this->respondUnauthorized('You must have privilege to access this resource');

            $Comment->delete();
            return $this->respondDeleted();
        }catch (\Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }
}
