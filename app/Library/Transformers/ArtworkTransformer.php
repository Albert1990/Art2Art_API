<?php
/**
 * Created by PhpStorm.
 * User: Albert
 * Date: 6/13/17
 * Time: 11:27 PM
 */

namespace App\Library\Transformers;


use App\Models\Artwork;
use League\Fractal\TransformerAbstract;
use App\Http\Helpers;

use App\Library\Transformers\SubjetTransformer;
use App\Library\Transformers\UserTransformer;
use Illuminate\Support\Facades\Auth;

class ArtworkTransformer extends BaseTransformerAbstract {
    protected $defaultIncludes = [

    ];  
    const IMAGES_PATH = 'images/uploads/arts/';

    public function transform(Artwork $item){
        $user = Auth::user();
           
        return $this->beatify([
            'id'=> (string)$item->art_id,
            'title'=>$item->art_title,
            'comment_1'=>$item->art_comment_1,
            'comment_2' => $item->art_comment_2,
            'image' => Helpers::getArtworkImagePath('1000/',$item->art_img_path),
            'image_500' => Helpers::getArtworkImagePath('500/',$item->art_img_path),
            'image_300' => Helpers::getArtworkImagePath('300/',$item->art_img_path),
            'image_160' => Helpers::getArtworkImagePath('160/',$item->art_img_path),
            'image_60' => Helpers::getArtworkImagePath('60/',$item->art_img_path),
            'croppedImage' => Helpers::getArtworkImagePath('cropped/',$item->art_img_path),
            'createdAt' => $item->art_creation_date,
            'uploadedAt' => $item->art_upload_date,
            'status' => $item->art_status,
            'displayStatus' => $item->art_display_status,
            'tags' => $item->art_keywords,
            'studentAge' => $item->art_student_age,
            'subject' =>($item->subject == null)?null:Helpers::transformObject($item->subject, new SubjectTransformer()),
            'student' => ($item->student == null)?null:Helpers::transformObject($item->student, new UserTransformer(false)),
            'teacher' => ($item->teacher == null)?null:Helpers::transformObject($item->teacher, new UserTransformer(true)),
        ]);
    }
}