<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Helpers;
use App\Library\Transformers\UserTransformer;
use App\Library\Transformers\ArtworkTransformer;
use App\Models\User;
use App\Models\Artwork;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mockery\CountValidator\Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;

class StudentsController extends ApiController
{

    /**
     * @api {get} /students Students List
     * @apiName Students List for teacher as my studets -access by  teacher-
     * @apiDescription Students List for teacher as my studets -access by  teacher role- ex:http://localhost:8888/api/v1/students/?ageMin=6&ageMax=8&school=938&country=200&curriculum=0&keyword=Sandra&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjkzOSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2FwaS92MS9hdXRoL2xvZ2luIiwiaWF0IjoxNTA1OTQwMTQ4LCJleHAiOjE2NjM2MjAxNDgsIm5iZiI6MTUwNTk0MDE0OCwianRpIjoiMkpub00yMHlnVFpiSjlBZCJ9.TkQmjRvnKu6QOxhO2o0qm0RGM6KJQbTA7yGOAWvXG9Q
     * @apiGroup Students
     *
     * @apiParam {Number} ageMin Optional (query parameter).
     * @apiParam {Number} ageMax Optional (query parameter).
     * @apiParam {String} keyword Optional (query parameter).
     * @apiParam {Number} school Optional (query parameter).
     * @apiParam {Number} curriculum Optional (query parameter).
     * @apiParam {Number} country Optional (query parameter).
     *
     * @apiSuccessExample {json} Success-Response:
     * 
     *{"data":[{"id":"940","type":"student","email":"samer.shattah@gmail.com","first_name":"Sandra","last_name":"Bullock","gender":"F","artwork_default_display_status":"1","address":"Damascus","birthday":"2010-12-04","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"},"school":{"id":"938","email":"fatherboard1@gmail.com","name":"Alfarouq","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","country":{"id":"200","name":"Syria ","code":"00963"}},"artworks_count":5,"artworks":[{"id":"19","title":"demo artwork updated","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/pexels-photo-64198-large-1481998199-42091.jpeg","image_500":"http://www.art2artgallery.com/public/resources/art_images/500/pexels-photo-64198-large-1481998199-42091.jpeg","image_300":"http://www.art2artgallery.com/public/resources/art_images/300/pexels-photo-64198-large-1481998199-42091.jpeg","image_160":"http://www.art2artgallery.com/public/resources/art_images/160/pexels-photo-64198-large-1481998199-42091.jpeg","image_60":"http://www.art2artgallery.com/public/resources/art_images/60/pexels-photo-64198-large-1481998199-42091.jpeg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/pexels-photo-64198-large-1481998199-42091.jpeg","createdAt":"","uploadedAt":"2016-12-17","status":"1","displayStatus":"0","tags":"Sport, trip","studentAge":"6","subject":{"id":"59","name":"Unit of Inquiry"},"student":{"id":"940","email":"samer.shattah@gmail.com","first_name":"Sandra","last_name":"Bullock","gender":"F","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}},{"id":"20","title":"Sandras Artwork2","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/IMG_20160421_182153-1481998946-80690.jpg","image_500":"http://www.art2artgallery.com/public/resources/art_images/500/IMG_20160421_182153-1481998946-80690.jpg","image_300":"http://www.art2artgallery.com/public/resources/art_images/300/IMG_20160421_182153-1481998946-80690.jpg","image_160":"http://www.art2artgallery.com/public/resources/art_images/160/IMG_20160421_182153-1481998946-80690.jpg","image_60":"http://www.art2artgallery.com/public/resources/art_images/60/IMG_20160421_182153-1481998946-80690.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/IMG_20160421_182153-1481998946-80690.jpg","createdAt":"","uploadedAt":"2016-12-17","status":"1","displayStatus":"1","tags":"tag12, sport, cartoon, tag2, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, tag10","studentAge":"6","subject":{"id":"37","name":"Art and Design"},"student":{"id":"940","email":"samer.shattah@gmail.com","first_name":"Sandra","last_name":"Bullock","gender":"F","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}},{"id":"21","title":"dd","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg","image_500":"http://www.art2artgallery.com/public/resources/art_images/500/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg","image_300":"http://www.art2artgallery.com/public/resources/art_images/300/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg","image_160":"http://www.art2artgallery.com/public/resources/art_images/160/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg","image_60":"http://www.art2artgallery.com/public/resources/art_images/60/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg","createdAt":"","uploadedAt":"2016-12-17","status":"1","displayStatus":"0","tags":"t1,t2","studentAge":"6","subject":{"id":"39","name":"Design"},"student":{"id":"940","email":"samer.shattah@gmail.com","first_name":"Sandra","last_name":"Bullock","gender":"F","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}},{"id":"33","title":"artTest","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg","image_500":"http://www.art2artgallery.com/public/resources/art_images/500/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg","image_300":"http://www.art2artgallery.com/public/resources/art_images/300/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg","image_160":"http://www.art2artgallery.com/public/resources/art_images/160/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg","image_60":"http://www.art2artgallery.com/public/resources/art_images/60/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg","createdAt":"","uploadedAt":"2017-08-31","status":"0","displayStatus":"0","tags":"tg gg ggg gdg ggh","studentAge":"0","subject":{"id":"50","name":"IT"},"student":{"id":"940","email":"samer.shattah@gmail.com","first_name":"Sandra","last_name":"Bullock","gender":"F","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}}]},{"id":"941","type":"student","email":"samer.shatta@gmail.com","first_name":"Albert","last_name":"Einstein","gender":"M","artwork_default_display_status":"0","address":"Damascus","birthday":"2016-05-09","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"},"school":{"id":"938","email":"fatherboard1@gmail.com","name":"Alfarouq","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","country":{"id":"200","name":"Syria ","code":"00963"}},"artworks_count":7,"artworks":[{"id":"22","title":"first artwork for albert","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png","image_500":"http://www.art2artgallery.com/public/resources/art_images/500/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png","image_300":"http://www.art2artgallery.com/public/resources/art_images/300/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png","image_160":"http://www.art2artgallery.com/public/resources/art_images/160/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png","image_60":"http://www.art2artgallery.com/public/resources/art_images/60/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png","createdAt":"","uploadedAt":"2016-12-17","status":"1","displayStatus":"0","tags":"traffic","studentAge":"0","subject":{"id":"44","name":"Geography"},"student":{"id":"941","email":"samer.shatta@gmail.com","first_name":"Albert","last_name":"Einstein","gender":"M","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}},{"id":"34","title":"art","comment_1":"v CBC.  b","comment_2":"","image":"http://104.217.253.15:3024/images/uploads/arts/1000/_file59c39b13b546f.png","image_500":"http://104.217.253.15:3024/images/uploads/arts/500/_file59c39b13b546f.png","image_300":"http://104.217.253.15:3024/images/uploads/arts/300/_file59c39b13b546f.png","image_160":"http://104.217.253.15:3024/images/uploads/arts/160/_file59c39b13b546f.png","image_60":"http://104.217.253.15:3024/images/uploads/arts/60/_file59c39b13b546f.png","croppedImage":"http://104.217.253.15:3024/images/uploads/arts/cropped/_file59c39b13b546f.png","createdAt":"2017-09-21","uploadedAt":"2017-09-21","status":"1","displayStatus":"0","tags":"tag","studentAge":"1","subject":{"id":"36","name":"Arabic Language"},"student":{"id":"941","email":"samer.shatta@gmail.com","first_name":"Albert","last_name":"Einstein","gender":"M","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}},{"id":"35","title":"????","comment_1":"vfhhf","comment_2":"","image":"http://104.217.253.15:3024/images/uploads/arts/1000/_file59c39b59b279d.png","image_500":"http://104.217.253.15:3024/images/uploads/arts/500/_file59c39b59b279d.png","image_300":"http://104.217.253.15:3024/images/uploads/arts/300/_file59c39b59b279d.png","image_160":"http://104.217.253.15:3024/images/uploads/arts/160/_file59c39b59b279d.png","image_60":"http://104.217.253.15:3024/images/uploads/arts/60/_file59c39b59b279d.png","croppedImage":"http://104.217.253.15:3024/images/uploads/arts/cropped/_file59c39b59b279d.png","createdAt":"2017-09-21","uploadedAt":"2017-09-21","status":"1","displayStatus":"0","tags":"????","studentAge":"1","subject":{"id":"36","name":"Arabic Language"},"student":{"id":"941","email":"samer.shatta@gmail.com","first_name":"Albert","last_name":"Einstein","gender":"M","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}},{"id":"36","title":"updated","comment_1":"comment comment","comment_2":"","image":"http://104.217.253.15:3024/images/uploads/arts/1000/_file59c3a404daad4.png","image_500":"http://104.217.253.15:3024/images/uploads/arts/500/_file59c3a404daad4.png","image_300":"http://104.217.253.15:3024/images/uploads/arts/300/_file59c3a404daad4.png","image_160":"http://104.217.253.15:3024/images/uploads/arts/160/_file59c3a404daad4.png","image_60":"http://104.217.253.15:3024/images/uploads/arts/60/_file59c3a404daad4.png","croppedImage":"http://104.217.253.15:3024/images/uploads/arts/cropped/_file59c3a404daad4.png","createdAt":"2017-09-21","uploadedAt":"2017-09-21","status":"1","displayStatus":"0","tags":"tg1,tg2,tg3","studentAge":"1","subject":{"id":"45","name":"German"},"student":{"id":"941","email":"samer.shatta@gmail.com","first_name":"Albert","last_name":"Einstein","gender":"M","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}}]}],"paginator":{"total_count":2,"total_pages":1,"current_page":1,"limit":10}}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Api\/v1\/StudentsController.php in Line :127","details":[]}}
     */
    public function index(){
        try{
            $user=Auth::User();
            $clauseProperties = [
                'keyword',
                'ageMin',
                'ageMax',
                'school',
                'curriculum',
                'country'
            ];
            $limit = Input::get('limit');
            $parameters = request()->input();
            $whereClauses = Student::getWhereClause($parameters,$clauseProperties);

            $students =DB::table('user_students')->where('us_teacher_id', $user->user_id)->get();
            $students_ids=[];
            foreach ($students as $key => $student) {
               $students_ids[]=$student->us_student_id;
            }
            $whereClauses['in_type']['user_id'] = $students_ids;
            $students = Student::get_all_with_filter($whereClauses,$limit);

            return $this->respondWithPagination($students, [
                'data' => $this->include_artworks(Helpers::transformArray($students->all(), new UserTransformer()))
            ]);
        }catch (Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }

    /**
     * @api {get} /teachers/{id}/students Students List for specific teacher
     * @apiName Students List for specific teacher(access by  school)
     * @apiDescription Students List for specific teacher(access by  school role)
     * @apiGroup Students
     *
     * @apiParam {Number} ageMin Optional (query parameter).
     * @apiParam {Number} ageMax Optional (query parameter).
     * @apiParam {String} keyword Optional (query parameter).
     * @apiParam {Number} school Optional (query parameter).
     * @apiParam {Number} curriculum Optional (query parameter).
     * @apiParam {Number} country Optional (query parameter).
     *
     * @apiSuccessExample {json} Success-Response:
     * 
     *{"data":[{"id":"940","type":"student","email":"samer.shattah@gmail.com","first_name":"Sandra","last_name":"Bullock","gender":"F","artwork_default_display_status":"1","address":"Damascus","birthday":"2010-12-04","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"},"school":{"id":"938","email":"fatherboard1@gmail.com","name":"Alfarouq","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","country":{"id":"200","name":"Syria ","code":"00963"}},"artworks_count":5,"artworks":[{"id":"19","title":"demo artwork updated","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/pexels-photo-64198-large-1481998199-42091.jpeg","image_500":"http://www.art2artgallery.com/public/resources/art_images/500/pexels-photo-64198-large-1481998199-42091.jpeg","image_300":"http://www.art2artgallery.com/public/resources/art_images/300/pexels-photo-64198-large-1481998199-42091.jpeg","image_160":"http://www.art2artgallery.com/public/resources/art_images/160/pexels-photo-64198-large-1481998199-42091.jpeg","image_60":"http://www.art2artgallery.com/public/resources/art_images/60/pexels-photo-64198-large-1481998199-42091.jpeg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/pexels-photo-64198-large-1481998199-42091.jpeg","createdAt":"","uploadedAt":"2016-12-17","status":"1","displayStatus":"0","tags":"Sport, trip","studentAge":"6","subject":{"id":"59","name":"Unit of Inquiry"},"student":{"id":"940","email":"samer.shattah@gmail.com","first_name":"Sandra","last_name":"Bullock","gender":"F","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}},{"id":"20","title":"Sandras Artwork2","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/IMG_20160421_182153-1481998946-80690.jpg","image_500":"http://www.art2artgallery.com/public/resources/art_images/500/IMG_20160421_182153-1481998946-80690.jpg","image_300":"http://www.art2artgallery.com/public/resources/art_images/300/IMG_20160421_182153-1481998946-80690.jpg","image_160":"http://www.art2artgallery.com/public/resources/art_images/160/IMG_20160421_182153-1481998946-80690.jpg","image_60":"http://www.art2artgallery.com/public/resources/art_images/60/IMG_20160421_182153-1481998946-80690.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/IMG_20160421_182153-1481998946-80690.jpg","createdAt":"","uploadedAt":"2016-12-17","status":"1","displayStatus":"1","tags":"tag12, sport, cartoon, tag2, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, tag10","studentAge":"6","subject":{"id":"37","name":"Art and Design"},"student":{"id":"940","email":"samer.shattah@gmail.com","first_name":"Sandra","last_name":"Bullock","gender":"F","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}},{"id":"21","title":"dd","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg","image_500":"http://www.art2artgallery.com/public/resources/art_images/500/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg","image_300":"http://www.art2artgallery.com/public/resources/art_images/300/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg","image_160":"http://www.art2artgallery.com/public/resources/art_images/160/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg","image_60":"http://www.art2artgallery.com/public/resources/art_images/60/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/12144933_10153625840551221_4527728814994344442_n-1481999578-48965.jpg","createdAt":"","uploadedAt":"2016-12-17","status":"1","displayStatus":"0","tags":"t1,t2","studentAge":"6","subject":{"id":"39","name":"Design"},"student":{"id":"940","email":"samer.shattah@gmail.com","first_name":"Sandra","last_name":"Bullock","gender":"F","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}},{"id":"33","title":"artTest","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg","image_500":"http://www.art2artgallery.com/public/resources/art_images/500/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg","image_300":"http://www.art2artgallery.com/public/resources/art_images/300/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg","image_160":"http://www.art2artgallery.com/public/resources/art_images/160/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg","image_60":"http://www.art2artgallery.com/public/resources/art_images/60/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/18700154_457068754643378_2177838045826581066_n-1504215064-39058.jpg","createdAt":"","uploadedAt":"2017-08-31","status":"0","displayStatus":"0","tags":"tg gg ggg gdg ggh","studentAge":"0","subject":{"id":"50","name":"IT"},"student":{"id":"940","email":"samer.shattah@gmail.com","first_name":"Sandra","last_name":"Bullock","gender":"F","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}}]},{"id":"941","type":"student","email":"samer.shatta@gmail.com","first_name":"Albert","last_name":"Einstein","gender":"M","artwork_default_display_status":"0","address":"Damascus","birthday":"2016-05-09","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"},"school":{"id":"938","email":"fatherboard1@gmail.com","name":"Alfarouq","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","country":{"id":"200","name":"Syria ","code":"00963"}},"artworks_count":7,"artworks":[{"id":"22","title":"first artwork for albert","comment_1":"","comment_2":"","image":"http://www.art2artgallery.com/public/resources/art_images/1000/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png","image_500":"http://www.art2artgallery.com/public/resources/art_images/500/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png","image_300":"http://www.art2artgallery.com/public/resources/art_images/300/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png","image_160":"http://www.art2artgallery.com/public/resources/art_images/160/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png","image_60":"http://www.art2artgallery.com/public/resources/art_images/60/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png","croppedImage":"http://www.art2artgallery.com/public/resources/art_images/cropped/12743915_958235654261903_7287175340139310876_n-1482002076-93244.png","createdAt":"","uploadedAt":"2016-12-17","status":"1","displayStatus":"0","tags":"traffic","studentAge":"0","subject":{"id":"44","name":"Geography"},"student":{"id":"941","email":"samer.shatta@gmail.com","first_name":"Albert","last_name":"Einstein","gender":"M","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}},{"id":"34","title":"art","comment_1":"v CBC.  b","comment_2":"","image":"http://104.217.253.15:3024/images/uploads/arts/1000/_file59c39b13b546f.png","image_500":"http://104.217.253.15:3024/images/uploads/arts/500/_file59c39b13b546f.png","image_300":"http://104.217.253.15:3024/images/uploads/arts/300/_file59c39b13b546f.png","image_160":"http://104.217.253.15:3024/images/uploads/arts/160/_file59c39b13b546f.png","image_60":"http://104.217.253.15:3024/images/uploads/arts/60/_file59c39b13b546f.png","croppedImage":"http://104.217.253.15:3024/images/uploads/arts/cropped/_file59c39b13b546f.png","createdAt":"2017-09-21","uploadedAt":"2017-09-21","status":"1","displayStatus":"0","tags":"tag","studentAge":"1","subject":{"id":"36","name":"Arabic Language"},"student":{"id":"941","email":"samer.shatta@gmail.com","first_name":"Albert","last_name":"Einstein","gender":"M","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}},{"id":"35","title":"????","comment_1":"vfhhf","comment_2":"","image":"http://104.217.253.15:3024/images/uploads/arts/1000/_file59c39b59b279d.png","image_500":"http://104.217.253.15:3024/images/uploads/arts/500/_file59c39b59b279d.png","image_300":"http://104.217.253.15:3024/images/uploads/arts/300/_file59c39b59b279d.png","image_160":"http://104.217.253.15:3024/images/uploads/arts/160/_file59c39b59b279d.png","image_60":"http://104.217.253.15:3024/images/uploads/arts/60/_file59c39b59b279d.png","croppedImage":"http://104.217.253.15:3024/images/uploads/arts/cropped/_file59c39b59b279d.png","createdAt":"2017-09-21","uploadedAt":"2017-09-21","status":"1","displayStatus":"0","tags":"????","studentAge":"1","subject":{"id":"36","name":"Arabic Language"},"student":{"id":"941","email":"samer.shatta@gmail.com","first_name":"Albert","last_name":"Einstein","gender":"M","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}},{"id":"36","title":"updated","comment_1":"comment comment","comment_2":"","image":"http://104.217.253.15:3024/images/uploads/arts/1000/_file59c3a404daad4.png","image_500":"http://104.217.253.15:3024/images/uploads/arts/500/_file59c3a404daad4.png","image_300":"http://104.217.253.15:3024/images/uploads/arts/300/_file59c3a404daad4.png","image_160":"http://104.217.253.15:3024/images/uploads/arts/160/_file59c3a404daad4.png","image_60":"http://104.217.253.15:3024/images/uploads/arts/60/_file59c3a404daad4.png","croppedImage":"http://104.217.253.15:3024/images/uploads/arts/cropped/_file59c3a404daad4.png","createdAt":"2017-09-21","uploadedAt":"2017-09-21","status":"1","displayStatus":"0","tags":"tg1,tg2,tg3","studentAge":"1","subject":{"id":"45","name":"German"},"student":{"id":"941","email":"samer.shatta@gmail.com","first_name":"Albert","last_name":"Einstein","gender":"M","photo":"http://104.217.253.15:3024/public/images/uploads/users/default-user.jpg","isActive":true,"isVerified":true,"country":{"id":"200","name":"Syria ","code":"00963"}}}]}],"paginator":{"total_count":2,"total_pages":1,"current_page":1,"limit":10}}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Api\/v1\/StudentsController.php in Line :127","details":[]}}
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNAUTHORIZED","message":"you are not school for teacher has id=9329","details":[]}}
     */
    public function students_by_teacher($teacher_id){
        try {
            $user=Auth::User();

            $is_school_of_teacher =DB::table('user_students')->where(['us_teacher_id'=>$teacher_id,'us_school_id' => $user->user_id])->get();
            if(!$is_school_of_teacher){
                return $this->respondUnauthorized('you are not school for teacher has id='.$teacher_id);
            }

           $clauseProperties = [
                'keyword',
                'ageMin',
                'ageMax',
                'school',
                'curriculum',
                'country'
            ];
            $limit = Input::get('limit');
            $parameters = request()->input();
            $whereClauses = Student::getWhereClause($parameters,$clauseProperties);

            $students =DB::table('user_students')->where(['us_school_id'=> $user->user_id, 'us_teacher_id' => $teacher_id])->get();
            $students_ids=[];
            foreach ($students as $key => $student) {
               $students_ids[]=$student->us_student_id;
            }
            $whereClauses['in_type']['user_id'] = $students_ids;

            $students = Student::get_all_with_filter($whereClauses,$limit);

            return $this->respondWithPagination($students, [
                'data' => $this->include_artworks(Helpers::transformArray($students->all(), new UserTransformer()))
            ]);

        } catch (Exception $ex) {
            return $this->respondUnknownException($ex);
        }
    }




    private function include_artworks($students){
        foreach ($students as $key => $student) {
            $artworks=Artwork::where([
                'art_student_id' => $student['id']])->limit(4)->get();

            $students[$key]['artworks_count']=Artwork::where([
                'art_student_id' => $student['id']])->count();

            $students[$key]['artworks']= Helpers::transformArray($artworks, new ArtworkTransformer());
        }
        return $students;
    }


}
