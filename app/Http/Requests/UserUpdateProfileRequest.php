<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class UserUpdateProfileRequest extends ApiRequest
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
            'artwork_default_display_status' => "in:0,1",
            'first_name' => "string|min:2|max:100",
            'last_name' => "string|min:2|max:100",
            'phone' => '',
            'gender' => 'in:M,F',
            'birthday' => 'date',
            'countryId' => 'integer|exists:countries,country_id',
        ];
    }
}
