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

$app->get('/','Controller@index');
$app->group(['prefix'=>'wx'],function () use($app){
    $app->get('/index','WeixinController@index');
    $app->get('jump','WeixinController@jump');
});
$app->get('/wxjump','WeixinController@jump');



$app->options('/api/{url:[a-zA-Z/\d\{\}\%\[\]\_]+}','ApiController@url');;
$app->get('/api/{url:[a-zA-Z/\d\{\}\%[\]\_]+}','ApiController@url');;
$app->post('/api/{url:[a-zA-Z/\d\{\}\%[\]\_]+}','ApiController@url');
$app->delete('/api/{url:[a-zA-Z/\d\{\}\%[\]\_]+}','ApiController@url');
$app->put('/api/{url:[a-zA-Z/\d\{\}\%[\]\_]+}','ApiController@url');



