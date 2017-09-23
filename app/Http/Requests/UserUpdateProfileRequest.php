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
            'artwork_default_display_status' => "required|in:0,1",
            'first_name' => "required|string|min:2|max:100",
            'last_name' => "required|string|min:2|max:100",
            'phone' => 'required',
            'gender' => 'required|in:M,F',
            'birthday' => 'required|date',
            'countryId' => 'required|integer|exists:countries,country_id',
        ];
    }
}
