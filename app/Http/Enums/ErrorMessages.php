<?php
/**
 * Created by PhpStorm.
 * User: Albert
 * Date: 5/29/16
 * Time: 7:14 PM
 */

namespace App\Http\Enums;

class ErrorObject {
    public $code = "";

    public $message = "";

    public $details = [];

    /**
     * ErrorObject constructor.
     * @param string $code
     * @param string $message
     * @param array $details
     */
    public function __construct($code, $message = "", $details = [])
    {
        $this->code = $code;
        $this->message = $message;
        $this->details = $details;
    }
}

class ErrorMessages {

    // start basic error messages
    const VALIDATION_ERROR='VALIDATION_ERROR';
    const INCORRECT_EMAIL_OR_PASSWORD='INCORRECT_EMAIL_OR_PASSWORD';
    const USER_EXIST_BEFORE='USER_EXIST_BEFORE';
    const USER_NOT_EXIST='USER_NOT_EXIST';
    const UNAUTHENTICATED='UNAUTHENTICATED';
    const UNAUTHORIZED='UNAUTHORIZED';
    const MODEL_NOT_FOUND='MODEL_NOT_FOUND';

    const UNKNOWN_EXCEPTION='UNKNOWN_EXCEPTION';
    const INTERNAL_ERROR='INTERNAL_ERROR';
    const SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE';

    const TOKEN_NOT_PROVIDED = 'TOKEN_NOT_PROVIDED';
    const TOKEN_EXPIRED = 'TOKEN_EXPIRED';
    const TOKEN_INVALID = 'TOKEN_INVALID';
    const PASSWORD_RESET = 'PASSWORD_RESET';
    const INVALID_RESET_PASSWORD_TOKEN = 'INVALID_RESET_PASSWORD_TOKEN';
    const RESET_LINK_SENT = 'RESET_LINK_SENT';
    // end basic error messages
}