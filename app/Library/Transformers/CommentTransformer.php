<?php

namespace App\Library\Transformers;


use App\Models\Comment;
use League\Fractal\TransformerAbstract;
use App\Http\Helpers;
use App\Models\User;

class CommentTransformer extends BaseTransformerAbstract{
    protected $defaultIncludes = [

    ];
    protected $isMinified;

    public function __construct($isMinified = false){
        $this->isMinified=$isMinified;
    }

    public function transform(Comment $item){
        if($this->isMinified){
            return $this->beatify([
                'id' => (string)$item->com_id,
                'artwork' => $item->com_art_id,
                'user' => $item->com_user_id,
                'comment' => $item->com_comment
            ]);
        }else{
            return $this->beatify([
                'id' => (string)$item->com_id,
                'artwork' => $item->com_art_id,
                'user' => ($item->user == null)?null:Helpers::transformObject($item->user, new UserTransformer(true)),
                'comment' => $item->com_comment
            ]);
        }
        
    }

}