<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Comment
 *
 * @property int $id
 * @property string $comment
 * @property integer $art_id
 * @property integer $user_id
 *
 * @package App\Models
 */
class Like extends BaseModel
{
    protected $table = 'art_likes';
    protected $primaryKey = 'like_id';
    public $timestamps = false;

    protected $fillable = [
        'like_art_id',
        'like_user_id'
    ];
}
