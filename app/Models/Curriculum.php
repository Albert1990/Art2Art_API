<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Curriculum extends BaseModel
{
    protected $table = 'curriculums';
    protected $primaryKey = 'cu_id';
    public $timestamps = true;

}
