<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class CreateArtworkRequest extends ApiRequest
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
            'title' => "required|string|min:2|max:100",
            'image' => 'required',
            // 'display' => 'required|in:0,1',
            'tags' => 'required|string',
            'subjectId' => 'required|integer|exists:subjects,sub_id',
            'studentId' =>'required|integer|exists:users,user_id',
            'comment' => 'string',
            'createdAt' => 'date'
        ];
    }
}
