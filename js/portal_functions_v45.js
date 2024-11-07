function setButtonBar(id, url, text) {
    portal.setButtonBar(id, url, text);
}
function setColorButtonUrl(color, url_func, text) {
    portal.setColorButtonUrl(color, url_func, text);
}
function setYellowButtonUrl(url, text) {
    portal.setYellowButtonUrl(url, text);
}
function setBlueButtonUrl(url, text) {
    portal.setBlueButtonUrl(url, text);
}
function setNumberButtonUrl(num, url, text) {
    portal.setNumberButtonUrl(num, url, text);
}
var portal = {
    'numberButtons': {},
    'colorButtons': {},
    'buttonBarButtons': {},
    'bannerClicked': false,
    'safeCode': '',
    'backKeyFunction': null,
    'keyCode2Number': {
        48: 0,
        49: 1,
        50: 2,
        51: 3,
        52: 4,
        53: 5,
        54: 6,
        55: 7,
        56: 8,
        57: 9,
        96: 0,
        97: 1,
        98: 2,
        99: 3,
        100: 4,
        101: 5,
        102: 6,
        103: 7,
        104: 8,
        105: 9
    },
    'disableNavigation': false,
    'cmpBannerButtonsModified': false,
    'cmpLastElementFocused': '',
    'cmpBannerOpen': false,
    'switchlayerGlobal': function(idName) {
        if (document.getElementById(idName) != null) {
            document.getElementById(idName).style.display = (document.getElementById(idName).style.display == 'none') ? 'block' : 'none';
        }
    },
    'addPortalExtensionUrl': function(url) {
        if (url.search(/http\:\/\//) == -1 && url.search(/https\:\/\//) == -1) {
            url = '' + url + (url.search(/\?/) >= 0 ? '' : '?');
            url = '' + url + (url.search(/\&pid\=/) >= 0 ? '' : pidExt);
            url = '' + url + (url.search(/\&prod\=/) >= 0 ? '' : prodExt);
            url = '' + url + (url.search(/GCID/) >= 0 ? '' : sessExt);
        }
        return url;
    },
    'setButtonBar': function(id, url, text) {
        this.buttonBarButtons[id] = {
            url: url,
            text: text
        };
        if (text != '') {
            var buttonBar = document.getElementById('buttonExtra');
            if (buttonBar != null) {
                var newButton = document.createElement('a');
                newButton.href = '#';
                newButton.className = 'buttonText';
                newButton.innerHTML = '' + text;
                newButton.id = id;
                buttonBar.appendChild(newButton);
            }
        }
        if (document.getElementById(id) != null) {
            {
                document.getElementById(id).addEventListener('click', function(e) {
                    var tmpUrl = portal.buttonBarButtons[this.id].url;
                    if (tmpUrl != '')
                        window.location.href = portal.addPortalExtensionUrl(tmpUrl);
                }, false);
            }
        }
    },
    'setNumberButtonUrl': function(num, url, text) {
        if (url != '')
            url = this.addPortalExtensionUrl(url);
        this.numberButtons[num] = {
            url: url,
            text: text
        };
        if (text != '') {
            var buttonBar = document.getElementById('buttonBar');
            if (buttonBar != null) {
                var newButton = document.createElement('span');
                newButton.className = 'button numberButton';
                if (prod == 'rtl2' && num == 8)
                    newButton.innerHTML = '' + text;
                else if (prod == 'pro7' || prod == 'pro7at')
                    newButton.innerHTML = '<span class="buttonBarNum">' + num + '</span>' + text;
                else
                    newButton.innerHTML = '<span class="buttonBarNum">' + num + '</span>' + text;
                newButton.id = 'numButton' + num;
                buttonBar.appendChild(newButton);
            }
        }
        if (url != '') {
            if (document.getElementById('numButton' + num) != null) {
                {
                    document.getElementById('numButton' + num).addEventListener('click', function(e) {
                        var openUrl = portal.numberButtons[num].url;
                        if (openUrl != '')
                            window.location.href = openUrl;
                    }, false);
                }
            }
        }
    },
    'setColorButtonUrl': function(color, url_func, text) {
        if (typeof this.colorButtons[color] != 'object')
            this.colorButtons[color] = {};
        if (typeof url_func == 'function') {
            this.colorButtons[color].func = url_func;
            this.colorButtons[color].url = '';
        } else if (typeof url_func == 'string' && url_func != '') {
            this.colorButtons[color].func = null;
            this.colorButtons[color].url = url_func;
        } else if (url_func == null) {
            this.colorButtons[color].func = null;
            this.colorButtons[color].url = '';
        }
        if (document.getElementById(color + 'Button') != null) {
            if (typeof text == 'string') {
                if ((prod == 'pro7' || prod == 'pro7at') && text == 'SpieleCenter') {} else {
                    if ((prod == 'pro7' || prod == 'pro7at') && document.getElementById('promoBottomBar')) {
                        document.getElementById('promoBottomBar').style.display = 'block';
                        if (text != 'Beenden')
                            document.getElementById('yellowPromoButton').innerHTML = 'Spiel verlassen';
                    }
                    this.colorButtons[color].text = '' + text;
                    document.getElementById(color + 'Button').innerHTML = text;
                    if (text != '') {
                        document.getElementById(color + 'Button').className = 'button ' + color;
                    }
                }
            }
            if (color == 'blue' || color == 'yellow') {
                {
                    if (typeof this.colorButtons[color].listener == 'function') {} else {
                        if (pid == 'firetvapp' || pid == 'samsungapp' || pid == 'samsungapp_ww' || pid == 'lgapp' || pid == 'androidtvapp' || pid == 'nettv') {} else {
                            this.colorButtons[color].listener = function(e) {
                                var buttonColor = this.id.replace('Button', '');
                                portal.__triggerKeyboardEvent(eval('VK_' + color.toUpperCase()));
                            }
                            document.getElementById(color + 'Button').addEventListener('click', portal.colorButtons[color].listener, false);
                        }
                    }
                }
            }
            if ((prod == 'pro7' || prod == 'pro7at') && text == 'SpieleCenter') {} else {
                try {
                    if (document.getElementById(color + 'Button').style.display = 'none') {
                        document.getElementById(color + 'Button').style.display = '';
                    }
                } catch (err) {}
            }
        } else {}
    },
    'setYellowButtonUrl': function(url, text) {
        this.setColorButtonUrl('yellow', url, text);
    },
    'getYellowButtonUrl': function() {
        return this.colorButtons['yellow'].url;
    },
    'setBlueButtonUrl': function(url, text) {
        this.setColorButtonUrl('blue', url, text);
    },
    'getBlueButtonUrl': function() {
        return this.colorButtons['blue'].url;
    },
    '__triggerKeyboardEvent': function(keyCode) {
        {
            try {
                var eventObj = document.createEventObject ? document.createEventObject() : document.createEvent("Events");
                if (eventObj.initEvent) {
                    eventObj.initEvent("keydown", true, true);
                }
                eventObj.keyCode = keyCode;
                eventObj.which = keyCode;
                document.dispatchEvent ? document.dispatchEvent(eventObj) : document.fireEvent("onkeydown", eventObj);
            } catch (err) {
                ErrorReports.log('portal_functions', 285, 'ERROR fire createEvent: ' + err);
            }
        }
    },
    'triggerKeyboardEvent': function(keyCode) {
        var keyboardEvent = document.createEvent("KeyboardEvent");
        var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";
        keyboardEvent[initMethod]("keydown", true, true, window, false, false, false, false, keyCode, 0);
        ErrorReports.log('portal_functions', 336, 'triggerKeyboardEvent keyCode:' + keyCode);
        document.dispatchEvent(keyboardEvent);
    },
    'fetchCode': function(code) {
        try {
            var XHR = new XMLHttpRequest();
            var XHRUrl = prodUrl + '/ajax/checkCode.php?action=checkCode&code=' + code + linkExt + '';
            XHR.open('GET', XHRUrl, true);
            XHR.onreadystatechange = function() {
                if (XHR.readyState == 4) {
                    var data = eval('(' + XHR.responseText + ')');
                    if (data.success == 'true' && data.url != '') {
                        setTimeout(function() {
                            window.location.href = data.url;
                        }, 20);
                    } else {
                        portal.safeCode = '';
                    }
                }
            }
            ;
            XHR.send(null);
        } catch (err) {
            HbbTV.log(err);
        }
    },
    'isStartPage': function() {
        if (window.location.pathname == '/pro7/' || window.location.pathname == '/pro7/hbbtv.php' || window.location.pathname == '/pro7/index.php' || window.location.pathname == '/pro7/indev_v3.php' || window.location.pathname == '/pro7/index_v5.php' || window.location.pathname == '/pro7/index_v6.php' || window.location.pathname == '/spielecenter/' || window.location.pathname == '/spielecenter/hbbtv.php' || window.location.pathname == '/spielecenter/index.php' || window.location.pathname == '/spielecenter/indev_v3.php' || window.location.pathname == '/spielecenter/index_v5.php' || window.location.pathname == '/spielecenter/index_v6.php')
            return true;
        else
            return false;
    },
    'handleKeyDownEvents': function(e) {
        HbbTV.log('portal_functions: keyDown: ' + e.keyCode + ' ' + e.key);
        if (48 <= e.keyCode && e.keyCode <= 57 || 96 <= e.keyCode && e.keyCode <= 105) {
            e.preventDefault();
            var number = this.keyCode2Number[e.keyCode];
            if (window.location.pathname == '/pro7/impressum.php' || window.location.pathname == '/pro7/info.php' || window.location.pathname == '/spielecenter/impressum.php' || window.location.pathname == '/spielecenter/info.php' || window.location.pathname == '/spielecenter/games/bubblewitch/' || window.location.pathname == '/spielecenter/games/bubblewitch/index.php' || window.location.pathname == '/spielecenter/games/sunnyfarmruby/' || window.location.pathname == '/spielecenter/games/sunnyfarmruby/index.php' || window.location.pathname == '/spielecenter/games/sunnyfarmruby/sunnyfarm.php') {
                this.safeCode = this.safeCode + '' + number;
                if (this.safeCode.length == 5) {
                    portal.fetchCode(this.safeCode);
                }
            } else {
                HbbTV.log('not on the startpage');
            }
            if (typeof this.numberButtons[number] != 'undefined') {
                if (this.numberButtons[number].url != '') {
                    window.location.href = this.addPortalExtensionUrl(this.numberButtons[number].url);
                }
            }
        } else {
            switch (e.keyCode) {
            case VK_BACK:
            case 10009:
            case 8:
                this.keyDownBack(e);
                break;
            case VK_PLAY:
            case 80:
                if (pid != 'samsungapp' && pid != 'samsungapp_ww' && pid != 'lgapp') {
                    HbbTV.log('reload');
                    e.preventDefault();
                    window.location.href = portal.addPortalExtensionUrl(window.location.pathname) + '&cache=clear';
                }
                break;
            case VK_PAUSE:
                e.preventDefault();
                if (environment == 'SIT') {
                    if (HbbTV.debug == false) {
                        HbbTV.debug = true;
                        document.getElementById('debug').style.display = 'block';
                        HbbTV.log('debug: ON');
                    } else {
                        document.getElementById('debug').style.display = 'none';
                        HbbTV.debug = false;
                    }
                }
                break;
            case VK_RED:
                e.preventDefault();
                this.keyDownRed();
                break;
            case VK_GREEN:
                e.preventDefault();
                this.keyDownGreen();
                break;
            case VK_YELLOW:
                e.preventDefault();
                this.keyDownYellow();
                break;
            case VK_BLUE:
                e.preventDefault();
                this.keyDownBlue();
                break;
            case 10182:
                try {
                    if (window.location.href.search(/spielecenter\/games\//) >= 0) {
                        e.preventDefault();
                        closeDialog.showCloseDialog('exit', document.activeElement);
                    } else {
                        tizen.application.getCurrentApplication().exit();
                    }
                } catch (err) {
                    HbbTV.log(err);
                }
                break;
            default:
                HbbTV.log('portal default switch');
                break;
            }
        }
    },
    'keyDownHome': function(e) {
        HbbTV.log('keyDownHome');
    },
    'keyDownBack': function(e) {
        if (!e)
            e = event;
        HbbTV.log('keyDownBack: ' + pid + ' type:' + typeof portal.backKeyFunction + ' tvapp: ' + _tvapp);
        if (pid == 'samsungapp' || pid == 'samsungapp_ww' || pid == 'androidtvapp' || pid == 'firetvapp' || pid == 'lgapp' || pid == 'nettv' || pid == 'vidaa' || pid == 'foxxum') {
            if (typeof portal.backKeyFunction == 'function') {
                e.preventDefault();
                HbbTV.log('trigger backKeyFunction');
                portal.backKeyFunction(e);
            } else if (typeof _tvapp == 'string' && (_tvapp != 'samsungapp' && _tvapp != 'samsungapp_ww' && _tvapp != 'couchplayapp')) {
                if (_tvapp == 'DiamondAmbush') {
                    e.preventDefault();
                    HbbTV.log('showCloseDialog');
                    closeDialog.showCloseDialog('exit', document.activeElement);
                } else if (window.location.href.search('/spielecenter/games/') >= 0 && (window.location.href.search('index.php') >= 0 || window.location.href.search(/\/\?/) >= 0)) {
                    e.preventDefault();
                    HbbTV.log('showCloseDialog');
                    closeDialog.showCloseDialog('exit', document.activeElement);
                } else {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    HbbTV.log('trigger yellow key');
                    closeDialog.showCloseDialog('yellow', document.activeElement);
                }
            } else if (typeof portal.colorButtons['yellow'] != 'object') {
                if (this.isStartPage()) {
                    try {
                        {
                            e.preventDefault();
                            HbbTV.log('hide app');
                            try {
                                closeDialog.showCloseDialog('exit', document.activeElement);
                            } catch (err) {
                                HbbTV.log(err);
                            }
                        }
                    } catch (err) {
                        HbbTV.log(err);
                    }
                }
            } else if ((closeDialog.yellowTriggerCount == 0 && window.location.href.search('/spielecenter/games/') >= 0 && window.location.href.search('index.php') == -1 && window.location.href.search(/\/\?/) == -1) || (window.location.href.search('/games/flappykiwi/') >= 0 || window.location.href.search('/games/space3d/') >= 0)) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                HbbTV.log('show dialog, confirm yellow key push. return focus: ' + document.activeElement);
                try {
                    HbbTV.log('trigger yellow key');
                    closeDialog.showCloseDialog('yellow', document.activeElement);
                } catch (err) {
                    HbbTV.log('show dialog error ' + err);
                }
            } else {
                try {
                    e.preventDefault();
                    HbbTV.log('trigger yellow button: ' + VK_YELLOW);
                    portal.__triggerKeyboardEvent(VK_YELLOW);
                } catch (err) {
                    HbbTV.log(err);
                }
            }
        } else if (pid == 'dtbox' && typeof portal.colorButtons['yellow'] != 'object') {
            if (window.location.href.search(/spielecenter\/\?/) >= 0 || window.location.href.search(/spielecenter\/index/) >= 0 || window.location.href.search(/spielecenter\/hbbtv/) >= 0) {
                try {
                    e.preventDefault();
                    closeDialog.showCloseDialog();
                } catch (err) {
                    HbbTV.log(err);
                }
            }
        } else if (pid == 'netgem' && typeof portal.colorButtons['yellow'] != 'object') {
            e.preventDefault();
            if (window.location.href.search(/spielecenter\/\?/) >= 0 || window.location.href.search(/spielecenter\/index/) >= 0) {
                try {
                    window.close();
                } catch (err) {
                    HbbTV.log(err);
                }
            } else {
                try {
                    portal.__triggerKeyboardEvent(VK_YELLOW);
                } catch (err) {
                    HbbTV.log(err);
                }
            }
        } else if (pid == 'panasonicapp' && typeof portal.colorButtons['yellow'] != 'object') {
            e.preventDefault();
            if (window.location.href.search(/spielecenter\/\?/) >= 0 || window.location.href.search(/spielecenter\/index/) >= 0) {
                try {
                    if (typeof SmartTvA_API != "undefined" && (navigator.userAgent.search(/SmartTvA\/3.0.0/i) >= 0 || navigator.userAgent.search(/SmartTvA\/3.0.0/i) >= 0)) {
                        SmartTvA_API.exit();
                    } else {
                        history.back();
                    }
                } catch (err) {
                    HbbTV.log(err);
                }
            } else {
                try {
                    history.back();
                } catch (err) {
                    HbbTV.log(err);
                }
            }
        } else if (prod == 'pro7' || prod == 'pro7at' || pid == 'couchplaytv') {
            e.preventDefault();
            if (this.isStartPage()) {
                if (typeof HbbTV.portalUrl != 'undefined' && HbbTV.portalUrl != '')
                    window.location.href = HbbTV.portalUrl;
            } else if (typeof portal.backKeyFunction == 'function') {
                portal.backKeyFunction(e);
            } else if (typeof portal.colorButtons['yellow'] == 'object') {
                try {
                    portal.__triggerKeyboardEvent(VK_YELLOW);
                } catch (err) {
                    HbbTV.log(err);
                }
            } else {
                try {
                    history.back();
                } catch (err) {
                    HbbTV.log(err);
                }
            }
        } else {
            e.preventDefault();
            try {
                portal.__triggerKeyboardEvent(VK_YELLOW);
            } catch (err) {
                HbbTV.log(err);
            }
        }
    },
    'setBackKey': function(url, buttonText) {
        if (url == '') {
            this.backKeyFunction = null;
        } else if (typeof url == 'function') {
            this.backKeyFunction = url;
        } else if (url == '-1') {
            this.backKeyFunction = function() {
                window.history.back();
            }
        }
    },
    'keyDownRed': function() {
        try {
            if (typeof HbbTV.redButtonUrl != 'undefined' && document.getElementById('redButton') && document.getElementById('redButton').style.display != 'none') {
                if (HbbTV.redButtonUrl.indexOf('killApp') >= 0) {
                    setTimeout(function() {
                        HbbTV.killApp();
                    }, 100);
                } else if (HbbTV.redButtonUrl.indexOf('dvb://') >= 0) {
                    HbbTV.log('DVB URL: ' + HbbTV.redButtonUrl);
                    try {
                        if (HbbTV.app.createApplication(HbbTV.redButtonUrl, false))
                            HbbTV.app.destroyApplication();
                    } catch (err) {}
                } else if (HbbTV.redButtonUrl.indexOf('http://') >= 0 || HbbTV.redButtonUrl.indexOf('https://') >= 0) {
                    window.location.href = HbbTV.redButtonUrl;
                } else if (HbbTV.redButtonUrl.indexOf('fullscreen') >= 0) {
                    if (HbbTV.isFullScreen()) {
                        HbbTV.setFullScreen(false);
                    } else {
                        HbbTV.setFullScreen(true);
                    }
                }
            } else {}
        } catch (err) {
            HbbTV.log(err);
        }
    },
    'keyDownGreen': function() {
        try {
            if (typeof portal.colorButtons['green'] != 'undefined' && portal.colorButtons['green'].url != '') {
                window.location.href = portal.colorButtons['green'].url;
            } else {
                if (typeof HbbTV.portalUrl != 'undefined' && HbbTV.portalUrl != '' && document.getElementById('greenButton') && document.getElementById('greenButton').style.display != 'none') {
                    if (HbbTV.portalUrl.indexOf('dvb') >= 0) {
                        HbbTV.log('DVB URL: ' + HbbTV.portalUrl);
                        try {
                            if (HbbTV.app.createApplication(HbbTV.portalUrl, false))
                                HbbTV.app.destroyApplication();
                        } catch (err) {
                            HbbTV.log(err);
                        }
                    } else if (HbbTV.portalUrl.indexOf('fullscreen') >= 0) {
                        if (HbbTV.isFullScreen()) {
                            HbbTV.setFullScreen(false);
                        } else {
                            HbbTV.setFullScreen(true);
                        }
                    } else {
                        window.location.href = HbbTV.portalUrl;
                    }
                }
            }
        } catch (e) {
            HbbTV.log(e);
        }
    },
    'keyDownYellow': function() {
        if (typeof portal.colorButtons['yellow'] == 'object' && typeof portal.colorButtons['yellow'].func == 'function') {
            if (typeof portal.colorButtons['yellow'].func == 'function') {
                var execFunc = portal.colorButtons['yellow'].func;
                execFunc();
            }
        } else if (typeof portal.colorButtons['yellow'] == 'object' && typeof portal.colorButtons['yellow'].url == 'string' && portal.colorButtons['yellow'].url != '') {
            window.location.href = portal.addPortalExtensionUrl(portal.colorButtons['yellow'].url);
        } else {
            HbbTV.log('yellow is empty');
        }
    },
    'keyDownBlue': function() {
        try {
            if (typeof portal.colorButtons['blue'] == 'object' && typeof portal.colorButtons['blue'].func == 'function') {
                if (typeof portal.colorButtons['blue'].func == 'function') {
                    var trackingImg = document.createElement('img');
                    var clickTime = new Date().getTime();
                    trackingImg.width = 1;
                    trackingImg.height = 1;
                    trackingImg.alt = 'trackingPX';
                    trackingImg.src = prodUrl + '/trackingPX.gif?r=' + Math.floor((Math.random() * 1000000)) + '&adPartner=' + encodeURIComponent(Banner.clickAdProvider) + '&pid=' + encodeURIComponent(pid) + '&t=' + clickTime + '&status=CLICK&ad=' + encodeURIComponent(Banner.clickAdName) + '&deviceId=' + deviceId + '&uid=' + userId + '&adSize=' + encodeURIComponent(Banner.clickAdType);
                    trackingImg.onload = function() {
                        document.getElementById('trackingBox').appendChild(trackingImg);
                        try {
                            var execFunc = portal.colorButtons['blue'].func;
                            execFunc();
                        } catch (err) {
                            ErrorReports.log('portal_functions.js', 846, err);
                        }
                    }
                    ;
                }
            } else if (typeof portal.colorButtons['blue'] == 'object' && typeof portal.colorButtons['blue'].url == 'string') {
                if (portal.bannerClicked == false) {
                    portal.bannerClicked = true;
                    if (typeof Banner == 'object') {
                        try {
                            var trackingImg = document.createElement('img');
                            var clickTime = new Date().getTime();
                            trackingImg.width = 1;
                            trackingImg.height = 1;
                            trackingImg.alt = 'trackingPX';
                            trackingImg.src = prodUrl + '/trackingPX.gif?r=' + Math.floor((Math.random() * 1000000)) + '&adPartner=' + encodeURIComponent(Banner.clickAdProvider) + '&pid=' + encodeURIComponent(pid) + '&t=' + clickTime + '&status=CLICK&ad=' + encodeURIComponent(Banner.clickAdName) + '&deviceId=' + deviceId + '&uid=' + userId + '&adSize=' + encodeURIComponent(Banner.clickAdType);
                            trackingImg.onload = function() {
                                document.getElementById('trackingBox').appendChild(trackingImg);
                                window.location.href = portal.addPortalExtensionUrl(portal.colorButtons['blue'].url);
                            }
                            ;
                        } catch (err) {}
                    } else {
                        window.location.href = portal.addPortalExtensionUrl(portal.colorButtons['blue'].url);
                    }
                }
            } else {}
        } catch (e) {
            ErrorReports.log('portal_functions.js', 881, e);
        }
    },
    'updateSettings': function(setting, newValue, callback) {
        try {
            var XHR = new XMLHttpRequest();
            var XHRUrl = prodUrl + '/ajax/update_settings.php?setting=' + encodeURIComponent(setting) + '&value=' + encodeURIComponent(newValue) + prodExt + pidExt + sessExt;
            XHR.open('GET', XHRUrl, true);
            XHR.onreadystatechange = function() {
                if (XHR.readyState == 4) {
                    if (typeof callback == 'function')
                        callback();
                }
            }
            ;
            XHR.send(null);
        } catch (err) {
            HbbTV.log(err);
        }
    },
    'pushTrackingInfo': function(adPartner, adStatus, adSize, ad) {
        var trackingImg = document.createElement('img');
        var trackingParam = prodExt + pidExt + sessExt + '&deviceId=' + deviceId + '&uid=' + userId + '&r=' + Math.floor((Math.random() * 1000000)) + '&t=' + (new Date().getTime());
        var trackingPartner = '&adPartner=' + encodeURIComponent(adPartner);
        var trackingStatus = '&status=' + encodeURIComponent(adStatus);
        var trackingAdSize = '&adSize=' + encodeURIComponent(adSize);
        var trackingAd = '&ad=' + encodeURIComponent(ad);
        try {
            trackingImg.src = prodUrl + '/trackingPX.jpg?' + trackingParam + trackingPartner + trackingStatus + trackingAdSize + trackingAd;
        } catch (err) {
            ErrorReports.log('portal_functions.js', 636, err);
        }
        trackingImg.width = 1;
        trackingImg.height = 1;
        trackingImg.alt = '';
        var trackingContainer = document.getElementById('trackingBox');
        if (trackingContainer != null)
            trackingContainer.appendChild(trackingImg);
    },
    'getUrlParameterByName': function(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
          , results = regex.exec(url);
        if (!results)
            return '';
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    'storeCookie': function(name, value, days) {
        if (days == '')
            days = 365;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else
            var expires = "";
        value = encodeURIComponent(value);
        document.cookie = "" + name + "=" + value + expires + ";path=/";
    },
    'crc32': function(r) {
        for (var a, o = [], c = 0; c < 256; c++) {
            a = c;
            for (var f = 0; f < 8; f++)
                a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
            o[c] = a
        }
        for (var n = -1, t = 0; t < r.length; t++)
            n = n >>> 8 ^ o[255 & (n ^ r.charCodeAt(t))];
        return (-1 ^ n) >>> 0
    },
    'absolutePath': function() {
        var absolutePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + '/';
        return absolutePath.trim();
    },
    'htmlCache': function(url) {
        if (typeof environment == 'string' && environment == 'SIT')
            return url;
        if (url.indexOf('http://') >= 0 || url.indexOf('https://') >= 0) {
            return url;
        }
        if (url.substring(0, 1) == '/') {} else {
            url = this.absolutePath() + url;
        }
        if (typeof cdnDomain !== 'undefined' && cdnDomain !== '') {
            if (cdnDomain.indexOf('[rand]') >= 0) {
                return cdnDomain.replace('[rand]', portal.crc32(url) % 6) + url;
            } else {
                return cdnDomain + url;
            }
        } else {
            if (window.location.href.indexOf('itsmy.tv') >= 0)
                return (document.location.protocol == 'https:' ? 'https://' : 'http://') + 'cdn1' + (portal.crc32(url) % 6) + '.itsmy.tv' + url;
            else
                return (document.location.protocol == 'https:' ? 'https://' : 'http://') + 'cdn1' + (portal.crc32(url) % 6) + '.gofresh.tv' + url;
        }
    },
    'isObj': function(obj) {
        if (obj === null || obj === undefined) {
            return false;
        }
        if (typeof obj == 'undefined') {
            return false;
        } else {
            return true;
        }
        return false;
    },
    'getCookie': function(cookieName) {
        var name = cookieName + '=';
        var cookieArray = document.cookie.split(';');
        for (var i = 0; i < cookieArray.length; i++) {
            var c = cookieArray[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return '';
    },
    'preloadImages': function(imageArray) {
        if (typeof imageArray == 'object' && imageArray.length > 0) {
            for (var i = 0; i < imageArray.length; i++) {
                var tmpImage = new Image();
                tmpImage.src = imageArray[i];
            }
        }
    },
    'getTokens': function(tokenGroup, tokenList, callbackFunc) {
        try {
            var postdata = 'group=' + encodeURIComponent(tokenGroup) + '&tokens=' + encodeURIComponent(JSON.stringify(tokenList));
            var XHR = new XMLHttpRequest();
            var XHRUrl = prodUrl + '/ajax/tokens.php';
            var self = this;
            XHR.onreadystatechange = function() {
                if (XHR.readyState == 4) {
                    try {
                        var data = JSON.parse(XHR.responseText);
                        if (typeof data.tokenList == 'object') {
                            callbackFunc(data.tokenList);
                        }
                    } catch (err) {
                        ErrorReports.log('portal_functions.js -> getTokens()', 1142, err);
                        callbackFunc([]);
                    }
                }
            }
            XHR.open('POST', XHRUrl, true);
            XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            XHR.send(postdata);
        } catch (err) {
            ErrorReports.log('portal_functions.js -> getTokens()', 1155, err);
        }
    },
    'handleTCFData': function(tcfdata) {
        if (typeof tcfdata !== 'undefined') {
            {
                this.disableNavigation = false;
                if (tcfdata.publisher && tcfdata.publisher.consents) {
                    Tools.ajaxGet(prodUrl + '/ajax/consent.php?type=cmp&consents=' + JSON.stringify(tcfdata.publisher.consents) + '&tcstring=' + JSON.stringify(tcfdata.tcString));
                }
            }
        }
    },
    'isCmpBannerOpen': function() {
        try {
            if (typeof SibboCMP !== 'undefined') {
                portal.cmpBannerOpen = SibboCMP.isOpen();
            }
        } catch (err) {
            ErrorReports.log('portal_functions.js isCmpBannerOpen', 1234, err);
        }
        return portal.cmpBannerOpen;
    },
    'openCMPBanner': function() {
        HbbTV.log('openBanner() Sibbo: ' + typeof SibboCMP + " consentmanager: " + typeof window['__cmp']);
        var self = this;
        if (typeof window['__cmp'] !== 'undefined') {
            __cmp('showScreen');
            setTimeout(function() {
                var yesButtons = document.getElementsByClassName('cmptxt_btn_yes');
                if (typeof yesButtons !== 'undefined' && typeof yesButtons[0] !== 'undefined') {
                    yesButtons[0].focus();
                }
            }, 300);
            return '';
        } else if (typeof SibboCMP !== 'undefined') {
            var self = this;
            setTimeout(function() {
                if (self.cmpBannerButtonsModified == false) {
                    self.cmpBannerButtonsModified = true;
                    var classes = ['sibbo-cmp-button', 'magicItem'];
                    for (var x = 0; x < classes.length; x++) {
                        var sibboButtons = document.getElementsByClassName(classes[x]);
                        HbbTV.log('sibbo: buttons found: ' + sibboButtons.length);
                        for (var i = 0; i < sibboButtons.length; i++) {
                            if (sibboButtons[i].lastChild.className == 'globalButtonHand')
                                continue;
                            var hand = document.createElement('div');
                            hand.className = 'globalButtonHand';
                            var hand2 = document.createElement('div');
                            hand2.className = 'globalButtonHandInner';
                            hand.appendChild(hand2);
                            sibboButtons[i].appendChild(hand);
                        }
                    }
                }
                self.cmpLastElementFocused = document.activeElement;
                try {
                    SibboCMP.openBanner(true);
                } catch (err) {
                    ErrorReports.log('portal_functions.js SibboCMP.openBanner', 1218, err);
                }
                setTimeout(function() {
                    document.getElementById('acceptAllMain').focus();
                }, 300);
            }, 500);
        } else {
            if (typeof KachelMenu !== 'undefined' && typeof KachelMenu.showConsentPopup == 'function') {
                KachelMenu.showConsentPopup();
            }
        }
    },
    'checkPurpose': function(purpose, purposeString) {
        if (purposeString.substring(purpose - 1, purpose) == '1')
            return true;
        else
            return false;
    }
}
var refocusCMPLayer = 0;
window.addEventListener('load', function(e) {
    HbbTV.log('init portal events');
    document.addEventListener('keydown', function(e) {
        HbbTV.log('portal: ' + e.type + ' ' + e.keyCode);
        try {
            if (e.keyCode == VK_BACK && portal.isCmpBannerOpen()) {
                HbbTV.log('backbutton not catched by CMP');
                ErrorReports.log('portal_function.js', 357, 'backbutton not catched by CMP');
                e.stopImmediatePropagation();
                if (typeof SibboCMP !== 'undefined') {
                    if (SibboCMP.getActualView() == 'main') {
                        SibboCMP.closeBanner();
                    } else if (SibboCMP.getActualView() == 'purposes') {
                        if (document.getElementById('acceptAllConsent'))
                            document.getElementById('acceptAllConsent').focus();
                    }
                } else if (typeof __cmp !== 'undefined') {
                    __cmp('close');
                }
                return '';
            }
            portal.handleKeyDownEvents(e);
        } catch (err) {
            ErrorReports.log('portal_functions.js', 456, err);
        }
    }, false);
    document.addEventListener('keydown', function(e) {
        HbbTV.log('portal2: ' + e.type + ' ' + e.keyCode + ' cmp_open: ' + portal.isCmpBannerOpen());
        if (portal.isCmpBannerOpen() && (e.keyCode == VK_UP || e.keyCode == VK_DOWN || e.keyCode == VK_LEFT || e.keyCode == VK_RIGHT)) {
            try {
                if (typeof SibboCMP !== 'undefined') {
                    HbbTV.log('SibboCMP');
                    if (!document.getElementsByClassName('sibbo-panel')[0].contains(document.activeElement)) {
                        document.getElementById('acceptAllMain').focus();
                    }
                } else if (typeof __cmp !== 'undefined') {
                    HbbTV.log('Consentmanager');
                    if (!document.getElementById('cmpbox').contains(document.activeElement)) {
                        var yesButtons = document.getElementsByClassName('cmptxt_btn_yes');
                        if (typeof yesButtons !== 'undefined' && typeof yesButtons[0] !== 'undefined') {
                            HbbTV.log('set focus to ' + yesButtons[0]);
                            ErrorReports.log('portal_functions.js', 1360, 'force focus to CMP ' + document.activeElement.id + '-> cmptxt_btn_yes [' + e.keyCode + ']');
                            yesButtons[0].focus();
                        }
                    }
                }
            } catch (err) {
                ErrorReports.log('portal_functions.js', 1393, err);
            }
        }
        if (e.keyCode == 8) {
            if (VK_BACK == 461) {
                VK_BACK = 8;
            }
        } else if (e.keyCode == 461) {
            if (VK_BACK == 8) {
                VK_BACK = 461;
            }
        }
    }, true);
});
