<?php

namespace App\Http\Controllers;

use App\Services\ApiService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class WeixinController extends Controller
{
    function __construct()
    {

    }

    public function index(Request $request)
    {
        $appid = env('WECHAT_APPID');
        $callback = env('WECHAT_CALL_BACK_URL');
        $backurl = $request->input('reurl');
        if (empty($backurl)) {
            $backurl = 'index';
        } else {
            $backurl = urlencode(urldecode($backurl));
        }
        $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid={$appid}&redirect_uri=" . urlencode($callback)
            . "&response_type=code&scope=snsapi_base&state={$backurl}#wechat_redirect";

        return redirect($url);
    }

    /**
     * 微信授权中转页
     */
    public function jump(Request $request, ApiService $apiService)
    {
        $gourl = '/';
        $state = $request->input('state');
        $code = $request->input('code');
        if (!empty($state) && $state != 'index') {
            $gourl = urldecode($state);
        }

        $apiurl = "/wei/xin/get/user?code={$code}";
        $data = $apiService->execFull($request, '', $apiurl, 'GET');

        try {
            if (!empty($data)) {

                $obj = json_decode($data, true);
                if ($obj !== false) {
                    if ($obj['status'] == 1) {

                        if($obj['data']['issubscribe']==0){
                            $gourl = '/guest#/me/aboutUs';
                        }else{
                            $this->setUserInfo($obj['data']);
                            $apiService->login($obj['data']['id']);
                        }
                    } else {
                        //
                        $gourl = '/guest#/me/aboutUs';
                    }
                }
            }
        } catch (\Exception $e) {

        } finally {
            return redirect($gourl);
        }
    }


    /**
     * 需要授权
     */

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Laravel\Lumen\Http\Redirector
     */
    public function pub(Request $request)
    {
        $appid = env('WECHAT_APPID');
        $callback = env('WECHAT_CALL_BACK_URL_PUB');
        $backurl = $request->input('reurl');
        if (empty($backurl)) {
            $backurl = 'index';
        } else {
            $backurl = urlencode(urldecode($backurl));
        }
        $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid={$appid}&redirect_uri=" . urlencode($callback)
            . "&response_type=code&scope=snsapi_userinfo&state={$backurl}#wechat_redirect";

        return redirect($url);
    }

    public function pubjump(Request $request, ApiService $apiService)
    {
        $gourl = '/';
        $state = $request->input('state');
        $code = $request->input('code');
        if (!empty($state) && $state != 'index') {
            $gourl = urldecode($state);
        }
        $apiurl = "/wei/xin/get/user?code={$code}";
        $data = $apiService->execFull($request, '', $apiurl, 'GET');

        try {
            if (!empty($data)) {
                $obj = json_decode($data, true);
                if ($obj !== false) {
                    if ($obj['status'] == 1) {
                        $this->setUserInfo($obj['data']);
                    } else {
                        //
                        $gourl = '/guest#/me/aboutUs';
                    }
                }
            }
        } catch (\Exception $e) {

        } finally {
            return redirect($gourl);
        }
    }

    /**
     * 使用微信登录第三方网站
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Laravel\Lumen\Http\Redirector
     */
    public function webLogin(Request $request)
    {
        //fc8cd3816237d15eb67f5e72ca19d5ce
        //wx1124db3d707a7566

        $appId = 'wx1124db3d707a7566';//env('WECHAT_APPID');
        $callback = env('WECHAT_CONNECT_CALL_BACK_URL_PUB');
        $callback = 'http://wx.xqzs.cn/wx/web/login/callback';
        $backUrl = $request->input('reurl');
        if (empty($backUrl)) {
            $backUrl = 'index';
        } else {
            $backUrl = urlencode(urldecode($backUrl));
        }
        //      https://open.weixin.qq.com/connect/qrconnect?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect
        $url = "https://open.weixin.qq.com/connect/qrconnect?appid={$appId}&redirect_uri=" . urlencode($callback)
            . "&response_type=code&scope=snsapi_login&state={$backUrl}#wechat_redirect";

        return redirect($url);
    }

    /**
     * 使用微信登录第三方网站 回调
     * @param Request $request
     * @param ApiService $apiService
     * @return \Illuminate\Http\RedirectResponse|\Laravel\Lumen\Http\Redirector
     */
    public function webLoginCallback(Request $request,ApiService $apiService)
    {
        $goUrl = 'http://web.xqzs.cn';
        $state = $request->input('state');
        $code = $request->input('code');
        if (!empty($state) && $state != 'index') {
            $goUrl = urldecode($state);
        }
        return redirect($goUrl.'?code='.$code);

        var_dump($code);
        var_dump($data);
        var_dump($code);
        var_dump($state);
        var_dump($goUrl);
        //code交换openId
        //logic
        //
        //return redirect($goUrl);
    }

    /**
     * 授权中转页 将code 带给第三方
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Laravel\Lumen\Http\Redirector
     */
    public function bridge(Request $request)
    {
        $appid = env('WECHAT_APPID');
        $callback = env('WECHAT_BRIDGE_CALL_BACK_URL');
        $backurl = $request->input('reurl');
        if (empty($backurl)) {
            $backurl = 'index';
        } else {
            $backurl = urlencode(urldecode($backurl));
        }
        $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid={$appid}&redirect_uri=" . urlencode($callback)
            . "&response_type=code&scope=snsapi_base&state={$backurl}#wechat_redirect";

        return redirect($url);
    }

    /**
     * 授权中转页 将code 带给第三方
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Laravel\Lumen\Http\Redirector
     */
    public function bridgeJump(Request $request)
    {
        $goUrl = 'http://web.xqzs.cn';
        $state = $request->input('state');
        $code = $request->input('code');
        if (!empty($state) && $state != 'index') {
            $goUrl = urldecode($state);
        }
        return redirect($goUrl.'?code='.$code);
    }
}