<?php

namespace App\Http\Controllers;

use App\Services\ApiService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Cookie;
use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    /**
     * @var Response
     */
    var $response;
    private $API_URL;
    private  $COOKIE_OPEN_ID= "xqzs_openId";

    protected $apiService;
    public function __construct(ApiService $apiService)
    {
        $this->apiService = $apiService;
        $this->API_URL = env("API_URL_HOST") . "/" . env("API_VERSION");
    }

    protected function getUserId(Request $request)
    {

        return 1186;
        $openId = $request->cookie($this->COOKIE_OPEN_ID);
        if ($openId == "") {
            return false;
        } else {
            if (isset($_SESSION['userId'])) {
                $userId = $_SESSION['userId'];
            } else {
               $header = $this->apiService->getTokenHeader();
                $user =  $this->apiService->geturl($this->API_URL . "/user/find/by/open/Id/" . $openId, $header);
                $user = json_decode($user, true);
                $userId = null;
                if (is_array($user)) {
                    $userId = $user["data"]['id'];
                    $_SESSION['userId'] = $userId;
                }
            }
            return $userId;
        }
    }

    protected function setUserInfo($user)
    {
        $openId = $user['openId'].'';
        setcookie($this->COOKIE_OPEN_ID,$openId,null,'/');
        //$response->withCookie(new Cookie("openId",$user['openId']));
        $userId = $user['id'];
        $_SESSION['userId'] = $userId;
    }
}