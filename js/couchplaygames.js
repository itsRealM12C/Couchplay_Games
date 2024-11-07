<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=1280, target-densitydpi=device-dpi"/>
        <meta charset="utf-8"/>
        <meta name="appstore:developer_url" content="https://www.couchplay.tv/"/>
        <meta name="appstore:bundle_id" content="com.itsmy.firetvapp"/>
        <meta name="appstore:store_id" content="com.itsmy.firetvapp"/>
        <link rel="stylesheet" href="https://cdn15.itsmy.tv/spielecenter/css/couchplaytv2_v86.css" type="text/css"/>
        <link rel="stylesheet" href="https://cdn11.itsmy.tv/spielecenter/css/couchplaytv_bottom_navi_v86.css" type="text/css"/>
        <style type="text/css">
            @font-face {
                font-family: "couchplay";
                src: url("/spielecenter/fonts/bebas130.ttf");
            }
        </style>
        <script type='text/javascript'>
            /* <![CDATA[ */

            var prod = 'itsmytv';
            var pid = 'foxxum';

            var _tvapp = "couchplayapp";
            var osPlatform = '';
            var deviceId = 64749;
            var clientIp = "1jasmdi2rtcnj63900jvddappl";
            var corsSupport = true;
            var userId = 25381887;
            var prodUrl = '/spielecenter';
            var environment = 'live';
            var sessExt = '&GCID=1jasmdi2rtcnj63900jvddappl';
            var prodExt = '&prod=itsmytv';
            var recoveryCode = "282462469383";
            var pidExt = '&pid=foxxum';
            var portalExt = '&portal=';
            var linkExt = sessExt + prodExt + pidExt;
            var cmpEnabled = 1;
            var cdnDomain = "https:\/\/cdn1[rand].itsmy.tv";

            var clientData = {};
            clientData.ip = "1jasmdi2rtcnj63900jvddappl";
            clientData.lang = "EN";
            clientData.country = "HU";
            clientData.zip = null;
            clientData.city = null;

            var gameDev = {};
            gameDev.portalUrl = "\/spielecenter\/?";
            gameDev.portalName = "GameCenter";
            gameDev.device = {};
            gameDev.device.performance = 3;
            gameDev.device.name = "IE";
            gameDev.device.manufacturer = "";
            gameDev.device.id = 64749;
            gameDev.gameId = 0;
            gameDev.gamepadSimulation = 1;

            var langToken = {};
            langToken.back = "";
            langToken.close = "";
            langToken.end = "";
            langToken.home = "GameCenter";

            //var yellowButtonUrl	=	'';
            //var blueButtonFunction	=	null;
            //var blueButtonUrl		=	'';
            var colorButtons = {};

            var showFriendsFeed = false;

            var cmpFocusHandledByCMP = false;
            var cmpUIClosed = false;

            /* ]]> */
        </script>
        <script type="text/javascript" src="/spielecenter/js/ErrorReports_v45.js"></script>
        <script type="text/javascript" src="/spielecenter/js/keycodes_v45.js"></script>
        <script type="text/javascript" src="/spielecenter/js/hbbtv-base_v45.js"></script>
        <script type="text/javascript" src="/spielecenter/js/portal_functions_v45.js"></script>
        <script type="text/javascript" src="/spielecenter/js/emptyPlayer_v45.js"></script>
        <script type="text/javascript" src="/spielecenter/js/couchplay_closeDialog_v45.js"></script>
        <script type="text/javascript">
            /* <![CDATA[ */

            try {
                if (window.hasOwnProperty("localStorage") && portal.getUrlParameterByName("from") !== "cookie_fs") {
                    if (25381887 <= 0 && typeof localStorage.getItem("authCode") == "string" && localStorage.getItem("authCode").indexOf(";") > 0) {
                        portal.storeCookie("gcpass", localStorage.getItem("authCode"), 365);

                        var redirectURL = "/spielecenter/index.php?prod=itsmytv&pid=foxxum&from=cookie_fs";
                        setTimeout(function() {
                            window.location.href = redirectURL;
                        }, 100);
                    } else {
                        if (decodeURIComponent(portal.getCookie("gcpass")).length >= 32) {
                            localStorage.setItem("authCode", decodeURIComponent(portal.getCookie("gcpass")));
                        }
                    }
                }
            } catch (err) {
                ErrorReports.log("index_v7.js", 130, "localStorage: " + err);
            }
            /* ]]> */
        </script>
        <link rel="stylesheet" href="https://cdn13.itsmy.tv/spielecenter/css/KachelMenuV7_v7.css" type="text/css"/>
        <script type="text/javascript" src="/spielecenter/js/KachelMenuV7_v7.js"></script>
        <script type="text/javascript" src="/spielecenter/js/tools_v7.js"></script>
        <script type='text/javascript'>
            /* <![CDATA[ */
            var cmpSaved = false;

            window.addEventListener('sibbo-close', function(e) {
                //console.log('sibbo-close CALLED');

                portal.pushTrackingInfo('Event', 'CMP consentmanager', 'closeBanner', 'cmp saved ' + (cmpSaved ? 'true' : 'false'));

                if (typeof KachelMenu !== 'undefined') {
                    if (KachelMenu.currentRow == 'iconNavi') {
                        document.getElementById('iconNavi_' + KachelMenu.iconNavi.pos).focus();
                    }
                } else if (typeof portal.cmpLastElementFocused == 'object' && portal.cmpLastElementFocused !== null) {
                    //console.warn('lastElement', portal.cmpLastElementFocused);
                    portal.cmpLastElementFocused.focus();
                    portal.cmpLastElementFocused = null;
                }

            }, false);

            document.addEventListener('sibbo-init', function(e) {
                //console.log('sibbo-close CALLED');

                if (typeof SibboCMP !== 'undefined' && (SibboCMP.initialBannerHasToRefloatCheck() && 0 == 1)) {
                    portal.pushTrackingInfo('Event', 'CMP consentmanager', 'showBanner', '11111111111 ' + (SibboCMP.initialBannerHasToRefloatCheck() ? 'refloat' : 'lastPurpose'));
                    portal.disableNavigation = true;
                    portal.openCMPBanner();

                }

            }, false);

            /* ]]> */
        </script>
        <meta name="keywords" content="foxxum, itsmytv, hbbtv, smart tv, spiele, games, TV Spielecenter"/>
        <meta name="description" content="HbbTV &amp; SmartTV Spielecenter"/>
        <title>Couchplay</title>
    </head>
    <body class="games body_foxxum product_itsmytv layout_fullscreen">
        <script charset="utf-8">
            //<![CDATA[
            window.cmp_noscreen = true;
            window.cmp_setlang = "EN";
            window.cmp_proto = "https:";
            window.cmp_privacyurl = "https://samsungapp.itsmy.tv/spielecenter/info.php";
            window.cmp_logtoelement = "debug";

            //]]>
        </script>
        <script type="text/javascript" data-cmp-ab="1" src="https://cdn.consentmanager.net/delivery/tvsdk/d568f21b313f3.js?2" data-cmp-host="a.delivery.consentmanager.net" data-cmp-cdn="cdn.consentmanager.net" data-cmp-codesrc="30"></script>
        <style>
            .cmpbox .cmpboxinner {
                vertical-align: top !important;
                -webkit-transform: none !important;
                -moz-transform: none !important;
                -ms-transform: none !important;
                -o-transform: none !important;
                transform: none !important;
                -webkit-transition: none !important;
                -moz-transition: none !important;
                -ms-transition: none !important;
                -o-transition: none !important;
                transition: none !important;
            }

            #cmpwelcomebtncustom {
                display: block;
            }

            .cmpbox.cmpstyleroot a:focus {
                outline: none !important;
            }

            .cmpbox .cmpqrouter {
                height: 266px !important;
            }

            .cmpbox, .cmpbox.cmpstyleroot.cmpbox2, .cmpbox.cmpstyleroot.cmpfullscreen {
                position: absolute;
                display: block;
                background-color: #FEFEFE !important;
                bottom: 0 !important;
                left: 0 !important;
                top: unset !important;
                width: 100% !important;
                max-height: none !important;
                max-width: none !important;
                border-top-width: 20px !important;
                border-top-color: #0D3A67 !important;
                border-top-style: solid !important;
                border-bottom-width: 10px !important;
                border-bottom-color: #CCCCCC !important;
                border-bottom-style: solid !important;
                border-right-width: 0px !important;
                border-left-width: 0px !important;
                -webkit-transform: none !important;
                -moz-transform: none !important;
                -ms-transform: none !important;
                -o-transform: none !important;
                transform: none !important;
                -webkit-transition: none !important;
                -moz-transition: none !important;
                -ms-transition: none !important;
                -o-transition: none !important;
                transition: none !important;
                -webkit-transition-property: none !important;
                -moz-transition-property: none !important;
                -ms-transition-property: none !important;
                -o-transition-property: none !important;
                transition-property: none !important;
            }

            .cmpbox.cmpstyleroot.cmpbox2 {
                height: 344px;
                top: 376px;
                max-height: unset !important;
            }

            .cmpbox.cmpstyleroot.cmpfullscreen {
                height: 540px;
                top: 180px;
                max-height: unset !important;
            }

            .cmpboxbtn {
                font-size: 11pt !important;
            }

            .cmpmore {
                font-size: 9pt !important;
            }

            .cmpboxcontent {
                vertical-align: top;
                display: inline-block;
                width: 700px;
            }

            .cmpboxbtns {
                vertical-align: top;
                display: inline-block;
                width: 450px;
            }

            .cmpmore .cmpmorelink {
                width: initial !important;
                border-top-color: transparent !important;
                border-right-color: transparent !important;
                border-bottom-color: transparent !important;
                border-left-color: transparent !important;
            }

            .cmpboxbtns .cmpboxbtnyes, .cmpboxbtns .cmpboxbtnno, .cmpboxbtns .cmpboxbtncustom {
                margin-left: 0px !important;
                margin-right: 0px !important;
            }

            .cmpboxbtns .cmpboxbtnyes, .cmpboxbtns .cmpboxbtnno {
                padding-top: 12px !important;
                padding-bottom: 12px !important;
            }

            .cmpqrspinner {
                top: -180px !important;
                right: 0px !important;
            }

            .cmpboxhl.cmptxt_hl, #cmpboxheadline1 {
                color: #3B3B3B !important;
                font-size: 18pt !important;
            }

            .cmplogo {
                right: unset !important;
            }
        </style>
        <div id="debug" style="font-size:8px;"></div>
        <div id="screen" class="lang_EN foxxum  fullscreenMode">
            <div id="gamecenterNavi"></div>
            <div id="console"></div>
            <div id="trackingBox"></div>
            <div id="extraViews"></div>
            <div id="video-container-small"></div>
            <script type='text/javascript'>
                /* <![CDATA[ */

                HbbTV.debug = false;

                HbbTV.debugLayerDuration = 30000;
                if (HbbTV.debug == true) {
                    if (document.getElementById('debug'))
                        document.getElementById('debug').style.zIndex = 50000;
                }

                var cmpLocalTcfString = '';
                function setCMPConstentToStorage(tcfString) {
                    HbbTV.log('setCMPConstentToStorage: ' + tcfString);
                    cmpLocalTcfString = tcfString;
                    videoAdParams.gdprConsent = tcfString;
                    portal.storeCookie('tcfString', tcfString, 365);
                }

                function getCMPConsentFromStorage() {
                    //HbbTV.debug=true;
                    HbbTV.log('getCMPConsentFromStorage');

                    if (cmpLocalTcfString !== '') {
                        HbbTV.log('return local: ' + cmpLocalTcfString);
                        return cmpLocalTcfString;
                    } else {
                        var possibleCookies = ['__cmpconsentx103624', '__cmpconsentx103832', 'euconsent-v2', 'tcfString'];
                        var cmpCookie = '';

                        for (var i in possibleCookies) {
                            //console.log('check', i, possibleCookies[i]);
                            cmpCookie = portal.getCookie(possibleCookies[i]);
                            if (typeof cmpCookie !== 'undefined' && cmpCookie !== '') {
                                HbbTV.log('return cookie ' + possibleCookies[i] + ': ' + cmpCookie);
                                return cmpCookie;
                            }
                        }

                        if (typeof window.localStorage !== 'undefined' && window.localStorage.hasOwnProperty('__cmpconsentx103624.itsmy.tv')) {

                            HbbTV.log('return localStorage: ' + window.localStorage['__cmpconsentx103624.itsmy.tv']);
                            return window.localStorage['__cmpconsentx103624.itsmy.tv'];
                        } else if (typeof window.localStorage !== 'undefined' && window.localStorage.hasOwnProperty('__cmpconsentx103624_.gofresh.tv')) {

                            HbbTV.log('return localStorage: ' + window.localStorage['__cmpconsentx103624_.gofresh.tv']);
                            return window.localStorage['__cmpconsentx103624_.gofresh.tv'];
                        }

                    }
                    return '';
                }

                var trackingParams = {
                    'uid': 25381887,
                    'gameId': 0,
                    'adSize': 'BIG',
                    'deviceId': 64749,
                    'consentDigits': "11111111111",
                    'cmpVersion': "consentmanager",
                    'GCID': "1jasmdi2rtcnj63900jvddappl"

                };

                var videoAdParams = {
                    'htmlMode': "html",
                    'adsEnabled': false,
                    'adPlayer': null,
                    'adCallType': 'page',
                    'partnerId': "foxxum",
                    'uidHashMD5': "42177f1c4293e02a2d260d4554626009",
                    'uidHashIfa': "42177F1C-4293-E02A-2D26-0D4554626009",
                    'bundleid': "com.itsmy.firetvapp",
                    'clientip': "195.199.249.78",
                    'detailedPartnerId': "gofresh",
                    'adLayerPageType': "games.video",
                    'adLayerAppEnv': "default",
                    'adSize': "BIG",
                    'smallAds': false,
                    'resizeAds': false,
                    'debugDeviceId': "25354738",
                    'gameId': 0,
                    'gameName': null,
                    'gameCategory': null,
                    'gameCategoryId': 0,
                    'iabGenre': "Entertainment",
                    'iabCategories': [],
                    'keywords': ",entertainment,haus,kinder,familie,family,finance,urlaub,auto",
                    'gp': 5,
                    'maxLoops': 0,
                    'loop': 0,
                    'adOptOut': false,
                    'gdpr': 1,
                    'gdprConsent': getCMPConsentFromStorage(),
                    'fullConsent': 1,

                    'adShowTime': 0,
                    'curTime': 1730977038,
                    'adInterval': 240,
                    'adSleepInterval': 12000,
                    'banners': false,
                    'bannerType': "powercorner",
                    'bannerInterval': 120,
                    'continueUrl': "",
                    'pollUrl': '',
                    'fc': {
                        'so': 0,
                        'sc': 0,
                        'ss': 0,
                        'st': 0,
                        'sx': 0,
                        'gb': 0,
                        'gf': 0,
                        'sa': 0,
                        'mx': 0,
                        'gx': 0
                    },
                    'demoa': "30-39",
                    'demog': "m",
                    'demos': "Autos, Games &amp; Technik",
                    'demoNugged': "n3%3D1%26n4%3D3",
                    'sda_user': [50, 7, 243, 687, 733, 734],
                    'queue': [],
                    'partnerRef': "https://foxxum.itsmy.tv/spielecenter/",
                    'iabStoreId': "com.itsmy.firetvapp",
                    'iabStoreUrl': "https://play.google.com/store/apps/details?id=com.itsmy.firetvapp",
                    'iabBundleId': "com.itsmy.firetvapp",
                    'isEU': 1,
                    'useHTTPS': 0,
                    'useProtocol': "http",

                };

                window.addEventListener('load', function(e) {

                    HbbTV.log('prod: ' + prod + ' pid: ' + pid);
                }, false);

                if (['pro7', 'pro7at', 'hbbtv'].indexOf(prod) == -1 && window['devicePixelRatio'] > 1) {
                    window['devicePixelRatio'] = 1;
                }

                /* ]]> */
            </script>
            <div id="fullBody">
                <div id="gameDiscovery" style="position:absolute;top:0px;left:109px;width:1171px;height:720px;">
                    <div id="TVSpieleCenterLogoTop"></div>
                    <div id="gamePreviewFullArea"></div>
                    <div id="gamePreviewController"></div>
                    <div id="gamePreview">
                        <div id="gamePreviewImage"></div>
                        <div id="gamePreviewMovie" style="overflow:hidden;">
                            <video id="videoPlayer" style="background-color:#3a4e66;"></video>
                        </div>
                        <div id="gameComingSoonDiv">COMING SOON</div>
                        <div id="videoGradientV"></div>
                        <div id="videoGradientH"></div>
                    </div>
                    <div id="gameMeta">
                        <div id="gameName"></div>
                        <div id="gameCategoryStats" style="width:600px;position:relative;margin-top:20px;">
                            <div class="gameBullets" style="padding-left:4px;">
                                <span style="display:inline-block;vertical-align:top;" id="gameCategoryIcon"></span>
                                <span style="display:inline-block;vertical-align:top;" id="gameCategory"></span>
                            </div>
                            <div class="gameBullets" style="display:none;vertical-align:top;" id="gameComingIn"></div>
                            <div class="gameBullets" style="display:inline-block;vertical-align:top;" id="gameStats"></div>
                            <div class="gameBullets" id="gameFavorites" style="vertical-align:top;line-height:px;">
                                <span id="favIcon" class="favIconOff"></span>
                                <span id="favText">YOU +</span>
                                <span id="favNumber"></span>
                                <span id="favPlayer"></span>
                            </div>
                        </div>
                        <div id="gameDesc"></div>
                        <div id="gameRecommendation"></div>
                    </div>
                    <div id="kachelContainerVisible" class="">
                        <div id="kachelContainerFavoritesEmpty">Favorite games: This is for your favorite games.</div>
                        <div id="kachelContainerRecentEmpty">Recent Games: games you play will be shown here.</div>
                        <div id="kachelContainerBlende" style="background-color:#3A4E66;position:absolute;width:1171px;height:36px;top:0px;left:0px;z-index:10;"></div>
                        <div id="kachelContainer" class="animated"></div>
                    </div>
                </div>
                <div id="iconNavi" style="">
                    <div style="position:absolute;top:0px;left:0px;width:350px;height:40px;padding-top:36px;">
                        <div class="iconNaviIcon" style="margin-left:26px;display:inline-block;position:relative;width:32px;height:32px;background-image:url(https://cdn15.itsmy.tv/images/cms_images/couchplayicon_41934_20210609223033_32x32.png)"></div>
                        <div class="iconNaviName" style="font-size:17px;margin-left:16px;color:#FFF;">Welcome</div>
                    </div>
                    <div style="position:absolute;top:100px;left:0px;width:70px;height:620px;">
                        <a class="iconNaviLink" id="iconNavi_0" href="search.php">
                            <div id="iconNavi_search" class="iconNaviIcon"></div>
                            <div class="iconNaviName">Search</div>
                        </a>
                        <a class="iconNaviLink" id="iconNavi_1" href="#">
                            <div id="iconNavi_home" class="iconNaviIcon"></div>
                            <div class="iconNaviName">All games</div>
                        </a>
                        <a class="iconNaviLink" id="iconNavi_2" href="#">
                            <div id="iconNavi_top" class="iconNaviIcon"></div>
                            <div class="iconNaviName">Top games</div>
                        </a>
                        <a class="iconNaviLink" id="iconNavi_3" href="#">
                            <div id="iconNavi_recommendation" class="iconNaviIcon"></div>
                            <div class="iconNaviName">Perfect for your TV</div>
                        </a>
                        <a class="iconNaviLink" id="iconNavi_4" href="#">
                            <div id="iconNavi_new" class="iconNaviIcon"></div>
                            <div class="iconNaviCounter">2</div>
                            <div class="iconNaviName">New releases</div>
                        </a>
                        <a class="iconNaviLink" id="iconNavi_5" href="#">
                            <div id="iconNavi_continue" class="iconNaviIcon"></div>
                            <div class="iconNaviName">Recently played</div>
                        </a>
                        <a class="iconNaviLink" id="iconNavi_6" href="/spielecenter/social.php" style="margin-top:16px;">
                            <div id="iconNavi_profile" class="iconNaviIcon"></div>
                            <div class="iconNaviName">Profile &amp;settings</div>
                        </a>
                        <a class="iconNaviLink" id="iconNavi_7" href="feedback.php">
                            <div id="iconNavi_feedback" class="iconNaviIcon"></div>
                            <div class="iconNaviName">Feedback</div>
                        </a>
                        <a class="iconNaviLink" id="iconNavi_8" href="#" style="position:absolute;bottom:88px;">
                            <div id="iconNavi_privacy" class="iconNaviIcon"></div>
                            <div class="iconNaviName">Privacy</div>
                        </a>
                        <a class="iconNaviLink" id="iconNavi_9" href="info.php" style="position:absolute;bottom:40px;">
                            <div id="iconNavi_impress" class="iconNaviIcon"></div>
                            <div class="iconNaviName">Terms &amp;Imprint</div>
                        </a>
                    </div>
                </div>
                <div id="likePopupBG" style=""></div>
                <div id="likePopup" style="">
                    <div id="likePopupContent" style="">
                        <div style="position:relative;margin:81px 30px 30px 30px;">
                            <div style="width:150px;height:108px;margin-left:4px;margin-bottom:20px;border:2px solid #FFF;position:relative;">
                                <div style="top:2px;left:2px;" id="likePopupImage"></div>
                            </div>
                            <div id="likePopupName"></div>
                            <div id="likePopupStats"></div>
                        </div>
                        <a id="likePopupLikeButton" href="#" class="iconNaviLink" style="width:100%">
                            <span style="margin-left:30px;line-height:24px;display:none" id="doLike">
                                <img style="vertical-align:top" src="https://cdn12.itsmy.tv/images/cms_images/herz_grau_20180813180803_26x24.png"/>
                                <span class="iconNaviName" style="margin-top:0px;">Add to favorite</span>
                            </span>
                            <span style="margin-left:30px;line-height:24px;display:none" id="isLiked">
                                <img style="vertical-align:top" src="https://cdn11.itsmy.tv/images/cms_images/herz_rot_20180813180819_26x24.png"/>
                                <span class="iconNaviName" style="margin-top:0px;">
                                    You + <span id="likeCount"></span>
                                </span>
                            </span>
                        </a>
                        <a id="likePopupPlayButton" href="#" class="iconNaviLink" style="width:100%">
                            <div id="iconNavi_play" class="iconNaviIcon" style=""></div>
                            <div class="iconNaviName" style="">Play</div>
                        </a>
                        <a id="likePopupFeedbackButton" href="feedback.php" class="iconNaviLink" style="width:100%">
                            <div id="iconNavi_feedback" class="iconNaviIcon" style=""></div>
                            <div class="iconNaviName" style="">Feedback</div>
                        </a>
                        <a id="likePopupCloseButton" href="#" class="iconNaviLink" style="width:100%">
                            <div id="iconNavi_back" class="iconNaviIcon" style=""></div>
                            <div class="iconNaviName" style="">Back</div>
                        </a>
                        <span id="likePopupSimilar" class="iconNaviLink" style="width:100%">
                            <div id="iconNavi_idea" class="iconNaviIcon" style=""></div>
                            <div class="iconNaviName" style="">Similar games</div>
                        </span>
                        <div id="likePopupSimilarGames"></div>
                    </div>
                </div>
                <style type="text/css">
                    .categorySymbols {
                        width: 25px;
                        height: 25px;
                        background-image: url(http://cdn14.itsmy.tv/images/temp/spriteData_EN_9d6f83c2a83f1c09a564692a50b336310359f9b5_14_419280_1.png);
                        background-repeat: no-repeat;
                    }

                    .dynamicKachelRed {
                        background-image: url(https://cdn10.itsmy.tv/images/cms_images/samsungportal_42294_20210913164718_146x104.png);
                    }

                    .dynamicKachelBlue {
                        background-image: url(https://cdn15.itsmy.tv/images/cms_images/samsungportal_42293_20210913164718_146x104.png);
                    }

                    .dynamicKachelVorschau {
                        background-image: url(https://cdn14.itsmy.tv/images/cms_images/vorschau_kachel_45245_20221012091844_146x104.png);
                    }

                    .dynamicKachelGreen {
                        background-image: url(https://cdn12.itsmy.tv/images/cms_images/samsungportal_42292_20210913164718_146x104.png);
                    }

                    .gameKachel .badge.new {
                        background-image: url(https://cdn15.itsmy.tv/images/cms_images/kachel_badge_42753_20220120091938_146x104.png);
                    }

                    .spriteKachelId1 {
                        background-image: url(http://cdn15.itsmy.tv/images/temp/spriteData_EN_0697d9ba73e946c1997399ca9679d353dd952c18_14_202702_1.png);
                    }

                    .spriteKachelId2 {
                        background-image: url(http://cdn13.itsmy.tv/images/temp/spriteData_EN_0697d9ba73e946c1997399ca9679d353dd952c18_14_202702_2.png);
                    }

                    .spriteKachelId3 {
                        background-image: url(http://cdn13.itsmy.tv/images/temp/spriteData_EN_0697d9ba73e946c1997399ca9679d353dd952c18_14_202702_3.png);
                    }

                    .favIconOn {
                        background-image: url(https://cdn11.itsmy.tv/images/cms_images/herz_rot_46971_20231024173812_18x17.png);
                        background-repeat: no-repeat;
                        width: 18px;
                        height: 17px;
                        vertical-align: baseline;
                    }

                    .favIconOff {
                        background-image: url(https://cdn10.itsmy.tv/images/cms_images/herz_blau_46970_20231024165209_18x17.png);
                        background-repeat: no-repeat;
                        width: 18px;
                        height: 17px;
                        vertical-align: baseline;
                    }
                </style>
                <script type="text/javascript">
                    /* <![CDATA[ */

                    setNumberButtonUrl(0, prodUrl + '/info.php?' + pidExt + prodExt + sessExt, "privacy &amp; disclaimer");

                    setNumberButtonUrl(9, prodUrl + '/index_v7.php?' + pidExt + prodExt + sessExt, 'reload');

                    try {
                        KachelMenu.init({
                            "last_played": "recently played",
                            "recently_played": "recently played",
                            "new_game": "New",
                            "fav_del_click": "Remove from favorites - click here",
                            "fav_del_key1": "Remove from favorites - press [1]",
                            "fav_add_click": "Add to favorites - click here",
                            "fav_add_key1": "Add to favorites - press [1]",
                            "empty_my_favorites": "Favorite games: This is for your favorite games.",
                            "action_select": "Select",
                            "action_play": "Play now!",
                            "action_preview": "Preview",
                            "action_welcome": "Welcome",
                            "action_info": "Info",
                            "action_open": "Open",
                            "action_play_movie": "Play",
                            "nav_hot": "Today's top games",
                            "nav_all": "All games",
                            "nav_subCategory": "Game collections",
                            "nav_recent": "Recently played",
                            "nav_top": "Perfect for your TV",
                            "nav_new": "New releases",
                            "nav_coming": "Coming next",
                            "nav_exclusive": "Couchplay exclusive",
                            "nav_early": "Game lab - test and vote",
                            "nav_recommended": "Recommendations",
                            "nav_favorites": "Your favorites",
                            "nav_card": "Card games",
                            "nav_match3": "Match 3 games",
                            "nav_classic": "Classic and evergreen games",
                            "nav_board": "Board games",
                            "nav_builder": "Build- and simulation games",
                            "nav_knowledge": "Puzzle &amp; brain games",
                            "nav_platformer": "Platformer",
                            "nav_action": "Action",
                            "nav_sports": "Racing &amp; Sports",
                            "nav_worlds": "Open world",
                            "nav_family": "Family games",
                            "nav_multiplayer": "",
                            "nav_subCategoryEnd": "Kategorien",
                            "tag_name_card": "Card games",
                            "tag_longdesc_card": "Play a variety of card games, from classics to new variations. Challenge friends to strategic duels.",
                            "tag_name_match3": "Match 3",
                            "tag_longdesc_match3": "Puzzle, match, and clear! Enjoy colorful challenges suitable for all ages.",
                            "tag_name_classic": "Classic",
                            "tag_longdesc_classic": "Timeless games, from chess to solitaire - nostalgic enjoyment for everyone.",
                            "tag_name_board": "Board",
                            "tag_longdesc_board": "Explore digital board games, from classics to modern strategy challenges.",
                            "tag_name_builder": "Simulation &amp; building",
                            "tag_longdesc_builder": "Build cities, manage resources, control economies - strategic challenges await.",
                            "tag_name_knowledge": "Puzzle &amp; brain training",
                            "tag_longdesc_knowledge": "Solve tricky puzzles and challenge your brain.",
                            "tag_name_platformer": "Platformer",
                            "tag_longdesc_platformer": "Fast-paced action, overcome obstacles, and leap through fascinating worlds. Jump through exciting adventures and find secret treasures.",
                            "tag_name_action": "Action",
                            "tag_longdesc_action": "Quick reflexes and tactical skill required - get ready for thrilling challenges!",
                            "tag_name_sports": "Cars, Sports &amp; Action",
                            "tag_longdesc_sports": "Race on virtual tracks, become a virtual athlete, experience exciting action in cars.",
                            "tag_name_worlds": "Open world",
                            "tag_longdesc_worlds": "Discover fascinating worlds and adventures - from epic quests to intergalactic journeys.",
                            "tag_name_family": "Family",
                            "tag_longdesc_family": "Entertaining and family-friendly games for shared playtime and fun for all ages.",
                            "tag_name_multiplayer": "",
                            "tag_longdesc_multiplayer": "",
                            "tag_name_backtotop": "back to top",
                            "tag_name_comingmore": "And lots more",
                            "tag_name_comingmore_img": "https:\/\/cdn10.itsmy.tv\/images\/cms_images\/andlotsmore_44939_20220713172320_552x346.png",
                            "tag_name_gamepad": "Gamepad",
                            "tag_name_videoplayer": "TOP 10"
                        }, {
                            "-14": {
                                "comingSoon": 0,
                                "game_id": -14,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "LET'S PLAY COUCHPLAY",
                                "description": "<span class=\"welcomePush\">TV games like never before!<\/span><br \/>All 500+ games, free to play!<br \/>Instantly playable<br \/>HAPPY HALLOWEEN",
                                "gameCategory": "|",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-px -px;\"><\/div>",
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/werbeVideo.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_49935_782_440_15_EN.jpg",
                                "image_id_cover": "49935",
                                "url": "",
                                "gameStats": "",
                                "likes": 73,
                                "similar_games": [245, 229]
                            },
                            "-5": {
                                "comingSoon": 0,
                                "game_id": -5,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SEARCH",
                                "description": "Find games even faster! Simply start typing and off you go!",
                                "gameCategory": "|",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_44674_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "44674"
                                },
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_47186_782_440_15_EN.jpg",
                                "image_id_cover": "47186",
                                "url": ".\/search.php?&gameId=-5&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "gameStats": "",
                                "likes": 3482,
                                "similar_games": [263, 368]
                            },
                            "1": {
                                "comingSoon": 0,
                                "game_id": 1,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "FUN POKER",
                                "description": "Hit the jackpot in 10 rounds - new competitions every evening",
                                "gameCategory": "Card Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -27px;\"><\/div>",
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_24568_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "24568"
                                },
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_27594_782_440_15_EN.jpg",
                                "image_id_cover": "27594",
                                "url": ".\/games\/poker\/?&gameId=1&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 685,
                                "gameStats": "11.6M plays",
                                "similar_games": [127, 297],
                                "gameColor": "30210D"
                            },
                            "7": {
                                "comingSoon": 0,
                                "game_id": 7,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "CHESS",
                                "description": "Checkmate! For you or your opponent? Choose your color and play now!",
                                "gameCategory": "Logic Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_48760_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48760"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_24572_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "24572"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/schach.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_27613_782_440_15_EN.jpg",
                                "image_id_cover": "27613",
                                "url": ".\/games\/chess\/?&gameId=7&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 8005,
                                "gameStats": "21.8M plays",
                                "similar_games": [214, 139, 72],
                                "gameColor": "2E221A"
                            },
                            "9": {
                                "comingSoon": 0,
                                "game_id": 9,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SOLITAIRE",
                                "description": "Play the most popular card game for free on the TV.",
                                "gameCategory": "Card Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_49217_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49217"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_24781_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "24781"
                                },
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_27620_782_440_15_EN.jpg",
                                "image_id_cover": "27620",
                                "url": ".\/games\/solitaire\/?&gameId=9&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1808,
                                "gameStats": "18.4M plays",
                                "similar_games": [127, 302, 177],
                                "gameColor": "133801"
                            },
                            "13": {
                                "comingSoon": 0,
                                "game_id": 13,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "IMPOSSIBLE HIT",
                                "description": "Hit the buzzer at 0.000 seconds.",
                                "gameCategory": "Reaction Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -0px;\"><\/div>",
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_24577_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "24577"
                                },
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_27599_782_440_15_EN.jpg",
                                "image_id_cover": "27599",
                                "url": ".\/games\/impossiblehit\/?&gameId=13&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1118,
                                "gameStats": "10.8M plays",
                                "similar_games": [224, 263],
                                "gameColor": "04024B"
                            },
                            "18": {
                                "comingSoon": 0,
                                "game_id": 18,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SUDOKU",
                                "description": "Play this popular game on your smart TV now! What level do you want to start at? Easy, medium or pro?",
                                "gameCategory": "Number Puzzle | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-108px -0px;\"><\/div>",
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_24578_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "24578"
                                },
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_27618_782_440_15_EN.jpg",
                                "image_id_cover": "27618",
                                "url": ".\/games\/sudoku\/?&gameId=18&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1335,
                                "gameStats": "4M plays",
                                "similar_games": [368, 347],
                                "gameColor": "4A0E13"
                            },
                            "28": {
                                "comingSoon": 0,
                                "game_id": 28,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "BLOBBY'S MAGIC MINE",
                                "description": "The tricky smart TV hit game.",
                                "gameCategory": "Puzzle Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-108px -0px;\"><\/div>",
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_24565_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "24565"
                                },
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_27579_782_440_15_EN.jpg",
                                "image_id_cover": "27579",
                                "url": ".\/games\/blobbyszaubermine\/?&gameId=28&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 398,
                                "gameStats": "5.1M plays",
                                "similar_games": [153, 261],
                                "gameColor": "382F47"
                            },
                            "32": {
                                "comingSoon": 0,
                                "game_id": 32,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "LEGEND OF SORCERA",
                                "description": "Important decisions, hidden paths, magical battles",
                                "gameCategory": "Adventure Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -0px;\"><\/div>",
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_24576_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "24576"
                                },
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_27621_782_440_15_EN.jpg",
                                "image_id_cover": "27621",
                                "url": ".\/games\/sorcera\/?&gameId=32&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 372,
                                "gameStats": "1.2M plays",
                                "similar_games": [38, 263, 368],
                                "gameColor": "183219"
                            },
                            "38": {
                                "comingSoon": 0,
                                "game_id": 38,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "COLOR MASH",
                                "description": "The popular block game: now with a tournament list and your personal top 10!",
                                "gameCategory": "Action Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_39848_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "39848"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_33832_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "33832"
                                },
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_33889_782_440_15_EN.jpg",
                                "image_id_cover": "33889",
                                "url": ".\/games\/colormash\/?&gameId=38&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1170,
                                "gameStats": "31M plays",
                                "similar_games": [32, 196, 536],
                                "gameColor": "24152F"
                            },
                            "65": {
                                "comingSoon": 0,
                                "game_id": 65,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "DOUBLE UP POKER",
                                "description": "1 billion chips are possible.",
                                "gameCategory": "Card Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_44786_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "44786"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_25248_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "25248"
                                },
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_27590_782_440_15_EN.jpg",
                                "image_id_cover": "27590",
                                "url": ".\/games\/videopokerplus\/?&gameId=65&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 882,
                                "gameStats": "30.2M plays",
                                "similar_games": [127, 198],
                                "gameColor": "161323"
                            },
                            "72": {
                                "comingSoon": 0,
                                "game_id": 72,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "MAHJONG",
                                "description": "30 New Levels - Welcome to Mahjong Farm! Clear the fields and start your farming career!",
                                "gameCategory": "Puzzle Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49179_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49179"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_36546_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "36546"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/mahjong_done.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_36523_782_440_15_EN.jpg",
                                "image_id_cover": "36523",
                                "url": ".\/games\/mahjongsolitaire\/?&gameId=72&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2317,
                                "gameStats": "4.7M plays",
                                "similar_games": [139, 7]
                            },
                            "77": {
                                "comingSoon": 0,
                                "game_id": 77,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "TV 2048",
                                "description": "The trend game - now for everyone! Can you win?",
                                "gameCategory": "Number Puzzle | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_49313_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49313"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_25415_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "25415"
                                },
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_27575_782_440_15_EN.jpg",
                                "image_id_cover": "27575",
                                "url": ".\/games\/numberpuzzle\/?&gameId=77&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1863,
                                "gameStats": "6M plays",
                                "similar_games": [186, 104],
                                "gameColor": "8BC34A"
                            },
                            "86": {
                                "comingSoon": 0,
                                "game_id": 86,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "LABYRINTH LIZZY",
                                "description": "Collect all the diamonds, but watch out for the nasty monsters",
                                "gameCategory": "Puzzle Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49026_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49026"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_25919_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "25919"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/lizzy_done.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_27605_782_440_15_EN.jpg",
                                "image_id_cover": "27605",
                                "url": ".\/games\/lizzy\/?&gameId=86&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 4281,
                                "gameStats": "20.9M plays",
                                "similar_games": ["28", 317, 299],
                                "gameColor": "000000"
                            },
                            "90": {
                                "comingSoon": 0,
                                "game_id": 90,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "VIKINGS CRUSADE",
                                "description": "Discover and explore a new world!",
                                "gameCategory": "Strategy Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49309_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49309"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_26741_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "26741"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/vikings_done.mp4",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_27573_782_440_15_EN.jpg",
                                "image_id_cover": "27573",
                                "url": ".\/games\/vikings\/?&gameId=90&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2276,
                                "gameStats": "31.5M plays",
                                "similar_games": [91, 32],
                                "gameColor": "3A2F24"
                            },
                            "91": {
                                "comingSoon": 0,
                                "game_id": 91,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "COLOR FLAT",
                                "description": "It all comes down to one color!",
                                "gameCategory": "Tactical Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_49319_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49319"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_26207_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "26207"
                                },
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_27584_782_440_15_EN.jpg",
                                "image_id_cover": "27584",
                                "url": ".\/games\/colorflat\/?&gameId=91&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1990,
                                "gameStats": "11.1M plays",
                                "similar_games": [38, 90],
                                "gameColor": "000000"
                            },
                            "97": {
                                "comingSoon": 0,
                                "game_id": 97,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "CURWIE WURM",
                                "description": "The classic mobile game now on your smart TV!",
                                "gameCategory": "Action Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48916_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48916"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_27055_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "27055"
                                },
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_48917_782_440_15_EN.jpg",
                                "image_id_cover": "48917",
                                "url": ".\/games\/snake2\/?&gameId=97&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 4935,
                                "gameStats": "25.8M plays",
                                "similar_games": [536, 368],
                                "gameColor": "B2B2B2"
                            },
                            "104": {
                                "comingSoon": 0,
                                "game_id": 104,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "FLAPPY KIWI",
                                "description": "How far can you fly? Unlock and collect all hats.and break the record!",
                                "gameCategory": "Action Game | Aesir interactive",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_47533_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "47533"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_27454_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "27454"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/flappykiwi.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_27592_782_440_15_EN.jpg",
                                "image_id_cover": "27592",
                                "url": ".\/games\/flappykiwi\/?&gameId=104&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 7686,
                                "gameStats": "18.6M plays",
                                "similar_games": [497, 368],
                                "gameColor": "3B302C"
                            },
                            "124": {
                                "comingSoon": 0,
                                "game_id": 124,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "BARKY'S JOB",
                                "description": "Help Barky bury all the bones. Free choice of level!",
                                "gameCategory": "Puzzle Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-108px -0px;\"><\/div>",
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_28829_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "28829"
                                },
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_28826_782_440_15_EN.jpg",
                                "image_id_cover": "28826",
                                "url": ".\/games\/barkysknochenjob\/?&gameId=124&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1023,
                                "gameStats": "21.6M plays",
                                "similar_games": [234, 347],
                                "gameColor": "1C4005"
                            },
                            "127": {
                                "comingSoon": 0,
                                "game_id": 127,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SPIDER SOLITAIRE",
                                "description": "The PC classic now available on all smart TVs. Exciting and free!",
                                "gameCategory": "Card Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_49031_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49031"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_29132_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "29132"
                                },
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_29499_782_440_15_EN.jpg",
                                "image_id_cover": "29499",
                                "url": ".\/games\/spidersolitaire\/?&gameId=127&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2689,
                                "gameStats": "12.7M plays",
                                "similar_games": [185, 198],
                                "gameColor": "265300"
                            },
                            "133": {
                                "comingSoon": 0,
                                "game_id": 133,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "TREASURES OF THE FOREST",
                                "description": "Collect the fruit and solve tricky puzzles!",
                                "gameCategory": "Match 3 Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-135px -27px;\"><\/div>",
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_28725_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "28725"
                                },
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_28726_782_440_15_EN.jpg",
                                "image_id_cover": "28726",
                                "url": ".\/games\/forestgame\/?&gameId=133&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1423,
                                "gameStats": "23M plays",
                                "similar_games": [172, 210, 261],
                                "gameColor": "008065"
                            },
                            "138": {
                                "comingSoon": 0,
                                "game_id": 138,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "TREASURES OF WINTER!",
                                "description": "Help Paul Penguin save Christmas! 70 tricky levels for you to enjoy!",
                                "gameCategory": "Strategy Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-135px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_49899_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49899"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_29120_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "29120"
                                },
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_29119_782_440_15_EN.jpg",
                                "image_id_cover": "29119",
                                "url": ".\/games\/forestgamexmas\/?&gameId=138&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 785,
                                "gameStats": "9.1M plays",
                                "similar_games": [133, 172],
                                "gameColor": "174473"
                            },
                            "139": {
                                "comingSoon": 0,
                                "game_id": 139,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "MAGICAL MAHJONG",
                                "description": "Start your exciting journey through four magical worlds!",
                                "gameCategory": "Mahjong | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_44784_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "44784"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_30710_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "30710"
                                },
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_31075_782_440_15_EN.jpg",
                                "image_id_cover": "31075",
                                "url": ".\/games\/magischesmeistermahjong\/?&gameId=139&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1131,
                                "gameStats": "2.2M plays",
                                "similar_games": [72, 72, 7],
                                "gameColor": "282944"
                            },
                            "141": {
                                "comingSoon": 0,
                                "game_id": 141,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "BUBBLE SHOOTER",
                                "description": "Face the invasion and collect as many points as possible.",
                                "gameCategory": "Bubble Shooter | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49266_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49266"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_29678_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "29678"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/space_bubble_defender1_gid_141_compress_done_norm2.mp4",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49267_782_440_15_EN.jpg",
                                "image_id_cover": "49267",
                                "url": ".\/games\/spacebubbledefender\/?&gameId=141&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1844,
                                "gameStats": "24.5M plays",
                                "similar_games": [38, 368, 291]
                            },
                            "153": {
                                "comingSoon": 0,
                                "game_id": 153,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SUPER CANDY 2",
                                "description": "Ready, set, get harvesting! Who'll get the furthest?",
                                "gameCategory": "Match 3 Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-135px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_46372_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46372"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_31060_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "31060"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/supercandy2new.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_46994_782_440_15_EN.jpg",
                                "image_id_cover": "46994",
                                "url": ".\/games\/supercandy2\/?&gameId=153&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 19431,
                                "gameStats": "100.9M plays",
                                "similar_games": [210, 261, 363]
                            },
                            "156": {
                                "comingSoon": 0,
                                "game_id": 156,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "HALLOWEEN CRAFT",
                                "description": "Show your skills and create the desired scary objects!",
                                "gameCategory": "Match 3 Game | Gofresh Games",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-135px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_46785_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46785"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_31459_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "31459"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/HalloweenCraft.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_47132_782_440_15_EN.jpg",
                                "image_id_cover": "47132",
                                "url": ".\/games\/halloweencraft\/?&gameId=156&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1284,
                                "gameStats": "1.4M plays",
                                "similar_games": [133, 194, 261]
                            },
                            "165": {
                                "comingSoon": 0,
                                "game_id": 165,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "COUCHPLAY'S FOOTBALL BETS",
                                "description": "Take part in the big Smart TV betting game! The longer the tournament runs, the more points you get!<br\/>Thank you all for participating! &lt;3",
                                "gameCategory": "Betting Game | Gofresh Sports",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_49169_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49169"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49167_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "49167"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/tippspiel.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_49168_782_440_15_EN.jpg",
                                "image_id_cover": "49168",
                                "url": ".\/games\/tippspiel\/?&gameId=165&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 6373,
                                "gameStats": "",
                                "similar_games": [291, 224, 309]
                            },
                            "172": {
                                "comingSoon": 0,
                                "game_id": 172,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "CUTIES 2",
                                "description": "The Cuties are back! Accompany them into the kingdom of the unicorn and become part of this magical world!",
                                "gameCategory": "Clicker | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-135px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_39853_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "39853"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_34496_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "34496"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/schaetzchen2_gid_172_compress_done_norm2.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_34497_782_440_15_EN.jpg",
                                "image_id_cover": "34497",
                                "url": ".\/games\/animalworld2\/?&gameId=172&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1678,
                                "gameStats": "7.1M plays",
                                "similar_games": [133, 153, 261]
                            },
                            "175": {
                                "comingSoon": 0,
                                "game_id": 175,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "AMANDA BUBBLE",
                                "description": "Join Amanda Bubble at the Witchcraft Academy and find the secret witchy treasure!",
                                "gameCategory": "Bubble Shooter | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_46349_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46349"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_33559_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "33559"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/amandabubble.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_34801_782_440_15_EN.jpg",
                                "image_id_cover": "34801",
                                "url": ".\/games\/bubblewitch\/?&gameId=175&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 16431,
                                "gameStats": "58.7M plays",
                                "similar_games": [367, 363, 317]
                            },
                            "177": {
                                "comingSoon": 0,
                                "game_id": 177,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SOLITAIRE XXL",
                                "description": "Enjoy the most popular card game on TV! It's even available in XXL!",
                                "gameCategory": "Card Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_46352_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46352"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_34704_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "34704"
                                },
                                "movie_file_location": "https:\/\/cdn10.itsmy.tv\/spielecenter\/videos\/solitairexxl.mp4",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_34707_782_440_15_EN.jpg",
                                "image_id_cover": "34707",
                                "url": ".\/games\/solitaireHD\/?&gameId=177&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 26851,
                                "gameStats": "19.5M plays",
                                "similar_games": [9, 127, 185],
                                "gameColor": "2E770E"
                            },
                            "185": {
                                "comingSoon": 0,
                                "game_id": 185,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "FOX SOLITAIRE",
                                "description": "Visit Ferdi Fox in his fantastic world of card puzzles.",
                                "gameCategory": "Card Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_46360_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46360"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_46359_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46359"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/Fuchs_Solitaire_4_done.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_35483_782_440_15_EN.jpg",
                                "image_id_cover": "35483",
                                "url": ".\/games\/fuchssolitaire\/?&gameId=185&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1579,
                                "gameStats": "13.7M plays",
                                "similar_games": [127, 302, 177]
                            },
                            "186": {
                                "comingSoon": 0,
                                "game_id": 186,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "WORLD DRIFT CAR RACING",
                                "description": "Drift round the racetrack at top speed!",
                                "gameCategory": "Racer Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_48452_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48452"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_35922_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "35922"
                                },
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_35924_782_440_15_EN.jpg",
                                "image_id_cover": "35924",
                                "url": ".\/games\/worlddrift\/?&gameId=186&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 5182,
                                "gameStats": "9.2M plays",
                                "similar_games": [365, 497, 104],
                                "gameColor": "#5A5A5A"
                            },
                            "188": {
                                "comingSoon": 0,
                                "game_id": 188,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SQUIRREL HOP",
                                "description": "The skill game that's fun for the whole family!",
                                "gameCategory": "Jumper | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_44781_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "44781"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_35920_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "35920"
                                },
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_35918_782_440_15_EN.jpg",
                                "image_id_cover": "35918",
                                "url": ".\/games\/squirrelhop\/?&gameId=188&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1187,
                                "gameStats": "200.000 plays",
                                "similar_games": [266, 309]
                            },
                            "194": {
                                "comingSoon": 0,
                                "game_id": 194,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "ROCKY SPOON",
                                "description": "Who's the best cook in the country? Test your skills here!",
                                "gameCategory": "Match 3 Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_46362_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46362"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_36716_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "36716"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/rockyloeffel_done.mp4",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_46363_782_440_15_EN.jpg",
                                "image_id_cover": "46363",
                                "url": ".\/games\/rockyloeffel\/?&gameId=194&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2802,
                                "gameStats": "8.5M plays",
                                "similar_games": [153, 363]
                            },
                            "196": {
                                "comingSoon": 0,
                                "game_id": 196,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "RESCUE SANTA III",
                                "description": "2023 Update: More stickers, brand-new levels, and the complete couchplay community! Join forces to help Santa with fantastic combos!",
                                "gameCategory": "Seasonal | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_46778_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46778"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_46777_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46777"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/retteSanta3.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_46779_782_440_15_EN.jpg",
                                "image_id_cover": "46779",
                                "url": ".\/games\/rockyloeffelxmas\/?&gameId=196&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 10166,
                                "gameStats": "7.5M plays",
                                "similar_games": [153, 363]
                            },
                            "198": {
                                "comingSoon": 0,
                                "game_id": 198,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "TEXAS HOLD'EM",
                                "description": "Play the legendary poker game on your TV now!",
                                "gameCategory": "Card Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_46376_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46376"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_37078_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "37078"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/texasholdem.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_37079_782_440_15_EN.jpg",
                                "image_id_cover": "37079",
                                "url": ".\/games\/texasholdem\/?&gameId=198&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 9063,
                                "gameStats": "7.9M plays",
                                "similar_games": [297, 177, 302]
                            },
                            "200": {
                                "comingSoon": 0,
                                "game_id": 200,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "RONIN RACE",
                                "description": "Take on the role of the lonely samurai, follow the mysterious lady and master all the challenges on your way!",
                                "gameCategory": "Jump and Run | Wolod",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -54px;\"><\/div>",
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_37246_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "37246"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/ro_done.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_37240_782_440_15_EN.jpg",
                                "image_id_cover": "37240",
                                "url": ".\/games\/roninrace\/?&gameId=200&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1957,
                                "gameStats": "200.000 plays",
                                "similar_games": [253, 314]
                            },
                            "206": {
                                "comingSoon": 0,
                                "game_id": 206,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SNAKE LAND",
                                "description": "Head from island to island and collect as many coins as possible! But watch out for the obstacles and cliffs!",
                                "gameCategory": "Snake | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_47528_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "47528"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_37896_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "37896"
                                },
                                "movie_file_location": "https:\/\/cdn10.itsmy.tv\/spielecenter\/videos\/snakeland_done.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_37949_782_440_15_EN.jpg",
                                "image_id_cover": "37949",
                                "url": ".\/games\/snakeland\/?&gameId=206&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1190,
                                "gameStats": "100.000 plays",
                                "similar_games": [97, 229]
                            },
                            "207": {
                                "comingSoon": 0,
                                "game_id": 207,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "GALAXIA",
                                "description": "Your galaxy is in danger! Face the enemy attackers and upgrade your spaceship to go after the final bosses!",
                                "gameCategory": "Space Battle | Wolod Games",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_49018_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49018"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_37889_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "37889"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/galaxia_done.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_49019_782_440_15_EN.jpg",
                                "image_id_cover": "49019",
                                "url": ".\/games\/galaxia\/?&gameId=207&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3933,
                                "gameStats": "400.000 plays",
                                "similar_games": [327, 229, 259]
                            },
                            "210": {
                                "comingSoon": 0,
                                "game_id": 210,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SUPER CANDY CITY",
                                "description": "Build an empire of fruit gummies in your city! In this sweet, action-packed match 3 game, you can make your mark with clever combos!",
                                "gameCategory": "Match 3 Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-135px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_46373_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46373"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_42038_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "42038"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/supercandycityNew.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_42032_782_440_15_EN.jpg",
                                "image_id_cover": "42032",
                                "url": ".\/games\/supercandy3\/?&gameId=210&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 29775,
                                "gameStats": "16.1M plays",
                                "similar_games": [153, 261]
                            },
                            "212": {
                                "comingSoon": 0,
                                "game_id": 212,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "GRAVITY ESCAPE",
                                "description": "Take on the role of a robot that can reverse gravity and face the ultimate zero-g challenge!",
                                "gameCategory": "Game of Skill | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_49373_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49373"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49371_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "49371"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/gravity_escape_done.mp4",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_38504_782_440_15_EN.jpg",
                                "image_id_cover": "38504",
                                "url": ".\/games\/gravityescape\/?&gameId=212&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2693,
                                "gameStats": "200.000 plays",
                                "similar_games": [104, 229]
                            },
                            "213": {
                                "comingSoon": 0,
                                "game_id": 213,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "TANK BOOM BAAM",
                                "description": "This classic game is now also available on your TV! Play solo against a computer opponent, or challenge a partner from the comfort of your couch!",
                                "gameCategory": "Multiplayer | Wolod Games",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-189px -27px;\"><\/div>",
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_38534_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "38534"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/tankwars_done.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_38533_782_440_15_EN.jpg",
                                "image_id_cover": "38533",
                                "url": ".\/games\/tankboombaam\/?&gameId=213&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2280,
                                "gameStats": "200.000 plays",
                                "similar_games": [265, 229, 225]
                            },
                            "214": {
                                "comingSoon": 0,
                                "game_id": 214,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "KINGDOM CHESS",
                                "description": "We're under attack! Help us, young hero! Gain experience, defeat the forces of darkness and rise to become king.",
                                "gameCategory": "Strategy Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48870_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48870"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_39738_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "39738"
                                },
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_48868_782_440_15_EN.jpg",
                                "image_id_cover": "48868",
                                "url": ".\/games\/chesslevels\/?&gameId=214&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 4748,
                                "gameStats": "600.000 plays",
                                "similar_games": [7, 186, 104]
                            },
                            "216": {
                                "comingSoon": 0,
                                "game_id": 216,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SUPER JUICE FRESH",
                                "description": "Plan your moves wisely and connect as many fruits as possible for massive combos! Let the fruity puzzle fun begin!",
                                "gameCategory": "Candy Game | Wolod Games",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_38884_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "38884"
                                },
                                "movie_file_location": "https:\/\/cdn10.itsmy.tv\/spielecenter\/videos\/juice_fresh_done.mp4",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_38913_782_440_15_EN.jpg",
                                "image_id_cover": "38913",
                                "url": ".\/games\/juicefresh\/?&gameId=216&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 559,
                                "gameStats": "300.000 plays",
                                "similar_games": [133, 153, 330]
                            },
                            "217": {
                                "comingSoon": 0,
                                "game_id": 217,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "GREEDY RABBIT",
                                "description": "Help the bunny to snack on the yummy carrots. Collect stars, but watch out for the traps! Hop right into your adventure. Have fun!",
                                "gameCategory": "Arcade |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_39022_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "39022"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_39007_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "39007"
                                },
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_39008_782_440_15_EN.jpg",
                                "image_id_cover": "39008",
                                "url": ".\/games\/greedyrabbit\/?&gameId=217&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2325,
                                "gameStats": "200.000 plays",
                                "similar_games": [322, 314]
                            },
                            "221": {
                                "comingSoon": 0,
                                "game_id": 221,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "PIPE MANIA",
                                "description": "Help! The water's coming! Can you organize all the pipes correctly before everything gets wet? Let's go!",
                                "gameCategory": "Puzzle Game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_39059_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "39059"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_39056_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "39056"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/pipemania.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_39058_782_440_15_EN.jpg",
                                "image_id_cover": "39058",
                                "url": ".\/games\/pipemania\/?&gameId=221&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2014,
                                "gameStats": "100.000 plays",
                                "similar_games": [469, 291, 196]
                            },
                            "222": {
                                "comingSoon": 0,
                                "game_id": 222,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "KNIFE NINJA",
                                "description": "A short, but challenging game of skill! Which level will you make it to?",
                                "gameCategory": "Game of Skill |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_49015_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49015"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_39070_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "39070"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/knifeninja.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_39072_782_440_15_EN.jpg",
                                "image_id_cover": "39072",
                                "url": ".\/games\/gamelab\/?game_id=222&gameId=222&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 4998,
                                "gameStats": "1.9M plays",
                                "similar_games": [141, 175]
                            },
                            "224": {
                                "comingSoon": 0,
                                "game_id": 224,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "KART RUSH PARTY",
                                "description": "The new Party Racer is here! Collect coins, ram opponents and be the first to cross the finish line - that's the goal!",
                                "gameCategory": "Multiplayer | Krump Games",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-189px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_48513_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48513"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_39386_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "39386"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/kartrushparty.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_39425_782_440_15_EN.jpg",
                                "image_id_cover": "39425",
                                "url": ".\/games\/kartrushparty\/?&gameId=224&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 13993,
                                "gameStats": "400.000 plays",
                                "similar_games": [263, 291, 496]
                            },
                            "225": {
                                "comingSoon": 0,
                                "game_id": 225,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "MONSTER BOOM",
                                "description": "The new mega hit, now exclusively on COUCHPLAY. Monsters, bombs, power-ups and loads of action! Play now!",
                                "gameCategory": "Arcade | Wolod Games",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_48506_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48506"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_39352_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "39352"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/monsterboom.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48507_782_440_15_EN.jpg",
                                "image_id_cover": "48507",
                                "url": ".\/games\/monsterboom\/?&gameId=225&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 17956,
                                "gameStats": "1.9M plays",
                                "similar_games": [259, 412, 229]
                            },
                            "229": {
                                "comingSoon": 0,
                                "game_id": 229,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "GOLD RUSH",
                                "description": "Run quickly through the catacombs, but watch out for traps! Can you beat all the missions?",
                                "gameCategory": "Action Game | Wolod Games",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_48470_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48470"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_40410_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "40410"
                                },
                                "movie_file_location": "https:\/\/cdn10.itsmy.tv\/spielecenter\/videos\/GoldRushV2.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_40409_782_440_15_EN.jpg",
                                "image_id_cover": "40409",
                                "url": ".\/games\/goldrush\/?&gameId=229&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 53767,
                                "gameStats": "5.5M plays",
                                "similar_games": [206, 212],
                                "recently_played": 1
                            },
                            "230": {
                                "comingSoon": 0,
                                "game_id": 230,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "CHICKEN LOVE",
                                "description": "Guide your favourite chicken along the right flight path through all the levels!",
                                "gameCategory": "Game of Skill",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_39892_782_440_15_EN.jpg",
                                "image_id_cover": "39892",
                                "url": ".\/games\/gamelab\/?game_id=230&gameId=230&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2241,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "231": {
                                "comingSoon": 0,
                                "game_id": 231,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "POOL8BALL",
                                "description": "Become the Big Screen Billiard Champion! Play the 1v1 challenge mode to showcase your skills!",
                                "gameCategory": "Precession",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_46637_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46637"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_45541_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45541"
                                },
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_45538_782_440_15_EN.jpg",
                                "image_id_cover": "45538",
                                "url": ".\/games\/gamelab\/?game_id=231&gameId=231&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 9368,
                                "gameStats": "300.000 plays",
                                "similar_games": [263, 224]
                            },
                            "232": {
                                "comingSoon": 0,
                                "game_id": 232,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "SLIME",
                                "description": "Yeah Slime! Hop through all the tricky levels with little Slimie!",
                                "gameCategory": "Jumper |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_39897_782_440_15_EN.jpg",
                                "image_id_cover": "39897",
                                "url": ".\/games\/gamelab\/?game_id=232&gameId=232&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3364,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "233": {
                                "comingSoon": 0,
                                "game_id": 233,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "ENDLESS BRICK",
                                "description": "Collect as many stars as possible in this super fast reaction game!",
                                "gameCategory": "Puzzle |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_39898_782_440_15_EN.jpg",
                                "image_id_cover": "39898",
                                "url": ".\/games\/gamelab\/?game_id=233&gameId=233&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1171,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "234": {
                                "comingSoon": 0,
                                "game_id": 234,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "HERO RESCUE",
                                "description": "Help the adventurer collect all the treasure!",
                                "gameCategory": "Puzzle |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-189px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_46791_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46791"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_46789_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46789"
                                },
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_39896_782_440_15_EN.jpg",
                                "image_id_cover": "39896",
                                "url": ".\/games\/gamelab\/?game_id=234&gameId=234&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 5749,
                                "gameStats": "200.000 plays",
                                "similar_games": [347, 517]
                            },
                            "235": {
                                "comingSoon": 0,
                                "game_id": 235,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "PULL HIM OUT",
                                "description": "20 levels! 20 treasures! Your goal is to make the hero rich!",
                                "gameCategory": "Action Game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_46814_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46814"
                                },
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_46815_782_440_15_EN.jpg",
                                "image_id_cover": "46815",
                                "url": ".\/games\/gamelab\/?game_id=235&gameId=235&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 5739,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "236": {
                                "comingSoon": 0,
                                "game_id": 236,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "SUPER DRAG",
                                "description": "3, 2, 1\u2026give it some gas and unlock all the race cars!",
                                "gameCategory": "Racer Game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_39891_782_440_15_EN.jpg",
                                "image_id_cover": "39891",
                                "url": ".\/games\/gamelab\/?game_id=236&gameId=236&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 8247,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "237": {
                                "comingSoon": 0,
                                "game_id": 237,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "END OF OLYMPUS",
                                "description": "Yeah! Tower defense time! Protect your walls and defeat the dark forces!",
                                "gameCategory": "Tower Defence |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_39890_782_440_15_EN.jpg",
                                "image_id_cover": "39890",
                                "url": ".\/games\/gamelab\/?game_id=237&gameId=237&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1370,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "238": {
                                "comingSoon": 0,
                                "game_id": 238,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "JUMPER JAM",
                                "description": "How high can you go? Try to beat your highscore!",
                                "gameCategory": "Jumper |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_39889_782_440_15_EN.jpg",
                                "image_id_cover": "39889",
                                "url": ".\/games\/gamelab\/?game_id=238&gameId=238&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1592,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "239": {
                                "comingSoon": 0,
                                "game_id": 239,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "KART RUSH",
                                "description": "Let's go! Collect as many stars as possible, but don't make mistakes!",
                                "gameCategory": "Racer Game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_46821_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46821"
                                },
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_39888_782_440_15_EN.jpg",
                                "image_id_cover": "39888",
                                "url": ".\/games\/gamelab\/?game_id=239&gameId=239&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2640,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "240": {
                                "comingSoon": 0,
                                "game_id": 240,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "10 SERIES",
                                "description": "Combine 10 dots in a row. Have fun with this new classic!",
                                "gameCategory": "Puzzle Game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_39893_782_440_15_EN.jpg",
                                "image_id_cover": "39893",
                                "url": ".\/games\/gamelab\/?game_id=240&gameId=240&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 774,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "241": {
                                "comingSoon": 0,
                                "game_id": 241,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "RUNNING IN THE RAIN",
                                "description": "Easy? Nope, this jump and run will make you crazy!",
                                "gameCategory": "Jump and Run",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_46807_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46807"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_46805_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46805"
                                },
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_46808_782_440_15_EN.jpg",
                                "image_id_cover": "46808",
                                "url": ".\/games\/gamelab\/?game_id=241&gameId=241&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3073,
                                "gameStats": "80.000 plays",
                                "similar_games": [253, 258]
                            },
                            "242": {
                                "comingSoon": 0,
                                "game_id": 242,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "PIRATES",
                                "description": "Welcome to the world of pirates, cannons and battles for gold!",
                                "gameCategory": "Adventure |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_39886_782_440_15_EN.jpg",
                                "image_id_cover": "39886",
                                "url": ".\/games\/gamelab\/?game_id=242&gameId=242&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2933,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "243": {
                                "comingSoon": 0,
                                "game_id": 243,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "MATH DINO BATTLE",
                                "description": "You and your dino can beat the horrible dinosaurs by solving these math problems correctly!",
                                "gameCategory": "Educational Game",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_39885_782_440_15_EN.jpg",
                                "image_id_cover": "39885",
                                "url": ".\/games\/gamelab\/?game_id=243&gameId=243&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3547,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "244": {
                                "comingSoon": 0,
                                "game_id": 244,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "LABYRINTH",
                                "description": "Can you find the solution? You'll make a new friend with each and every puzzle!",
                                "gameCategory": "Puzzle |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_39884_782_440_15_EN.jpg",
                                "image_id_cover": "39884",
                                "url": ".\/games\/gamelab\/?game_id=244&gameId=244&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3010,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "245": {
                                "comingSoon": 0,
                                "game_id": 245,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SUNNY FARM",
                                "description": "Welcome to your very own island! Build houses, plant trees and grow your population! Let's go!",
                                "gameCategory": "Farm Game | Wolod Games",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_46370_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46370"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_40026_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "40026"
                                },
                                "movie_file_location": "https:\/\/cdn10.itsmy.tv\/spielecenter\/videos\/ruby2.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_40874_782_440_15_EN.jpg",
                                "image_id_cover": "40874",
                                "url": ".\/games\/sunnyfarmruby\/?&gameId=245&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 59552,
                                "gameStats": "20.7M plays",
                                "similar_games": [317, 299]
                            },
                            "249": {
                                "comingSoon": 0,
                                "game_id": 249,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "CHRISTMAS FURIOUS",
                                "description": "Fly with Santa and his reindeer. Collect all the presents! Can you make it to the Christmas tree?",
                                "gameCategory": "Action Game | Game Studio",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_49315_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49315"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_40421_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "40421"
                                },
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_40279_782_440_15_EN.jpg",
                                "image_id_cover": "40279",
                                "url": ".\/games\/gamelab\/?game_id=249&gameId=249&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2012,
                                "gameStats": "50.000 plays",
                                "similar_games": [104, 250]
                            },
                            "250": {
                                "comingSoon": 0,
                                "game_id": 250,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "FLAP CAT CHRISTMAS",
                                "description": "A really tricky Flappy Christmas Game! Ho ho ho!",
                                "gameCategory": "Action Game | Game Studio",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_40422_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "40422"
                                },
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_40282_782_440_15_EN.jpg",
                                "image_id_cover": "40282",
                                "url": ".\/games\/gamelab\/?game_id=250&gameId=250&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1420,
                                "gameStats": "30.000 plays",
                                "similar_games": [104, 249]
                            },
                            "253": {
                                "comingSoon": 0,
                                "game_id": 253,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "PRINCESS GOLDBLADE",
                                "description": "Travel with Princess Goldblade through a fantastic world and fight the massive final bosses!",
                                "gameCategory": "Jump Adventure | Game Studio",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_48750_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48750"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_40420_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "40420"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/princessGoldblade.mp4",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_40277_782_440_15_EN.jpg",
                                "image_id_cover": "40277",
                                "url": ".\/games\/gamelab\/?game_id=253&gameId=253&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 9006,
                                "gameStats": "300.000 plays",
                                "similar_games": [322, 545]
                            },
                            "255": {
                                "comingSoon": 0,
                                "game_id": 255,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SANTA GIRL RUNNER",
                                "description": "Jump, duck and collect! Go on a Christmas jump and run adventure with Santa Girl.",
                                "gameCategory": "Jump and Run | Game Studio",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_48873_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48873"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_40423_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "40423"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/SantaRunner.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_40275_782_440_15_EN.jpg",
                                "image_id_cover": "40275",
                                "url": ".\/games\/gamelab\/?game_id=255&gameId=255&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 5042,
                                "gameStats": "200.000 plays",
                                "similar_games": [258, 322]
                            },
                            "258": {
                                "comingSoon": 0,
                                "game_id": 258,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SNOWBALL CHRISTMAS",
                                "description": "Help the little snowcat and solve all 20 Christmas levels!",
                                "gameCategory": "Runner | Game Studio",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_48664_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48664"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_48662_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48662"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/SnowballChristmasWorld.mp4",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48665_782_440_15_EN.jpg",
                                "image_id_cover": "48665",
                                "url": ".\/games\/gamelab\/?game_id=258&gameId=258&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 7924,
                                "gameStats": "300.000 plays",
                                "similar_games": [212, 217]
                            },
                            "259": {
                                "comingSoon": 0,
                                "game_id": 259,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "PAINTBALL BRAWL ROYALE",
                                "description": "Get into the arena, collect boosters and survive until the end! Which brawler will you choose?",
                                "gameCategory": "Multiplayer | Wolod Games",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-189px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48628_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48628"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_48626_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48626"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/PaintballBrawlRoyale.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_48629_782_440_15_EN.jpg",
                                "image_id_cover": "48629",
                                "url": ".\/games\/paintball\/?&gameId=259&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 18220,
                                "gameStats": "700.000 plays",
                                "similar_games": [225, 291]
                            },
                            "261": {
                                "comingSoon": 0,
                                "game_id": 261,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "FRIENDSTOWN",
                                "description": "Become part of the Friendstown community and stop the greedy real estate tycoon McMoney from taking over the town!",
                                "gameCategory": "Match 3 Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_46327_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46327"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_41382_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "41382"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/Friendstown.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_41384_782_440_15_EN.jpg",
                                "image_id_cover": "41384",
                                "url": ".\/games\/friendstown\/?&gameId=261&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 22626,
                                "gameStats": "9.3M plays",
                                "similar_games": [153, 194, 210]
                            },
                            "263": {
                                "comingSoon": 0,
                                "game_id": 263,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "DRIFT CAR RACING",
                                "description": "The new drift racer is here! Win first place on all the tracks. Unlock new racers and city tracks!",
                                "gameCategory": "Racer |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_48492_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48492"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_48490_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48490"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/driftcarracing3.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48493_782_440_15_EN.jpg",
                                "image_id_cover": "48493",
                                "url": ".\/games\/driftcarracing\/?&gameId=263&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 37894,
                                "gameStats": "3.3M plays",
                                "similar_games": [186, 365],
                                "last_played": 1
                            },
                            "265": {
                                "comingSoon": 0,
                                "game_id": 265,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "TANK BOOM BAAM 2",
                                "description": "Are you a good enough sharp shooter to win the game? Compete with the AI or with friends! Choose weapons and aim carefully!",
                                "gameCategory": "Tanks |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48487_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48487"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_41821_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "41821"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/tankboombaam2.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_48489_782_440_15_EN.jpg",
                                "image_id_cover": "48489",
                                "url": ".\/games\/tankboombaam2\/?&gameId=265&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 19735,
                                "gameStats": "1.4M plays",
                                "similar_games": [213, 229, 412]
                            },
                            "266": {
                                "comingSoon": 0,
                                "game_id": 266,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "FOREST BROTHERS",
                                "description": "This fun game is intended for 1 - 2 players! Connect the gamepad and slip into the role of the two squirrel brothers! Just watch out for explosives!",
                                "gameCategory": "Adventure",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_41810_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "41810"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_42119_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "42119"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/forestbrothers.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_42118_782_440_15_EN.jpg",
                                "image_id_cover": "42118",
                                "url": ".\/games\/gamelab\/?game_id=266&gameId=266&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3635,
                                "gameStats": "100.000 plays",
                                "similar_games": [291, 309]
                            },
                            "270": {
                                "comingSoon": 0,
                                "game_id": 270,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "DEFENSE BATTLE",
                                "description": "Yeah, it's Defense Battle time! Defend your stronghold strategically and make enough gold to quickly build up your loyal fighters!",
                                "gameCategory": "Tower Defence |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-135px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_49171_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49171"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_41422_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "41422"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/DefenseBattle2.mp4",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_41421_782_440_15_EN.jpg",
                                "image_id_cover": "41421",
                                "url": ".\/games\/defensebattle\/?&gameId=270&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3138,
                                "gameStats": "60.000 plays",
                                "similar_games": [175, 317]
                            },
                            "276": {
                                "comingSoon": 0,
                                "game_id": 276,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "METAL PINBALL",
                                "description": "Play pinball like back in the good old days! Now on your smart TV!",
                                "gameCategory": "Arcade |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_46812_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46812"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_46810_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46810"
                                },
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_46813_782_440_15_EN.jpg",
                                "image_id_cover": "46813",
                                "url": ".\/games\/gamelab\/?game_id=276&gameId=276&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2452,
                                "gameStats": "50.000 plays",
                                "similar_games": [368, 7]
                            },
                            "278": {
                                "comingSoon": 0,
                                "game_id": 278,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "KIKO ADVENTURE",
                                "description": "Travel through beautifully designed levels to gather all the fruit and bottles. Keep an eye out for dangerous enemies!",
                                "gameCategory": "Jump and Run",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_46799_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46799"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_46802_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46802"
                                },
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_41480_782_440_15_EN.jpg",
                                "image_id_cover": "41480",
                                "url": ".\/games\/gamelab\/?game_id=278&gameId=278&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 4740,
                                "gameStats": "200.000 plays",
                                "similar_games": [258, 253]
                            },
                            "281": {
                                "comingSoon": 0,
                                "game_id": 281,
                                "smarthubpreview_required": 0,
                                "smarthubpreview_recommended": 0,
                                "early_access": 1,
                                "active": 2,
                                "name": "GOLF ADVENTURE",
                                "description": "Practice your swing on this 12 hole golf course. Can you get 3 stars for each hole?",
                                "gameCategory": "Sports |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -81px;\"><\/div>",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_41477_782_440_15_EN.jpg",
                                "image_id_cover": "41477",
                                "url": ".\/games\/gamelab\/?game_id=281&gameId=281&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 5813,
                                "gameStats": "",
                                "similar_games": ""
                            },
                            "291": {
                                "comingSoon": 0,
                                "game_id": 291,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "BOOST BATTLE SOCCER",
                                "description": "Experience party football bigger than ever before on your smart TV! For 1 - 6 players! Watch out: tackling is allowed!",
                                "gameCategory": "Sports | Game Studio",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_48458_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48458"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_48457_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48457"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/BoostBattleSoccer.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_48459_782_440_15_EN.jpg",
                                "image_id_cover": "48459",
                                "url": ".\/games\/boostbattlesoccer\/?&gameId=291&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 21288,
                                "gameStats": "1M plays",
                                "similar_games": [259]
                            },
                            "297": {
                                "comingSoon": 0,
                                "game_id": 297,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "GIN ROMM\u00e9",
                                "description": "With or without (a glass of) gin - this game is really fun! Please enjoy it responsibly!",
                                "gameCategory": "Card Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_46331_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46331"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_42151_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "42151"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/ginromme.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_42153_782_440_15_EN.jpg",
                                "image_id_cover": "42153",
                                "url": ".\/games\/ginrommy\/?&gameId=297&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 24913,
                                "gameStats": "2.9M plays",
                                "similar_games": [127, 177]
                            },
                            "299": {
                                "comingSoon": 0,
                                "game_id": 299,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "KNIGHT IN LOVE",
                                "description": "Hello knight! How can you get to the castle faster? What are the strongest weapons? How can you defeat the nasty dragon and save the princess? Get started with your adventure!",
                                "gameCategory": "Clicker | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-135px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_48641_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48641"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_42123_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "42123"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/knightinlove.mp4",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_42145_782_440_15_EN.jpg",
                                "image_id_cover": "42145",
                                "url": ".\/games\/knightinlove\/?&gameId=299&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 7360,
                                "gameStats": "200.000 plays",
                                "similar_games": [497, 86]
                            },
                            "302": {
                                "comingSoon": 0,
                                "game_id": 302,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "CRAZY EIGHTS",
                                "description": "Get rid of the cards in your hand as fast as possible and rapidly climb the high score list!",
                                "gameCategory": "Card Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_42251_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "42251"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_42250_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "42250"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/crazyeight.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_42318_782_440_15_EN.jpg",
                                "image_id_cover": "42318",
                                "url": ".\/games\/crazyeights\/?&gameId=302&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2214,
                                "gameStats": "500.000 plays",
                                "similar_games": [198, 177]
                            },
                            "309": {
                                "comingSoon": 0,
                                "game_id": 309,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "DARTS",
                                "description": "Timing and accuracy are the keys to win against your opponent. 301 or 501, you choose.",
                                "gameCategory": "Sports | Gofesh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_46992_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46992"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_42547_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "42547"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/darts.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_46991_782_440_15_EN.jpg",
                                "image_id_cover": "46991",
                                "url": ".\/games\/darts\/?&gameId=309&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 15314,
                                "gameStats": "900.000 plays",
                                "similar_games": [224, 263]
                            },
                            "314": {
                                "comingSoon": 0,
                                "game_id": 314,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "RUN AWAY",
                                "description": "What started out as a harmless tour of a dungeon suddenly evolved into a dangerous adventure. Can you manage to escape?",
                                "gameCategory": "Jump and Run | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48674_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48674"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_48672_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48672"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/RunAway_Teaser.mp4",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48675_782_440_15_EN.jpg",
                                "image_id_cover": "48675",
                                "url": ".\/games\/runaway\/?&gameId=314&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 12259,
                                "gameStats": "500.000 plays",
                                "similar_games": [322, 545]
                            },
                            "317": {
                                "comingSoon": 0,
                                "game_id": 317,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "LOVELY KINGDOM",
                                "description": "Protect your village from the shadow creatures by putting your strategic skills to the test! Good luck, brave hero!",
                                "gameCategory": "Tower Defense | Wolod",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-135px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48643_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48643"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_42467_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "42467"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/LovelyKingdom.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_42469_782_440_15_EN.jpg",
                                "image_id_cover": "42469",
                                "url": ".\/games\/lovelykingdom\/?&gameId=317&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 12099,
                                "gameStats": "400.000 plays",
                                "similar_games": [245, 497]
                            },
                            "321": {
                                "comingSoon": 0,
                                "game_id": 321,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "MINIMAL PADDLE",
                                "description": "Easy to understand but challenging to master! Let's see how long can you save the ball from falling?",
                                "gameCategory": "Game of Skill |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_49172_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49172"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_42659_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "42659"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/minimalpaddle.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_49173_782_440_15_EN.jpg",
                                "image_id_cover": "49173",
                                "url": ".\/games\/gamelab\/?game_id=321&gameId=321&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3278,
                                "gameStats": "1.2M plays",
                                "similar_games": [225, 7]
                            },
                            "322": {
                                "comingSoon": 0,
                                "game_id": 322,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "INDIARA",
                                "description": "In an ancient temple, adventurer Indiara sets off a deadly trap. Become a savior and rescue her from this mortal peril!",
                                "gameCategory": "Jump and Run |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_48913_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48913"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_42658_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "42658"
                                },
                                "movie_file_location": "https:\/\/cdn10.itsmy.tv\/spielecenter\/videos\/indiara.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_42605_782_440_15_EN.jpg",
                                "image_id_cover": "42605",
                                "url": ".\/games\/gamelab\/?game_id=322&gameId=322&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 5290,
                                "gameStats": "100.000 plays",
                                "similar_games": [258, 545]
                            },
                            "327": {
                                "comingSoon": 0,
                                "game_id": 327,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "PORT DEFENDER",
                                "description": "Defend your pirate harbor from the ships of invaders! Showcase your skills to overcome the challenge!",
                                "gameCategory": "Shooter |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_49357_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49357"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_49359_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "49359"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/portdefender.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_42613_782_440_15_EN.jpg",
                                "image_id_cover": "42613",
                                "url": ".\/games\/gamelab\/?game_id=327&gameId=327&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2631,
                                "gameStats": "60.000 plays",
                                "similar_games": [259, 265]
                            },
                            "328": {
                                "comingSoon": 0,
                                "game_id": 328,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SOCCER HEADER",
                                "description": "Off to the header practice, young footballer!",
                                "gameCategory": "Reaction Game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_49010_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49010"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_42652_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "42652"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/soccerheader.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_42614_782_440_15_EN.jpg",
                                "image_id_cover": "42614",
                                "url": ".\/games\/gamelab\/?game_id=328&gameId=328&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 4169,
                                "gameStats": "100.000 plays",
                                "similar_games": [224, 496]
                            },
                            "330": {
                                "comingSoon": 1,
                                "game_id": 330,
                                "smarthubpreview_required": 0,
                                "active": 2,
                                "early_access": 0,
                                "name": "PLANT EVOLUTION",
                                "description": "Plant your own vegetable patch here! The space is limited, so use your best farming strategy! Good Luck!",
                                "gameCategory": "Coming soon",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_42636_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "42636"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_42650_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "42650"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/plantevolution.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_42612_782_440_15_EN.jpg",
                                "image_id_cover": "42612",
                                "url": "",
                                "likes": 43,
                                "gameStats": "",
                                "similar_games": [263, 368]
                            },
                            "332": {
                                "comingSoon": 1,
                                "game_id": 332,
                                "smarthubpreview_required": 0,
                                "active": 2,
                                "early_access": 0,
                                "name": "JUMPING NINJA RABBIT",
                                "description": "Take on the role of Ninja Rabbit and collect as many apples as possible. Watch out for the falling boxes!",
                                "gameCategory": "Coming soon",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_42634_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "42634"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_42648_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "42648"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/jumpingninjarabbit.mp4",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_42606_782_440_15_EN.jpg",
                                "image_id_cover": "42606",
                                "url": "",
                                "likes": 131,
                                "gameStats": "",
                                "similar_games": [278, 253]
                            },
                            "347": {
                                "comingSoon": 0,
                                "game_id": 347,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "PIGGYBANK ADVENTURE",
                                "description": "Cut the coins free to land them in the Piggy-Bank! Stars will give you bonus points, so try to beat every level and achieve the best score possible!",
                                "gameCategory": "Puzzle Game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-189px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49020_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49020"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_49022_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "49022"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/PiggyBankAdventure.mp4",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49023_782_440_15_EN.jpg",
                                "image_id_cover": "49023",
                                "url": ".\/games\/gamelab\/?game_id=347&gameId=347&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3481,
                                "gameStats": "100.000 plays",
                                "similar_games": [234, 457]
                            },
                            "349": {
                                "comingSoon": 1,
                                "game_id": 349,
                                "smarthubpreview_required": 0,
                                "active": 2,
                                "early_access": 0,
                                "name": "DINO BOARDGAME",
                                "description": "A quick and fun board game for 2 players! Ladders take you higher, but snakes make you slip back.",
                                "gameCategory": "Coming soon",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_44155_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "44155"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_44154_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "44154"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/DinosaurBoardgame.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_44153_782_440_15_EN.jpg",
                                "image_id_cover": "44153",
                                "url": "",
                                "likes": 130,
                                "gameStats": "",
                                "similar_games": [229, 263]
                            },
                            "363": {
                                "comingSoon": 0,
                                "game_id": 363,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "WORLD WANDERER",
                                "description": "As one of the world wanderers, it is your quest to face all dangers and protect the weak. Are you up to this challenge?",
                                "gameCategory": "Match 3 Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_48450_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48450"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_44663_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "44663"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/worldwanderer.mp4",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_48708_782_440_15_EN.jpg",
                                "image_id_cover": "48708",
                                "url": ".\/games\/worldwanderer\/?&gameId=363&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 8638,
                                "gameStats": "10.3M plays",
                                "similar_games": [196, 261, 194]
                            },
                            "365": {
                                "comingSoon": 0,
                                "game_id": 365,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "BEACH KART ARENA",
                                "description": "Grab your beach buggy and be the first to collect 10 golden coins. Watch out, the enemies are trying to collect them too and are not playing fair.",
                                "gameCategory": "Car Racer |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_48692_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48692"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_44474_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "44474"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/BeachKartArena.mp4",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_48693_782_440_15_EN.jpg",
                                "image_id_cover": "48693",
                                "url": ".\/games\/gamelab\/?game_id=365&gameId=365&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 4065,
                                "gameStats": "100.000 plays",
                                "similar_games": [224, 104]
                            },
                            "367": {
                                "comingSoon": 0,
                                "game_id": 367,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "BUBBLE FOX",
                                "description": "Ferdi Fox has caught the travel bug! Explore the big wide world with him and embark on many exciting adventures!",
                                "gameCategory": "Bubble Shooter | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48462_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48462"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_46407_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46407"
                                },
                                "movie_file_location": "https:\/\/cdn10.itsmy.tv\/spielecenter\/videos\/bubblefox.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_46396_782_440_15_EN.jpg",
                                "image_id_cover": "46396",
                                "url": ".\/games\/bubblefox\/?&gameId=367&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 7491,
                                "gameStats": "3.2M plays",
                                "similar_games": [175, 104, 497],
                                "gameColor": "#0E545E"
                            },
                            "368": {
                                "comingSoon": 0,
                                "game_id": 368,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "DICE",
                                "description": "This game is not just about rolling the dice. DICE is a game of strategy and luck where players roll dice to achieve the highest score possible.",
                                "gameCategory": "Strategy | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-189px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_46378_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46378"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_45994_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45994"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/dice.mp4",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_45225_782_440_15_EN.jpg",
                                "image_id_cover": "45225",
                                "url": ".\/games\/wuerfeln\/?&gameId=368&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 26956,
                                "gameStats": "7.8M plays",
                                "similar_games": [302, 497, 186]
                            },
                            "392": {
                                "comingSoon": 1,
                                "game_id": 392,
                                "smarthubpreview_required": 0,
                                "active": 2,
                                "early_access": 0,
                                "name": "SLING TOMB",
                                "description": "In this tower, both a quick hand and a good eye are needed to avoid the rising water and traps.",
                                "gameCategory": "Coming soon",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_44918_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "44918"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_44919_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "44919"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/SlingTomb.mp4",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_44916_782_440_15_EN.jpg",
                                "image_id_cover": "44916",
                                "url": "",
                                "likes": 25,
                                "gameStats": "",
                                "similar_games": [229, 263]
                            },
                            "412": {
                                "comingSoon": 0,
                                "game_id": 412,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "STREET COMBAT",
                                "description": "Combos, combos, mega combo! Del Player's retro game now for your remote controller! ROUND 1 - FIGHT!",
                                "gameCategory": "Arcade | Del Player",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48647_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48647"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_48645_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48645"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/StreetCombo.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48648_782_440_15_EN.jpg",
                                "image_id_cover": "48648",
                                "url": ".\/games\/streetcombat\/?&gameId=412&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 19663,
                                "gameStats": "1.6M plays",
                                "similar_games": [259, 259, 225]
                            },
                            "430": {
                                "comingSoon": 1,
                                "game_id": 430,
                                "smarthubpreview_required": 0,
                                "active": 2,
                                "early_access": 0,
                                "name": "SURF RIDERS",
                                "description": "An addicting arcade game. Ride the waves and Hang Loose!",
                                "gameCategory": "Coming soon",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_45396_146_195_15_EN.png",
                                    "width": 146,
                                    "height": 195,
                                    "alt": "",
                                    "id": "45396"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_45398_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45398"
                                },
                                "movie_file_location": "https:\/\/cdn10.itsmy.tv\/spielecenter\/videos\/surfriders.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_45397_782_440_15_EN.jpg",
                                "image_id_cover": "45397",
                                "url": "",
                                "likes": 25,
                                "gameStats": "",
                                "similar_games": [245, 263]
                            },
                            "436": {
                                "comingSoon": 0,
                                "game_id": 436,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "newGame": 1,
                                "name": "LOLO ADVENTURE",
                                "description": "An funny 2D puzzle platformer game where Lolo needs your help to get his cake.",
                                "gameCategory": "Platformer",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_49502_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49502"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_45424_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45424"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/loloAdventure.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_45423_782_440_15_EN.jpg",
                                "image_id_cover": "45423",
                                "url": ".\/games\/gamelab\/?game_id=436&gameId=436&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2611,
                                "gameStats": "60.000 plays",
                                "similar_games": [263, 229],
                                "recently_played": 1
                            },
                            "444": {
                                "comingSoon": 0,
                                "game_id": 444,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "CRAZY PICKNICK",
                                "description": "Do you already know Pia Purple, Fire Fred, Lemon Lisa or Elk Elvis? No? Then get to know them! At the craziest picnic ever!",
                                "gameCategory": "Arcade |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_48465_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48465"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_48463_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48463"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/CrazyPicknick.mp4",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_48466_782_440_15_EN.jpg",
                                "image_id_cover": "48466",
                                "url": ".\/games\/gamelab\/?game_id=444&gameId=444&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 4213,
                                "gameStats": "100.000 plays",
                                "similar_games": [368, 258]
                            },
                            "455": {
                                "comingSoon": 0,
                                "game_id": 455,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "ANTITECT",
                                "description": "A challenging puzzle game for everybody who loves brain games.",
                                "gameCategory": "Puzzle | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49369_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49369"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_45768_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45768"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/Antitect.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_45772_782_440_15_EN.jpg",
                                "image_id_cover": "45772",
                                "url": ".\/games\/antitect\/?&gameId=455&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1682,
                                "gameStats": "70.000 plays",
                                "similar_games": [517, 368],
                                "gameColor": "182127"
                            },
                            "457": {
                                "comingSoon": 0,
                                "game_id": 457,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SUDOKU",
                                "description": "The classic of the logic puzzle games!",
                                "gameCategory": "Puzzle | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_46368_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46368"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_45774_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45774"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/sudoku2.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_45776_782_440_15_EN.jpg",
                                "image_id_cover": "45776",
                                "url": ".\/games\/sudokuhd\/?&gameId=457&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 6008,
                                "gameStats": "1.3M plays",
                                "similar_games": [18, 258, 196],
                                "gameColor": "DFCDDF"
                            },
                            "463": {
                                "comingSoon": 1,
                                "game_id": 463,
                                "smarthubpreview_required": 0,
                                "active": 2,
                                "early_access": 0,
                                "name": "SLIDING PANDA",
                                "description": "Guide the charismatic panda through the dangerous winter wonderland and get some coins!",
                                "gameCategory": "Coming soon",
                                "comingSoonText": "Release in: 15 days",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_49588_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49588"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_45892_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45892"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/slidingPanda.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_45891_782_440_15_EN.jpg",
                                "image_id_cover": "45891",
                                "url": "",
                                "likes": 32,
                                "gameStats": "",
                                "similar_games": [255, 576, 547],
                                "gameColor": "#FEFEFE"
                            },
                            "464": {
                                "comingSoon": 1,
                                "game_id": 464,
                                "smarthubpreview_required": 0,
                                "active": 2,
                                "early_access": 0,
                                "name": "PREHISTORIC WARFARE",
                                "description": "A tower defense game set in prehistoric times. Defend yourself against attacking dinosaurs!",
                                "gameCategory": "Coming soon",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_49586_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49586"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_45905_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45905"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/prehistoricWarfare.mp4",
                                "preview_file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_45907_782_440_15_EN.jpg",
                                "image_id_cover": "45907",
                                "url": "",
                                "likes": 25,
                                "gameStats": "",
                                "similar_games": [245, 368],
                                "gameColor": "#C6A47A"
                            },
                            "465": {
                                "comingSoon": 0,
                                "game_id": 465,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "NEST",
                                "description": "Help the birds get into their nest!",
                                "gameCategory": "Skill Game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_48910_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48910"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_45901_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45901"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/nest.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_45900_782_440_15_EN.jpg",
                                "image_id_cover": "45900",
                                "url": ".\/games\/gamelab\/?game_id=465&gameId=465&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 4761,
                                "gameStats": "200.000 plays",
                                "similar_games": [258, 368],
                                "gameColor": "#E7FDFF"
                            },
                            "466": {
                                "comingSoon": 0,
                                "game_id": 466,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "COLOR SHOOTER",
                                "description": "Make a quick decision: Blue or red? One wrong button and you're dead!",
                                "gameCategory": "Arcade |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_47334_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "47334"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_45954_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45954"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/colorshooter.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_45953_782_440_15_EN.jpg",
                                "image_id_cover": "45953",
                                "url": ".\/games\/gamelab\/?game_id=466&gameId=466&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 4627,
                                "gameStats": "800.000 plays",
                                "similar_games": [225, 265],
                                "gameColor": "170025"
                            },
                            "467": {
                                "comingSoon": 0,
                                "game_id": 467,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "HEXA",
                                "description": "This game will really get your brain going. Promise!",
                                "gameCategory": "Puzzle |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_49187_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49187"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_45950_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45950"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/hexa.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_45951_782_440_15_EN.jpg",
                                "image_id_cover": "45951",
                                "url": ".\/games\/gamelab\/?game_id=467&gameId=467&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1150,
                                "gameStats": "70.000 plays",
                                "similar_games": [90, 234, 347],
                                "gameColor": "8F8F9D"
                            },
                            "469": {
                                "comingSoon": 0,
                                "game_id": 469,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "ROLL THE BALL",
                                "description": "This cheerful puzzle game is just the right mix of time challenge and puzzle fun!",
                                "gameCategory": "Puzzle game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_49227_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49227"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_45898_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45898"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/rolltheball.mp4",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_45897_782_440_15_EN.jpg",
                                "image_id_cover": "45897",
                                "url": ".\/games\/gamelab\/?game_id=469&gameId=469&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2070,
                                "gameStats": "60.000 plays",
                                "similar_games": [221, 234, 368],
                                "gameColor": "804C91"
                            },
                            "472": {
                                "comingSoon": 0,
                                "game_id": 472,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "HALLOWEEN BUBBLE SHOOTER",
                                "description": "Halloween Bubble Shooter is a funny, simple match game.",
                                "gameCategory": "Bubble Shooter |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-0px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_46973_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46973"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_45991_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "45991"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/halloweenBubbleShooter.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_45990_782_440_15_EN.jpg",
                                "image_id_cover": "45990",
                                "url": ".\/games\/gamelab\/?game_id=472&gameId=472&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1076,
                                "gameStats": "80.000 plays",
                                "similar_games": [229, 225],
                                "gameColor": "#0C2E3E"
                            },
                            "475": {
                                "comingSoon": 0,
                                "game_id": 475,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "VIKING BRAWL",
                                "description": "An addicting arcade game. Play against AI or your friend in 2 Player mode. Let the battle begin!",
                                "gameCategory": "Action Arcade |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_49232_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49232"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_46012_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46012"
                                },
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_46014_782_440_15_EN.jpg",
                                "image_id_cover": "46014",
                                "url": ".\/games\/gamelab\/?game_id=475&gameId=475&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3628,
                                "gameStats": "100.000 plays",
                                "similar_games": [412, 225],
                                "gameColor": "#73B7B8"
                            },
                            "476": {
                                "comingSoon": 0,
                                "game_id": 476,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "BOXKID",
                                "description": "A simple but challenging puzzle game. Push all boxes on a target point to complete a level. Play now!",
                                "gameCategory": "Puzzle |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48082_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48082"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48084_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48084"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/Boxkid.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48081_782_440_15_EN.jpg",
                                "image_id_cover": "48081",
                                "url": ".\/games\/gamelab\/?game_id=476&gameId=476&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2369,
                                "gameStats": "70.000 plays",
                                "similar_games": [124, 234, 347],
                                "gameColor": "#8EA128"
                            },
                            "481": {
                                "comingSoon": 0,
                                "game_id": 481,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SAMURAI PANDA",
                                "description": "Samurai Panda is a fun game. Jump as far as you can and don\u2019t get killed by shuriken.",
                                "gameCategory": "Skill game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_46736_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46736"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_46054_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46054"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/samuraipandatrailer.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_46053_782_440_15_EN.jpg",
                                "image_id_cover": "46053",
                                "url": ".\/games\/gamelab\/?game_id=481&gameId=481&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1878,
                                "gameStats": "300.000 plays",
                                "similar_games": [222, 332],
                                "gameColor": "#023B1D"
                            },
                            "487": {
                                "comingSoon": 0,
                                "game_id": 487,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "WOTHAN ESCAPE",
                                "description": "Help the mighty Wothan to escape this dungeon!",
                                "gameCategory": "Skill Game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_46463_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46463"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_46077_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46077"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/wothantrailer.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_46076_782_440_15_EN.jpg",
                                "image_id_cover": "46076",
                                "url": ".\/games\/gamelab\/?game_id=487&gameId=487&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3181,
                                "gameStats": "900.000 plays",
                                "similar_games": [412, 225],
                                "gameColor": "#473421"
                            },
                            "490": {
                                "comingSoon": 0,
                                "game_id": 490,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "GIFT UNLOCK",
                                "description": "Help Santa and free the gifts in this classic puzzle game!",
                                "gameCategory": "Puzzle |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_47566_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "47566"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_47568_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "47568"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/giftUnlock.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_47565_782_440_15_EN.jpg",
                                "image_id_cover": "47565",
                                "url": ".\/games\/gamelab\/?game_id=490&gameId=490&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2453,
                                "gameStats": "60.000 plays",
                                "similar_games": [469, 457, 347],
                                "gameColor": "#C2CFEB"
                            },
                            "495": {
                                "comingSoon": 0,
                                "game_id": 495,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "KNIGHT SHOT",
                                "description": "A brand-new fantasy action adventure! Can you aim precisely and control the power of your knight?",
                                "gameCategory": "Action |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_46345_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46345"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_46343_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46343"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/knightShot.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_46341_782_440_15_EN.jpg",
                                "image_id_cover": "46341",
                                "url": ".\/games\/gamelab\/?game_id=495&gameId=495&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1799,
                                "gameStats": "200.000 plays",
                                "similar_games": [412, 225],
                                "gameColor": "#8B4A36"
                            },
                            "496": {
                                "comingSoon": 0,
                                "game_id": 496,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "COIN RACE",
                                "description": "Master tracks, collect coins, unlock new racers. And: Don't forget to refuel!",
                                "gameCategory": "Racing |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_46385_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46385"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_46384_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46384"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/coinRace.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_46386_782_440_15_EN.jpg",
                                "image_id_cover": "46386",
                                "url": ".\/games\/gamelab\/?game_id=496&gameId=496&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 13692,
                                "gameStats": "3M plays",
                                "similar_games": [229, 263, 291],
                                "gameColor": "#434D50"
                            },
                            "497": {
                                "comingSoon": 0,
                                "game_id": 497,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "LANDSCAPERS ISLAND",
                                "description": "Build your own island, fulfill tasks, collect points and protect yourself from natural disasters.",
                                "gameCategory": "Building Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_47340_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "47340"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_47338_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "47338"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/cardvillagemovie.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_47336_782_440_15_EN.jpg",
                                "image_id_cover": "47336",
                                "url": ".\/games\/cardvillage\/?&gameId=497&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 8539,
                                "gameStats": "300.000 plays",
                                "similar_games": [299, 86]
                            },
                            "517": {
                                "comingSoon": 0,
                                "game_id": 517,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "1930",
                                "description": "A platformer where you are controlling all characters at once. First you need to destroy all zombies with big white eyes, then you bring the rest to the exit.",
                                "gameCategory": "Platformer |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-189px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_46912_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "46912"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_46915_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "46915"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/1930trailer.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_46913_782_440_15_EN.jpg",
                                "image_id_cover": "46913",
                                "url": ".\/games\/gamelab\/?game_id=517&gameId=517&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 5198,
                                "gameStats": "100.000 plays",
                                "similar_games": [253, 314]
                            },
                            "521": {
                                "comingSoon": 0,
                                "game_id": 521,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "8 BALL POOL",
                                "description": "Prove your skills in this classic pool game and beat your own time or battle a friend in the local multiplayer.",
                                "gameCategory": "Classic Game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_47017_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "47017"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_47015_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "47015"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/pooltrailer.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_47014_782_440_15_EN.jpg",
                                "image_id_cover": "47014",
                                "url": ".\/games\/gamelab\/?game_id=521&gameId=521&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 4164,
                                "gameStats": "100.000 plays",
                                "similar_games": [276, 302]
                            },
                            "522": {
                                "comingSoon": 0,
                                "game_id": 522,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "ROCKY THE DOG PILOT",
                                "description": "Take control over a daring dog pilot. Fly through obstacles and collect all balloons.",
                                "gameCategory": "Skill game |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_47090_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "47090"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_47088_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "47088"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/dogpilottrailer.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_47091_782_440_15_EN.jpg",
                                "image_id_cover": "47091",
                                "url": ".\/games\/gamelab\/?game_id=522&gameId=522&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1841,
                                "gameStats": "40.000 plays",
                                "similar_games": [229, 225]
                            },
                            "524": {
                                "comingSoon": 0,
                                "game_id": 524,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SEAS AND SHADOWS",
                                "description": "Your adventure awaits on a mysterious island full of treasures. Will you be able to become the best pirate?",
                                "gameCategory": "Adventure | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_47171_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "47171"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_47174_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "47174"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/seasandshadows_en.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_47172_782_440_15_EN.jpg",
                                "image_id_cover": "47172",
                                "url": ".\/games\/seasandshadows\/?&gameId=524&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3372,
                                "gameStats": "500.000 plays",
                                "similar_games": [156, 196],
                                "gameColor": "#02162B"
                            },
                            "530": {
                                "comingSoon": 0,
                                "game_id": 530,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "EMOJI EXPLORER",
                                "description": "Mines are a thing of the past! Instead, try to avoid the emojis on the game board to win the game. Let's go!",
                                "gameCategory": "Minesweeper | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-189px -54px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_49467_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49467"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_47557_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "47557"
                                },
                                "movie_file_location": "https:\/\/cdn12.itsmy.tv\/spielecenter\/videos\/emojiexplorer_en.mp4",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49468_782_440_15_EN.jpg",
                                "image_id_cover": "49468",
                                "url": ".\/games\/minesweeper\/?&gameId=530&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2317,
                                "gameStats": "400.000 plays",
                                "similar_games": [186, 497],
                                "gameColor": "#CEE6BF",
                                "new_game": 1
                            },
                            "536": {
                                "comingSoon": 0,
                                "game_id": 536,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "FREE THE HEARTS 2",
                                "description": "Love is in the air! Free the hearts on the Island of Love and win the big tournament. Start now!",
                                "gameCategory": "Match 3 | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-135px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_47823_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "47823"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_47821_146_15_EN.png",
                                    "width": 146,
                                    "height": 106,
                                    "alt": "",
                                    "id": "47821"
                                },
                                "movie_file_location": "https:\/\/cdn10.itsmy.tv\/spielecenter\/videos\/freethehearts.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_47824_782_440_15_EN.jpg",
                                "image_id_cover": "47824",
                                "url": ".\/games\/freethehearts2\/?&gameId=536&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 10453,
                                "gameStats": "4.1M plays",
                                "similar_games": [91, 368, 196],
                                "gameColor": "#4A98BB"
                            },
                            "542": {
                                "comingSoon": 0,
                                "game_id": 542,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "CYBERMATCH",
                                "description": "Explore the fascinating city of Nexus City, solve exciting match-3 puzzles, and face the challenges lurking in the streets of this mysterious metropolis!",
                                "gameCategory": "Match 3 | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-135px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48839_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48839"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48838_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48838"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/cybermatch.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48842_782_440_15_EN.jpg",
                                "image_id_cover": "48842",
                                "url": ".\/games\/cybermatch\/?&gameId=542&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 8047,
                                "gameStats": "1.1M plays",
                                "similar_games": [317, 245]
                            },
                            "545": {
                                "comingSoon": 0,
                                "game_id": 545,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "NINJA FROG",
                                "description": "A funny platformer game for every age group. Proof your skills now!",
                                "gameCategory": "Jump and Run |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48728_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48728"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_48726_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48726"
                                },
                                "movie_file_location": "https:\/\/cdn11.itsmy.tv\/spielecenter\/videos\/ninjafrogtrailer.mp4",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48729_782_440_15_EN.jpg",
                                "image_id_cover": "48729",
                                "url": ".\/games\/gamelab\/?game_id=545&gameId=545&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 6304,
                                "gameStats": "1.9M plays",
                                "similar_games": [314, 258]
                            },
                            "546": {
                                "comingSoon": 0,
                                "game_id": 546,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SKY KNIGHT",
                                "description": "A classic arcade game where you have to beat hordes of enemies in an epic sky battle.",
                                "gameCategory": "Action Arcade |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-27px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48702_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48702"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48700_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48700"
                                },
                                "movie_file_location": "https:\/\/cdn10.itsmy.tv\/spielecenter\/videos\/skyknight.mp4",
                                "preview_file_location": "https:\/\/cdn10.itsmy.tv\/images\/temp\/shrink_48703_782_440_15_EN.jpg",
                                "image_id_cover": "48703",
                                "url": ".\/games\/gamelab\/?game_id=546&gameId=546&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2468,
                                "gameStats": "100.000 plays",
                                "similar_games": [207, 229, 436],
                                "gameColor": "#312520",
                                "last_played": 1
                            },
                            "547": {
                                "comingSoon": 1,
                                "game_id": 547,
                                "smarthubpreview_required": 0,
                                "active": 2,
                                "early_access": 0,
                                "name": "VIKING ESCAPE",
                                "description": "In this action game you shoot your way through enemies with all kinds of different weapons.",
                                "gameCategory": "Coming soon",
                                "comingSoonText": "Release in: 27 days",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48723_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48723"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48721_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48721"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/vikingescape.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_48724_782_440_15_EN.jpg",
                                "image_id_cover": "48724",
                                "url": "",
                                "likes": 18,
                                "gameStats": "",
                                "similar_games": [576, 565]
                            },
                            "553": {
                                "comingSoon": 0,
                                "game_id": 553,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "DUNGEON QUEST",
                                "description": "Step into the dungeon and master every level with all three stars!",
                                "gameCategory": "Platformer |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-162px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48857_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48857"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_48855_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48855"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/dungeonquest.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_48853_782_440_15_EN.jpg",
                                "image_id_cover": "48853",
                                "url": ".\/games\/gamelab\/?game_id=553&gameId=553&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 3081,
                                "gameStats": "80.000 plays",
                                "similar_games": [258, 322]
                            },
                            "557": {
                                "comingSoon": 0,
                                "game_id": 557,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "COLOR SUDOKU",
                                "description": "Experience Sudoku puzzles in a whole new way - with colors instead of numbers! Get ready for colorful fun and challenging puzzles.",
                                "gameCategory": "Puzzle | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-108px -0px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_48937_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48937"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_48935_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48935"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/colorsudoku.mp4",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_48938_782_440_15_EN.jpg",
                                "image_id_cover": "48938",
                                "url": ".\/games\/sudokucolors\/?&gameId=557&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2932,
                                "gameStats": "100.000 plays",
                                "similar_games": [457, 347, 457]
                            },
                            "562": {
                                "comingSoon": 0,
                                "game_id": 562,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "name": "SOCCER PARTY",
                                "description": "Shoot amazing goals, get yourself a booster and beat all of your opponents! Let's go!",
                                "gameCategory": "Sport |",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-54px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_49195_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49195"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_49193_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "49193"
                                },
                                "movie_file_location": "https:\/\/cdn13.itsmy.tv\/spielecenter\/videos\/soccerparty.mp4",
                                "preview_file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49196_782_440_15_EN.jpg",
                                "image_id_cover": "49196",
                                "url": ".\/games\/gamelab\/?game_id=562&gameId=562&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 2675,
                                "gameStats": "70.000 plays",
                                "similar_games": ["291", 225, 259]
                            },
                            "563": {
                                "comingSoon": 0,
                                "game_id": 563,
                                "smarthubpreview_required": 0,
                                "active": 1,
                                "early_access": 0,
                                "newGame": 1,
                                "name": "FRUITY SHOWDOWN",
                                "description": "Here, you compete in thrilling tournaments against other players! Experience the excitement, win medals, and climb to the top of the leaderboard!",
                                "gameCategory": "Match-3 Game | Gofresh Studios",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-135px -27px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_49890_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49890"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_49888_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "49888"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/fruityshowdown.mp4",
                                "preview_file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_49891_782_440_15_EN.jpg",
                                "image_id_cover": "49891",
                                "url": ".\/games\/matchtournament\/?&gameId=563&lang=EN&pid=foxxum&prod=itsmytv&click=v7",
                                "likes": 1141,
                                "gameStats": "200.000 plays",
                                "similar_games": [536, 542],
                                "new_game": 1
                            },
                            "565": {
                                "comingSoon": 1,
                                "game_id": 565,
                                "smarthubpreview_required": 0,
                                "active": 2,
                                "early_access": 0,
                                "name": "TENTHOUSAND",
                                "description": "Ein einfaches, aber spannendes W\u00fcrfelspiel. Bietet stundenlangen Spielspa\u00df. Viel Vergn\u00fcgen bei der Rallye!",
                                "gameCategory": "Coming soon",
                                "comingSoonText": "Release in: 29 days",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn12.itsmy.tv\/images\/temp\/shrink_49443_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "49443"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_49441_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "49441"
                                },
                                "movie_file_location": "https:\/\/cdn14.itsmy.tv\/spielecenter\/videos\/w\u00fcrfelduell.mp4",
                                "preview_file_location": "https:\/\/cdn13.itsmy.tv\/images\/temp\/shrink_49444_782_440_15_EN.jpg",
                                "image_id_cover": "49444",
                                "url": "",
                                "likes": 21,
                                "gameStats": "",
                                "similar_games": [547, 463]
                            },
                            "576": {
                                "comingSoon": 1,
                                "game_id": 576,
                                "smarthubpreview_required": 0,
                                "active": 2,
                                "early_access": 0,
                                "name": "MEDIEVAL ISLAND DEMO",
                                "description": "Defend your island against mean goblins and build towers and houses. Improve your town and gather resoources.",
                                "gameCategory": "Coming soon",
                                "comingSoonText": "Release in: 18 days",
                                "gameCategoryIcon": "<div class=\"categorySymbols\" style=\"background-position:-81px -81px;\"><\/div>",
                                "image34": {
                                    "file_location": "https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_48713_292_15_EN.png",
                                    "width": 146,
                                    "height": 194.5,
                                    "alt": "",
                                    "id": "48713"
                                },
                                "image": {
                                    "file_location": "https:\/\/cdn14.itsmy.tv\/images\/temp\/shrink_48711_146_15_EN.png",
                                    "width": 146,
                                    "height": 104,
                                    "alt": "",
                                    "id": "48711"
                                },
                                "movie_file_location": "https:\/\/cdn15.itsmy.tv\/spielecenter\/videos\/medievalislanddemo.mp4",
                                "preview_file_location": "https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48714_782_440_15_EN.jpg",
                                "image_id_cover": "48714",
                                "url": "",
                                "likes": 4,
                                "gameStats": "",
                                "similar_games": [547, 565]
                            }
                        }, ["nav_hot", "nav_all", "nav_subCategory", "nav_recent", "nav_top", "nav_new", "nav_coming", "nav_exclusive", "nav_early", "nav_recommended", "nav_card", "nav_match3", "nav_classic", "nav_board", "nav_builder", "nav_knowledge", "nav_platformer", "nav_action", "nav_sports", "nav_worlds", "nav_family", "nav_subCategoryEnd"], {
                            "nav_welcome": [524, 367, 198, 245, 444, 196, 185, 496, 368, 177, 229, 153, 194, 210, 104, 309, 457, 263, 291],
                            "nav_top": [563, 530, 542, 536, 368, 177, 245, 367, 210, 363, 153, 524, 175, 7, 198, 297, 497, 309, 457, 261, 72, 196, 185, 194, 265, 104, 263, 214, 221, 259, 200, 172, 213, 212, 186, 133, 9, 141, 38, 139, 127, 90, 138, 77, 86, 97],
                            "nav_all": [563, 530, 367, 363, 245, 175, 153, 546, 263, -5, 229, 263, 210, 368, 177, 297, 261, 291, 265, 412, 259, 225, 309, 224, 496, 314, 317, 536, 196, 231, 198, 253, 497, 542, 7, 258, 104, 299, 165, 545, 457, 234, 322, 517, 186, 255, 222, 97, 465, 214, 278, 466, 86, 444, 328, 521, 365, 207, 266, 475, 347, 524, 321, 487, 270, 553, 241, 557, 194, 212, 127, 562, 327, 436, 546, 490, 276, 476, 217, 72, 213, 90, 302, 469, 221, 249, 91, 200, 481, 77, 141, 522, 9, 495, 455, 172, 185, 133, 250, 18, 156, 206, 188, 38, 467, 139, 13, 472, 124, 65, 138, 1, 216, 28, 32, 332, 349, -14, 330, 464, 392, 430],
                            "nav_exclusive": [497, 536, 368, 367, 524, 175, 210, 229, 259, 86, 225, 291, 263, 224, 207, 221, 217, 213, 212, 200],
                            "nav_subCategory": ["card", "match3", "classic", "board", "builder", "knowledge", "platformer", "action", "sports", "worlds", "family"],
                            "nav_new": [436, 563, 530, 481, 475, 495, 469, 487, 521, 562, 467, 545, 522, 517, 553, 546, 557, 542, 476, 536, 524, 490, 497, 466, 196],
                            "nav_early": [236, 281, 235, 243, 232, 244, 242, 239, 230, 238, 237, 233, 240],
                            "nav_coming": [463, 576, 547, 565, "comingmore"],
                            "nav_recommended": [77, 524, 497, 127, 186, 367, 368, 104, 530, 214],
                            "nav_hot": [-14, 153, 175, 210, 229, 263, 368, 245, 363, 496, 198, 231, 196, 104, 563, 542, 177, 317, 367, 457, 536],
                            "nav_recent": [546, 263, 436, 229],
                            "nav_xmas": [],
                            "nav_card": [302, 297, 177, 198, 127, 9, 185, 65, 1],
                            "nav_match3": [563, 542, 210, 261, 153, 536, 196, 363, 524, 194, 172, 133, 156, 38, 138, 216, 28],
                            "nav_classic": [530, 521, 368, 177, 225, 198, 7, 104, 457, 97, 214, 321, 557, 546, 276, 476, 72, 77, 141, 18, 206, 38, 472, 65],
                            "nav_board": [72, 7, 139],
                            "nav_builder": [497, 245, 317, 299, 86, 90],
                            "nav_knowledge": [530, 469, 368, 457, 234, 517, 347, 557, 490, 476, 72, 91, 455, 185, 18, 467, 139, 124],
                            "nav_platformer": [436, 545, 314, 253, 258, 322, 517, 278, 266, 553, 241, 212, 217, 200, 188],
                            "nav_action": [481, 475, 229, 265, 412, 259, 225, 466, 86, 207, 487, 270, 562, 327, 546, 213, 522, 495, 472],
                            "nav_sports": [496, 165, 263, 291, 309, 224, 231, 186, 222, 328, 365, 266, 13],
                            "nav_worlds": [542, 367, 245, 261, 175, 317, 363, 299, 214, 270, 90],
                            "nav_family": [536, 196, 368, 291, 258, 457, 97, 465, 444, 221, 77, 141, 206],
                            "nav_subCategoryEnd": ["backtotop"]
                        }, {
                            "card": {
                                "gameId": 302,
                                "name": "Card games",
                                "desc": "Card games",
                                "longdesc": "Play a variety of card games, from classics to new variations. Challenge friends to strategic duels."
                            },
                            "match3": {
                                "gameId": 563,
                                "name": "Match 3",
                                "desc": "Match 3",
                                "longdesc": "Puzzle, match, and clear! Enjoy colorful challenges suitable for all ages."
                            },
                            "classic": {
                                "gameId": 530,
                                "name": "Classic",
                                "desc": "Classic",
                                "longdesc": "Timeless games, from chess to solitaire - nostalgic enjoyment for everyone."
                            },
                            "board": {
                                "gameId": 72,
                                "name": "Board",
                                "desc": "Board games",
                                "longdesc": "Explore digital board games, from classics to modern strategy challenges."
                            },
                            "builder": {
                                "gameId": 497,
                                "name": "Simulation &amp; building",
                                "desc": "Simulation &amp; building",
                                "longdesc": "Build cities, manage resources, control economies - strategic challenges await."
                            },
                            "knowledge": {
                                "gameId": 469,
                                "name": "Puzzle &amp; brain training",
                                "desc": "Puzzle &amp; brain training",
                                "longdesc": "Solve tricky puzzles and challenge your brain."
                            },
                            "platformer": {
                                "gameId": 436,
                                "name": "Platformer",
                                "desc": "Platformer",
                                "longdesc": "Fast-paced action, overcome obstacles, and leap through fascinating worlds. Jump through exciting adventures and find secret treasures."
                            },
                            "action": {
                                "gameId": 481,
                                "name": "Action",
                                "desc": "",
                                "longdesc": "Quick reflexes and tactical skill required - get ready for thrilling challenges!"
                            },
                            "sports": {
                                "gameId": 496,
                                "name": "Cars, Sports &amp; Action",
                                "desc": "Cars, Sports &amp; Action",
                                "longdesc": "Race on virtual tracks, become a virtual athlete, experience exciting action in cars."
                            },
                            "worlds": {
                                "gameId": 542,
                                "name": "Open world",
                                "desc": "Open world",
                                "longdesc": "Discover fascinating worlds and adventures - from epic quests to intergalactic journeys."
                            },
                            "family": {
                                "gameId": 536,
                                "name": "Family",
                                "desc": "Family",
                                "longdesc": "Entertaining and family-friendly games for shared playtime and fun for all ages."
                            }
                        }, [], {
                            "hasFavoritesSubMenu": false,
                            "lang": "EN",
                            "menuScrollable": false,
                            "solitaireInstall": false
                        }, "nav_hot", 0, 0, true, [], [{
                            "id": "search",
                            "name": "Search",
                            "href": "search.php"
                        }, {
                            "id": "home",
                            "name": "All games",
                            "href": "#",
                            "jump": "nav_all"
                        }, {
                            "id": "top",
                            "name": "Top games",
                            "href": "#",
                            "jump": "nav_hot"
                        }, {
                            "id": "recommendation",
                            "name": "Perfect for your TV",
                            "href": "#",
                            "jump": "nav_top"
                        }, {
                            "id": "new",
                            "name": "New releases",
                            "href": "#",
                            "jump": "nav_new",
                            "counter": 2
                        }, {
                            "id": "continue",
                            "name": "Recently played",
                            "href": "#",
                            "jump": "nav_recent"
                        }, {
                            "id": "profile",
                            "name": "Profile &amp; settings",
                            "href": "\/spielecenter\/social.php"
                        }, {
                            "id": "feedback",
                            "name": "Feedback",
                            "href": "feedback.php"
                        }, {
                            "id": "privacy",
                            "name": "Privacy",
                            "href": "#",
                            "funcObject": "portal",
                            "funcCall": "openCMPBanner"
                        }, {
                            "id": "impress",
                            "name": "Terms &amp; Imprint",
                            "href": "info.php"
                        }], {
                            "fileIndex": {
                                "1": {
                                    "url": "http:\/\/cdn15.itsmy.tv\/images\/temp\/spriteData_EN_0697d9ba73e946c1997399ca9679d353dd952c18_14_202702_1.png"
                                },
                                "2": {
                                    "url": "http:\/\/cdn13.itsmy.tv\/images\/temp\/spriteData_EN_0697d9ba73e946c1997399ca9679d353dd952c18_14_202702_2.png"
                                },
                                "3": {
                                    "url": "http:\/\/cdn13.itsmy.tv\/images\/temp\/spriteData_EN_0697d9ba73e946c1997399ca9679d353dd952c18_14_202702_3.png"
                                }
                            },
                            "frameData": {
                                "524": {
                                    "x": 0,
                                    "y": 0,
                                    "imageIndex": 1
                                },
                                "367": {
                                    "x": 148,
                                    "y": 0,
                                    "imageIndex": 1
                                },
                                "198": {
                                    "x": 296,
                                    "y": 0,
                                    "imageIndex": 1
                                },
                                "245": {
                                    "x": 444,
                                    "y": 0,
                                    "imageIndex": 1
                                },
                                "444": {
                                    "x": 592,
                                    "y": 0,
                                    "imageIndex": 1
                                },
                                "196": {
                                    "x": 740,
                                    "y": 0,
                                    "imageIndex": 1
                                },
                                "185": {
                                    "x": 888,
                                    "y": 0,
                                    "imageIndex": 1
                                },
                                "496": {
                                    "x": 1036,
                                    "y": 0,
                                    "imageIndex": 1
                                },
                                "368": {
                                    "x": 0,
                                    "y": 106,
                                    "imageIndex": 1
                                },
                                "177": {
                                    "x": 148,
                                    "y": 106,
                                    "imageIndex": 1
                                },
                                "229": {
                                    "x": 296,
                                    "y": 106,
                                    "imageIndex": 1
                                },
                                "153": {
                                    "x": 444,
                                    "y": 106,
                                    "imageIndex": 1
                                },
                                "194": {
                                    "x": 592,
                                    "y": 106,
                                    "imageIndex": 1
                                },
                                "210": {
                                    "x": 740,
                                    "y": 106,
                                    "imageIndex": 1
                                },
                                "104": {
                                    "x": 888,
                                    "y": 106,
                                    "imageIndex": 1
                                },
                                "309": {
                                    "x": 1036,
                                    "y": 106,
                                    "imageIndex": 1
                                },
                                "457": {
                                    "x": 0,
                                    "y": 212,
                                    "imageIndex": 1
                                },
                                "263": {
                                    "x": 148,
                                    "y": 212,
                                    "imageIndex": 1
                                },
                                "291": {
                                    "x": 296,
                                    "y": 212,
                                    "imageIndex": 1
                                },
                                "563": {
                                    "x": 444,
                                    "y": 212,
                                    "imageIndex": 1
                                },
                                "530": {
                                    "x": 592,
                                    "y": 212,
                                    "imageIndex": 1
                                },
                                "363": {
                                    "x": 740,
                                    "y": 212,
                                    "imageIndex": 1
                                },
                                "175": {
                                    "x": 888,
                                    "y": 212,
                                    "imageIndex": 1
                                },
                                "90": {
                                    "x": 1036,
                                    "y": 212,
                                    "imageIndex": 1
                                },
                                "-5": {
                                    "x": 0,
                                    "y": 318,
                                    "imageIndex": 1
                                },
                                "297": {
                                    "x": 148,
                                    "y": 318,
                                    "imageIndex": 1
                                },
                                "261": {
                                    "x": 296,
                                    "y": 318,
                                    "imageIndex": 1
                                },
                                "265": {
                                    "x": 444,
                                    "y": 318,
                                    "imageIndex": 1
                                },
                                "412": {
                                    "x": 592,
                                    "y": 318,
                                    "imageIndex": 1
                                },
                                "259": {
                                    "x": 740,
                                    "y": 318,
                                    "imageIndex": 1
                                },
                                "225": {
                                    "x": 888,
                                    "y": 318,
                                    "imageIndex": 1
                                },
                                "224": {
                                    "x": 1036,
                                    "y": 318,
                                    "imageIndex": 1
                                },
                                "314": {
                                    "x": 0,
                                    "y": 424,
                                    "imageIndex": 1
                                },
                                "317": {
                                    "x": 148,
                                    "y": 424,
                                    "imageIndex": 1
                                },
                                "536": {
                                    "x": 296,
                                    "y": 424,
                                    "imageIndex": 1
                                },
                                "231": {
                                    "x": 444,
                                    "y": 424,
                                    "imageIndex": 1
                                },
                                "253": {
                                    "x": 592,
                                    "y": 424,
                                    "imageIndex": 1
                                },
                                "497": {
                                    "x": 740,
                                    "y": 424,
                                    "imageIndex": 1
                                },
                                "542": {
                                    "x": 888,
                                    "y": 424,
                                    "imageIndex": 1
                                },
                                "7": {
                                    "x": 1036,
                                    "y": 424,
                                    "imageIndex": 1
                                },
                                "258": {
                                    "x": 0,
                                    "y": 530,
                                    "imageIndex": 1
                                },
                                "299": {
                                    "x": 148,
                                    "y": 530,
                                    "imageIndex": 1
                                },
                                "165": {
                                    "x": 296,
                                    "y": 530,
                                    "imageIndex": 1
                                },
                                "545": {
                                    "x": 444,
                                    "y": 530,
                                    "imageIndex": 1
                                },
                                "234": {
                                    "x": 592,
                                    "y": 530,
                                    "imageIndex": 1
                                },
                                "322": {
                                    "x": 740,
                                    "y": 530,
                                    "imageIndex": 1
                                },
                                "517": {
                                    "x": 888,
                                    "y": 530,
                                    "imageIndex": 1
                                },
                                "186": {
                                    "x": 1036,
                                    "y": 530,
                                    "imageIndex": 1
                                },
                                "255": {
                                    "x": 0,
                                    "y": 0,
                                    "imageIndex": 2
                                },
                                "222": {
                                    "x": 148,
                                    "y": 0,
                                    "imageIndex": 2
                                },
                                "97": {
                                    "x": 296,
                                    "y": 0,
                                    "imageIndex": 2
                                },
                                "465": {
                                    "x": 444,
                                    "y": 0,
                                    "imageIndex": 2
                                },
                                "214": {
                                    "x": 592,
                                    "y": 0,
                                    "imageIndex": 2
                                },
                                "278": {
                                    "x": 740,
                                    "y": 0,
                                    "imageIndex": 2
                                },
                                "466": {
                                    "x": 888,
                                    "y": 0,
                                    "imageIndex": 2
                                },
                                "86": {
                                    "x": 1036,
                                    "y": 0,
                                    "imageIndex": 2
                                },
                                "328": {
                                    "x": 0,
                                    "y": 106,
                                    "imageIndex": 2
                                },
                                "521": {
                                    "x": 148,
                                    "y": 106,
                                    "imageIndex": 2
                                },
                                "365": {
                                    "x": 296,
                                    "y": 106,
                                    "imageIndex": 2
                                },
                                "207": {
                                    "x": 444,
                                    "y": 106,
                                    "imageIndex": 2
                                },
                                "266": {
                                    "x": 592,
                                    "y": 106,
                                    "imageIndex": 2
                                },
                                "475": {
                                    "x": 740,
                                    "y": 106,
                                    "imageIndex": 2
                                },
                                "347": {
                                    "x": 888,
                                    "y": 106,
                                    "imageIndex": 2
                                },
                                "321": {
                                    "x": 1036,
                                    "y": 106,
                                    "imageIndex": 2
                                },
                                "487": {
                                    "x": 0,
                                    "y": 212,
                                    "imageIndex": 2
                                },
                                "270": {
                                    "x": 148,
                                    "y": 212,
                                    "imageIndex": 2
                                },
                                "553": {
                                    "x": 296,
                                    "y": 212,
                                    "imageIndex": 2
                                },
                                "241": {
                                    "x": 444,
                                    "y": 212,
                                    "imageIndex": 2
                                },
                                "557": {
                                    "x": 592,
                                    "y": 212,
                                    "imageIndex": 2
                                },
                                "212": {
                                    "x": 740,
                                    "y": 212,
                                    "imageIndex": 2
                                },
                                "127": {
                                    "x": 888,
                                    "y": 212,
                                    "imageIndex": 2
                                },
                                "562": {
                                    "x": 1036,
                                    "y": 212,
                                    "imageIndex": 2
                                },
                                "327": {
                                    "x": 0,
                                    "y": 318,
                                    "imageIndex": 2
                                },
                                "436": {
                                    "x": 148,
                                    "y": 318,
                                    "imageIndex": 2
                                },
                                "546": {
                                    "x": 296,
                                    "y": 318,
                                    "imageIndex": 2
                                },
                                "490": {
                                    "x": 444,
                                    "y": 318,
                                    "imageIndex": 2
                                },
                                "276": {
                                    "x": 592,
                                    "y": 318,
                                    "imageIndex": 2
                                },
                                "476": {
                                    "x": 740,
                                    "y": 318,
                                    "imageIndex": 2
                                },
                                "217": {
                                    "x": 888,
                                    "y": 318,
                                    "imageIndex": 2
                                },
                                "72": {
                                    "x": 1036,
                                    "y": 318,
                                    "imageIndex": 2
                                },
                                "213": {
                                    "x": 0,
                                    "y": 424,
                                    "imageIndex": 2
                                },
                                "302": {
                                    "x": 148,
                                    "y": 424,
                                    "imageIndex": 2
                                },
                                "469": {
                                    "x": 296,
                                    "y": 424,
                                    "imageIndex": 2
                                },
                                "221": {
                                    "x": 444,
                                    "y": 424,
                                    "imageIndex": 2
                                },
                                "249": {
                                    "x": 592,
                                    "y": 424,
                                    "imageIndex": 2
                                },
                                "91": {
                                    "x": 740,
                                    "y": 424,
                                    "imageIndex": 2
                                },
                                "200": {
                                    "x": 888,
                                    "y": 424,
                                    "imageIndex": 2
                                },
                                "481": {
                                    "x": 1036,
                                    "y": 424,
                                    "imageIndex": 2
                                },
                                "77": {
                                    "x": 0,
                                    "y": 530,
                                    "imageIndex": 2
                                },
                                "141": {
                                    "x": 148,
                                    "y": 530,
                                    "imageIndex": 2
                                },
                                "522": {
                                    "x": 296,
                                    "y": 530,
                                    "imageIndex": 2
                                },
                                "9": {
                                    "x": 444,
                                    "y": 530,
                                    "imageIndex": 2
                                },
                                "495": {
                                    "x": 592,
                                    "y": 530,
                                    "imageIndex": 2
                                },
                                "455": {
                                    "x": 740,
                                    "y": 530,
                                    "imageIndex": 2
                                },
                                "172": {
                                    "x": 888,
                                    "y": 530,
                                    "imageIndex": 2
                                },
                                "133": {
                                    "x": 1036,
                                    "y": 530,
                                    "imageIndex": 2
                                },
                                "250": {
                                    "x": 0,
                                    "y": 0,
                                    "imageIndex": 3
                                },
                                "18": {
                                    "x": 148,
                                    "y": 0,
                                    "imageIndex": 3
                                },
                                "156": {
                                    "x": 296,
                                    "y": 0,
                                    "imageIndex": 3
                                },
                                "206": {
                                    "x": 444,
                                    "y": 0,
                                    "imageIndex": 3
                                },
                                "188": {
                                    "x": 592,
                                    "y": 0,
                                    "imageIndex": 3
                                },
                                "38": {
                                    "x": 740,
                                    "y": 0,
                                    "imageIndex": 3
                                },
                                "467": {
                                    "x": 888,
                                    "y": 0,
                                    "imageIndex": 3
                                },
                                "139": {
                                    "x": 1036,
                                    "y": 0,
                                    "imageIndex": 3
                                },
                                "13": {
                                    "x": 0,
                                    "y": 106,
                                    "imageIndex": 3
                                },
                                "472": {
                                    "x": 148,
                                    "y": 106,
                                    "imageIndex": 3
                                },
                                "124": {
                                    "x": 296,
                                    "y": 106,
                                    "imageIndex": 3
                                },
                                "65": {
                                    "x": 444,
                                    "y": 106,
                                    "imageIndex": 3
                                },
                                "138": {
                                    "x": 592,
                                    "y": 106,
                                    "imageIndex": 3
                                },
                                "1": {
                                    "x": 740,
                                    "y": 106,
                                    "imageIndex": 3
                                },
                                "216": {
                                    "x": 888,
                                    "y": 106,
                                    "imageIndex": 3
                                },
                                "28": {
                                    "x": 1036,
                                    "y": 106,
                                    "imageIndex": 3
                                },
                                "32": {
                                    "x": 0,
                                    "y": 212,
                                    "imageIndex": 3
                                },
                                "332": {
                                    "x": 148,
                                    "y": 212,
                                    "imageIndex": 3
                                },
                                "349": {
                                    "x": 296,
                                    "y": 212,
                                    "imageIndex": 3
                                },
                                "330": {
                                    "x": 444,
                                    "y": 212,
                                    "imageIndex": 3
                                },
                                "464": {
                                    "x": 592,
                                    "y": 212,
                                    "imageIndex": 3
                                },
                                "392": {
                                    "x": 740,
                                    "y": 212,
                                    "imageIndex": 3
                                },
                                "430": {
                                    "x": 888,
                                    "y": 212,
                                    "imageIndex": 3
                                }
                            }
                        });
                    } catch (err) {
                        ErrorReports.log('index_v7.js', 1858, err);
                    }

                    try {
                        nextFeed.init(["<div class=\"nextFeedItemInner\" style=\"background-image:url(https:\/\/cdn11.itsmy.tv\/images\/temp\/shrink_48724_300_156_24_EN.png);\"><div class=\"nextFeedItemText\">COMING SOON<\/div><\/div>", "<div class=\"nextFeedItemInner\" style=\"background-image:url(https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_48714_300_156_24_EN.png);\"><div class=\"nextFeedItemText\">COMING SOON<\/div><\/div>", "<div class=\"nextFeedItemInner\" style=\"background-image:url(https:\/\/cdn15.itsmy.tv\/images\/temp\/shrink_45891_300_156_24_EN.png);\"><div class=\"nextFeedItemText\">COMING SOON<\/div><\/div>"]);
                    } catch (err) {
                        ErrorReports.log('index_v7.js', 1923, err);
                    }

                    /* ]]> */
                </script>
            </div>
            <div id="poweredby"></div>
        </div>
        <script type="text/javascript">
            /* <![CDATA[ */

            (function() {

                window.addEventListener('load', function(e) {
                    //console.log('register onLoad html_class.inc');

                    try {
                        if (typeof document.activeElement == 'undefined') {
                            ErrorReports.log('html_class.inc', 3456, 'no support for activeElement');
                        }
                    } catch (err) {
                    }

                    try {
                        var firstLinkEle = document.getElementsByClassName('firstLink');
                        if (typeof firstLinkEle[0] != 'undefined') {
                            //console.log('set focus '+firstLinkEle[0]);
                            firstLinkEle[0].focus();
                        }
                    } catch (err) {
                        ErrorReports.log('html_class.inc', 1177, err);
                    }

                    if (typeof __cmp !== 'undefined') {

                        //cmpFocusHandledByCMP=true;

                        __cmp('addEventListener', ['consentscreen', function(e, o) {
                            portal.pushTrackingInfo('Event', 'CMP consentmanager', 'showBanner', '');
                            console.log('consentscreen SHOW');
                            portal.cmpLastElementFocused = document.activeElement;
                            portal.cmpBannerOpen = true;
                        }
                        , false], null);

                        __cmp('addEventListener', ['consentscreenoff', function(e, o) {
                            portal.pushTrackingInfo('Event', 'CMP consentmanager', 'closeBanner', 'close');
                            console.log('consentscreenoff HIDDEN');
                            portal.cmpBannerOpen = false;
                            cmpUIClosed = true;

                            setTimeout(function() {
                                if (typeof portal.cmpLastElementFocused == 'object' && portal.cmpLastElementFocused !== null) {
                                    console.log('portal.cmpLastElementFocused', portal.cmpLastElementFocused);
                                    portal.cmpLastElementFocused.focus();
                                    portal.cmpLastElementFocused = null;
                                }
                            }, 100);
                        }
                        , false], null);
                    }

                    if (typeof __tcfapi !== 'undefined') {

                        __tcfapi('addEventListener', 2, function(data, success) {
                            //HbbTV.debug=true;
                            HbbTV.log('__tcfapi: ' + data.eventStatus + ' ' + data.tcString);
                            console.log('__tcfapi', data);

                            setCMPConstentToStorage(data.tcString);

                            if (data.eventStatus == 'tcloaded' && data.cmpId == 76 && data.tcfPolicyVersion == 4 && data.tcString !== '') {
                                portal.pushTrackingInfo('Event', 'CMP consentmanager', 'showBanner', ' ' + 'tcfPolicyVersion:4');
                                portal.disableNavigation = true;
                                portal.openCMPBanner();
                            }

                            if (data.eventStatus == 'cmpuishown') {
                                portal.cmpLastElementFocused = document.activeElement;
                                portal.cmpBannerOpen = true;
                            } else if (data.eventStatus == 'useractioncomplete') {
                                portal.cmpBannerOpen = false;
                                setTimeout(function() {
                                    if (typeof portal.cmpLastElementFocused == 'object' && portal.cmpLastElementFocused !== null) {
                                        console.log('portal.cmpLastElementFocused', portal.cmpLastElementFocused);
                                        portal.cmpLastElementFocused.focus();
                                        portal.cmpLastElementFocused = null;
                                    }
                                }, 100);

                            }

                            if (data !== null && typeof data !== 'undefined') {
                                setTimeout(function() {
                                    if (typeof data.eventStatus !== 'undefined') {
                                        if (data.eventStatus == 'useractioncomplete' || cmpUIClosed == true) {
                                            cmpSaved = true;
                                            portal.pushTrackingInfo('Event', 'CMP consentmanager', 'saveConsent', data.eventStatus + ' ' + JSON.stringify(data.publisher.consents));
                                            portal.handleTCFData(data);
                                        } else if (data.eventStatus == 'tcloaded') {//console.warn('tcloaded');

                                        }
                                    }
                                }, 1000);
                            }
                        });
                    }

                    setTimeout(function() {
                        if (typeof __cmp !== 'undefined') {//ErrorReports.log('html_class.inc',888, 'TCFAPI LOADED consentmanager');
                        } else if (typeof __tcfapi !== 'undefined') {//ErrorReports.log('html_class.inc',888, 'TCFAPI LOADED consentmanager');
                        } else {
                            ErrorReports.log('html_class.inc', 888, 'NO TCFAPI LOADED consentmanager');
                        }
                    }, 3000);

                }, false);

            }
            )();
            /* ]]> */
        </script>
        <script type="text/javascript">
            /* <![CDATA[ */
            var _paq = false;
            /* ]]> */
        </script>
    </body>
</html>
