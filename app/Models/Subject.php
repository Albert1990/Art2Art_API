<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Subject extends BaseModel
{
    protected $table = 'subjects';
    protected $primaryKey = 'sub_id';
    public $timestamps = false;


}
