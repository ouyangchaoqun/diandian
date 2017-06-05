<?php
/**
 * Created by PhpStorm.
 * User: bear
 * Date: 2017/5/26
 * Time: 22:31
 */

namespace App\Http\Controllers;


use AbsoluteSoftware\Curl\Curl;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Cookie;


class ApiController extends Controller
{

    private $API_URL;


    public function __construct()
    {
        $this->API_URL = env("API_URL_HOST") . "/" . env("API_VERSION");
    }

    public function url(Request $request,Response $response)
    {


        $userId = $this->getUserId($request);




        $method = $request->getMethod();
        $url = $request->getRequestUri();


        $url = substr($url, 4);
        $url=urldecode($url);
        $url=str_replace("{userId}",$userId,$url);
        $url=str_replace("[userId]",$userId,$url);
        $url=str_replace("[uid]",$userId,$url);
        $url=str_replace("{uid}",$userId,$url);
        $url=str_replace("[uid]",$userId,$url);



        $url = $this->API_URL . $url;


        $curl = new Curl();
        $header = $this->getTokenHeader();

        //处理参数
        $data = $request->input();
        unset($data[$request->getRequestUri()]);
        //处理userId
        foreach($data as $key=>&$item){
            if($key=="userId"){
                $item=$userId;
            }
        }




        if ($method == "GET") {
            return $curl->get($url, $header);
        } elseif ($method == "POST") {
            return $curl->post($url, $data, $header);
        } elseif ($method == "PUT") {
            return $curl->put($url, $data, $header);
        } elseif ($method == "DELETE") {
            return $curl->delete($url, $header);
        }
    }

    private function getUserId($request)
    {

        return 1181;
        $openId = $request->cookie("openId");
        if ($openId == "") {
            return false;
        } else {
            if(isset($_SESSION['userId'])){
                $userId= $_SESSION['userId'];
            }else{
                $curl = new Curl();
                $header = $this->getTokenHeader();
                $user = $curl->get($this->API_URL . "/user/find/by/open/Id/" . $openId, $header);
                $user = json_decode($user,true);
                $userId=null;
                if(is_array($user)){
                    $userId= $user["data"]['id'];
                    $_SESSION['userId']=$userId;                 }
            }
            return $userId;
        }


    }

    private function getTokenHeader()
    {
        $timestamp = time();
        $nonceStr = $this->randCode(3, 10);
        $token = md5(env("APP_KEY") . $nonceStr . $timestamp . env("APP_KEY"));
        return array("timestamp" => $timestamp, "noncestr" => $nonceStr, "token" => $token);
    }

    private function randCode($what, $number)
    {
        $string = '';
        for ($i = 1; $i <= $number; $i++) {
//混合
            $panduan = 1;
            if ($what == 3) {
                if (rand(1, 2) == 1) {
                    $what = 1;
                } else {
                    $what = 2;
                }
                $panduan = 2;
            }

//数字
            if ($what == 1) {
                $string .= rand(0, 9);
            } elseif ($what == 2) {
//字母
                $rand = rand(0, 24);
                $b = 'a';
                for ($a = 0; $a <= $rand; $a++) {
                    $b++;
                }
                $string .= $b;
            }
            if ($panduan == 2) $what = 3;
        }
        return $string;
    }
}