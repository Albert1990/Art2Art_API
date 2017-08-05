<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artwork extends BaseModel
{
    protected $table = 'artworks';
    protected $primaryKey = 'art_id';
    public $timestamps = false;

    protected $fillable = [
        'art_title',
        'art_display_status',
        'art_keywords',
        'art_subject_id',
        'art_student_id',
        'art_comment_1',
        'art_creation_date',
        'art_upload_date',
        'art_img_path',
        'art_teacher_id',
        'art_student_age',
    ];

    public function subject()
    {
        return $this->hasOne('App\Models\Subject','sub_id','art_subject_id');
    }

    public function student()
    {
        return $this->hasOne('App\Models\User','user_id','art_student_id');
    }


}
