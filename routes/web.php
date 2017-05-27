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

$app->get('/', function () use ($app) {
     return view('index');
});



$app->options('/api/{url:[a-z/\d]+}','ApiController@url');;
$app->get('/api/{url:[a-z/\d]+}','ApiController@url');;
$app->post('/api/{url:[a-z/\d]+}','ApiController@url');
$app->delete('/api/{url:[a-z/\d]+}','ApiController@url');
$app->put('/api/{url:[a-z/\d]+}','ApiController@url');



