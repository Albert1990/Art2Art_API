<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artwork extends BaseModel
{
    protected $table = 'artworks';
    protected $primaryKey = 'art_id';
    public $timestamps = true;

    // protected $fillable = [
    //     'name_en',
    //     'name_ar',
    //     'cover',
    //     'icon',
    // ];

    public function subject()
    {
        return $this->hasOne('App\Models\Subject','sub_id','art_subject_id');
    }

    public function student()
    {
        return $this->hasOne('App\Models\User','user_id','art_student_id');
    }


}
