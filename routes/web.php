<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
$app->get('/guest/','Controller@guest');
$app->get('/party/','Controller@party');
$app->get('/','Controller@index');
$app->get('befriend','Controller@befriend');

$app->group(['prefix'=>'wx'],function () use($app){
    $app->get('/index','WeixinController@index');
    $app->get('jump','WeixinController@jump');
    $app->get('pub','WeixinController@pub');
    $app->get('pubjump','WeixinController@pubjump');
    $app->get('bridge','WeixinController@bridge');
    $app->get('bridge/jump','WeixinController@bridgeJump');

    $app->get('web/login','WeixinController@webLogin');
    $app->get('web/login/callback','WeixinController@webLoginCallback');

});
$app->get('/wxjump','WeixinController@jump');
$app->post('/error/log','Controller@errorLog');


$app->options('/api/{url:[a-zA-Z/\-\d\{\}\%\[\]\_]+}','ApiController@url');;
$app->get('/api/{url:[a-zA-Z/\-\d\{\}\%[\]\_]+}','ApiController@url');;
$app->post('/api/{url:[a-zA-Z/\-\d\{\}\%[\]\_]+}','ApiController@url');
$app->delete('/api/{url:[a-zA-Z/\-\d\{\}\%[\]\_]+}','ApiController@url');
$app->put('/api/{url:[a-zA-Z/\-\d\{\}\%[\]\_]+}','ApiController@url');


$app->options('/xpi/{url:[a-zA-Z/\-\d\{\}\%\[\]\_]+}','ApiController@urlMiniProgram');;
$app->get('/xpi/{url:[a-zA-Z/\-\d\{\}\%[\]\_]+}','ApiController@urlMiniProgram');;
$app->post('/xpi/{url:[a-zA-Z/\-\d\{\}\%[\]\_]+}','ApiController@urlMiniProgram');
$app->delete('/xpi/{url:[a-zA-Z/\-\d\{\}\%[\]\_]+}','ApiController@urlMiniProgram');
$app->put('/xpi/{url:[a-zA-Z/\-\d\{\}\%[\]\_]+}','ApiController@urlMiniProgram');



