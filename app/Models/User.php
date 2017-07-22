<?php

namespace App\Models;
use App\Http\Enums\NotificationDirection;
use App\Http\Enums\NotificationStatus;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use App\Http\Enums\SocialPlatform;
use App\Http\Enums\Gender;
use Webpatser\Countries\Countries;
use Webpatser\Countries\CountriesFacade;

/**
 * Class User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string $photo
 * @property Carbon $birthday
 * @property bool $is_verified
 * @property bool $is_active
 * @property Gender $gender
 * @property string $phone
 * @property string $address
 * @property int $age
 *
 * @property \App\Models\Country $country
 * @property \Illuminate\Database\Eloquent\Collection $orders
 *
 * @package App\Models
 */
class User extends Authenticatable
{
    protected $table = 'users';
    protected $primaryKey = 'user_id';
    public $timestamps = false;
    public $token;

    protected $fillable = [
        'email',
        'user_password',
        'name',
        'gender',
        'phone',
        'address',
        'birthday',
        'is_active',
        'is_verified',
        'country_id',
        'photo',
        'social_id',
        'social_platform',
        'age',
    ];

    public function country()
    {
        return $this->belongsTo('\App\Models\Country', 'country_id');
    }

    public function getAuthPassword() {
        return $this->user_password;
    }

    public function getEmailForPasswordReset()
    {
        return $this->user_email;
    }
}
