<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactUsRequest;
use Illuminate\Support\Facades\Mail;

class OthersController extends ApiController
{
    /**
     * Contact us
     *
     * @api {post} /contact_us Contact us
     * @apiName ContactUs
     * @apiGroup Others
     *
     * @apiParam {string} name client's name
     * @apiParam {string} email client's email
     * @apiParam {string} message client's message
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":[],"message":"CONTACT_US_REQUEST_SENT"}
     *
     * @apiError {json} VALIDATION_ERROR
     *
     * @apiError {json} UNKNOWN_EXCEPTION
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"VALIDATION_ERROR","message":"","details":{"oldPassword":["The old password field is required."]}}}
     *
     * @apiErrorExample {json} Error-Response: UNKNOWN_EXCEPTION
     *{"error":{"code":"UNKNOWN_EXCEPTION","message":"Error Processing Request in /Api/v1/UsersController.php in Line :296","details":[]}}
     *
     */
    public function contactUs(ContactUsRequest $request){
        try {
            $data = [
                'name' => $request['name'],
                'email' => $request['email'],
                'msg' => $request['message']
            ];
            Mail::send('auth/emails/contactUs', $data, function ($m) use ($request) {
                $m->from($request['email'], $request['name']);
                $m->to(env('MAIL_USERNAME', 'artartgallery21@gmail.com'), 'Art2Art')->subject('New Contact!');
            });

            return $this->respondCreated([], "CONTACT_US_REQUEST_SENT");
        }catch (\Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }
}
