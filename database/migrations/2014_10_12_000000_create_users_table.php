<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Http\Enums\Gender;
use App\Http\Enums\SocialPlatform;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',300);
            $table->string('email')->unique();
            $table->string('password',500);
            $table->string('photo',500);
            $table->integer('country_id')->unsigned()->nullable();
            $table->timestamp('birthday');
            $table->boolean('is_verified')->default(false);
            $table->boolean('is_active')->default(true);
            $table->string('social_id',500);
            $table->enum('social_platform',[
                SocialPlatform::FACEBOOK,
                SocialPlatform::GOOGLE_PLUS,
                SocialPlatform::TWITTER,
                SocialPlatform::NONE
            ])->default(SocialPlatform::NONE);
            $table->enum('gender',[Gender::MALE,Gender::FEMALE])->default(Gender::MALE);
            $table->string('phone',50);
            $table->string('address',500);
            $table->integer('age')->default(0);
            $table->rememberToken();
            $table->timestamps();

            $table->foreign('country_id')
                ->references('id')
                ->on('countries')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
