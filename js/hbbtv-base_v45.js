HbbTV = {
    debug: false,
    initialized: false,
    debugLayerDuration: 5000,
    fullscreenClass: 'fullscreen',
    app: undefined,
    keyset: undefined,
    broadcast: undefined,
    broadcastContainer: undefined,
    broadcastStatus: 'init',
    defaultKeyset: 0x1 + 0x2 + 0x4 + 0x8 + 0x10 + 0x20 + 0x100,
    isFullscreenActive: false,
    channelConfig: {},
    hbbtvActivateKeys: null,
    init: function(channel, channelConfig, withBroadcast) {
        try {
            for (var prop in channelConfig) {
                this[prop] = channelConfig[prop];
                if (prop == 'redButtonUrl' && typeof this['redButtonUrl'] != 'undefined' && this['redButtonUrl'] != '') {
                    if (document.getElementById('redButton')) {
                        document.getElementById('redButton').style.display = '';
                        if (prod == 'pro7' || prod == 'pro7at') {
                            HbbTV.log('set red ' + prop + ' ' + prod);
                            document.getElementById('redButton').addEventListener('click', function() {
                                portal.keyDownRed();
                            }, false);
                        }
                    }
                }
                if (prop == 'portalUrl' && typeof this['portalUrl'] != 'undefined' && this['portalUrl'] != '' && prod != 'pro7' && prod != 'pro7at') {
                    if (document.getElementById('greenButton'))
                        document.getElementById('greenButton').style.display = 'block';
                }
                if (prop == 'blueUrl' && typeof this['blueUrl'] != 'undefined' && this['blueUrl'] != '') {
                    if (document.getElementById('blueButton')) {
                        portal.setColorButtonUrl('blue', this['blueUrl'], 'Spiele');
                    }
                }
            }
        } catch (err) {
            ErrorReports.log('hbbtv_base.init()', 37, err);
        }
        try {
            var appMan = document.getElementById('oipfAppMan');
            var oipfConfig = document.getElementById('oipfConfig') || {};
            if (appMan && appMan.getOwnerApplication) {
                this.app = appMan.getOwnerApplication(document);
                HbbTV.log('we get app');
            } else {
                this.app = {};
                this.app.show = function() {
                    if (HbbTV.broadcastContainer) {
                        HbbTV.broadcastContainer.innerHTML = HbbTV.broadcastContainer.innerHTML;
                        if (HbbTV.broadcastContainer.hasChildNodes) {
                            HbbTV.log('bindToCurrentChannel now from init');
                            HbbTV.broadcast = HbbTV.broadcastContainer.childNodes[0];
                            HbbTV.broadcast.bindToCurrentChannel && HbbTV.broadcast.bindToCurrentChannel();
                        }
                    }
                }
                ;
            }
            if (!this.app.privateData)
                this.app.privateData = {};
            this.keyset = this.app.privateData.keyset || oipfConfig.keyset || {};
            this.keyset.setValue || (this.keyset.setValue = function(val) {
                this.value = val;
            }
            );
            this.keyset.setValue(this.defaultKeyset);
            this.log('hbbtv-base.js initialized');
        } catch (err) {
            HbbTV.log('hbbtv_base.init(): ' + err);
            ErrorReports.log('hbbtv_base.init()', 85, err);
        }
        if (withBroadcast == true)
            this.broadcastStatus = 'stopped';
        else
            this.broadcastStatus = 'init';
        if (pid == 'levira')
            this.hbbtvActivateKeys = this.keyset.RED + this.keyset.GREEN;
        else
            this.hbbtvActivateKeys = this.keyset.RED;
    },
    show: function() {
        HbbTV.log('HbbTV.show');
        try {
            this.app.show && this.app.show();
            this.app.activate && this.app.activate();
            this.app.activateInput && this.app.activateInput();
            this.keyset.setValue(this.defaultKeyset);
        } catch (err) {
            this.log('show: ' + err.message);
        }
    },
    pause: function() {
        this.log('we called pause');
        try {
            this.app.hide && this.app.hide();
        } catch (err) {
            this.log('pause: ' + err.message);
        }
        this.broadcastStatus = 'paused';
    },
    unpause: function() {
        this.log('we called unpause');
        try {
            this.app.show && this.app.show();
        } catch (err) {
            this.log('pause: ' + err.message);
        }
    },
    hide: function() {
        try {
            this.app.hide && this.app.hide();
            this.keyset.setValue(this.hbbtvActivateKeys);
        } catch (err) {
            this.log('hide: ' + err.message);
        }
        this.broadcastStatus = 'hidden';
    },
    killApp: function() {
        this.log('killApp called');
        try {
            this.app.destroyApplication();
        } catch (err) {
            this.log('killApp: ' + err.message);
        }
        this.broadcastStatus = 'killed';
    },
    startBroadcast: function(broadcastObjectParentId, broadcastObjectId) {
        try {
            this.broadcastContainer = document.getElementById(broadcastObjectParentId);
            if (!this.broadcastContainer)
                return;
            else {
                this.log('parent broadcastContainer found:' + broadcastObjectParentId);
            }
            HbbTV.log('broadcastObjectId: ' + broadcastObjectId);
            this.broadcast = document.getElementById(broadcastObjectId);
            if (!this.broadcast) {
                this.log('add broadcast object:' + broadcastObjectId);
                this.broadcastContainer.innerHTML = '<object id="' + broadcastObjectId + '" type="video/broadcast"></object>';
            }
            this.broadcastElementId = broadcastObjectId;
            HbbTV.log('wait 20 -> bindToCurrentChannel');
            setTimeout(function() {
                HbbTV.log('bindToCurrentChannel now');
                if (!HbbTV.broadcast)
                    HbbTV.broadcast = document.getElementById(broadcastObjectId);
                try {
                    HbbTV.broadcast.addEventListener('PlayStateChange', function() {
                        switch (HbbTV.broadcast.playState) {
                        case 0:
                            HbbTV.log('hbbtv state: 0');
                            break;
                        case 1:
                            HbbTV.log('hbbtv state: 1');
                            break;
                        case 2:
                            HbbTV.log('hbbtv state: 2');
                            break;
                        case 3:
                            HbbTV.log('hbbtv state: 3');
                            break;
                        default:
                            HbbTV.log('hbbtv state: error');
                        }
                    });
                } catch (err) {}
                try {
                    if (typeof (HbbTV.broadcast.bindToCurrentChannel) != 'undefined') {
                        HbbTV.log('bindToCurrentChannel');
                        HbbTV.broadcast.bindToCurrentChannel();
                        HbbTV.broadcastStatus = 'started';
                    } else {
                        if (HbbTV['tvScrenFallbackImg'])
                            HbbTV.broadcastContainer.innerHTML = '<img id="' + broadcastObjectId + '" src="' + HbbTV['tvScrenFallbackImg'] + '" alt="" />';
                    }
                } catch (err) {
                    HbbTV.log('erro bindToCurrentChannel: ' + err);
                    HbbTV.broadcastStatus = 'stopped';
                    if (HbbTV['tvScrenFallbackImg'])
                        HbbTV.broadcastContainer.innerHTML = '<img id="' + broadcastObjectId + '" src="' + HbbTV['tvScrenFallbackImg'] + '" alt="" />';
                    ErrorReports.log('hbbtv_base bind failed', 207, JSON.stringify(err));
                }
            }, 20);
        } catch (err) {
            ErrorReports.log('hbbtv_base.startBroadcast()', 212, err);
        }
    },
    stopBroadcast: function() {
        try {
            HbbTV.log('stopBroadcast');
            if (!this.broadcast)
                return;
            this.broadcast.release && this.broadcast.release();
            if (this.broadcastContainer)
                this.broadcastContainer.removeChild(this.broadcast);
            this.broadcast = undefined;
        } catch (err) {
            ErrorReports('stopBroadcast: ' + err, 254, 'hbbtv-base.js');
            this.log('stopBroadcast: ' + err.message);
        }
        this.broadcastStatus = 'stopped';
    },
    isFullScreen: function() {
        try {
            return new RegExp('(?:^|\\s+)' + this.fullscreenClass + '(?:\\s+|$)').test(this.broadcast.className);
        } catch (err) {
            this.log('isFullScreen: ' + err.message);
        }
    },
    setFullScreen: function(on) {
        this.log('setFullScreen(' + on + ')');
        try {
            if (on) {
                this.isFullscreenActive = true;
                this.hide();
                if (!this.isFullScreen())
                    this.broadcast.className = [this.broadcast, this.fullscreenClass].join(' ').replace(/^\s*|\s*$/g, "");
                this.broadcast.setFullScreen(true);
            } else {
                if (this.isFullScreen()) {
                    var curClasses = this.broadcast.className;
                    var re = new RegExp('(?:^|\\s+)' + this.fullscreenClass + '(?:\\s+|$)','g');
                    this.broadcast.className = curClasses.replace(re, ' ').replace(/^\s*|\s*$/g, "");
                }
                this.broadcast.setFullScreen(false);
                this.isFullscreenActive = false;
                this.show();
            }
        } catch (err) {
            this.log('setFullScreen: ' + err.message);
        }
    },
    timestamp: function() {
        return (new Date()).toTimeString().substring(0, 8);
    },
    debugLines: 0,
    debugTimeout: 0,
    log: function(message) {
        if (this.debug) {
            var debug = document.getElementById('debug');
            if (this.debugLayerDuration > 0) {
                if (this.debugTimeout == 0) {
                    function hideDebug() {
                        var now = (new Date()).getTime();
                        if (HbbTV.debugTimeout > now + 100) {
                            window.setTimeout(hideDebug, HbbTV.debugTimeout - now);
                        } else {
                            debug.style.display = 'none';
                            HbbTV.debugTimeout = 0;
                        }
                    }
                    this.debugTimeout = (new Date()).getTime() + this.debugLayerDuration;
                    debug.style.display = 'block';
                    hideDebug();
                }
            } else {
                return;
            }
            if (this.debugLines >= 30) {
                while (this.debugLines > 2) {
                    debug.removeChild(debug.firstChild.nextSibling);
                    this.debugLines--;
                }
            }
            var content = document.createTextNode(this.timestamp() + ' - ' + message);
            var line = document.createElement('p');
            line.appendChild(content);
            debug.appendChild(line);
            this.debugLines++;
        }
    }
};
