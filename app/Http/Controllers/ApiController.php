<?php
/**
 * Created by PhpStorm.
 * User: bear
 * Date: 2017/5/26
 * Time: 22:31
 */

namespace App\Http\Controllers;


use AbsoluteSoftware\Curl\Curl;
use App\Services\ApiService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\Cookie;


class ApiController extends Controller
{
    private $apiService;

    public function __construct(ApiService $apiService)
    {
        $this->apiService = $apiService;
    }

    public function url(Request $request, Response $response)
    {
        $userId = $this->getUserId($request);
        return $this->apiService->exec($request,$userId);
    }
}