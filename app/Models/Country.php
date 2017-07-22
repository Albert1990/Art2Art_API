<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Country extends BaseModel
{
    protected $table = 'countries';
    protected $primaryKey = 'country_id';
    public $timestamps = false;
}
