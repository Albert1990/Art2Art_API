<?php
/**
 * Created by PhpStorm.
 * User: Hammod4
 * Date: 6/6/2016
 * Time: 3:19 PM
 */

namespace App\Http\Requests;

use App\Http\Enums\ErrorMessages;
use App\Http\Enums\ErrorObject;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as IlluminateResponse;

class ApiRequest extends FormRequest
{
    public function response( array $errors )
    {
        return new JsonResponse(['error' => [
            "code" => ErrorMessages::VALIDATION_ERROR,
            "message" => "",
            "details" => $errors
        ]],IlluminateResponse::HTTP_BAD_REQUEST,[
            'Access-Control-Allow-Origin'=>'*',
            'Access-Control-Allow-Methods'=>'GET, PUT, POST, DELETE, OPTIONS'
        ]);
    }

    public function forbiddenResponse()
    {
        return new JsonResponse(['error' => [
            "code" => ErrorMessages::UNAUTHORIZED,
            "message" => "",
            "details" => []
        ]],
        IlluminateResponse::HTTP_UNAUTHORIZED,[
            'Access-Control-Allow-Origin'=>'*',
            'Access-Control-Allow-Methods'=>'GET, PUT, POST, DELETE, OPTIONS'
        ]);
    }
}