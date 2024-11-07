var closeDialog = {
    'selectedItem': '',
    'typeOfExit': 'exit',
    'yellowTriggerCount': 0,
    'popup_shown': false,
    'showCloseDialog': function(typeOfExit, lastFocusElement) {
        console.log('showCloseDialog....' + typeOfExit);
        if (typeof BALDR != 'undefined' && typeof BALDR.Pause != 'undefined') {
            BALDR.Pause = 1;
            GameInstance.InputBlocked = 1;
        } else if (typeof window["cr_getC2Runtime"] != 'undefined') {
            HbbTV.log('areAllTexturesAndSoundsLoaded:' + window["cr_getC2Runtime"]().areAllTexturesAndSoundsLoaded());
            if (window["cr_getC2Runtime"]().areAllTexturesAndSoundsLoaded() == false && (typeOfExit == 'yellow' || typeOfExit == 'back'))
                return '';
        } else if (typeof c3runtime != 'undefined') {
            if (c3runtime.areAllTexturesAndSoundsLoaded() == false && (typeOfExit == 'yellow' || typeOfExit == 'back')) {
                HbbTV.log('areAllTexturesAndSoundsLoaded= false');
                return '';
            }
        } else if (typeof window["c3_runtimeInterface"] != 'undefined') {
            HbbTV.log('_isLoading:' + window["c3_runtimeInterface"]._GetLocalRuntime()._isLoading);
            if (window["c3_runtimeInterface"]._GetLocalRuntime()._isLoading == true && (typeOfExit == 'yellow' || typeOfExit == 'back')) {
                return '';
            }
        }
        if (closeDialog.popup_shown == true) {
            HbbTV.log('CloseDialog already open.');
            return '';
        }
        closeDialog.popup_shown = true;
        HbbTV.log('showDialog :' + typeof PadRCSimulator);
        if (typeof PadRCSimulator == 'object')
            PadRCSimulator.toggleClosePopup();
        closeDialog.selectedItem = 'closeDialogCloseButton';
        closeDialog.typeOfExit = typeOfExit;
        closeDialog.lastFocusElement = lastFocusElement;
        var insertElement = document.getElementsByTagName('body');
        var errorMsg = document.createElement('div');
        errorMsg.id = 'closeDialogBG';
        errorMsg.style.position = 'absolute';
        errorMsg.style.top = '0px';
        errorMsg.style.left = '0px';
        errorMsg.style.height = '720px';
        errorMsg.style.width = '1280px';
        errorMsg.style.backgroundColor = '#AAA';
        errorMsg.style.opacity = 0.6;
        errorMsg.style.zIndex = 890;
        errorMsg.style.boxShadow = '0px 0px 10px #555';
        insertElement[0].appendChild(errorMsg);
        var errorMsg = document.createElement('div');
        errorMsg.id = 'closeDialogBox';
        if (clientData.lang == 'EN') {
            if (closeDialog.typeOfExit == 'yellow' || closeDialog.typeOfExit == 'back')
                errorMsg.innerHTML = '<div class="closeDialogHeadline">Exit</div>Are you sure you want to exit this game<br /><br /><a href="#" id="closeDialogCloseButton" style="left:35px;" class="closeDialogButton">Exit</a><a  href="#" id="closeDialogContinueButton" style="left:255px;" class="closeDialogButton">Continue game</a>';
            else
                errorMsg.innerHTML = '<div class="closeDialogHeadline">Close</div>Are you sure you want to close  this app<br /><br /><a href="#" id="closeDialogCloseButton" style="left:35px;" class="closeDialogButton">Close App</a><a  href="#" id="closeDialogContinueButton" style="left:255px;" class="closeDialogButton">Continue</a>';
        } else {
            if (closeDialog.typeOfExit == 'yellow' || closeDialog.typeOfExit == 'back')
                errorMsg.innerHTML = '<div class="closeDialogHeadline">Abbrechen</div>Wollen Sie das Spiel wirklich beenden?<br /><br /><a href="#" id="closeDialogCloseButton" style="left:35px;" class="closeDialogButton">Beenden</a><a  href="#" id="closeDialogContinueButton" style="left:255px;" class="closeDialogButton">Weiterspielen</a>';
            else
                errorMsg.innerHTML = '<div class="closeDialogHeadline">Beenden</div>Wollen Sie die App wirklich beenden?<br /><br /><a href="#" id="closeDialogCloseButton" style="left:35px;" class="closeDialogButton">Beenden</a><a  href="#" id="closeDialogContinueButton" style="left:255px;" class="closeDialogButton">Weiterspielen</a>';
        }
        if (window['environment'] == 'SIT' && typeof tizen != 'undefined')
            errorMsg.innerHTML += Math.round(tizen.systeminfo.getAvailableMemory() / (1024 * 1024), 2) + ' Mb';
        insertElement[0].appendChild(errorMsg);
        document.getElementById(closeDialog.selectedItem).focus();
        document.addEventListener('keydown', closeDialog.catchEventsFunction, true);
        document.getElementById('closeDialogCloseButton').addEventListener('click', function(e) {
            e.preventDefault();
            closeDialog.closeDialogCloseButtonClick();
            return false;
        });
        document.getElementById('closeDialogContinueButton').addEventListener('click', function(e) {
            e.preventDefault();
            closeDialog.closePopup(true, true);
            return false;
        });
        if (typeof window["cr_setSuspended"] == 'function')
            window["cr_setSuspended"](true);
        else if (typeof window["c3_runtimeInterface"] !== 'undefined')
            window["c3_runtimeInterface"]._GetLocalRuntime().SetSuspended(true);
    },
    'catchEventsFunction': function(e) {
        e = e ? e : event;
        e.preventDefault();
        HbbTV.log('keys disabled: ' + e.keyCode);
        if (e.keyCode == 10182) {
            closeDialog.closePopup(true, true);
        } else if (e.keyCode == VK_BACK) {
            closeDialog.closePopup(true, true);
        } else if (e.keyCode == VK_LEFT) {
            closeDialog.selectedItem = 'closeDialogCloseButton';
            document.getElementById(closeDialog.selectedItem).focus();
        } else if (e.keyCode == VK_RIGHT || e.keyCode == VK_UP || e.keyCode == VK_DOWN) {
            closeDialog.selectedItem = 'closeDialogContinueButton';
            document.getElementById(closeDialog.selectedItem).focus();
        } else if (e.keyCode == VK_ENTER) {
            if (closeDialog.selectedItem == 'closeDialogCloseButton') {
                console.log('VK_ENTER + closeDialogCloseButtonClick');
                if (closeDialog.typeOfExit == 'yellow' || closeDialog.typeOfExit == 'back') {
                    closeDialog.goBack();
                } else {
                    closeDialog.closeApp();
                }
            } else {
                closeDialog.closePopup(false, true);
            }
        }
        e.stopPropagation();
        return false;
    },
    'closeDialogCloseButtonClick': function() {
        if (closeDialog.typeOfExit == 'yellow' || closeDialog.typeOfExit == 'back')
            closeDialog.goBack();
        else
            closeDialog.closeApp();
    },
    'closePopup': function(delayed, continueGame) {
        closeDialog.removePopup(continueGame);
        if (typeof closeDialog.lastFocusElement == 'object') {
            if (delayed) {
                setTimeout(function() {
                    closeDialog.lastFocusElement.focus();
                }, 500);
            } else {
                closeDialog.lastFocusElement.focus();
            }
        }
    },
    'goBack': function() {
        this.closePopup(false, false);
        console.log('goBack');
        if (closeDialog.typeOfExit == 'back') {
            history.back();
        } else {
            try {
                closeDialog.yellowTriggerCount++;
                portal.__triggerKeyboardEvent(VK_YELLOW);
            } catch (err) {
                HbbTV.log(err);
            }
        }
    },
    'closeApp': function() {
        this.closePopup(false, false);
        if (typeof tizen != 'undefined') {
            tizen.application.getCurrentApplication().exit();
        } else if (pid == 'androidtvapp' || pid == 'firetvapp' || osPlatform == 'android') {
            window.location.href = '/spielecenter/exit';
        } else if (pid == 'dtbox' || pid == 'netgem' || pid == 'lgapp' || pid == 'vidaa' || pid == 'foxxum') {
            HbbTV.log('window.close()');
            window.close();
        } else if (typeof SmartTvA_API != "undefined") {
            HbbTV.log('SmartTvA_API.exit()');
            SmartTvA_API.exit();
        } else if (pid == 'nettv') {
            HbbTV.log('window.history.go(-999)');
            window.history.go(-999);
        } else if (typeof Android != 'undefined') {
            Android.exitApplication();
        }
    },
    'removePopup': function(continueGame) {
        var insertElement = document.getElementsByTagName('body');
        insertElement[0].removeChild(document.getElementById('closeDialogBG'));
        insertElement[0].removeChild(document.getElementById('closeDialogBox'));
        document.removeEventListener('keydown', closeDialog.catchEventsFunction, true);
        HbbTV.log('showDialog :' + typeof PadRCSimulator);
        if (typeof PadRCSimulator == 'object')
            PadRCSimulator.toggleClosePopup();
        closeDialog.popup_shown = false;
        if (continueGame === true) {
            if (typeof BALDR != 'undefined' && typeof BALDR.Pause != 'undefined') {
                BALDR.Pause = 0;
                GameInstance.InputBlocked = 0;
            } else if (typeof window["cr_setSuspended"] == 'function')
                window["cr_setSuspended"](false);
            else if (typeof window["c3_runtimeInterface"] !== 'undefined')
                window["c3_runtimeInterface"]._GetLocalRuntime().SetSuspended(false);
        }
    }
}
var disconnectDialog = {
    'hideDialog': function() {
        var insertElement = document.getElementsByTagName('body');
        insertElement[0].removeChild(document.getElementById('closeDialogBG'));
        insertElement[0].removeChild(document.getElementById('closeDialogBox'));
        document.removeEventListener('keydown', disconnectDialog.catchEventsFunction, true);
        document.removeEventListener('keyup', disconnectDialog.catchEventsFunction, true);
        if (typeof window["cr_setSuspended"] == 'function')
            window["cr_setSuspended"](false);
        else if (typeof window["c3_runtimeInterface"] !== 'undefined')
            window["c3_runtimeInterface"]._GetLocalRuntime().SetSuspended(false);
    },
    'showDialog': function() {
        document.addEventListener('keydown', disconnectDialog.catchEventsFunction, true);
        document.addEventListener('keyup', disconnectDialog.catchEventsFunction, true);
        var insertElement = document.getElementsByTagName('body');
        var errorMsg = document.createElement('div');
        errorMsg.id = 'closeDialogBG';
        errorMsg.style.position = 'absolute';
        errorMsg.style.top = '0px';
        errorMsg.style.left = '0px';
        errorMsg.style.height = '720px';
        errorMsg.style.width = '1280px';
        errorMsg.style.backgroundColor = '#AAA';
        errorMsg.style.opacity = 0.6;
        errorMsg.style.zIndex = 890;
        errorMsg.style.boxShadow = '0px 0px 10px #555';
        insertElement[0].appendChild(errorMsg);
        var errorMsg = document.createElement('div');
        errorMsg.id = 'closeDialogBox';
        if (clientData.lang == 'EN') {
            errorMsg.innerHTML = '<span id="closeDialogBoxHeadline">Oh no,</span><br /><br />the internet connection was disconnected. Please check your connection.<br /><br />With the EXIT key you can close the APP if needed.';
        } else {
            errorMsg.innerHTML = '<span id="closeDialogBoxHeadline">Ups,</span><br /><br />dein TV hat die Internetverbindung verloren. Bitte überprüfe die Verbindung. <br /><br />Mit EXIT Knopf kannst du die App schließen.';
        }
        insertElement[0].appendChild(errorMsg);
        if (typeof window["cr_setSuspended"] == 'function')
            window["cr_setSuspended"](true);
        else if (typeof window["c3_runtimeInterface"] !== 'undefined')
            window["c3_runtimeInterface"]._GetLocalRuntime().SetSuspended(true);
    },
    'catchEventsFunction': function(e) {
        e = e ? e : event;
        e.preventDefault();
        if (e.keyCode == 10182) {
            tizen.application.getCurrentApplication().exit();
        }
        e.stopPropagation();
        return false;
    }
}
