<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::group(['prefix'=>'api/v1'],function(){
 
    //users
    Route::post('auth/register','\App\Http\Controllers\Api\v1\UsersController@register');
    Route::post('auth/login','\App\Http\Controllers\Api\v1\UsersController@login');
    Route::post('auth/forget_password','\App\Http\Controllers\Api\v1\UsersController@forgetPassword');
    Route::post('auth/reset_password','\App\Http\Controllers\Api\v1\UsersController@resetPassword');


    // countries
    Route::get('countries','\App\Http\Controllers\Api\v1\CountriesController@index');

    //Curriculums
    Route::get('curriculums','\App\Http\Controllers\Api\v1\CurriculumsController@index');

    //Schools
        Route::get('schools','\App\Http\Controllers\Api\v1\SchoolsController@index'); 

    //Subjects
    Route::get('subjects','\App\Http\Controllers\Api\v1\SubjectsController@index');

    Route::group(['middleware'=>'jwt.auth'],function(){

        //Comments
        Route::post('comments', '\App\Http\Controllers\Api\v1\CommentsController@store');
        Route::put('comments/{id}', '\App\Http\Controllers\Api\v1\CommentsController@update');
        Route::delete('comments/{id}', '\App\Http\Controllers\Api\v1\CommentsController@destroy');  

        //Likes
        Route::post('likes', '\App\Http\Controllers\Api\v1\LikesController@store'); 

        //users
        Route::put('users', '\App\Http\Controllers\Api\v1\UsersController@update');

    });

    // Optional Auth
    Route::group(['middleware'=>'jwt.auth:optional'],function(){

        //Artworks
        Route::get('artworks','\App\Http\Controllers\Api\v1\ArtworksController@index');   
        Route::get('artworks/{id}','\App\Http\Controllers\Api\v1\ArtworksController@show');
        Route::get('artworks/{id}/comments','\App\Http\Controllers\Api\v1\CommentsController@index');  
        Route::get('artworks/{id}/likes','\App\Http\Controllers\Api\v1\LikesController@index');     


    });

    //teacher role
    Route::group(['middleware'=>['jwt.auth','has.role:teacher']],function(){

        //Students
        Route::get('students','\App\Http\Controllers\Api\v1\StudentsController@index'); 
        Route::get('students/{id}/artworks','\App\Http\Controllers\Api\v1\ArtworksController@artworks_by_student'); 

        //Artworks
        Route::post('artworks', '\App\Http\Controllers\Api\v1\ArtworksController@store');
        Route::put('artworks/{id}', '\App\Http\Controllers\Api\v1\ArtworksController@update');
        Route::delete('artworks/{id}', '\App\Http\Controllers\Api\v1\ArtworksController@destroy'); 
    });

    //school role
    Route::group(['middleware'=>['jwt.auth','has.role:school']],function(){

        //Students
        Route::get('teachers/{id}/students','\App\Http\Controllers\Api\v1\StudentsController@students_by_teacher'); 
    });

    //student role
    Route::group(['middleware'=>['jwt.auth','has.role:student']],function(){

        //profile
        Route::get('profile/artworks', '\App\Http\Controllers\Api\v1\ProfileController@artworks');
        Route::put('profile', '\App\Http\Controllers\Api\v1\ProfileController@update');
    });
    

});

// Route::auth();

// Route::get('/home', 'HomeController@index');
