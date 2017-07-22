<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class UserLoginRequest extends ApiRequest
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
            'socialPlatform' => 'in:FACEBOOK,GOOGLE_PLUS,TWITTER',
        ];
    }
}
