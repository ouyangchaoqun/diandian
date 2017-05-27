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

class ApiController extends Controller
{
    public function url(Request $request)
    {
        $method = $request->getMethod();
        $url = $request->getRequestUri();
        $url=substr($url,4);
        $url =env("API_URL_HOST")."/".env("API_VERSION").$url;
        $curl = new Curl();
        $header=$this->getTokenHeader();
        if($method=="GET"){
            $curl->get($url,$header);
        }elseif($method=="POST"){
            $data = $request->input();
            $curl->post($url,$data,$header);
        }elseif($method=="PUT"){
            $data = $request->input();
            $curl->put($url,$data,$header);
        }elseif($method=="DELETE"){
            $curl->delete($url,$header);
        }
    }

    private function getTokenHeader(){
        $timestamp=time();
        $nonceStr=$this->randCode(3,10);
        $token= md5(env("APP_KEY").$nonceStr.$timestamp.env("APP_KEY"));
        return array("timestamp"=>$timestamp,"noncestr"=>$nonceStr,"token"=>$token);
    }

   private  function randCode($what,$number){
        $string='';
        for($i = 1; $i <= $number; $i++){
//混合
            $panduan=1;
            if($what == 3){
                if(rand(1,2)==1){
                    $what=1;
                }else{
                    $what=2;
                }
                $panduan=2;
            }

//数字
            if($what==1){
                $string.=rand(0,9);
            }elseif($what==2){
//字母
                $rand=rand(0,24);
                $b='a';
                for($a =0;$a <=$rand;$a++){
                    $b++;
                }
                $string.=$b;
            }
            if($panduan==2)$what=3;
        }
        return $string;
    }
}