<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Helpers;
use App\Library\Transformers\CountryTransformer;
use App\Models\Country;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mockery\CountValidator\Exception;

class CountriesController extends ApiController
{
    /**
     * @api {get} /countries Countries List
     * @apiName Countries List
     * @apiGroup Countries
     *
     *
     * @apiSuccessExample {json} Success-Response:
     * {"data":[{"id":"1","name":"Afghanistan","code":"93"},{"id":"2","name":"Algeria ","code":"213"},{"id":"3","name":"Andorra ","code":"376"},{"id":"4","name":"Angola ","code":"244"},{"id":"8","name":"Argentina ","code":"54"},{"id":"9","name":"Armenia ","code":"374"},{"id":"12","name":"Australia ","code":"61"},{"id":"13","name":"Austria ","code":"43"},{"id":"14","name":"Azerbaidjan ","code":"994"},{"id":"16","name":"Bahamas ","code":"1-242"},{"id":"17","name":"Bahrain ","code":"973"},{"id":"18","name":"Bangladesh","code":"880"},{"id":"20","name":"Belarus ","code":"375"},{"id":"21","name":"Belgium ","code":"32"},{"id":"25","name":"Bhutan ","code":"975"},{"id":"26","name":"Bolivia ","code":"591"},{"id":"29","name":"Brazil ","code":"55"},{"id":"33","name":"Bulgaria ","code":"359"},{"id":"37","name":"Cameroon ","code":"237"},{"id":"38","name":"Canada ","code":"1"},{"id":"43","name":"Chile ","code":"56"},{"id":"44","name":"China ","code":"86"},{"id":"48","name":"Colombia ","code":"57"},{"id":"53","name":"Costarica ","code":"506"},{"id":"55","name":"Croatia ","code":"385"},{"id":"56","name":"Cuba ","code":"53"},{"id":"57","name":"Cyprus ","code":"357"},{"id":"58","name":"Czech Republic","code":"420"},{"id":"60","name":"Denmark ","code":"45"},{"id":"65","name":"Ecuador ","code":"00593"},{"id":"66","name":"Egypt ","code":"0020"},{"id":"73","name":"Finland","code":"00358"},{"id":"74","name":"France","code":"0033"},{"id":"77","name":"Gabon ","code":"00241"},{"id":"79","name":"Germany","code":"0049"},{"id":"80","name":"Ghana ","code":"00233"},{"id":"82","name":"Greece ","code":"0030"},{"id":"89","name":"Hawaii ","code":"001"},{"id":"92","name":"Hungary ","code":"0036"},{"id":"94","name":"India","code":"0091"},{"id":"95","name":"Indonesia ","code":"0062"},{"id":"97","name":"Iran ","code":"0098"},{"id":"98","name":"Iraq ","code":"00964"},{"id":"99","name":"Ireland ","code":"00353"},{"id":"100","name":"Israel ","code":"00972"},{"id":"101","name":"Italy ","code":"0039"},{"id":"103","name":"Jamaica ","code":"001 809"},{"id":"104","name":"Japan ","code":"0081"},{"id":"105","name":"Jordan ","code":"00962"},{"id":"107","name":"Kenya ","code":"00254"},{"id":"110","name":"Kuwait ","code":"00965"},{"id":"114","name":"Lebanon ","code":"00961"},{"id":"117","name":"Libya ","code":"00218"},{"id":"126","name":"Malaysia ","code":"0060"},{"id":"128","name":"Mali ","code":"00223"},{"id":"133","name":"Mauritius ","code":"00230"},{"id":"134","name":"Mexico ","code":"0052"},{"id":"137","name":"Monaco ","code":"00377"},{"id":"141","name":"Myanmar ","code":"0095"},{"id":"144","name":"Nepal ","code":"00977"},{"id":"145","name":"Netherlands ","code":"0031"},{"id":"149","name":"New Zealand ","code":"0064"},{"id":"153","name":"Nigeria ","code":"00234"},{"id":"156","name":"Norway ","code":"0047"},{"id":"158","name":"Pakistan ","code":"0092"},{"id":"160","name":"Panama ","code":"00507"},{"id":"162","name":"Paraguay ","code":"00595"},{"id":"163","name":"Peru ","code":"0051"},{"id":"164","name":"Philippines ","code":"0063"},{"id":"165","name":"Poland ","code":"0048"},{"id":"166","name":"Portugal ","code":"00351"},{"id":"168","name":"Qatar","code":"00974"},{"id":"171","name":"Russia","code":"007"},{"id":"177","name":"Saudi Arabia ","code":"00966"},{"id":"181","name":"Singapore ","code":"0065"},{"id":"185","name":"South Africa ","code":"0027"},{"id":"188","name":"Spain ","code":"0034"},{"id":"190","name":"Sri Lanka ","code":"0094"},{"id":"198","name":"Sweden ","code":"0046"},{"id":"199","name":"Switzerland ","code":"0041"},{"id":"200","name":"Syria ","code":"00963"},{"id":"201","name":"Taiwan ","code":"00886"},{"id":"204","name":"Thailand ","code":"0066"},{"id":"209","name":"Turkey ","code":"0090"},{"id":"214","name":"Ukraine","code":"00380"},{"id":"215","name":"United Arab Emirates","code":"00971"},{"id":"216","name":"United Kingdom ","code":"0044"},{"id":"217","name":"Uruguay ","code":"00598"},{"id":"218","name":"USA ","code":"001"},{"id":"221","name":"Vatican City ","code":"0039-6"},{"id":"222","name":"Venezuela ","code":"0058"},{"id":"223","name":"Vietnam ","code":"0084"},{"id":"229","name":"Yemen","code":"00967"},{"id":"234","name":"Zimbabwe ","code":"00263"}]}
     *
     * @apiError {json} UNKNOWN_EXCEPTION Unknown Exception.
     *
     * @apiErrorExample {json} Error-Response:
     * {"error":{"code":"UNKNOWN_EXCEPTION","message":" in \/Api\/v1\/CountriesController.php in Line :127","details":[]}}
     */
    public function index(){
        try{
            $countries = Country::where(['country_status' => 1])->get();
            return $this->respond(['data' => Helpers::transformArray($countries,new CountryTransformer())]);
        }catch (Exception $ex){
            return $this->respondUnknownException($ex);
        }
    }
}
