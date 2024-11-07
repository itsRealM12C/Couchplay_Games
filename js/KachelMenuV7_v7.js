var KachelMenu = {
    'boxMargin': 6,
    'boxHeight': 104,
    'boxWidth': 146,
    'topOffsetSteps': 0,
    'gamesPerRow': 2,
    'gameListLength': 0,
    'containerInit': true,
    'currentFocus': 2,
    'currentFocusEle': null,
    'currentGameId': 0,
    'currentRecommend': 0,
    'lastFocus': null,
    'tokens': [],
    'gameOrder': {},
    'gamesData': [],
    'categories': [],
    'preferedOrder': [],
    'subCategoryData': {},
    'gameBox': null,
    'filter': 'nav_top',
    'catId': 0,
    'currentRow': 'kachel',
    'currentMenuFocus': 0,
    'currentSubMenuFocus': 0,
    'menuList': [],
    'subMenuList': [],
    'defaulftGameColor': '666666',
    'movesToDo': 0,
    'movesAnimated': true,
    'moviePlaying': false,
    'moviePlayInitialized': false,
    'player': null,
    'playerState': '',
    'gamePreviewMovieSize': 'medium',
    'fullscreenButtonTimer': 0,
    'gamePreviewMovieVisible': false,
    'gamePreviewButtonVisible': false,
    'gamePreviewFullAreaVisible': false,
    'kachelContainerWidth': 1280,
    'mouseEnabled': false,
    'mouseScroller': null,
    'mouseMoving': false,
    'scrollArrowTimer': null,
    'favoriteGames': [],
    'favoritesLocked': false,
    'animations': true,
    'specialGames': {},
    'comingSoonDivTimeout': 0,
    'code': '',
    'lastGameIdToggled': 0,
    'settings': {},
    'scrollArrowData': {
        'timer': 0,
        'elemId': ''
    },
    'laneData': {},
    'currentLane': 0,
    'lastLane': 0,
    'laneChanged': false,
    'columnPosition': 2,
    'laneHeight': 130,
    'laneLastTop': 0,
    'longPressTimer': 0,
    'longPressOn': false,
    'keyState': 'u',
    'keyMap': [],
    'focusedElement': '',
    'likePopupData': {
        'gameId': 0,
        'show': false
    },
    'iconNavi': {},
    'spriteData': {},
    'gamePadConnected': false,
    'cmpResetFocusTime': 0,
    'videoListenersAdded': false,
    'init': function(tmpTokens, tmpGamesData, tmpMenuList, tmpPreferedOrder, subCategoryData, favoriteGames, settings, tmpFilter, tmpCatId, startPosition, animations, specialGames, tmpIconNavi, spriteData) {
        HbbTV.log('init');
        this.tokens = tmpTokens;
        this.gamesData = tmpGamesData;
        this.animations = animations;
        this.preferedOrder = tmpPreferedOrder;
        this.subCategoryData = subCategoryData;
        this.favoriteGames = favoriteGames;
        this.specialGames = specialGames;
        this.settings = settings;
        this.spriteData = spriteData;
        this.iconNavi.list = tmpIconNavi;
        this.iconNavi.isOpen = false;
        this.iconNavi.pos = 1;
        this.disableClicks = false;
        this.kachelContainerWidth = 1154;
        for (var i = 0; i < this.favoriteGames.length; i++) {
            if (KachelMenu.gamesData[this.favoriteGames[i]]) {
                KachelMenu.gamesData[this.favoriteGames[i]].likes--;
            }
        }
        this.initKeyMap();
        this.gamePreviewEle = document.getElementById('gamePreviewImage');
        this.gameMetaEle = document.getElementById('gameMeta');
        this.gameNameEle = document.getElementById('gameName');
        this.gameDescEle = document.getElementById('gameDesc');
        this.gameStatsEle = document.getElementById('gameStats');
        this.gameCategoryEle = document.getElementById('gameCategory');
        this.gameFavoritesEle = document.getElementById('gameFavorites');
        if (document.getElementById('gameCategoryIcon'))
            this.gameCategoryIconEle = document.getElementById('gameCategoryIcon');
        if (document.getElementById('videoPlayer')) {
            this.player = document.getElementById('videoPlayer');
            this.playerState = 'init';
            var hiddenName, visibilityChangeListenerName;
            if (typeof document.hidden !== "undefined") {
                hiddenName = "hidden";
                visibilityChangeListenerName = "visibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                hiddenName = "webkitHidden";
                visibilityChangeListenerName = "webkitvisibilitychange";
            }
            if (hiddenName != '' && visibilityChangeListenerName != '') {
                document.addEventListener(visibilityChangeListenerName, function() {
                    try {
                        if (document[hiddenName]) {
                            if (KachelMenu.playerState == 'playing') {
                                KachelMenu.playerState = 'paused';
                                if (videoAdParams.htmlMode == 'html')
                                    KachelMenu.player.pause();
                                else
                                    KachelMenu.player.play(0);
                            }
                        } else {
                            if (KachelMenu.playerState == 'paused') {
                                KachelMenu.playerState = 'playing';
                                if (videoAdParams.htmlMode == 'html')
                                    KachelMenu.player.play();
                                else
                                    KachelMenu.player.play(1);
                            }
                        }
                    } catch (e) {}
                }, false);
            }
        }
        if (document.getElementById('TVTime') && document.getElementById('TVTime')) {
            this.TVTime = document.getElementById('TVTime');
            this.TVDate = document.getElementById('TVDate');
            this.initTime();
        }
        this.gamePreviewFullAreaEle = document.getElementById('gamePreviewFullArea');
        if (startPosition >= 0) {
            this.currentFocus = startPosition;
        }
        this.menuList = tmpMenuList;
        this.currentLane = this.menuList.indexOf(tmpFilter);
        if (this.currentLane == -1)
            this.currentLane = 0;
        this.catId = tmpCatId;
        var self = this;
        if (document.getElementById('kachelContainer') != null)
            this.gameBox = document.getElementById('kachelContainer');
        else
            KachelMenu.reportError(40, 'no element gameBoxContainer found');
        KachelMenu.createContainer(function() {
            KachelMenu.scrollBox(function() {
                KachelMenu.setMovesAnimated(true);
                KachelMenu.changeLane();
                if (document.getElementById('popup') && document.getElementById('popup').className == 'welcome') {
                    KachelMenu.setFocusedContainer('popup');
                    if (document.getElementById('addToHomeScreenNowButton'))
                        KachelMenu.setFocus('addToHomeScreenNowButton');
                    KachelMenu.currentFocusEle.style.top = '0px';
                    KachelMenu.currentFocusEle.classList.remove('gameKachelSelected');
                } else if (document.getElementById('popup') && document.getElementById('popup').className == 'notification') {
                    KachelMenu.setFocusedContainer('popup');
                    if (document.getElementById('popupButtonLetsPlay'))
                        KachelMenu.setFocus('popupButtonLetsPlay');
                    KachelMenu.currentFocusEle.style.top = '0px';
                    KachelMenu.currentFocusEle.classList.remove('gameKachelSelected');
                } else if (document.getElementById('popup') && document.getElementById('popup').className == 'consent') {
                    KachelMenu.setFocusedContainer('popup');
                    KachelMenu.setFocus('consentAcceptButton');
                    KachelMenu.currentFocusEle.style.top = '0px';
                    KachelMenu.currentFocusEle.classList.remove('gameKachelSelected');
                } else if (document.getElementById('popup') && document.getElementById('popup').className == 'accountTransfer') {
                    KachelMenu.setFocusedContainer('popup');
                    KachelMenu.setFocus('popupYesButton');
                    KachelMenu.currentFocusEle.style.top = '0px';
                    KachelMenu.currentFocusEle.classList.remove('gameKachelSelected');
                } else if (document.getElementById('popup') && document.getElementById('popup').className == 'internationApp') {
                    KachelMenu.setFocusedContainer('popup');
                    KachelMenu.setFocus('internationAppInstallButton');
                    KachelMenu.currentFocusEle.style.top = '0px';
                    KachelMenu.currentFocusEle.classList.remove('gameKachelSelected');
                }
                KachelMenu.containerInit = false;
            });
        });
        HbbTV.log('paint finished');
        HbbTV.log('register keyup');
        document.addEventListener('keyup', function(e) {
            KachelMenu.disableClicks = false;
        }, false);
        HbbTV.log('register keydown');
        document.addEventListener('keydown', function(e) {
            HbbTV.log('KachelMenu7: ' + e.type + ' ' + e.keyCode + ' cmp_open: ' + portal.isCmpBannerOpen());
            if (portal.isCmpBannerOpen()) {
                HbbTV.log('we are in the cmp');
                if (e.keyCode == VK_UP || e.keyCode == VK_DOWN || e.keyCode == VK_LEFT || e.keyCode == VK_RIGHT) {
                    if (KachelMenu.cmpResetFocusTime < new Date().getTime() - 3000) {
                        try {
                            KachelMenu.cmpResetFocusTime = new Date().getTime();
                            if (document.getElementById('acceptAllMain')) {
                                ErrorReports.log('KachelMenu_v7.js', 357, 'force focus to CMP -> acceptAllMain');
                                document.getElementById('acceptAllMain').focus();
                            } else {
                                var yesButtons = document.getElementsByClassName('cmptxt_btn_yes');
                                if (typeof yesButtons !== 'undefined' && typeof yesButtons[0] !== 'undefined') {
                                    ErrorReports.log('KachelMenu_v7.js', 357, 'force focus to CMP -> cmptxt_btn_yes');
                                    yesButtons[0].focus();
                                }
                            }
                        } catch (err) {
                            ErrorReports.log('KachelMenu_v7.js', 357, 'cmpBannerOpen error' + err);
                        }
                    }
                    return;
                }
            }
            var buttonNavigation = false;
            if (e.keyCode == VK_UP || e.keyCode == VK_DOWN || e.keyCode == VK_LEFT || e.keyCode == VK_RIGHT) {
                e.preventDefault();
                buttonNavigation = KachelMenu.navigationKeyPress(e.keyCode);
            }
            HbbTV.log('KachelMenu7: ' + e.keyCode + ' buttonNavigation: ' + buttonNavigation);
            if (e.keyCode == VK_1) {
                if (typeof KachelMenu.gamesData[KachelMenu.currentGameId] == 'undefined' || KachelMenu.gamesData[KachelMenu.currentGameId].comingSoon == 1) {} else {
                    KachelMenu.showLikePopup(KachelMenu.currentGameId);
                }
            } else if (e.keyCode == VK_2) {
                KachelMenu.movesToDo++;
                KachelMenu.lastFocus = KachelMenu.currentFocus;
                KachelMenu.currentFocus = KachelMenu.laneData[KachelMenu.currentLane].count - 1;
                KachelMenu.columnPosition = 6;
                KachelMenu.scrollBox();
                KachelMenu.flashElement('kachelScrollArrowRight');
            } else if (e.keyCode == VK_3) {
                KachelMenu.showLikePopup(KachelMenu.currentGameId);
            } else if (buttonNavigation == false) {
                KachelMenu.laneChanged = false;
                HbbTV.log('Kachel ' + e.type + ' ' + e.keyCode);
                switch (e.keyCode) {
                case VK_UP:
                    e.preventDefault();
                    e.stopPropagation();
                    if (KachelMenu.currentRow == 'iconNavi') {
                        KachelMenu.iconNavi.pos--;
                        if (KachelMenu.iconNavi.pos < 0)
                            KachelMenu.iconNavi.pos = KachelMenu.iconNavi.list.length - 1;
                        document.getElementById('iconNavi_' + KachelMenu.iconNavi.pos).focus();
                    } else if (KachelMenu.currentRow == 'kachel') {
                        if (KachelMenu.currentLane <= 0)
                            break;
                        if (KachelMenu.movieTimer)
                            clearTimeout(KachelMenu.movieTimer);
                        KachelMenu.lastLane = KachelMenu.currentLane;
                        KachelMenu.lastFocus = KachelMenu.currentFocus;
                        HbbTV.log('KachelMenu.currentLane: ' + KachelMenu.currentLane);
                        KachelMenu.currentLane = Math.max(0, --KachelMenu.currentLane);
                        HbbTV.log('KachelMenu.currentLane: ' + KachelMenu.currentLane);
                        KachelMenu.changeLane();
                        setTimeout(function() {
                            KachelMenu.scrollBox();
                        }, 100);
                    }
                    break;
                case VK_RIGHT:
                    e.preventDefault();
                    e.stopPropagation();
                    if (KachelMenu.movieTimer)
                        clearTimeout(KachelMenu.movieTimer);
                    if (KachelMenu.currentRow == 'playButton') {} else if (KachelMenu.currentRow == 'topBar') {
                        if (prod == 'pro7' && document.getElementById('redButton'))
                            document.getElementById('redButton').focus();
                    } else if (KachelMenu.currentRow == 'kachel') {
                        KachelMenu.movesToDo++;
                        KachelMenu.lastFocus = KachelMenu.currentFocus;
                        KachelMenu.currentFocus = KachelMenu.currentFocus + 1;
                        if (KachelMenu.columnPosition < 2)
                            KachelMenu.columnPosition++;
                        KachelMenu.scrollBox();
                        KachelMenu.flashElement('kachelScrollArrowRight');
                    } else if (KachelMenu.currentRow == 'submenu') {
                        KachelMenu.currentSubMenuFocus++;
                        if (KachelMenu.currentSubMenuFocus >= KachelMenu.subMenuList.length)
                            KachelMenu.currentSubMenuFocus = 0;
                        document.getElementById(KachelMenu.subMenuList[KachelMenu.currentSubMenuFocus]).focus();
                    } else if (KachelMenu.currentRow == 'menu') {
                        KachelMenu.currentMenuFocus = KachelMenu.currentMenuFocus + 1;
                        if (KachelMenu.currentMenuFocus >= KachelMenu.menuList.length)
                            KachelMenu.currentMenuFocus = 0;
                        KachelMenu.scrollMenu(1);
                        KachelMenu.flashElement('kachelScrollArrowRight2');
                    } else if (KachelMenu.currentRow == 'iconNavi') {
                        KachelMenu.toggleIconNavi(false, true);
                        KachelMenu.scrollBox();
                    }
                    break;
                case VK_LEFT:
                    e.preventDefault();
                    e.stopPropagation();
                    if (KachelMenu.movieTimer)
                        clearTimeout(KachelMenu.movieTimer);
                    if (KachelMenu.currentRow == 'playButton') {} else if (KachelMenu.currentRow == 'topBar') {
                        if (prod == 'pro7' && document.getElementById('topBarBackButton'))
                            document.getElementById('topBarBackButton').focus();
                    } else if (KachelMenu.currentRow == 'kachel') {
                        KachelMenu.movesToDo++;
                        KachelMenu.lastFocus = KachelMenu.currentFocus;
                        KachelMenu.currentFocus = KachelMenu.currentFocus - 1;
                        if (KachelMenu.columnPosition > 2)
                            KachelMenu.columnPosition--;
                        if (KachelMenu.currentFocus < 0) {
                            KachelMenu.currentFocus = 0;
                            KachelMenu.toggleIconNavi(true, true);
                        } else
                            KachelMenu.scrollBox();
                        KachelMenu.flashElement('kachelScrollArrowLeft');
                    } else if (KachelMenu.currentRow == 'submenu') {
                        KachelMenu.currentSubMenuFocus--;
                        if (KachelMenu.currentSubMenuFocus < 0)
                            KachelMenu.currentSubMenuFocus = KachelMenu.subMenuList.length - 1;
                        document.getElementById(KachelMenu.subMenuList[KachelMenu.currentSubMenuFocus]).focus();
                    } else if (KachelMenu.currentRow == 'menu') {
                        KachelMenu.currentMenuFocus = KachelMenu.currentMenuFocus - 1;
                        if (KachelMenu.currentMenuFocus < 0)
                            KachelMenu.currentMenuFocus = KachelMenu.menuList.length - 1;
                        KachelMenu.flashElement('kachelScrollArrowLeft2');
                        KachelMenu.scrollMenu(-1);
                    }
                    break;
                case VK_DOWN:
                    e.preventDefault();
                    e.stopPropagation();
                    if (KachelMenu.currentRow == 'iconNavi') {
                        KachelMenu.iconNavi.pos++;
                        if (KachelMenu.iconNavi.pos >= KachelMenu.iconNavi.list.length)
                            KachelMenu.iconNavi.pos = 0;
                        document.getElementById('iconNavi_' + KachelMenu.iconNavi.pos).focus();
                    } else if (KachelMenu.currentRow == 'kachel') {
                        if (KachelMenu.movieTimer)
                            clearTimeout(KachelMenu.movieTimer);
                        KachelMenu.lastLane = KachelMenu.currentLane;
                        KachelMenu.lastFocus = KachelMenu.currentFocus;
                        KachelMenu.currentLane = Math.min(KachelMenu.menuList.length - 1, ++KachelMenu.currentLane);
                        KachelMenu.changeLane();
                        setTimeout(function() {
                            KachelMenu.scrollBox();
                        }, 100);
                    }
                    break;
                case VK_GREEN:
                    break;
                case VK_YELLOW:
                    break;
                }
            }
        }, false);
        if (document.getElementById('consentAcceptButton')) {
            KachelMenu.setFocusedContainer('consent');
            document.getElementById('consentAcceptButton').addEventListener("click", function(e) {
                KachelMenu.consentAcceptButtonClick();
            }, false);
        }
        if (document.getElementById('consentShowPrivacyButton'))
            document.getElementById('consentShowPrivacyButton').addEventListener("click", function(e) {
                KachelMenu.consentShowPrivacyButtonClick();
            }, false);
        if (document.getElementById('popupButtonLetsPlay'))
            document.getElementById('popupButtonLetsPlay').addEventListener("click", function(e) {
                KachelMenu.popupButtonLetsPlayClick();
            }, false);
        if (document.getElementById('addToHomeScreenNowButton'))
            document.getElementById('addToHomeScreenNowButton').addEventListener("click", function(e) {
                KachelMenu.addToHomeScreenNowButtonClick();
            }, false);
        if (document.getElementById('addToHomeScreenLaterButton'))
            document.getElementById('addToHomeScreenLaterButton').addEventListener("click", function(e) {
                KachelMenu.addToHomeScreenLaterButtonClick();
            }, false);
        if (document.getElementById('internationAppInstallButton'))
            document.getElementById('internationAppInstallButton').addEventListener("click", function(e) {
                KachelMenu.internationAppInstallButtonClick();
            }, false);
        if (document.getElementById('internationAppLaterButton'))
            document.getElementById('internationAppLaterButton').addEventListener("click", function(e) {
                KachelMenu.internationAppLaterButtonClick();
            }, false);
        if (document.getElementById('popupNoButton')) {
            document.getElementById('popupNoButton').addEventListener("click", function(e) {
                KachelMenu.popupNoButtonClick();
            }, false);
        }
        if (document.getElementById('popupYesButton')) {
            document.getElementById('popupYesButton').addEventListener("click", function(e) {
                KachelMenu.popupYesButtonClick();
            }, false);
        }
        if (document.getElementById('kachelScrollArrowLeft')) {
            document.getElementById('kachelScrollArrowLeft').addEventListener('click', function() {
                KachelMenu.lastFocus = KachelMenu.currentFocus;
                KachelMenu.currentFocus = KachelMenu.currentFocus - 1;
                KachelMenu.scrollBox();
                KachelMenu.flashElement('kachelScrollArrowLeft');
            }, false);
        }
        if (document.getElementById('kachelScrollArrowRight')) {
            document.getElementById('kachelScrollArrowRight').addEventListener('click', function() {
                KachelMenu.lastFocus = KachelMenu.currentFocus;
                KachelMenu.currentFocus = KachelMenu.currentFocus + 1;
                KachelMenu.scrollBox();
                KachelMenu.flashElement('kachelScrollArrowRight');
            }, false);
        }
        if (document.getElementById('likePopupLikeButton')) {
            document.getElementById('likePopupLikeButton').addEventListener('click', function() {
                if (KachelMenu.disableClicks)
                    return;
                HbbTV.log('likePopupLikeButton click');
                KachelMenu.toggleFavorite(KachelMenu.likePopupData.gameId);
            }, false);
        }
        if (document.getElementById('likePopupPlayButton')) {
            document.getElementById('likePopupPlayButton').addEventListener('click', function() {
                if (KachelMenu.disableClicks)
                    return;
                if (KachelMenu.checkGameData(KachelMenu.currentGameId, 'url'))
                    window.location.href = KachelMenu.gamesData[KachelMenu.currentGameId].url;
            }, false);
        }
        if (document.getElementById('likePopupCloseButton')) {
            document.getElementById('likePopupCloseButton').addEventListener('click', function() {
                KachelMenu.closeLikePopup();
            }, false);
        }
        for (var i = 0; i < this.iconNavi.list.length; i++) {
            if (typeof this.iconNavi.list[i].jump != 'undefined') {
                (function(jumpPoint, navPos) {
                    document.getElementById('iconNavi_' + navPos).addEventListener('click', function(e) {
                        KachelMenu.iconNavi.pos = navPos;
                        KachelMenu.jumpToLane(jumpPoint);
                    });
                }
                )(this.iconNavi.list[i].jump, i);
            } else if (typeof this.iconNavi.list[i].funcCall != 'undefined' && typeof this.iconNavi.list[i].funcObject != 'undefined') {
                (function(funcObject, funcCall, navPos) {
                    document.getElementById('iconNavi_' + navPos).addEventListener('click', function(e) {
                        if (KachelMenu.currentRow !== 'iconNavi')
                            return '';
                        KachelMenu.iconNavi.pos = navPos;
                        window[funcObject][funcCall]();
                    });
                }
                )(this.iconNavi.list[i].funcObject, this.iconNavi.list[i].funcCall, i);
            } else if (typeof this.iconNavi.list[i].funcCall != 'undefined') {
                (function(funcCall, navPos) {
                    document.getElementById('iconNavi_' + navPos).addEventListener('click', function(e) {
                        if (KachelMenu.currentRow !== 'iconNavi')
                            return '';
                        KachelMenu.iconNavi.pos = navPos;
                        window[funcCall]();
                    });
                }
                )(this.iconNavi.list[i].funcCall, i);
            }
        }
        if (pid == 'lgapp') {
            HbbTV.log('register mouseover');
            document.getElementById('iconNavi').addEventListener('mouseover', function(e) {
                KachelMenu.toggleIconNavi(true, false);
            });
            document.getElementById('iconNavi').addEventListener('mouseout', function(e) {
                KachelMenu.toggleIconNavi(false, false);
            });
            HbbTV.log('register mousewheel');
            document.addEventListener('mousewheel', function(e) {
                if (KachelMenu.movieTimer)
                    clearTimeout(KachelMenu.movieTimer);
                KachelMenu.lastLane = KachelMenu.currentLane;
                KachelMenu.lastFocus = KachelMenu.currentFocus;
                if (e.wheelDelta < 0) {
                    KachelMenu.currentLane = Math.min(KachelMenu.menuList.length - 1, ++KachelMenu.currentLane);
                } else if (e.wheelDelta > 0) {
                    KachelMenu.currentLane = Math.max(0, --KachelMenu.currentLane);
                }
                KachelMenu.changeLane();
                setTimeout(function() {
                    KachelMenu.scrollBox();
                }, 100);
            }, true);
        }
        HbbTV.log('register gamepadconnected');
        window.addEventListener("gamepadconnected", function(e) {
            KachelMenu.gamePadConnected = true;
        });
    },
    'setFocusedContainer': function(container) {
        if (container == 'kachel')
            this.setFocus('kachel');
        this.currentRow = container;
    },
    'initKeyMap': function() {
        this.keyMap['likePopupLikeButton'] = {};
        this.keyMap['likePopupLikeButton']['u'] = 'likePopupCloseButton';
        this.keyMap['likePopupLikeButton']['d'] = 'likePopupPlayButton';
        this.keyMap['likePopupLikeButton']['l'] = function() {
            KachelMenu.closeLikePopup()
        }
        ;
        this.keyMap['likePopupLikeButton']['r'] = function() {
            KachelMenu.closeLikePopup()
        }
        ;
        this.keyMap['likePopupPlayButton'] = {};
        this.keyMap['likePopupPlayButton']['u'] = 'likePopupLikeButton';
        this.keyMap['likePopupPlayButton']['d'] = 'likePopupFeedbackButton';
        this.keyMap['likePopupPlayButton']['l'] = function() {
            KachelMenu.closeLikePopup()
        }
        ;
        this.keyMap['likePopupPlayButton']['r'] = function() {
            KachelMenu.closeLikePopup()
        }
        ;
        this.keyMap['likePopupFeedbackButton'] = {};
        this.keyMap['likePopupFeedbackButton']['u'] = 'likePopupPlayButton';
        this.keyMap['likePopupFeedbackButton']['d'] = 'likePopupCloseButton';
        this.keyMap['likePopupFeedbackButton']['l'] = function() {
            KachelMenu.closeLikePopup()
        }
        ;
        this.keyMap['likePopupFeedbackButton']['r'] = function() {
            KachelMenu.closeLikePopup()
        }
        ;
        this.keyMap['likePopupCloseButton'] = {};
        this.keyMap['likePopupCloseButton']['u'] = 'likePopupFeedbackButton';
        this.keyMap['likePopupCloseButton']['l'] = function() {
            KachelMenu.closeLikePopup()
        }
        ;
        this.keyMap['likePopupCloseButton']['r'] = function() {
            KachelMenu.closeLikePopup()
        }
        ;
        this.keyMap['likePopupCloseButton']['d'] = 'likePopupLikeButton';
        this.keyMap['popupButtonLetsPlay'] = {};
        this.keyMap['popupButtonLetsPlay']['r'] = 'popupButtonLetsPlay';
        this.keyMap['popupButtonLetsPlay']['l'] = 'popupButtonLetsPlay';
        this.keyMap['popupButtonLetsPlay']['u'] = 'popupButtonLetsPlay';
        this.keyMap['popupButtonLetsPlay']['d'] = 'popupButtonLetsPlay';
        this.keyMap['addToHomeScreenNowButton'] = {};
        this.keyMap['addToHomeScreenNowButton']['r'] = 'addToHomeScreenLaterButton';
        this.keyMap['addToHomeScreenNowButton']['l'] = 'addToHomeScreenNowButton';
        this.keyMap['addToHomeScreenNowButton']['u'] = 'addToHomeScreenNowButton';
        this.keyMap['addToHomeScreenNowButton']['d'] = 'addToHomeScreenNowButton';
        this.keyMap['addToHomeScreenLaterButton'] = {};
        this.keyMap['addToHomeScreenLaterButton']['l'] = 'addToHomeScreenNowButton';
        this.keyMap['addToHomeScreenLaterButton']['r'] = 'addToHomeScreenLaterButton';
        this.keyMap['addToHomeScreenLaterButton']['u'] = 'addToHomeScreenLaterButton';
        this.keyMap['addToHomeScreenLaterButton']['d'] = 'addToHomeScreenLaterButton';
        this.keyMap['internationAppInstallButton'] = {};
        this.keyMap['internationAppInstallButton']['r'] = 'internationAppLaterButton';
        this.keyMap['internationAppInstallButton']['l'] = 'internationAppInstallButton';
        this.keyMap['internationAppInstallButton']['u'] = 'internationAppInstallButton';
        this.keyMap['internationAppInstallButton']['d'] = 'internationAppInstallButton';
        this.keyMap['internationAppLaterButton'] = {};
        this.keyMap['internationAppLaterButton']['l'] = 'internationAppInstallButton';
        this.keyMap['internationAppLaterButton']['r'] = 'internationAppLaterButton';
        this.keyMap['internationAppLaterButton']['u'] = 'internationAppLaterButton';
        this.keyMap['internationAppLaterButton']['d'] = 'internationAppLaterButton';
        this.keyMap['consentShowPrivacyButton'] = {};
        this.keyMap['consentShowPrivacyButton']['r'] = 'consentAcceptButton';
        this.keyMap['consentShowPrivacyButton']['l'] = 'consentShowPrivacyButton';
        this.keyMap['consentShowPrivacyButton']['u'] = 'consentShowPrivacyButton';
        this.keyMap['consentShowPrivacyButton']['d'] = 'consentShowPrivacyButton';
        this.keyMap['consentAcceptButton'] = {};
        this.keyMap['consentAcceptButton']['l'] = 'consentShowPrivacyButton';
        this.keyMap['consentAcceptButton']['r'] = 'consentAcceptButton';
        this.keyMap['consentAcceptButton']['u'] = 'consentAcceptButton';
        this.keyMap['consentAcceptButton']['d'] = 'consentAcceptButton';
    },
    'jumpToLane': function(laneId) {
        var currentLane = KachelMenu.menuList.indexOf(laneId);
        KachelMenu.lastLane = KachelMenu.currentLane;
        KachelMenu.lastFocus = KachelMenu.currentFocus;
        KachelMenu.currentLane = KachelMenu.menuList.indexOf(laneId);
        KachelMenu.changeLane();
        KachelMenu.toggleIconNavi(false, true);
        KachelMenu.scrollBox();
    },
    'toggleIconNavi': function(openNavi, setFocus) {
        if (openNavi == true) {
            this.iconNavi.isOpen = true;
            document.getElementById('iconNavi').style.width = '300px';
            if (setFocus) {
                document.getElementById('iconNavi_' + this.iconNavi.pos).focus();
            }
            KachelMenu.setFocusedContainer('iconNavi');
        } else if (openNavi == false) {
            document.getElementById('iconNavi').style.width = '70px';
            this.iconNavi.isOpen = false;
            KachelMenu.setFocusedContainer('kachel');
        }
    },
    'navigationKeyPress': function(keycode) {
        var dir = '';
        if (keycode == VK_UP)
            dir = 'u';
        else if (keycode == VK_DOWN)
            dir = 'd';
        else if (keycode == VK_LEFT)
            dir = 'l';
        else if (keycode == VK_RIGHT)
            dir = 'r';
        if (typeof this.keyMap[this.focusedElement] != 'undefined') {
            if (typeof this.keyMap[this.focusedElement][dir] == 'function') {
                this.keyMap[this.focusedElement][dir]();
            } else {
                if (document.getElementById(this.keyMap[this.focusedElement][dir]))
                    return this.setFocus(this.keyMap[this.focusedElement][dir]);
                else
                    return true;
            }
        } else {
            return false;
        }
    },
    'setFocus': function(newFocus) {
        if (newFocus == 'kachel') {
            this.currentRow = 'kachel';
            this.focusedElement = newFocus;
            KachelMenu.currentFocusEle.focus();
            return true;
        } else if (typeof KachelMenu.keyMap[newFocus] != 'undefined' && document.getElementById(newFocus)) {
            this.focusedElement = newFocus;
            document.getElementById(this.focusedElement).focus();
            return true;
        } else
            return false;
    },
    'addToHomeScreenNowButtonClick': function() {
        if (document.getElementById('addToHomeScreenPopupLoader'))
            document.getElementById('addToHomeScreenPopupLoader').style.display = 'block';
        portal.updateSettings('clickAddToHomesc', 1, function() {
            if (typeof _paq == 'object')
                _paq.push(['trackEvent', 'Menu', 'Click', 'clickAddToHomescreen']);
            portal.pushTrackingInfo("PageLoad", "PAGE", "clickAddToHomescreen", "STARTPAGE");
            if (typeof SamsungApps != 'undefined' && typeof SamsungApps.samsung_launch_appstore == 'function')
                if (pid == 'samsungapp_ww')
                    SamsungApps.samsung_launch_appstore(3202207027942, 3202207027942);
                else
                    SamsungApps.samsung_launch_appstore(3201609010528, 3201609010528);
            else if (typeof LGApps != 'undefined' && typeof LGApps.launchApp == 'function')
                LGApps.launchApp();
            setTimeout(function() {
                if (document.getElementById('addToHomeScreenPopupLoader'))
                    document.getElementById('addToHomeScreenPopupLoader').style.display = 'none';
                KachelMenu.closePopup();
            }, 3000);
        });
    },
    'addToHomeScreenLaterButtonClick': function() {
        this.closePopup();
    },
    'popupButtonLetsPlayClick': function() {
        if (typeof _paq == 'object')
            _paq.push(['trackEvent', 'Menu', 'Click', document.getElementById('popup').className + 'Close']);
        this.closePopup();
    },
    'internationAppInstallButtonClick': function() {
        if (document.getElementById('addToHomeScreenPopupLoader'))
            document.getElementById('addToHomeScreenPopupLoader').style.display = 'block';
        portal.pushTrackingInfo("PageLoad", "PAGE", "clickInstallInternationalApp", "STARTPAGE");
        if (typeof SamsungApps != 'undefined' && typeof SamsungApps.samsung_launch_appstore == 'function')
            SamsungApps.samsung_launch_appstore(3201609010528, 3202207027942);
        else if (typeof LGApps != 'undefined' && typeof LGApps.launchApp == 'function')
            LGApps.launchApp();
        setTimeout(function() {
            if (document.getElementById('addToHomeScreenPopupLoader'))
                document.getElementById('addToHomeScreenPopupLoader').style.display = 'none';
            KachelMenu.closePopup();
        }, 3000);
    },
    'internationAppLaterButtonClick': function() {
        this.closePopup();
    },
    'consentShowPrivacyButtonClick': function() {
        if (typeof _paq == 'object')
            _paq.push(['trackEvent', 'Menu', 'Click', 'ShowPrivacy']);
        setTimeout(function() {
            window.location.href = 'info.php?show=privacy';
        }, 500);
    },
    'consentAcceptButtonClick': function() {
        if (typeof _paq == 'object')
            _paq.push(['trackEvent', 'Menu', 'enabled', 'consent']);
        Tools.ajaxGet(prodUrl + '/ajax/consent.php?type=add&consentId=3');
        this.closePopup();
    },
    'popupNoButtonClick': function() {
        if (typeof _paq == 'object')
            _paq.push(['trackEvent', 'Menu', 'Click', 'popupNoButton']);
        this.closePopup();
    },
    'popupYesButtonClick': function() {
        if (typeof _paq == 'object')
            _paq.push(['trackEvent', 'Menu', 'Click', 'popupYesButton']);
        setTimeout(function() {
            window.location.href = 'social.php?action=recovery&code=' + portal.getUrlParameterByName('code');
        }, 500);
    },
    'closePopup': function() {
        var popupEle = document.getElementById('popup');
        if (popupEle) {
            if (document.getElementById('backgroundCurtain'))
                document.getElementById('gameDiscovery').removeChild(document.getElementById('backgroundCurtain'));
            document.getElementById('popupBg').style.opacity = 0;
            document.getElementById('popup').style.opacity = 0;
            setTimeout(function() {
                portal.pushTrackingInfo("PageLoad", "PAGE", "popupClose", "STARTPAGE");
                setTimeout(function() {
                    if (document.getElementById('popupBg'))
                        document.getElementById('fullBody').removeChild(document.getElementById('popupBg'));
                    if (document.getElementById('popup'))
                        document.getElementById('fullBody').removeChild(document.getElementById('popup'));
                    KachelMenu.setFocusedContainer('kachel');
                    if (KachelMenu.currentFocusEle != null) {
                        KachelMenu.currentFocusEle.style.top = '-10px';
                        KachelMenu.currentFocusEle.classList.add('gameKachelSelected');
                        KachelMenu.setFocus(KachelMenu.currentFocusEle.id);
                    }
                }, 200);
            }, 200);
        }
    },
    'flashElement': function(elemId) {
        if (document.getElementById(elemId)) {
            if (this.scrollArrowData.timer > 0) {
                document.getElementById(this.scrollArrowData.elemId).className = '';
                clearTimeout(this.scrollArrowData.timer);
            }
            document.getElementById(elemId).className = 'active';
            this.scrollArrowData.elemId = elemId;
            this.scrollArrowData.timer = setTimeout(function() {
                document.getElementById(KachelMenu.scrollArrowData.elemId).className = '';
                KachelMenu.scrollArrowData.timer = 0;
                KachelMenu.scrollArrowData.elemId = '';
            }, 300);
        }
    },
    'scrollMenu': function(dir) {
        if (KachelMenu.settings.menuScrollable) {
            document.getElementById('navBottom').scrollLeft = 0;
            document.getElementById('navContainer').scrollLeft = 0;
            var containerLeft = parseInt(document.getElementById('navContainer').style.left);
            var focusLeft = Math.max(0, Tools.absoluteOffsetLeft(document.getElementById(KachelMenu.menuList[KachelMenu.currentMenuFocus])));
            var doScroll = true;
            doScroll = false;
            {
                doScroll = true;
            }
            if (KachelMenu.currentMenuFocus == KachelMenu.menuList.length - 1 && dir == 1) {
                doScroll = false;
            } else if (KachelMenu.currentMenuFocus == 0 && dir == -1) {
                doScroll = false;
            }
            var maxPos = 100;
            if (doScroll) {
                if (KachelMenu.currentMenuFocus == 0) {
                    this.setMenuScrollPos(100);
                } else if (dir == -1 && (focusLeft < 400 && containerLeft <= 100)) {
                    this.setMenuScrollPos(-1 * (focusLeft - containerLeft - 350));
                } else if (KachelMenu.currentMenuFocus == KachelMenu.menuList.length - 1) {
                    this.setMenuScrollPos(-1 * (focusLeft - containerLeft - 350));
                } else if (dir == 1 && focusLeft > 350) {
                    this.setMenuScrollPos(-1 * (focusLeft - containerLeft - 350));
                }
            }
        }
        document.getElementById(KachelMenu.menuList[KachelMenu.currentMenuFocus]).focus();
        if (KachelMenu.settings.menuScrollable) {
            document.getElementById('navBottom').scrollLeft = 0;
            document.getElementById('navContainer').scrollLeft = 0;
        }
    },
    'setMenuScrollPos': function(leftPos) {
        var containerWidth = parseInt(document.getElementById('navContainer').offsetWidth);
        leftPos = Math.min(100, Math.max(1150 - containerWidth, leftPos));
        document.getElementById('navContainer').style.left = leftPos + 'px';
    },
    'toggleFavorite': function(gameId) {
        if (KachelMenu.favoritesLocked == false && document.getElementById('favText')) {
            KachelMenu.favoritesLocked = true;
            if (KachelMenu.favoriteGames.indexOf(gameId) == -1) {
                document.getElementById('doLike').style.display = 'none';
                document.getElementById('isLiked').style.display = 'inline-block';
                document.getElementById('favText').className = 'animated';
                KachelMenu.favoriteGames.push(gameId);
                document.getElementById('favIcon').className = 'favIconOn';
                document.getElementById('favText').style.maxWidth = '100px';
                if (KachelMenu.settings.hasFavoritesSubMenu) {
                    if (pid == 'samsungapp')
                        document.getElementById('favAddText').innerHTML = this.tokens['fav_del_click'];
                    else
                        document.getElementById('favAddText').innerHTML = this.tokens['fav_del_key1'];
                }
                Tools.ajaxGet(prodUrl + '/ajax/game_likes.php?type=add&game_id=' + gameId);
                this.addGameIdToLane('nav_favorites', gameId);
                setTimeout(function() {
                    document.getElementById('favText').className = '';
                    KachelMenu.favoritesLocked = false;
                }, 1000);
            } else {
                document.getElementById('doLike').style.display = 'inline-block';
                document.getElementById('isLiked').style.display = 'none';
                KachelMenu.favoriteGames.splice(KachelMenu.favoriteGames.indexOf(gameId), 1);
                document.getElementById('favText').className = 'animated';
                document.getElementById('favIcon').className = 'favIconOff';
                document.getElementById('favText').style.maxWidth = '0px';
                if (KachelMenu.settings.hasFavoritesSubMenu) {
                    if (pid == 'samsungapp')
                        document.getElementById('favAddText').innerHTML = this.tokens['fav_add_click'];
                    else
                        document.getElementById('favAddText').innerHTML = this.tokens['fav_add_key1'];
                }
                setTimeout(function() {
                    document.getElementById('favText').className = '';
                    KachelMenu.favoritesLocked = false;
                }, 1000);
                Tools.ajaxGet(prodUrl + '/ajax/game_likes.php?type=del&game_id=' + gameId);
                this.removeGameIdFromLane('nav_favorites', gameId);
            }
        }
    },
    'update_game_likes': function(gameId, addNumber) {
        if (gameId <= 0 || (this.gamesData[gameId].active == 2 && this.gamesData[gameId].early_access == 0) || this.gamesData[gameId].likes <= 9) {
            if (this.gameFavoritesEle)
                this.gameFavoritesEle.style.display = 'none';
        } else {
            if (this.gameFavoritesEle)
                this.gameFavoritesEle.style.display = 'inline-block';
            try {
                KachelMenu.gamesData[gameId].likes = KachelMenu.gamesData[gameId].likes + addNumber;
                if (document.getElementById('favNumber'))
                    document.getElementById('favNumber').innerHTML = Tools.numberFormat(KachelMenu.gamesData[gameId].likes, 0, ',', '.');
            } catch (err) {
                console.log(err);
            }
        }
    },
    'initTime': function() {
        this.updateTime();
        this.clockInterval = setInterval(function() {
            KachelMenu.updateTime();
        }, 10000);
    },
    'updateTime': function() {
        if (clientData.lang == 'EN') {
            var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var dayName = ['So.', 'Mo.', 'Tu.', 'We.', 'Th.', 'Fr.', 'Sa.'];
        } else {
            var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
            var dayName = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
        }
        var curDate = new Date();
        var hours = curDate.getHours().toString().length == 1 ? '0' + curDate.getHours() : curDate.getHours();
        var minutes = curDate.getMinutes().toString().length == 1 ? '0' + curDate.getMinutes() : curDate.getMinutes();
        if (pid == 'levira' || pid == 'tvprima') {
            var month = curDate.getMonth().toString().length == 1 ? '0' + (curDate.getMonth() + 1) : (curDate.getMonth() + 1);
            var day = curDate.getDate().toString().length == 1 ? '0' + (curDate.getDate()) : (curDate.getDate());
            KachelMenu.TVDate.innerHTML = day + '.' + month + '.' + curDate.getFullYear();
        } else
            KachelMenu.TVDate.innerHTML = dayName[curDate.getDay()] + ' ' + curDate.getDate().toString() + ' ' + monthName[curDate.getMonth()];
        KachelMenu.TVTime.innerHTML = hours + ':' + minutes;
        if (clientData.lang == 'DE')
            KachelMenu.TVTime.innerHTML += ' Uhr';
    },
    'createContainer': function(callback) {
        var pos = 0;
        this.kachelContainerSize = {
            'columns': 0,
            'rows': 0
        };
        for (var laneId = 0; laneId < this.menuList.length; laneId++) {
            this.createLane(laneId);
        }
        this.laneData[this.menuList.length - 1].lanePositionTop -= 130;
        this.kachelContainerSize.rows = this.menuList.length;
        this.gameBox.style.height = this.laneLastTop + 'px';
        KachelMenu.loadKachelImages();
        if (typeof callback == 'function')
            callback();
    },
    'addGameIdToLane': function(category, gameId) {
        if (typeof KachelMenu.preferedOrder[category] !== 'undefined') {
            if (KachelMenu.preferedOrder[category].indexOf(gameId) == -1) {
                KachelMenu.preferedOrder[category].unshift(gameId);
                KachelMenu.updateLane(category);
                return true;
            }
        }
    },
    'removeGameIdFromLane': function(category, gameId) {
        if (KachelMenu.preferedOrder[category].indexOf(gameId) >= 0) {
            KachelMenu.preferedOrder[category].splice(KachelMenu.preferedOrder[category].indexOf(gameId), 1);
            KachelMenu.updateLane(category);
        }
    },
    'removeGameId': function(gameId) {
        for (var laneId = 0; laneId < this.menuList.length; laneId++) {
            var category = this.menuList[laneId];
            this.removeGameIdFromLane(category, gameId);
        }
    },
    'updateLane': function(category) {
        var kachelLane = document.getElementById(category);
        if (kachelLane) {
            var laneId = this.menuList.indexOf(category);
            HbbTV.log('repaint: laneId: ' + laneId + ' name: ' + kachelLane.id);
            var laneGameOrder = this.paintGames(laneId, kachelLane);
            if (laneGameOrder.length == 0) {
                if (document.getElementById(category + '_empty')) {
                    document.getElementById(category + '_empty').style.display = 'block';
                    if (this.menuList[this.currentLane] == 'nav_favorites') {
                        this.currentLane--;
                        this.changeLane();
                    }
                }
            } else if (document.getElementById(category + '_empty')) {
                document.getElementById(category + '_empty').style.display = 'none';
            }
            KachelMenu.laneData[laneId].count = laneGameOrder.length;
            KachelMenu.laneData[laneId].gameOrder = laneGameOrder;
            KachelMenu.laneData[laneId].offset = 0;
            if (KachelMenu.currentRow == 'kachel')
                this.scrollBox();
        }
    },
    'createLane': function(laneId) {
        var pos = 0;
        var category = this.menuList[laneId];
        var gameList = this.preferedOrder[category];
        KachelMenu.laneData[laneId] = {
            'name': category,
            'offset': 0,
            'laneFormat': '4:3'
        };
        KachelMenu.laneData[laneId].lanePositionTop = KachelMenu.laneLastTop;
        var kachelLaneName = document.createElement('div');
        kachelLaneName.innerHTML = KachelMenu.tokens[category];
        kachelLaneName.id = category + '_name';
        kachelLaneName.className = 'kachelRowName';
        kachelLaneName.style.top = KachelMenu.laneLastTop + 'px';
        KachelMenu.laneLastTop += 34;
        if (category !== 'nav_subCategoryEnd')
            this.gameBox.appendChild(kachelLaneName);
        if (category == 'nav_favorites') {
            var kachelLaneEmpty = document.createElement('div');
            kachelLaneEmpty.innerHTML = this.tokens['empty_my_favorites'];
            kachelLaneEmpty.id = category + '_empty';
            kachelLaneEmpty.className = 'kachelRowEmpty';
            kachelLaneEmpty.style.top = (KachelMenu.laneLastTop + 40) + 'px';
            kachelLaneEmpty.style.left = '30px';
            this.gameBox.appendChild(kachelLaneEmpty);
        }
        var kachelLane = document.createElement('div');
        kachelLane.id = category;
        kachelLane.className = 'kachelRow animated';
        kachelLane.style.position = 'absolute';
        kachelLane.style.height = KachelMenu.laneHeight + 'px';
        kachelLane.style.left = '2px';
        if (category == 'nav_hot') {
            KachelMenu.laneData[laneId].laneFormat = '3:4';
        }
        var laneGameOrder = this.paintGames(laneId, kachelLane);
        KachelMenu.laneData[laneId].gameOrder = laneGameOrder;
        KachelMenu.laneData[laneId].count = laneGameOrder.length;
        if (category == 'nav_favorites' && laneGameOrder.length == 0)
            document.getElementById(category + '_empty').style.display = 'block';
        kachelLane.style.top = KachelMenu.laneLastTop + 'px';
        if (KachelMenu.laneData[laneId].laneFormat === '3:4') {
            KachelMenu.laneLastTop += 223;
        } else {
            KachelMenu.laneLastTop += KachelMenu.laneHeight;
        }
        this.gameBox.appendChild(kachelLane);
    },
    'loadKachelImages': function() {
        for (fileId in this.spriteData.fileIndex) {
            KachelMenu.spriteData.fileIndex[fileId].loaded = false;
            (function(fileId) {
                setTimeout(function() {
                    var tmpImage = new Image();
                    tmpImage.onload = function() {
                        {
                            KachelMenu.spriteData.fileIndex[fileId].loaded = true;
                            var kachelList = document.getElementsByClassName('spriteKachelId' + fileId);
                            for (var i = 0; i < kachelList.length; i++) {
                                kachelList[i].classList.add('loaded');
                            }
                        }
                        if (tmpImage.complete == false || tmpImage.height % 106 !== 0)
                            ErrorReports.log('KachelMenu_v6.js', 1336, 'image preloader incompleted: ' + KachelMenu.spriteData.fileIndex[fileId].url);
                    }
                    tmpImage.onerror = function() {
                        ErrorReports.log('KachelMenu_v6.js', 1336, 'image preloader error: ' + KachelMenu.spriteData.fileIndex[fileId].url);
                    }
                    tmpImage.src = KachelMenu.spriteData.fileIndex[fileId].url;
                }, (fileId - 1) * 500);
            }
            )(fileId);
        }
    },
    'clickFunc': function(e, gameId, gameUrl, laneId, posId) {
        if (KachelMenu.gamePadConnected == false)
            return;
        if (e instanceof KeyboardEvent) {
            return;
        }
        if (KachelMenu.longPressOn == false) {
            KachelMenu.shortClick(gameId, gameUrl, laneId, posId, false);
        }
    },
    'keydownFunc': function(e, gameId, gameUrl, laneId, posId) {
        if (e.type !== 'undefined' && e.type == 'mousedown' && e.button != 0) {
            return '';
        } else if (e.type !== 'undefined' && e.type == 'keydown' && e.keyCode !== VK_ENTER) {
            return '';
        }
        if (KachelMenu.currentRow !== 'kachel')
            return '';
        KachelMenu.keyState = 'd';
        {
            KachelMenu.disableClicks = true;
            var self = this;
            if (KachelMenu.longPressTimer == 0) {
                KachelMenu.longPressTimer = setTimeout(function() {
                    KachelMenu.longPressTimer = 0;
                    KachelMenu.longPressOn = true;
                    KachelMenu.longClick(gameId, gameUrl);
                }, 500);
            }
        }
    },
    'keyupFunc': function(e, gameId, gameUrl, laneId, posId) {
        var mouseEvent = (e.type == 'mouseup');
        if (e.type !== 'undefined' && e.type == 'mousedown' && e.button != 0) {
            return '';
        } else if (e.type !== 'undefined' && e.type == 'keydown' && e.keyCode !== VK_ENTER) {
            return '';
        }
        if (KachelMenu.keyState == 'u') {
            return '';
        }
        KachelMenu.keyState = 'u';
        {
            KachelMenu.disableClicks = false;
            if (KachelMenu.longPressTimer > 0) {
                clearTimeout(KachelMenu.longPressTimer);
                KachelMenu.longPressTimer = 0;
            }
            if (KachelMenu.longPressOn == false) {
                KachelMenu.shortClick(gameId, gameUrl, laneId, posId, mouseEvent);
            }
            KachelMenu.longPressOn = false;
        }
    },
    'paintGames': function(laneId, kachelLane) {
        kachelLane.innerHTML = '';
        var category = this.menuList[laneId];
        var gameList = this.preferedOrder[category];
        var kachelOrder = [];
        var pos = 0;
        var posId = 0;
        for (gamePos in gameList) {
            var gameId = gameList[gamePos];
            if (kachelOrder.indexOf(gameId) >= 0) {
                continue;
            }
            if (this.checkGameData(gameId, 'name')) {
                kachelOrder.push(gameId);
                var a = document.createElement('a');
                var hand = document.createElement('div');
                a.className = 'gameKachel';
                a.id = 'gameKachel_' + laneId + '_' + gameId;
                var gameUrl = '';
                if (category == 'nav_xmas' && typeof this.specialGames[gameId].url !== 'undefined' && this.specialGames[gameId].url != '')
                    gameUrl = this.specialGames[gameId].url;
                else if (category == 'nav_xmas' && this.checkGameData(gameId, 'url'))
                    gameUrl = this.gamesData[gameId].url + '&lane=' + laneId + '&special=xmas';
                else if (this.checkGameData(gameId, 'url'))
                    gameUrl = this.gamesData[gameId].url + '&lane=' + laneId;
                else
                    gameUrl = '';
                a.href = '#';
                (function(a, gameId, gameUrl, laneId, posId) {
                    a.addEventListener('keydown', function(e) {
                        KachelMenu.keydownFunc(e, gameId, gameUrl, laneId, posId);
                    }, false);
                    a.addEventListener('keyup', function(e) {
                        KachelMenu.keyupFunc(e, gameId, gameUrl, laneId, posId);
                    }, false);
                    a.addEventListener('mousedown', function(e) {
                        KachelMenu.keydownFunc(e, gameId, gameUrl, laneId, posId);
                    }, false);
                    a.addEventListener('mouseup', function(e) {
                        KachelMenu.keyupFunc(e, gameId, gameUrl, laneId, posId);
                    }, false);
                    a.addEventListener('click', function(e) {
                        KachelMenu.clickFunc(e, gameId, gameUrl, laneId, posId);
                    }, false);
                }
                )(a, gameId, gameUrl, laneId, posId);
                hand.className = 'kachelAction';
                if (gameId == -3 || gameId == -4 || gameId == -5 || gameId == -6 || gameId == -20 || gameId == -21 || gameId == 337)
                    hand.innerHTML = this.tokens['action_open'];
                else if (this.checkGameData(gameId, 'comingSoon') && this.gamesData[gameId].comingSoon == 1)
                    hand.innerHTML = this.tokens['action_preview'];
                else if (gameId == -14)
                    hand.innerHTML = this.tokens['action_welcome'];
                else
                    hand.innerHTML = this.tokens['action_play'];
                a.style.left = ((10 + this.boxWidth) * pos) + 'px';
                a.style.top = '0px';
                posId++;
                if (this.laneData[laneId].laneFormat == '3:4' && typeof this.gamesData[gameId].image34 !== 'undefined') {
                    a.className += ' kachel34';
                    var img = document.createElement('img');
                    img.src = this.gamesData[gameId].image34.file_location;
                    img.width = this.gamesData[gameId].image34.width;
                    img.height = this.gamesData[gameId].image34.height;
                    img.alt = this.gamesData[gameId].name;
                    img.style.margin = "2px 2px 0px 2px";
                    a.appendChild(img);
                } else if (category == 'nav_xmas' && typeof this.specialGames[gameId]['image'] !== 'undefined') {
                    var img = document.createElement('img');
                    img.src = this.specialGames[gameId]['image'].file_location;
                    img.width = this.specialGames[gameId].image.width;
                    img.height = this.specialGames[gameId].image.height;
                    img.alt = this.specialGames[gameId].name;
                    img.style.margin = "2px 2px 0px 2px";
                    a.appendChild(img);
                } else if (typeof this.spriteData.frameData[gameId] !== 'undefined') {
                    var frameData = this.spriteData.frameData[gameId];
                    var spriteImg = document.createElement('div');
                    spriteImg.classList.add("kachelImg", "spriteKachelId" + frameData.imageIndex);
                    if (KachelMenu.spriteData.fileIndex[frameData.imageIndex].loaded == true)
                        spriteImg.classList.add("loaded");
                    spriteImg.style.backgroundPosition = '-' + frameData.x + 'px -' + frameData.y + 'px';
                    a.appendChild(spriteImg);
                } else if (typeof this.gamesData[gameId]['image'] !== 'undefined' && typeof this.gamesData[gameId]['image'].file_location == 'string') {
                    var img = document.createElement('img');
                    img.src = this.gamesData[gameId]['image'].file_location;
                    img.width = this.gamesData[gameId].image.width;
                    img.height = this.gamesData[gameId].image.height;
                    img.alt = this.gamesData[gameId].name;
                    img.style.margin = "2px 2px 0px 2px";
                    a.appendChild(img);
                } else {
                    if (this.laneData[laneId].laneFormat == '3:4')
                        a.className += ' kachel34';
                    var innerDataOuter = document.createElement('div');
                    if (this.checkGameData(gameId, 'early_access') && this.gamesData[gameId].early_access == 1)
                        innerDataOuter.className = 'dynamicKachel dynamicKachelGreen';
                    else if (this.checkGameData(gameId, 'comingSoon') && this.gamesData[gameId].comingSoon == 1)
                        innerDataOuter.className = 'dynamicKachel dynamicKachelVorschau';
                    else
                        innerDataOuter.className = 'dynamicKachel dynamicKachelBlue';
                    var innerData = document.createElement('div');
                    innerData.innerHTML = this.gamesData[gameId].name;
                    innerData.className = 'dynamicKachelText';
                    innerDataOuter.appendChild(innerData);
                    a.appendChild(innerDataOuter);
                }
                if (this.checkGameData(gameId, 'exclusive') && this.gamesData[gameId].exclusive == 1) {
                    var div = document.createElement('div');
                    div.className = 'exclusive';
                    a.appendChild(div);
                }
                if (this.gamesData[gameId].samsung_promo == 1 || this.gamesData[gameId].samsung_promo == 3) {
                    var div = document.createElement('div');
                    div.className = 'badge app';
                    a.appendChild(div);
                } else if (this.gamesData[gameId].newGame == 1) {
                    var div = document.createElement('div');
                    div.className = 'badge new';
                    a.appendChild(div);
                } else if (this.gamesData[gameId].update == 1) {
                    var div = document.createElement('div');
                    div.className = 'badge update';
                    a.appendChild(div);
                }
                a.appendChild(hand);
                kachelLane.appendChild(a);
                pos++;
            } else {
                {
                    if (!this.tokens.hasOwnProperty('tag_name_' + gameId) || typeof this.tokens['tag_name_' + gameId] == 'undefined' || this.tokens['tag_name_' + gameId] == '') {
                        continue;
                    }
                    kachelOrder.push(gameId);
                    var a = document.createElement('a');
                    var hand = document.createElement('div');
                    hand.className = 'kachelAction';
                    hand.innerHTML = this.tokens['action_select'];
                    a.appendChild(hand);
                    a.className = 'gameKachel';
                    a.id = 'gameKachel_' + laneId + '_' + gameId;
                    a.name = gameId;
                    a.href = '#';
                    a.addEventListener('click', function() {
                        if (this.name == 'comingmore') {
                            KachelMenu.jumpToLane('nav_coming');
                            KachelMenu.gamePreviewButtonVisible = false;
                            KachelMenu.gamePreviewEle.innerHTML = '<img src="' + KachelMenu.tokens['tag_name_comingmore_img'] + '" width="782" height="440"/>';
                        } else if (this.name == 'videoplayer') {
                            window.location.href = 'videoplayer.php?type=topGames';
                        } else if (this.name == 'backtotop') {
                            KachelMenu.jumpToLane(KachelMenu.laneData[0].name);
                        } else
                            KachelMenu.jumpToLane('nav_' + this.name);
                    }, false);
                    a.style.left = ((10 + this.boxWidth) * pos) + 'px';
                    a.style.top = '0px';
                    var innerDataOuter = document.createElement('div');
                    if (category == 'nav_subCategoryEnd')
                        innerDataOuter.className = 'dynamicKachel dynamicKachelBlue';
                    else if (category == 'nav_subCategory' || gameId == 'videoplayer')
                        innerDataOuter.className = 'dynamicKachel dynamicKachelRed';
                    else
                        innerDataOuter.className = 'dynamicKachel dynamicKachelBlue';
                    a.appendChild(innerDataOuter);
                    var innerData = document.createElement('div');
                    innerData.innerHTML = KachelMenu.tokens['tag_name_' + gameId];
                    innerData.className = 'dynamicKachelText';
                    innerDataOuter.appendChild(innerData);
                    kachelLane.appendChild(a);
                    pos++;
                }
            }
        }
        kachelLane.style.width = (kachelOrder.length * (146 + 10)) + 'px';
        return kachelOrder;
    },
    'shortClick': function(gameId, gameUrl, laneId, posId, mouseClick) {
        if (gameId)
            var gameId = parseInt(gameId);
        HbbTV.log('game_id:' + gameId);
        if (KachelMenu.likePopupData.show == true)
            KachelMenu.closeLikePopup();
        if (mouseClick) {
            KachelMenu.focusLaneAndPosition(laneId, posId);
        }
        try {
            if (KachelMenu.gamesData[gameId].comingSoon == 1 && environment == 'live') {
                if (!mouseClick) {
                    if (KachelMenu.gamesData[gameId].movie_file_location)
                        KachelMenu.playMovie(false);
                    KachelMenu.showComingSoon();
                }
            } else if (KachelMenu.gamesData[gameId].hasOwnProperty('smarthubpreview_recommended') && KachelMenu.gamesData[gameId].smarthubpreview_recommended == 1 && typeof SamsungApps != 'undefined' && typeof SamsungApps.samsung_launch_appstore == 'function') {
                SamsungApps.show_launch_store_layer(3201609010528, 3201609010528, KachelMenu.currentFocusEle, 'addReminder', function() {
                    KachelMenu.unlockSmartHubPreviewGames();
                }, function() {
                    KachelMenu.showLikePopup(gameId);
                });
            } else if ((KachelMenu.gamesData[gameId].smarthubpreview_required == 1 || KachelMenu.gamesData[gameId].samsung_promo == 2) && ((typeof SamsungApps != 'undefined' && typeof SamsungApps.samsung_launch_appstore == 'function') || (typeof LGApps != 'undefined' && typeof LGApps.samsung_launch_appstore == 'function'))) {
                if (typeof SamsungApps != 'undefined') {
                    SamsungApps.show_launch_store_layer(3201609010528, 3201609010528, KachelMenu.currentFocusEle, gameId, function() {
                        KachelMenu.unlockSmartHubPreviewGames();
                    });
                } else {
                    LGApps.show_launch_store_layer(KachelMenu.currentFocusEle, gameId, function() {
                        KachelMenu.unlockSmartHubPreviewGames();
                    });
                }
            } else if (gameId < 0 && gameUrl && gameUrl != '') {
                window.location.href = gameUrl;
            } else if (gameUrl && gameUrl != '') {
                HbbTV.log('showLikePopup: ' + gameId);
                KachelMenu.showLikePopup(gameId);
            } else if (KachelMenu.gamesData[gameId].movie_file_location) {
                if (!mouseClick)
                    KachelMenu.playMovie(false);
            }
        } catch (err) {
            HbbTV.log('error: ' + err);
        }
    },
    'longClick': function(gameId, gameUrl) {
        if (gameId && gameUrl != '') {
            window.location.href = gameUrl;
        }
    },
    'getPosByGameId': function(laneId, pos) {
        if (pos == null)
            pos = 0;
        return this.laneData[laneId].gameOrder[pos];
    },
    'changeLane': function() {
        if (typeof this.laneData[this.currentLane] == 'undefined' || typeof this.laneData[this.currentLane].count == 'undefined' || this.laneData[this.currentLane].count == 0) {
            if (this.currentLane > this.lastLane)
                this.currentLane++;
            else if (this.currentLane < this.lastLane)
                this.currentLane--;
            this.changeLane();
        }
        if (document.getElementById('gameKachel_' + this.lastLane + '_' + this.getPosByGameId(this.lastLane, this.lastFocus)) != null && this.currentLane != this.lastLane) {
            document.getElementById('gameKachel_' + this.lastLane + '_' + this.getPosByGameId(this.lastLane, this.lastFocus)).classList.remove('gameKachelSelected');
            document.getElementById('gameKachel_' + this.lastLane + '_' + this.getPosByGameId(this.lastLane, this.lastFocus)).style.top = '0px';
        }
        this.gameBox.style.top = -1 * this.laneData[this.currentLane].lanePositionTop + 'px';
        this.columnPosition = Math.min(6, this.currentFocus + this.laneData[this.lastLane].offset);
        this.currentFocus = this.columnPosition - this.laneData[this.currentLane].offset;
        this.laneChanged = true;
    },
    'scrollBox': function(callback, dontScroll) {
        KachelMenu.sideSwitch = false;
        if (dontScroll !== true)
            dontScroll = false;
        var currentLaneElem = document.getElementById(KachelMenu.laneData[KachelMenu.currentLane].name);
        if (KachelMenu.currentFocus >= KachelMenu.laneData[KachelMenu.currentLane].count) {
            if (KachelMenu.laneChanged == false) {
                KachelMenu.setMovesAnimated(false);
                KachelMenu.sideSwitch = true;
            }
            KachelMenu.currentFocus = 0;
        } else if (KachelMenu.currentFocus < 0) {
            KachelMenu.setMovesAnimated(false);
            KachelMenu.currentFocus = KachelMenu.laneData[KachelMenu.currentLane].count - 1;
            KachelMenu.sideSwitch = true;
            KachelMenu.columnPosition = 6;
        }
        if (KachelMenu.movesToDo > 4) {
            KachelMenu.setMovesAnimated(false);
        }
        var settimeId = setTimeout(function() {
            KachelMenu.movesToDo = KachelMenu.movesToDo - 1;
            if (KachelMenu.movesToDo <= 0)
                KachelMenu.setMovesAnimated(true);
        }, 500);
        if (document.getElementById('gameKachel_' + this.currentLane + '_' + this.getPosByGameId(this.currentLane, this.lastFocus)) != null && this.currentFocus != this.lastFocus) {
            document.getElementById('gameKachel_' + this.currentLane + '_' + this.getPosByGameId(this.currentLane, this.lastFocus)).classList.remove('gameKachelSelected');
            document.getElementById('gameKachel_' + this.currentLane + '_' + this.getPosByGameId(this.currentLane, this.lastFocus)).style.top = '0px';
        }
        this.columnPosition = Math.min(this.currentFocus, this.columnPosition);
        if (KachelMenu.laneData[KachelMenu.currentLane].count - this.currentFocus < 5) {
            this.columnPosition = 7 - (KachelMenu.laneData[KachelMenu.currentLane].count - this.currentFocus);
        }
        if (dontScroll == true) {} else {
            KachelMenu.laneData[KachelMenu.currentLane].offset = Math.min(0, -1 * (KachelMenu.currentFocus - KachelMenu.columnPosition));
            if (this.currentFocus + KachelMenu.laneData[KachelMenu.currentLane].offset < 0) {
                KachelMenu.laneData[KachelMenu.currentLane].offset = this.currentFocus * -1;
            }
            if (KachelMenu.laneData[KachelMenu.currentLane].offset == 0) {
                currentLaneElem.style.left = '4px';
            } else
                currentLaneElem.style.left = 4 + (KachelMenu.laneData[KachelMenu.currentLane].offset * (10 + KachelMenu.boxWidth)) + 'px';
        }
        this.currentGameId = this.laneData[this.currentLane].gameOrder[KachelMenu.currentFocus];
        if (typeof this.currentGameId == 'undefined') {
            KachelMenu.setFocusedContainer('menu');
            console.warn('setFocus', KachelMenu.menuList[KachelMenu.currentMenuFocus]);
            document.getElementById(KachelMenu.menuList[KachelMenu.currentMenuFocus]).focus();
        } else {
            this.currentFocusEle = document.getElementById('gameKachel_' + this.currentLane + '_' + this.getPosByGameId(this.currentLane, this.currentFocus));
            if (this.currentFocusEle != null) {
                this.currentFocusEle.style.top = '-10px';
                this.currentFocusEle.classList.add('gameKachelSelected');
                this.currentFocusEle.focus();
                currentLaneElem.scrollLeft = 0;
                document.getElementById('kachelContainerVisible').scrollTop = 0;
                document.getElementById('kachelContainerVisible').scrollLeft = 0;
            }
        }
        if (this.gamesData[this.currentGameId] != null) {
            {
                if (this.gamePreviewFullAreaVisible == true) {
                    this.gamePreviewFullAreaVisible = false;
                    this.gamePreviewFullAreaEle.style.display = 'none';
                }
            }
            this.gameMetaEle.className = 'gameMeta_' + this.currentGameId;
            if (this.laneData[this.currentLane].name == 'nav_xmas' && this.specialGames[this.currentGameId].name != '')
                this.gameNameEle.innerHTML = this.specialGames[this.currentGameId].name;
            else
                this.gameNameEle.innerHTML = this.gamesData[this.currentGameId].name;
            if (this.laneData[this.currentLane].name == 'nav_xmas' && this.specialGames[this.currentGameId].description != '')
                this.gameDescEle.innerHTML = this.specialGames[this.currentGameId].description;
            else if (this.filter == 'nav_recommended' && this.gamesData[this.currentGameId].desc_recommended != '')
                this.gameDescEle.innerHTML = this.gamesData[this.currentGameId].desc_recommended;
            else
                this.gameDescEle.innerHTML = this.gamesData[this.currentGameId].description;
            this.update_game_likes(this.currentGameId, 0);
            if (document.getElementById('favText')) {
                if (this.currentGameId <= 0 || (this.gamesData[this.currentGameId].active == 2 && this.gamesData[this.currentGameId].early_access == 0)) {
                    if (document.getElementById('numButton1'))
                        document.getElementById('numButton1').style.display = 'none';
                    else if (document.getElementById('submenu_favorite')) {
                        if (KachelMenu.subMenuList.indexOf('submenu_favorite') >= 0) {
                            KachelMenu.subMenuList.shift();
                            KachelMenu.currentSubMenuFocus = Math.max(0, KachelMenu.currentSubMenuFocus - 1);
                        }
                        document.getElementById('submenu_favorite').style.display = 'none';
                    }
                } else {
                    if (document.getElementById('numButton1'))
                        document.getElementById('numButton1').style.display = '';
                    else if (document.getElementById('submenu_favorite')) {
                        if (KachelMenu.subMenuList.indexOf('submenu_favorite') == -1)
                            KachelMenu.subMenuList.unshift('submenu_favorite');
                        document.getElementById('submenu_favorite').style.display = '';
                    }
                    if (KachelMenu.favoriteGames.indexOf(KachelMenu.currentGameId) == -1) {
                        document.getElementById('favIcon').className = 'favIconOff';
                        document.getElementById('favText').style.maxWidth = '0px';
                        if (KachelMenu.settings.hasFavoritesSubMenu) {
                            if (pid == 'samsungapp')
                                document.getElementById('favAddText').innerHTML = this.tokens['fav_add_click'];
                            else
                                document.getElementById('favAddText').innerHTML = this.tokens['fav_add_key1'];
                        }
                    } else {
                        document.getElementById('favIcon').className = 'favIconOn';
                        document.getElementById('favText').style.maxWidth = '100px';
                        if (KachelMenu.settings.hasFavoritesSubMenu) {
                            if (pid == 'samsungapp')
                                document.getElementById('favAddText').innerHTML = this.tokens['fav_del_click'];
                            else
                                document.getElementById('favAddText').innerHTML = this.tokens['fav_del_key1'];
                        }
                    }
                }
            }
            var gameCategoryName = '';
            if (this.gamesData[this.currentGameId].gameCategory && this.gamesData[this.currentGameId].gameCategory.indexOf('|') != -1) {
                var gameCategoryNames = this.gamesData[this.currentGameId].gameCategory.split('|');
                gameCategoryName = gameCategoryNames[0];
            } else
                gameCategoryName = this.gamesData[this.currentGameId].gameCategory;
            if (gameCategoryName === '' && this.gamesData[this.currentGameId].gameStats == '') {
                document.getElementById('gameCategoryStats').style.display = 'none';
            } else {
                document.getElementById('gameCategoryStats').style.display = 'block';
                if (this.gameCategoryIconEle)
                    this.gameCategoryIconEle.innerHTML = this.gamesData[this.currentGameId].gameCategoryIcon;
                if (gameCategoryName !== '')
                    this.gameCategoryEle.innerHTML = gameCategoryName;
                if (this.checkGameData(this.currentGameId, 'gameStats')) {
                    this.gameStatsEle.style.display = 'inline-block';
                    this.gameStatsEle.innerHTML = this.gamesData[this.currentGameId].gameStats;
                } else {
                    this.gameStatsEle.style.display = 'none';
                    this.gameStatsEle.innerHTML = '';
                }
            }
            if (KachelMenu.sideSwitch == true && KachelMenu.movesToDo < 4)
                KachelMenu.setMovesAnimated(true);
            if (this.currentFocus != this.lastFocus || this.laneChanged == true) {
                this.deactivatePreview();
                if (this.gamePreviewButtonVisible == true) {
                    this.gamePreviewButtonVisible = false;
                }
                if (this.gamesData[this.currentGameId].comingSoon == 1)
                    this.showComingSoon();
                else
                    this.hideComingSoon();
                if (this.gamesData[this.currentGameId].exclusive == 1)
                    this.showExclusive();
                else
                    this.hideExclusive();
                if (typeof this.gamesData[this.currentGameId].preview_file_location !== 'undefined' && this.gamesData[this.currentGameId].preview_file_location !== '') {
                    clearTimeout(KachelMenu.timer);
                    KachelMenu.timer = setTimeout(function() {
                        KachelMenu.activatePreview(KachelMenu.currentGameId);
                    }, 300);
                }
                if (KachelMenu.movieTimer)
                    clearTimeout(KachelMenu.movieTimer);
                if (this.hasMovieFile(this.currentGameId)) {
                    var self = this;
                    KachelMenu.movieTimer = setTimeout(function() {
                        KachelMenu.playMovie(self.currentGameId, false);
                    }, (KachelMenu.containerInit ? 6000 : 2000));
                }
            }
        } else {
            document.getElementById('gameCategoryStats').style.display = 'none';
            if (this.subCategoryData[this.currentGameId]) {
                if (this.subCategoryData[this.currentGameId].name)
                    this.gameNameEle.innerHTML = this.subCategoryData[this.currentGameId].name;
                if (this.subCategoryData[this.currentGameId].longdesc)
                    this.gameDescEle.innerHTML = this.subCategoryData[this.currentGameId].longdesc;
                this.deactivatePreview();
                var subCategoryPromoGameId = this.subCategoryData[this.currentGameId].gameId;
                if (typeof this.gamesData[subCategoryPromoGameId].preview_file_location !== 'undefined' && this.gamesData[subCategoryPromoGameId].preview_file_location !== '') {
                    clearTimeout(KachelMenu.timer);
                    var self = this;
                    KachelMenu.timer = setTimeout(function() {
                        KachelMenu.activatePreview(subCategoryPromoGameId);
                    }, 300);
                }
                if (KachelMenu.movieTimer)
                    clearTimeout(KachelMenu.movieTimer);
                if (this.hasMovieFile(subCategoryPromoGameId)) {
                    KachelMenu.movieTimer = setTimeout(function() {
                        KachelMenu.playMovie(subCategoryPromoGameId, false);
                    }, (KachelMenu.containerInit ? 6000 : 2000));
                }
            }
        }
        if (typeof callback == 'function')
            callback();
    },
    'unlockSmartHubPreviewGames': function() {
        for (gameId in this.gamesData) {
            if (gameId > 0) {
                if (typeof this.gamesData[gameId].smarthubpreview_required !== 'undefined' && this.gamesData[gameId].smarthubpreview_required == 1) {
                    this.gamesData[gameId].smarthubpreview_required = 0;
                }
                if (typeof this.gamesData[gameId].smarthubpreview_recommended !== 'undefined' && this.gamesData[gameId].smarthubpreview_recommended == 1) {
                    this.gamesData[gameId].smarthubpreview_recommended = 0;
                }
            }
        }
    },
    'isMovieFileArray': function(gameId) {
        if (typeof this.gamesData[gameId].movie_file_location == 'string' && this.gamesData[gameId].movie_file_location !== '')
            return false;
        else if (typeof this.gamesData[gameId].movie_file_location == 'object' && typeof this.gamesData[gameId].movie_file_location[0] == 'string') {
            return true;
        } else {
            return false;
        }
    },
    'getMovieFile': function(gameId) {
        if (typeof this.gamesData[gameId] !== 'undefined' && typeof this.gamesData[gameId].movie_file_location == 'string' && this.gamesData[gameId].movie_file_location !== '')
            return this.gamesData[gameId].movie_file_location;
        else if (typeof this.gamesData[gameId] !== 'undefined' && typeof this.gamesData[gameId].movie_file_location == 'object' && typeof this.gamesData[gameId].movie_file_location[0] == 'string') {
            var takeMovie = this.gamesData[gameId].movie_file_location[0];
            this.gamesData[gameId].movie_file_location.push(this.gamesData[gameId].movie_file_location.shift());
            return takeMovie;
        }
    },
    'hasMovieFile': function(gameId) {
        if (typeof this.gamesData[gameId] !== 'undefined' && typeof this.gamesData[gameId].movie_file_location == 'string' && this.gamesData[gameId].movie_file_location !== '')
            return true;
        else if (typeof this.gamesData[gameId] !== 'undefined' && typeof this.gamesData[gameId].movie_file_location == 'object' && typeof this.gamesData[gameId].movie_file_location[0] == 'string')
            return true;
        else
            return false;
    },
    'showLikePopup': function(gameId) {
        if (KachelMenu.likePopupData.show == false) {
            KachelMenu.setFocusedContainer('likePopup');
            document.getElementById('likePopupContent').style.display = 'block';
            KachelMenu.likePopupData.show = true;
            KachelMenu.likePopupData.gameId = gameId;
            document.getElementById('likePopupName').innerHTML = KachelMenu.gamesData[gameId].name;
            document.getElementById('likePopupImage').innerHTML = '';
            document.getElementById('likePopupImage').className = '';
            if (KachelMenu.gamesData[gameId] && KachelMenu.gamesData[gameId].gameCategory.indexOf('|') != -1) {
                var gameCategoryNames = KachelMenu.gamesData[gameId].gameCategory.split('|');
                document.getElementById('likePopupStats').innerHTML = gameCategoryNames[0] + ' | ' + KachelMenu.gamesData[gameId].gameStats;
            } else {
                document.getElementById('likePopupStats').innerHTML = KachelMenu.gamesData[gameId].gameCategory + ' | ' + KachelMenu.gamesData[gameId].gameStats;
            }
            var popImageElement = document.getElementById('likePopupImage');
            popImageElement.className = "kachelImg";
            if (KachelMenu.laneData[KachelMenu.currentLane].name == 'nav_xmas' && typeof this.specialGames[gameId]['image'] !== 'undefined') {
                popImageElement.style.backgroundPosition = '0px 0px';
                popImageElement.style.backgroundImage = 'url(' + this.specialGames[gameId].image.file_location + ')';
            } else if (typeof this.spriteData.frameData[gameId] !== 'undefined') {
                var frameData = this.spriteData.frameData[gameId];
                popImageElement.className = "kachelImg spriteKachelId" + frameData.imageIndex + ' loaded';
                popImageElement.style.backgroundPosition = '-' + frameData.x + 'px -' + frameData.y + 'px';
            } else if (KachelMenu.checkGameData(gameId, 'image')) {
                popImageElement.style.backgroundPosition = '0px 0px';
                popImageElement.style.backgroundImage = 'url(' + KachelMenu.gamesData[gameId].image.file_location + ')';
            } else {
                if (KachelMenu.gamesData[gameId].early_access == 1) {
                    popImageElement.innerHTML = '<div class="dynamicKachel dynamicKachelGreen"><div class="dynamicKachelText">' + KachelMenu.gamesData[gameId].name + '</div></div>';
                } else if (KachelMenu.gamesData[gameId].comingSoon == 1) {
                    popImageElement.innerHTML = '<div class="dynamicKachel dynamicKachelVorschau"><div class="dynamicKachelText">' + KachelMenu.gamesData[gameId].name + '</div></div>';
                } else {
                    popImageElement.innerHTML = '<div class="dynamicKachel dynamicKachelBlau"><div class="dynamicKachelText">' + KachelMenu.gamesData[gameId].name + '</div></div>';
                }
            }
            if ((KachelMenu.gamesData[gameId].comingSoon == 1 && window['environment'] == 'live') || KachelMenu.gamesData[gameId].gameUrl === '') {
                document.getElementById('likePopupPlayButton').style.display = 'none';
                this.keyMap['likePopupLikeButton']['d'] = 'likePopupFeedbackButton';
                this.keyMap['likePopupFeedbackButton']['u'] = 'likePopupLikeButton';
            } else {
                document.getElementById('likePopupPlayButton').style.display = 'block';
                this.keyMap['likePopupLikeButton']['d'] = 'likePopupPlayButton';
                this.keyMap['likePopupFeedbackButton']['u'] = 'likePopupPlayButton';
            }
            document.getElementById('likeCount').innerHTML = KachelMenu.gamesData[gameId].likes;
            document.getElementById('likePopupFeedbackButton').href = "feedback.php?game_id=" + gameId;
            var similarGameCount = 0;
            if (typeof KachelMenu.gamesData[gameId].similar_games == 'object' && KachelMenu.gamesData[gameId].similar_games.length > 0) {
                var self = this;
                for (var i = 0; i < Math.min(2, KachelMenu.gamesData[gameId].similar_games.length); i++) {
                    var similarGameId = KachelMenu.gamesData[gameId].similar_games[i];
                    var similarGame = document.createElement('a');
                    similarGame.id = 'similarGame_' + i;
                    similarGame.href = '#';
                    similarGame.className = 'similarGameLink';
                    similarGame.style.top = '0px';
                    similarGame.style.left = (i * 120) + 'px';
                    var similarGameImage = document.createElement('div');
                    similarGameImage.style.width = '100px';
                    similarGameImage.style.height = '71px';
                    similarGameImage.style.backgroundSize = 'contain';
                    if (!KachelMenu.checkGameData(similarGameId, 'image'))
                        continue;
                    similarGameImage.style.backgroundImage = 'url(' + KachelMenu.gamesData[similarGameId].image.file_location + ')';
                    similarGame.appendChild(similarGameImage);
                    similarGameCount++;
                    (function(gameId) {
                        similarGame.addEventListener('click', function() {
                            KachelMenu.closeLikePopup();
                            setTimeout(function() {
                                self.focusGameId(gameId);
                            }, 500);
                        }, false);
                    }
                    )(similarGameId);
                    document.getElementById('likePopupSimilarGames').appendChild(similarGame);
                    KachelMenu.keyMap['similarGame_' + i] = {};
                    KachelMenu.keyMap['similarGame_' + i]['u'] = 'likePopupCloseButton';
                    KachelMenu.keyMap['similarGame_' + i]['l'] = (i == 0 ? function() {
                        KachelMenu.closeLikePopup()
                    }
                    : 'similarGame_' + (i - 1));
                    KachelMenu.keyMap['similarGame_' + i]['d'] = 'likePopupLikeButton';
                    KachelMenu.keyMap['similarGame_' + i]['r'] = 'similarGame_' + ((i + 1) == KachelMenu.gamesData[gameId].similar_games.length ? 0 : (i + 1));
                }
                if (similarGameCount > 0) {
                    document.getElementById('likePopupSimilar').style.display = 'block';
                    KachelMenu.keyMap['likePopupLikeButton']['u'] = 'similarGame_0';
                    KachelMenu.keyMap['likePopupCloseButton']['d'] = 'similarGame_0';
                } else {
                    document.getElementById('likePopupSimilar').style.display = 'none';
                }
            }
            if (similarGameCount == 0) {
                document.getElementById('likePopupSimilar').style.display = 'none';
            }
            document.getElementById('likePopup').style.width = '351px';
            document.getElementById('likePopupBG').style.display = 'block';
            if (KachelMenu.favoriteGames.indexOf(gameId) == -1) {
                document.getElementById('doLike').style.display = 'inline-block';
            } else {
                document.getElementById('isLiked').style.display = 'inline-block';
            }
            KachelMenu.setFocus('likePopupPlayButton');
            portal.setBackKey(function() {
                KachelMenu.closeLikePopup();
            });
        }
    },
    'closeLikePopup': function() {
        if (KachelMenu.likePopupData.show == true) {
            KachelMenu.likePopupData.show = false;
            document.getElementById('likePopup').style.width = '0px';
            document.getElementById('likePopupBG').style.display = 'none';
            document.getElementById('doLike').style.display = 'none';
            document.getElementById('isLiked').style.display = 'none';
            while (document.getElementById('likePopupSimilarGames').firstChild) {
                document.getElementById('likePopupSimilarGames').removeChild(document.getElementById('likePopupSimilarGames').lastChild);
            }
            KachelMenu.keyMap['likePopupLikeButton']['u'] = 'likePopupCloseButton';
            KachelMenu.keyMap['likePopupCloseButton']['d'] = 'likePopupLikeButton';
            KachelMenu.setFocus('kachel');
            portal.setBackKey('');
        }
    },
    'focusLaneAndPosition': function(laneNr, scrollPos) {
        var scrollLane = KachelMenu.laneData[parseInt(laneNr)].name;
        KachelMenu.jumpToLane(scrollLane);
        setTimeout(function() {
            KachelMenu.movesToDo++;
            KachelMenu.lastFocus = KachelMenu.currentFocus;
            KachelMenu.currentFocus = parseInt(scrollPos);
            KachelMenu.columnPosition = 6;
            KachelMenu.scrollBox();
        }, 100);
    },
    'focusGameId': function(gameId) {
        var scrollLane = -1;
        var scrollPos = -1;
        for (i in KachelMenu.laneData) {
            if (KachelMenu.laneData[i].gameOrder.indexOf(gameId) > -1) {
                scrollLane = KachelMenu.laneData[i].name;
                scrollPos = KachelMenu.laneData[i].gameOrder.indexOf(gameId);
                break;
            }
        }
        KachelMenu.jumpToLane(scrollLane);
        setTimeout(function() {
            KachelMenu.movesToDo++;
            KachelMenu.lastFocus = KachelMenu.currentFocus;
            KachelMenu.currentFocus = scrollPos;
            KachelMenu.columnPosition = 6;
            KachelMenu.scrollBox();
        }, 500);
    },
    'deactivatePreview': function() {
        document.getElementById('gamePreview').style.display = 'none';
        KachelMenu.gamePreviewEle.innerHTML = '';
        if (KachelMenu.moviePlayInitialized == true) {
            if (KachelMenu.gamePreviewMovieVisible == true) {
                document.getElementById('gamePreviewMovie').style.display = 'none';
                document.getElementById('gamePreviewMovie').style.visibility = 'hidden';
                KachelMenu.gamePreviewMovieVisible = false;
            }
            if (KachelMenu.gamePreviewButtonVisible == true) {
                KachelMenu.gamePreviewButtonVisible = false;
            }
            KachelMenu.stopMovie();
        }
    },
    'activatePreview': function(gameId) {
        document.getElementById('gamePreview').style.display = 'block';
        if (KachelMenu.hasMovieFile(gameId)) {
            if (KachelMenu.gamePreviewButtonVisible == false) {
                KachelMenu.gamePreviewButtonVisible = true;
            }
        }
        if (KachelMenu.checkGameData(gameId, 'preview_file_location')) {
            if (KachelMenu.laneData[KachelMenu.currentLane].name == 'nav_xmas' && KachelMenu.specialGames[gameId].preview_file_location != '')
                KachelMenu.gamePreviewEle.innerHTML = '<img src="' + KachelMenu.specialGames[gameId].preview_file_location + '" width="782" height="440"/>';
            else
                KachelMenu.gamePreviewEle.innerHTML = '<img src="' + KachelMenu.gamesData[gameId].preview_file_location + '" width="782" height="440"/>';
        }
    },
    'setMovesAnimated': function(state) {
        if (state == true && KachelMenu.movesAnimated == false && KachelMenu.movesToDo <= 4) {
            if (KachelMenu.animations == true)
                document.getElementById(KachelMenu.laneData[KachelMenu.currentLane].name).className = 'animated';
            KachelMenu.gameBox.className = 'animated';
            KachelMenu.movesAnimated = true;
        } else if (state == false && KachelMenu.movesAnimated == true) {
            KachelMenu.gameBox.className = '';
            document.getElementById(KachelMenu.laneData[KachelMenu.currentLane].name).className = '';
            KachelMenu.movesAnimated = false;
        }
    },
    'stopMovie': function(setFocus) {
        if (KachelMenu.player != null) {
            KachelMenu.playerState = 'stopped';
            if (videoAdParams.htmlMode == 'html') {
                KachelMenu.player.pause();
                if (document.getElementById('videoSource')) {
                    KachelMenu.player.removeChild(document.getElementById('videoSource'));
                    KachelMenu.player.load();
                    KachelMenu.player.currentTime = 0;
                    KachelMenu.moviePlayInitialized = false;
                }
            } else {
                KachelMenu.player.stop();
            }
        }
        KachelMenu.moviePlaying = false;
    },
    'showExclusive': function() {
        if (document.getElementById('gameExclusive'))
            document.getElementById('gameExclusive').style.display = 'block';
    },
    'hideExclusive': function() {
        if (document.getElementById('gameExclusive'))
            document.getElementById('gameExclusive').style.display = 'none';
    },
    'hideComingSoon': function() {
        if (this.comingSoonDivTimeout > 0) {
            clearTimeout(this.comingSoonDivTimeout);
            this.comingSoonDivTimeout = 0;
            document.getElementById('gameComingSoonDiv').style.opacity = 0;
        }
    },
    'showComingSoon': function() {
        if (this.comingSoonDivTimeout > 0) {
            clearTimeout(this.comingSoonDivTimeout);
            this.comingSoonDivTimeout = 0;
        }
        document.getElementById('gameComingSoonDiv').style.opacity = 1;
        this.comingSoonDivTimeout = setTimeout(function() {
            document.getElementById('gameComingSoonDiv').style.opacity = 0;
        }, 5000);
    },
    'toogleAlternativeCover': function() {
        if (this.lastGameIdToggled == KachelMenu.currentGameId) {
            KachelMenu.gamePreviewEle.innerHTML = '<img src="' + KachelMenu.gamesData[KachelMenu.currentGameId].preview_file_location + '" width="782" height="440"/>';
            this.lastGameIdToggled = 0;
        } else {
            KachelMenu.gamePreviewEle.innerHTML = '<img src="' + KachelMenu.gamesData[KachelMenu.currentGameId].alternative_cover_img.file_location + '" width="782" height="440"/>';
            this.lastGameIdToggled = KachelMenu.currentGameId;
        }
    },
    'playMovie': function(gameId, setFocus) {
        if (KachelMenu.player != null) {
            if (KachelMenu.movieTimer)
                clearTimeout(KachelMenu.movieTimer);
            if (KachelMenu.moviePlayInitialized === true) {
                KachelMenu.stopMovie();
            }
            if (KachelMenu.moviePlayInitialized === false) {
                try {
                    KachelMenu.playerState = 'initialized';
                    KachelMenu.moviePlayInitialized = true;
                    KachelMenu.player = document.getElementById('videoPlayer');
                    if (videoAdParams.htmlMode == 'html') {
                        if (!KachelMenu.videoListenersAdded) {
                            KachelMenu.player.addEventListener('canplay', function(e) {
                                KachelMenu.player.play();
                            }, false);
                            KachelMenu.player.addEventListener('playing', function(e) {
                                KachelMenu.moviePlaying = true;
                                KachelMenu.playerState = 'playing';
                                if (KachelMenu.gamePreviewMovieVisible === false) {
                                    KachelMenu.gamePreviewMovieVisible = true;
                                    document.getElementById('gamePreviewMovie').style.visibility = 'visible';
                                    document.getElementById('gamePreviewMovie').style.display = 'block';
                                }
                            }, false);
                            KachelMenu.player.addEventListener("ended", function() {
                                KachelMenu.playerState = 'ended';
                                if (KachelMenu.gamePreviewMovieVisible == true) {
                                    document.getElementById('gamePreviewMovie').style.display = 'none';
                                    document.getElementById('gamePreviewMovie').style.visibility = 'hidden';
                                    KachelMenu.gamePreviewMovieVisible = false;
                                }
                                if (document.getElementById('videoSource'))
                                    KachelMenu.player.removeChild(document.getElementById('videoSource'));
                                KachelMenu.moviePlaying = false;
                                KachelMenu.moviePlayInitialized = false;
                            });
                            KachelMenu.videoListenersAdded = true;
                        }
                        if (typeof KachelMenu.gamesData[gameId] != 'undefined' && typeof KachelMenu.gamesData[gameId].preview_file_location !== 'undefined' && KachelMenu.gamesData[gameId].preview_file_location !== '')
                            KachelMenu.player.poster = KachelMenu.gamesData[gameId].preview_file_location;
                        document.getElementById('gamePreviewMovie').style.display = 'block';
                        var source = document.createElement("source");
                        source.id = 'videoSource';
                        source.src = KachelMenu.getMovieFile(gameId);
                        KachelMenu.player.appendChild(source);
                        KachelMenu.player.load();
                        KachelMenu.player.setAttribute('width', 782);
                        KachelMenu.player.setAttribute('height', 440);
                    } else {
                        KachelMenu.player.onPlayStateChange = function() {
                            HbbTV.log("state: " + KachelMenu.player.playState);
                            if (KachelMenu.player.playState == 5 || KachelMenu.player.playState == 0 || KachelMenu.player.playState == 6) {
                                KachelMenu.playerState = 'ended';
                                KachelMenu.player.stop();
                                if (KachelMenu.gamePreviewMovieVisible == true) {
                                    document.getElementById('gamePreviewMovie').style.display = 'none';
                                    document.getElementById('gamePreviewMovie').style.visibility = 'hidden';
                                    KachelMenu.gamePreviewMovieVisible = false;
                                }
                                if (document.getElementById('videoSource'))
                                    KachelMenu.player.removeChild(document.getElementById('videoSource'));
                                KachelMenu.moviePlaying = false;
                                KachelMenu.moviePlayInitialized = false;
                            } else if (KachelMenu.player.playState == 1) {
                                KachelMenu.playerState = 'playing';
                                KachelMenu.moviePlaying = true;
                            } else if (KachelMenu.player.playState == 2) {
                                KachelMenu.playerState = 'paused';
                            }
                        }
                        ;
                        KachelMenu.player.data = KachelMenu.getMovieFile(gameId);
                        ;
                    }
                } catch (err) {
                    KachelMenu.reportError(1143, err);
                }
                if (videoAdParams.htmlMode == 'html') {} else {
                    KachelMenu.player.play(1);
                    KachelMenu.gamePreviewMovieVisible = true;
                    document.getElementById('gamePreviewMovie').style.visibility = 'visible';
                    document.getElementById('gamePreviewMovie').style.display = 'block';
                }
                KachelMenu.gamePreviewButtonVisible = false;
                if (setFocus == true) {
                    KachelMenu.setFocusedContainer('kachel');
                    KachelMenu.scrollBox();
                }
            } else {}
        }
    },
    'checkGameData': function(gameId, param) {
        if (typeof KachelMenu.gamesData[gameId] !== 'undefined' && typeof KachelMenu.gamesData[gameId][param] !== 'undefined')
            if (typeof KachelMenu.gamesData[gameId][param] == 'string' && KachelMenu.gamesData[gameId][param] == '')
                return false;
            else
                return true;
        else
            return false;
    },
    'reportError': function(lineNr, errorText) {
        if (typeof ErrorReports.log == 'function')
            ErrorReports.log('KachelMenu', lineNr, errorText);
    }
}
var feedScroller = {
    'newsFeed': [],
    'feedElement': null,
    'leftPos': 0,
    'pollInterval': null,
    'loop': 0,
    'init': function(feed) {
        this.newsFeed = feed;
        this.feedElement = document.getElementById('topNews');
        if (this.feedElement) {
            this.feedElement.style.display = 'block';
            this.showFeed();
        }
    },
    'showFeed': function() {
        this.loop++;
        var feedString = '';
        for (var i = 0; i < this.newsFeed.length; i++) {
            feedString += '<div style="left:' + (i * 550) + 'px;" class="newsFeed">' + this.newsFeed[i] + '</div>';
        }
        var newEle = document.createElement('div');
        newEle.innerHTML = feedString;
        this.feedElement.appendChild(newEle);
        this.feedElement.style.display = 'block';
        var self = this;
        this.pollInterval = setInterval(function() {
            self.leftPos = self.leftPos - 550;
            self.feedElement.style.left = self.leftPos + 'px';
            if (self.leftPos <= self.newsFeed.length * -550) {
                clearInterval(self.pollInterval);
                setTimeout(function() {
                    self.feedElement.style.display = 'none';
                }, 300);
                setTimeout(function() {
                    while (self.feedElement.firstChild)
                        self.feedElement.removeChild(self.feedElement.lastChild);
                    self.leftPos = 550;
                    self.feedElement.style.left = self.leftPos + 'px';
                    if (self.loop < 3) {
                        self.showFeed();
                    } else {
                        feedString = '<div style="left:0px;" class="newsFeed">' + self.newsFeed[0] + '</div>';
                        var newEle = document.createElement('div');
                        newEle.innerHTML = feedString;
                        self.feedElement.appendChild(newEle);
                        self.feedElement.style.display = 'block';
                        self.feedElement.style.left = '0px';
                    }
                }, 500);
            }
        }, 6000);
    }
}
var nextFeed = {
    'nextFeed': [],
    'feedElement': null,
    'pollInterval': null,
    'feedPointer': 0,
    'loop': 0,
    'init': function(feed) {
        this.nextFeed = feed;
        this.feedElement = document.getElementById('nextFeed');
        if (this.feedElement) {
            var i = this.nextFeed.length - 1;
            this.feedElement.innerHTML = '<div id="nextFeed' + i + '" style="" class="nextFeedItem">' + this.nextFeed[i] + '</div>';
            this.feedElement.style.display = 'block';
            var self = this;
            setTimeout(function() {
                self.showFeed();
            }, 3000);
        }
    },
    'showFeed': function() {
        this.loop++;
        var feedString = this.feedElement.innerHTML;
        for (var i = 0; i < this.nextFeed.length - 1; i++) {
            feedString = '<div id="nextFeed' + i + '" style="" class="nextFeedItem">' + this.nextFeed[i] + '</div>' + feedString;
        }
        this.feedElement.innerHTML = feedString;
        this.feedElement.style.display = 'block';
        var self = this;
        this.pollInterval = setInterval(function() {
            var curFeed = self.feedElement.lastChild;
            if (typeof curFeed != 'undefined') {
                curFeed.style.left = '-300px';
                setTimeout(function() {
                    self.feedElement.removeChild(curFeed);
                    setTimeout(function() {
                        curFeed.style.left = '0px';
                        self.feedElement.insertBefore(curFeed, self.feedElement.firstChild);
                    }, 1000);
                }, 1000);
            }
        }, 5000);
    }
}
