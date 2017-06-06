<?php

namespace App\Http\Controllers;

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

    protected function getUserId(Request $request)
    {

        return 1193;
        $openId = $request->cookie("openId");
        if ($openId == "") {
            return false;
        } else {
            if (isset($_SESSION['userId'])) {
                $userId = $_SESSION['userId'];
            } else {
                $curl = new Curl();
                $header = $this->getTokenHeader();
                $user = $curl->get($this->API_URL . "/user/find/by/open/Id/" . $openId, $header);
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
        setcookie('openId',$openId);
        //$response->withCookie(new Cookie("openId",$user['openId']));
        $userId = $user['id'];
        $_SESSION['userId'] = $userId;
    }
}