<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Category
 *
 * @property int $id
 * @property string $name_en
 * @property string $name_ar
 * @property string $cover
 * @property string $icon
 *
 * @package App\Models
 */
class Category extends BaseModel
{
    protected $table = 'categories';
    protected $primaryKey = 'id';
    public $timestamps = true;

    protected $fillable = [
        'name_en',
        'name_ar',
        'cover',
        'icon',
    ];
}
