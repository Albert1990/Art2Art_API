<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Enums\ErrorMessages;
use App\Http\Enums\ErrorObject;
use App\Http\Requests;
use Illuminate\Http\Response as IlluminateResponse;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Response;

class ApiController extends Controller
{
    /**
     * @var int
     */
    private $status_code=IlluminateResponse::HTTP_OK;

    /**
     * @var string
     */
    private $errorMessage='';

    /**
     * ApiController constructor.
     */
    function __construct()
    {

    }

    /**
     * @return int
     */
    public function getStatusCode()
    {
        return $this->status_code;
    }

    /**
     * @param $statusCode
     * @return $this
     */
    public function setStatusCode($statusCode)
    {
        $this->status_code=$statusCode;
        return $this;
    }

    /**
     * @param $errorMessage
     * @return $this
     */
    public function setErrorMessage($errorMessage)
    {
        $this->errorMessage=$errorMessage;
        return $this;
    }

    /**
     * @return string
     */
    public function getErrorMessage()
    {
        return $this->errorMessage;
    }

    /**
     * @param null $data
     * @param int $statusCode
     * @param array $headers
     * @return \Illuminate\Http\JsonResponse
     */
    public function respond($data=null, $statusCode=IlluminateResponse::HTTP_OK, $headers=[])
    {
        $headers['Access-Control-Allow-Origin'] = '*';
        $headers['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, OPTIONS';
        return response()->json($data,$statusCode,$headers);
    }

    /**
     * @param $code
     * @param string $message
     * @param array $details
     * @param array $headers
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondError($code, $message = "", $details=[], $headers=[]){
        //$error = new ErrorObject($code,$message,$details);
        $error = [
            "code" => $code,
            "message" => $message,
            "details" => $details,
        ];

        $headers['Access-Control-Allow-Origin'] = '*';
        $headers['Access-Control-Allow-Methods'] = 'GET, PUT, POST, DELETE, OPTIONS';

        return response()->json([
            "error" => $error,
        ],$this -> getStatusCode(),$headers);
    }

    /**
     * @param array $moreInfo
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondValidationFailed($moreInfo=[],$message = "")
    {
        return $this-> setStatusCode(IlluminateResponse::HTTP_BAD_REQUEST) ->respondError(ErrorMessages::VALIDATION_ERROR,$message,$moreInfo);
    }

    /**
     * @param string $code
     * @param string $message
     * @param string $moreInfo
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondBadRequest($code,$message = "",$moreInfo=[])
    {
        return $this-> setStatusCode(IlluminateResponse::HTTP_BAD_REQUEST) ->respondError($code,$message,$moreInfo);
    }

    /**
     * Function to return a Not Found response.
     *
     * @param string $message
     * @return mixed
     */
    public function respondNotFound($message = "")
    {
        return $this->setStatusCode(IlluminateResponse::HTTP_NOT_FOUND)->respondError(ErrorMessages::MODEL_NOT_FOUND,$message);
    }

    /**
     * Function to return an internal error response.
     *
     * @param string $message
     * @return mixed
     */
    public function respondInternalError($message =  "")
    {
        return $this->setStatusCode(IlluminateResponse::HTTP_INTERNAL_SERVER_ERROR)->respondError(ErrorMessages::INTERNAL_ERROR,$message);
    }


    /**
     * Function to return a service unavailable response.
     *
     * @param string $message
     * @return mixed
     */
    public function respondServiceUnavailable($message = "")
    {
        return $this->setStatusCode(IlluminateResponse::HTTP_SERVICE_UNAVAILABLE)->respondError(ErrorMessages::SERVICE_UNAVAILABLE,$message);
    }

    /**
     * @param \Exception $ex
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondUnknownException(\Exception $ex)
    {
        return $this-> setStatusCode(IlluminateResponse::HTTP_INTERNAL_SERVER_ERROR) -> respondError(ErrorMessages::UNKNOWN_EXCEPTION,
            $ex->getMessage().' in '.$ex->getFile().' in Line :'.$ex->getLine());
    }

    /**
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondModelNotFound($message=''){
        return $this-> setStatusCode(IlluminateResponse::HTTP_BAD_REQUEST) -> respondError(ErrorMessages::MODEL_NOT_FOUND,$message);
    }

    /**
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondNotImplementedException($message = 'not implemented yet')
    {
        return $this-> setStatusCode(IlluminateResponse::HTTP_BAD_REQUEST) -> respondError(ErrorMessages::UNKNOWN_EXCEPTION,$message);
    }


    /**
     * @param string $message
     * @return \Illuminate\Http\JsonResponse
     */
    public function respondUnauthorized($message = "")
    {
        return $this-> setStatusCode(IlluminateResponse::HTTP_UNAUTHORIZED) -> respondError(ErrorMessages::UNAUTHORIZED,$message);
    }

    /**
     * @param $data
     * @param string $message
     * @return mixed
     */
    protected function respondCreated($data,$message = "Item created successfully")
    {
        return $this->setStatusCode(IlluminateResponse::HTTP_CREATED)
            ->respond([
                'data' => $data,
                'message' => $message
            ]);
    }

    /**
     * @param $data
     * @param string $message
     * @return mixed
     */
    protected function respondUpdated($data,$message = "Item updated successfully")
    {
        return $this->setStatusCode(IlluminateResponse::HTTP_OK)
            ->respond([
                'data' => $data,
                'message' => $message
            ]);
    }

    /**
     * @param $data
     * @param string $message
     * @return mixed
     */
    protected function respondDeleted($message = "Item deleted successfully")
    {
        return $this->setStatusCode(IlluminateResponse::HTTP_NO_CONTENT)
            ->respond([
                'data' => [],
                'message' => $message
            ]);
    }

    /**
     * @param LengthAwarePaginator $items
     * @param $data
     * @return mixed
     */
    protected function respondWithPagination(LengthAwarePaginator $items, $data)
    {
        $data = array_merge($data, [
            'paginator' => [
                'total_count' => $items->total(),
                'total_pages' => ceil($items->total() / $items->perPage()),
                'current_page' => $items->currentPage(),
                'limit' => $items->perPage()
            ]
        ]);

        return $this->respond($data);
    }

    public function optionRequest()
    {
        header("Access-Control-Allow-Origin: *");

        // ALLOW OPTIONS METHOD
        $headers = [
            'Access-Control-Allow-Methods'=> 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers'=> 'Content-Type, X-Auth-Token, Origin'
        ];
        return Response::make('OK', 200, $headers);
    }
}
