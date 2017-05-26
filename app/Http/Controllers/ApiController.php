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

class ApiController extends  Controller
{


     public function  url(Request $request){



        $curl= new Curl();
        $curl->get("http://api.mood.hh-idea.com/api/v1/wei/xin/config");
       // return $response;


    }




}