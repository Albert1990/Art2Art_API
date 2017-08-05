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
class Comment extends BaseModel
{
    protected $table = 'art_comments';
    protected $primaryKey = 'com_id';
    public $timestamps = false;

    protected $fillable = [
        'com_art_id',
        'com_user_id',
        'com_comment',
    ];

    public function user()
    {
        return $this->hasOne('App\Models\User','user_id','com_user_id');
    }
}
