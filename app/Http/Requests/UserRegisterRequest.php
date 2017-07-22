<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;
use App\Http\Enums\Gender;
use App\Http\Enums\SocialPlatform;

class UserRegisterRequest extends ApiRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => "email|required_without:socialId,socialPlatform",
            'password' => "min:6|required_without:socialId,socialPlatform",
            'name' => "required|string|min:2|max:100",
            'phone' => 'required',
            'gender' => 'required|in:MALE,FEMALE',
            'birthday' => 'required|date',
            'countryId' => 'required|integer|exists:countries,id',
            "photo" => "mimetypes:image/png,image/jpeg,image/bmp|max:1000",
            'socialPlatform' => 'in:FACEBOOK,Google_PLUS,TWITTER',
        ];
    }
}
