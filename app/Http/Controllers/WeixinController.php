<?php

namespace App\Http\Controllers;

use App\Services\WechatService;
use Illuminate\Http\Request;

class WeixinController extends Controller
{
    private $service;

    function __construct(WechatService $service)
    {
        $this->service = $service;

        $this->middleware('authToken', ['except' => [
            'api',
        ]]);
    }

    public function api()
    {
        return $this->service->run();
    }

    /**
     * @SWG\Post(path="/weixin/jstoken",
     *   tags={"weixin"},
     *   summary="获取jstoken",
     *   description="",
     *   operationId="",
     *   produces={"application/xml", "application/json"},
     *   @SWG\Parameter(
     *     name="url",
     *     in="formData",
     *     description="url ",
     *     required=true,
     *     type="string",
     *     @SWG\Schema(ref="#/definitions/string"),
     *   ),
     *   @SWG\Parameter(
     *     name="apilist",
     *     in="formData",
     *     description="url ",
     *     required=true,
     *     type="string",
     *     @SWG\Schema(ref="#/definitions/string"),
     *   ),
     *   @SWG\Response(response=200, description="successful operation"),
     * )
     * @param $token
     */
    public function jstoken(Request $request)
    {
        $url = $request->input('url');
        $debug = $request->input('debug') == 'true';
        $apilist = $request->input('apilist');
        $callback = $request->input('callback');
        $apiArray = array();
        if (!empty($apilist)) {
            $apiArray = explode(',', $apilist);
        }
        $config = $this->service->getJsSign($url, $apiArray, $debug);
        return $config;
    }
}