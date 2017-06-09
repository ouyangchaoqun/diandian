var xqzs = xqzs ||{};
xqzs.face = {
    __all__: [
        {id: 1, t: "微笑"}, {id: 2, t: "撇嘴"}, {id: 3, t: "色"}, {id: 4, t: "发呆"}, {id: 5, t: "得意"}, {id: 6,t: "流泪"}, {id: 7, t: "害羞"}, {id: 8, t: "闭嘴"}
        , {id: 9, t: "睡"}, {id: 10, t: "大哭"}, {id: 11, t: "尴尬"}, {id: 12, t: "发怒"}, {id: 13, t: "调皮"}, {id: 14, t: "呲牙"}, {id: 15, t: "惊讶"}, {
            id: 16,t: "难过"}, {id: 17, t: "囧"}, {id: 18, t: "抓狂"}, {id: 19, t: "吐"}, {id: 20, t: "偷笑"}
        , {id: 21, t: "愉快"}, {id: 22, t: "白眼"}, {id: 23, t: "傲慢"}, {id: 24, t: "困"}, {id: 25, t: "惊恐"}, {
            id: 26,
            t: "流汗"
        }, {id: 27, t: "憨笑"}, {id: 28, t: "悠闲"}, {id: 29, t: "奋斗"}, {id: 30, t: "咒骂"}
        , {id: 31, t: "疑问"}, {id: 32, t: "嘘"}, {id: 33, t: "晕"}, {id: 34, t: "衰"}, {id: 35, t: "骷髅"}, {
            id: 36,
            t: "敲打"
        }, {id: 37, t: "再见"}, {id: 38, t: "擦汗"}, {id: 39, t: "抠鼻"}, {id: 40, t: "鼓掌"}
        , {id: 41, t: "坏笑"}, {id: 42, t: "左哼哼"}, {id: 43, t: "右哼哼"}, {id: 44, t: "哈欠"}, {id: 45, t: "鄙视"}, {
            id: 46,
            t: "委屈"
        }, {id: 47, t: "快哭了"}, {id: 48, t: "阴险"}, {id: 49, t: "亲亲"}
        , {id: 50, t: "可怜"}, {id: 51, t: "菜刀"}, {id: 52, t: "西瓜"}, {id: 53, t: "啤酒"}, {id: 54, t: "咖啡"}, {
            id: 55,
            t: "猪头"
        }, {id: 56, t: "玫瑰"}, {id: 57, t: "凋谢"}, {id: 58, t: "嘴唇"}, {id: 59, t: "爱心"}
        , {id: 60, t: "心碎"}, {id: 61, t: "蛋糕"}, {id: 62, t: "炸弹"}, {id: 63, t: "便便"}, {id: 64, t: "月亮"}, {
            id: 65,
            t: "太阳"
        }, {id: 66, t: "拥抱"}, {id: 67, t: "强"}, {id: 68, t: "弱"}, {id: 69, t: "握手"}
        , {id: 70, t: "胜利"}, {id: 71, t: "抱拳"}, {id: 72, t: "勾引"}, {id: 73, t: "拳头"}, {id: 74, t: "OK"}, {
            id: 75,
            t: "跳跳"
        }, {id: 76, t: "发抖"}, {id: 77, t: "怄火"}, {id: 78, t: "转圈"}, {id: 79, t: "嘿哈"}
        , {id: 80, t: "捂脸"}, {id: 81, t: "奸笑"}, {id: 82, t: "机智"}, {id: 83, t: "皱眉"}, {id: 84, t: "耶"}
    ],
    _reg: new RegExp(/(\[([\u4e00-\u9fa5]{1,3}\]))/i, 'g'),
    _allexpount:0,
    _appendStyle: function (content) {
        var $style = document.createElement("style");
        $style.type = "text/css";
        if ($style.styleSheet) {
            $style.styleSheet.cssText = content;//ie下要通过 styleSheet.cssText写入.
        } else {
            $style.innerHTML = content;
        }
        document.getElementsByTagName("head")[0].appendChild($style);
    },
    _getAllExp: function (content) {
        return content.match(this._reg, 'g');
    },
    _replaceByKey:function (content,key) {
        content = content.replace(new RegExp('\\['+key.t+'\\]', 'gm'), '<a class="exp exp'+key.id+'"></a>');
        return content;
    },
    _replace:function (content,keys) {
        var that = this;
        for (var i = 0, l = keys.length; i < l; i++) {
            for (var j = 0; j < that._allexpount; j++) {
                if ('['+that.__all__[j].t+']' == keys[i]) {
                    content = that._replaceByKey(content, that.__all__[j]);
                    break;
                }
            }
        }
        return content;
    },
    _toParse:function (content) {
        var keys = this._getAllExp(content);
        if (keys && keys.length > 0) {
            return this._replace(content, keys);
        }
        return content;
    },
    init: function () {
        var style = 'a.exp{display:inline-block;vertical-align:middle;height:1.5294117647058825rem;width:1.5294117647058825rem;margin: 0 auto;background-image:url("'+web.IMG_PATH+'exp.png");background-size:1.599rem;}'
        +'.exp1{background-position: 0 0;}.exp2{background-position:0 -1.5882352941176472rem;}.exp3{background-position:0 -3.1764705882352944rem;}.exp4{background-position:0 -4.823529411764706rem;}.exp5{background-position:0 -6.411764705882353rem;}.exp6{background-position:0 -8rem;}.exp7{background-position:0 -9.647058823529411rem;}.exp8{background-position:0 -11.176470588235295rem;}.exp9{background-position:0 -12.823529411764707rem;}.exp10{background-position:0 -14.411764705882353rem;}.exp11{background-position:0 -16rem;}.exp12{background-position:0 -17.588235294117645rem;}.exp13{background-position:0 -19.176470588235297rem;}.exp14{background-position:0 -20.823529411764707rem;}.exp15{background-position:0 -22.47058823529412rem;}.exp16{background-position:0 -24.058823529411764rem;}.exp17{background-position:0 -25.647058823529413rem;}.exp18{background-position:0 -27.235294117647058rem;}.exp19{background-position:0 -28.764705882352942rem;}.exp20{background-position:0 -30.411764705882355rem;}.exp21{background-position:0 -32rem;}.exp22{background-position:0 -33.64705882352941rem;}.exp23{background-position:0 -35.23529411764706rem;}.exp24{background-position:0 -36.82352941176471rem;}.exp25{background-position:0 -38.47058823529412rem;}.exp26{background-position:0 -39.94117647058824rem;}.exp27{background-position:0 -41.58823529411765rem;}.exp28{background-position:0 -43.23529411764706rem;}.exp29{background-position:0 -44.88235294117647rem;}.exp30{background-position:0 -46.470588235294116rem;}.exp31{background-position:0 -48.05882352941177rem;}.exp32{background-position:0 -49.70588235294118rem;}.exp33{background-position:0 -51.294117647058826rem;}.exp34{background-position:0 -52.88235294117648rem;}.exp35{background-position:0 -54.529411764705884rem;}.exp36{background-position:0 -56.117647058823536rem;}.exp37{background-position:0 -57.64705882352941rem;}.exp38{background-position:0 -59.235294117647065rem;}.exp39{background-position:0 -60.88235294117647rem;}.exp40{background-position:0 -62.47058823529412rem;}.exp41{background-position:0 -64.05882352941177rem;}.exp42{background-position:0 -65.6470588235294rem;}.exp43{background-position:0 -67.23529411764706rem;}.exp44{background-position:0 -68.82352941176471rem;}.exp45{background-position:0 -70.52941176470588rem;}.exp46{background-position:0 -72.05882352941177rem;}.exp47{background-position:0 -73.52941176470588rem;}.exp48{background-position:0 -75.05882352941177rem;}.exp49{background-position:0 -76.64705882352942rem;}.exp50{background-position:0 -78.1764705882353rem;}.exp51{background-position:0 -79.76470588235294rem;}.exp52{background-position:0 -81.29411764705883rem;}.exp53{background-position:0 -82.82352941176471rem;}.exp54{background-position:0 -84.29411764705883rem;}.exp55{background-position:0 -85.82352941176471rem;}.exp56{background-position:0 -87.41176470588235rem;}.exp57{background-position:0 -89.00000000000001rem;}.exp58{background-position:0 -90.47058823529413rem;}.exp59{background-position:0 -92.05882352941177rem;}.exp60{background-position:0 -93.6470588235294rem;}.exp61{background-position:0 -95.23529411764706rem;}.exp62{background-position:0 -96.64705882352942rem;}.exp63{background-position:0 -98.23529411764706rem;}.exp64{background-position:0 -99.64705882352942rem;}.exp65{background-position:0 -101.17647058823529rem;}.exp66{background-position:0 -102.70588235294117rem;}.exp67{background-position:0 -104.23529411764706rem;}.exp68{background-position:0 -105.70588235294117rem;}.exp69{background-position:0 -107.3529411764706rem;}.exp70{background-position:0 -108.82352941176471rem;}.exp71{background-position:0 -110.29411764705883rem;}.exp72{background-position:0 -111.76470588235294rem;}.exp73{background-position:0 -113.29411764705883rem;}.exp74{background-position:0 -114.94117647058825rem;}.exp75{background-position:0 -116.3529411764706rem;}.exp76{background-position:0 -117.88235294117648rem;}.exp77{background-position:0 -119.41176470588236rem;}.exp78{background-position:0 -120.94117647058823rem;}.exp79{background-position:0 -122.64705882352942rem;}.exp80{background-position:0 -124.17647058823529rem;}.exp81{background-position:0 -125.6470588235294rem;}.exp82{background-position:0 -127.23529411764707rem;}.exp83{background-position:0 -128.8235294117647rem;}.exp84{background-position:0 -130.35294117647058rem;}';
        this._appendStyle(style);
        this._allexpount = this.__all__.length;
    },
    getAll: function () {
        return this.__all__;
    },
    getFaceData:function (start,len) {
        if( this._allexpount > start) {
            var end = Math.min(start + len, this._allexpount);
            var result = [];
            for (var i = start; i < end; i++) {
                result.push(this.__all__[i]);
            }
            return result;
        }
        return [];
    },
    parse: function (content) {
        if (content && content != '') {
            return this._toParse(content);
        }
        return content;
    }
};
xqzs.face.init();