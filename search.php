<!DOCTYPE html>

<html><head><meta name="viewport" content="width=1280, target-densitydpi=device-dpi"><meta charset="utf-8"><meta name="appstore:developer_url" content="https://www.couchplay.tv/"><meta name="appstore:bundle_id" content="com.itsmy.firetvapp"><meta name="appstore:store_id" content="com.itsmy.firetvapp"><link rel="stylesheet" href="https://cdn15.itsmy.tv/spielecenter/css/couchplaytv2_v86.css" type="text/css"><link rel="stylesheet" href="https://cdn11.itsmy.tv/spielecenter/css/couchplaytv_bottom_navi_v86.css" type="text/css"><style type="text/css">
				@font-face{
					font-family: "couchplay";
					src: url("/spielecenter/fonts/bebas130.ttf");
				}
				</style>	
		<script type="text/javascript">
		/* <![CDATA[ */
			
			var prod						= 'itsmytv';
			var pid							= 'foxxum';
			
			
			
		var _tvapp='';var osPlatform='';
			var deviceId				= 64749;
			var clientIp				= "1jasmdi2rtcnj63900jvddappl";
			var corsSupport			= true;
			var userId					= 25381887;
			var prodUrl					= '/spielecenter';
			var environment			= 'live';
			var sessExt					=	'&GCID=1jasmdi2rtcnj63900jvddappl';
			var prodExt					=	'&prod=itsmytv';
			var recoveryCode			= null;
			var pidExt					=	'&pid=foxxum';
			var portalExt				=	'&portal=';
			var linkExt					= sessExt+prodExt+pidExt;
			var cmpEnabled			= 0;
			var cdnDomain				="https:\/\/cdn1[rand].itsmy.tv";
			
			var clientData = {};
			clientData.ip="1jasmdi2rtcnj63900jvddappl";
			clientData.lang="EN";
			clientData.country = "HU";
			clientData.zip = null;
			clientData.city = null;
			
			var gameDev ={};
			gameDev.portalUrl="\/spielecenter\/?";
			gameDev.portalName="GameCenter";
			gameDev.device={};
			gameDev.device.performance=3;
			gameDev.device.name="IE";
			gameDev.device.manufacturer="";
			gameDev.device.id=64749;
			gameDev.gameId=0;
			gameDev.gamepadSimulation=1;
			
			
			var langToken ={};
			langToken.back="";
			langToken.close="";
			langToken.end="";
			langToken.home="GameCenter";
			
			
			//var yellowButtonUrl	=	'';
			//var blueButtonFunction	=	null;
			//var blueButtonUrl		=	'';
			var colorButtons 		= {};
			
			var showFriendsFeed	=	false;
			
			
			
			var cmpFocusHandledByCMP=false;
			var cmpUIClosed=false;
			
			
	
		/* ]]> */
		</script><script type="text/javascript" src="/spielecenter/js/ErrorReports_v45.js"></script><script type="text/javascript" src="/spielecenter/js/keycodes_v45.js"></script><script type="text/javascript" src="/spielecenter/js/hbbtv-base_v45.js"></script><script type="text/javascript" src="/spielecenter/js/portal_functions_v45.js"></script><script type="text/javascript" src="/spielecenter/js/emptyPlayer_v45.js"></script><script type="text/javascript" src="/spielecenter/js/couchplay_closeDialog_v45.js"></script><meta name="keywords" content="foxxum, itsmytv, hbbtv, smart tv, spiele, games, TV Spielecenter"><meta name="description" content="HbbTV &amp; SmartTV Spielecenter"><title>Couchplay</title></head><body class="games body_foxxum product_itsmytv layout_fullscreen"><div id="buttonBarBg"></div><div id="buttonBar"><span id="yellowButton" class="button yellow" style="">GameCenter</span><span id="blueButton" class="button"></span><span class="button extra" id="buttonExtra"></span></div><div id="debug" style="font-size:8px;"></div><div id="screen" class="lang_EN foxxum  fullscreenMode"><div id="gamecenterNavi"></div><div id="console"></div><div id="trackingBox"></div><div id="extraViews"></div><div id="video-container-small"></div><script type="text/javascript">
		/* <![CDATA[ */
			
			
			HbbTV.debug = false;

			HbbTV.debugLayerDuration = 30000;
			if (HbbTV.debug == true)
			{
				if (document.getElementById('debug'))
					document.getElementById('debug').style.zIndex=50000;
			}
		
			var cmpLocalTcfString='';
			function setCMPConstentToStorage(tcfString)
			{
				HbbTV.log('setCMPConstentToStorage: '+tcfString);
				cmpLocalTcfString=tcfString;
				videoAdParams.gdprConsent=tcfString;
				portal.storeCookie('tcfString', tcfString, 365);
			}
			
			function getCMPConsentFromStorage()
			{
				//HbbTV.debug=true;
				HbbTV.log('getCMPConsentFromStorage');
				

				
				if (cmpLocalTcfString!=='')
				{
					HbbTV.log('return local: '+cmpLocalTcfString);
					return cmpLocalTcfString;
				}
				else
				{
					var possibleCookies=['__cmpconsentx103624', '__cmpconsentx103832','euconsent-v2', 'tcfString'];
					var cmpCookie='';
					
					for(var i in possibleCookies)
					{
						//console.log('check', i, possibleCookies[i]);
						cmpCookie = portal.getCookie(possibleCookies[i]);
						if (typeof cmpCookie!=='undefined' && cmpCookie!=='')
						{
							HbbTV.log('return cookie '+possibleCookies[i]+': '+cmpCookie);
							return cmpCookie;
						}
					}
					
					if (typeof window.localStorage!=='undefined' && window.localStorage.hasOwnProperty('__cmpconsentx103624.itsmy.tv')){
					
						HbbTV.log('return localStorage: '+window.localStorage['__cmpconsentx103624.itsmy.tv']);
						return window.localStorage['__cmpconsentx103624.itsmy.tv'];
					}else if (typeof window.localStorage!=='undefined' && window.localStorage.hasOwnProperty('__cmpconsentx103624_.gofresh.tv')){
					
						HbbTV.log('return localStorage: '+window.localStorage['__cmpconsentx103624_.gofresh.tv']);
						return window.localStorage['__cmpconsentx103624_.gofresh.tv'];
					}
					
					
				}
				return '';
			}
		
		
		
			var trackingParams = {
				'uid':25381887,
				'gameId':0,
				'adSize':'BIG',
				'deviceId':64749,
				'consentDigits':"11111111111",
				'cmpVersion':"tcf2dot2",
				'GCID':"1jasmdi2rtcnj63900jvddappl"
				
			};
			
			var videoAdParams ={
				'htmlMode':"html",
				'adsEnabled':false,
				'adPlayer':null,
				'adCallType':'page',
				'partnerId':"foxxum",
				'uidHashMD5':"42177f1c4293e02a2d260d4554626009",
				'uidHashIfa':"42177F1C-4293-E02A-2D26-0D4554626009",
				'bundleid':"com.itsmy.firetvapp",
				'clientip':"195.199.249.78",
				'detailedPartnerId':"gofresh",
				'adLayerPageType':"games.video",
				'adLayerAppEnv':"default",
				'adSize':"BIG",
				'smallAds':false,
				'resizeAds':false,
				'debugDeviceId':"25354738",
				'gameId':0,
				'gameName':null,
				'gameCategory':null,
				'gameCategoryId':0,
				'iabGenre':"Entertainment",
				'iabCategories':[],
				'keywords':",entertainment,haus,kinder,familie,family,finance,urlaub,auto",
				'gp':5,
				'maxLoops':0,
				'loop':0,
				'adOptOut':false,
				'gdpr':1,
				'gdprConsent':getCMPConsentFromStorage(),
				'fullConsent':1,
				
				'adShowTime':0,
				'curTime':1730976663,
				'adInterval':240,
				'adSleepInterval':12000,
				'banners':false,
				'bannerType':"powercorner",
				'bannerInterval':120,
				'continueUrl':"",
				'pollUrl':'', 
				'fc': {
					'so':0, 
					'sc':0,
					'ss':0,
					'st':0,
					'sx':0,
					'gb':0,
					'gf':0,
					'sa':0,
					'mx':0,
					'gx':0
				},
				'demoa':"30-39",
				'demog':"m",
				'demos':"Autos, Games &amp; Technik",
				'demoNugged':"n3%3D1%26n4%3D3",
				'sda_user':[50,7,243,687,733,734],
				'queue':[],
				'partnerRef':"https://foxxum.itsmy.tv/spielecenter/",
				'iabStoreId':"com.itsmy.firetvapp",
				'iabStoreUrl':"https://play.google.com/store/apps/details?id=com.itsmy.firetvapp",
				'iabBundleId':"com.itsmy.firetvapp",
				'isEU':1,
				'useHTTPS':0,
				'useProtocol':"http",
				
				
				
			};
		
					
			window.addEventListener('load', function(e)
			{
				
				HbbTV.log('prod: '+prod+' pid: '+pid);
			}, false);
			
			if (['pro7', 'pro7at', 'hbbtv'].indexOf(prod)==-1 && window['devicePixelRatio']>1)
			{
				window['devicePixelRatio']=1;
			}
			
			
		/* ]]> */
		</script>
		<div id="fullBody"><style type="text/css">
	#screen{
		background-color: #1e2a32;
		top:0px;
		left:0px;
		width:1280px;
		height:720px;
	}
	#fullBody{
		position:absolute;
		top:35px;
		left:63px;
		width:1154px;
		height:650px;
	
	}
	#mainBody{
		overflow:visible;
	}
	
	#backButtonContainer{
		display:block;
		position:absolute;
		top:480px;
		left:0px;
		width:302px;
		height:40px;
		text-align:center;
	}
	.nameListItem{
		position:relative;
		display:inline-block;
		vertical-align:top;
		border:0px;
		padding:0px;
		margin:4px;
		width:146px;
		height:106px;
	}
	.listItemName{
		font-size:18px;
	}
	.listItemDesc{
		font-size:14px;
	}
	.nameListItemLink{
		color:#FFF;
		position:absolute;
		border:2px solid transparent;
		padding:3px;
	}
	.nameListItemLink:focus, .nameListItemLink:hover{
		color:red;
		border:2px solid white;
	}
	.nameChar{
		font-size:30px;
		text-align:center;
	}
	.elementFocused .listItemName{
		
	}
	
	.listItemArrow{
		background-image:url(/images/cms_images/icon_right_20091012184425_20x14.gif);
		width:20px;
		height:14px;
		display:inline-block;
		visibility:hidden;
		vertical-align:middle;
	}
	.listItemImage{
		width:146px;
		height:104px;
	}
	
	.nameListItemLink:focus .listItemArrow, .nameListItemLink:hover .listItemArrow,.elementFocused .listItemArrow
	{
		visibility:visible;
	}
	
	#itemListSelected{
		display:inline-block;
		margin-left:20px;
		font-size:12px;
		color:#999;
		vertical-align:middle;
	
	}
	
	#keyboard{
		position:absolute;
		width:302px;
		left:0px;
		top:175px;
		height:160px;
		text-align:center;
		
	}
	.fullscreenMode #video-container-small{
		/*display:none;*/
		left:85px !important;
		top:470px !important;
	}
	
	#gameDataImageLine{
		position:absolute;
		width:628px;
		height:254px;
		
		top:-2px;
		left:-2px;
		border:5px solid #1e2a32;
		box-sizing:border-box;
	}	

	#gameDataImage{
		background-size:cover;
		position:absolute;
		width:624px;
		height:250px;
		
		top:0px;
		left:0px;
		background-repeat:no-repeat;
		background-color: #444;
		background-position:0px 0px;
	}
	
	#gameDataImageCover
	{
		position:absolute;
		width:634px;
		height:260px;
		top:-5px;
		left:-5px;
		background-image: linear-gradient(0deg, #1e2a32 10px, transparent), linear-gradient(120deg, #1e2a32 40px, transparent);
		background-repeat:no-repeat;
		background-position:0px 0px;
	}
	
	#gameDataStats{
		position:relative;
		font-size:16px;
		color:#FFF;
		margin-top:102px;
		
	}
	
	#gameDataName{
		position:relative;
		font-size:30px;
		color:#FFF;
		font-family: 'couchplay', Tiresias, 'Philips Screen Font 4','Droid Sans', sans-serif !important;
		margin-bottom:10px;
	}
	.scrollBar{
		display: none;
		position: absolute;
		left: 1110px;
		top: 247px;
		width: 20px;
		height: 310px;
		background-color:#444;
		border-radius:20px;
	}
	.scrollBarSquare {
		display: block;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 20px;
		height: 20px;
		border-radius:20px;
		background-color:#CCC;
	}
	
	
	</style><a id="exitLink" href="/spielecenter/?" style="display:none"></a><div style="position:absolute;top:0px;left:20px;height:600px;width:1050px;text-align:left;"><div class="headline" style="position:absolute;top:40px;left:0px;width:1050px;color:#FFF;">Search</div><div style="position:absolute;left:0px;top:88px;width:450px;font-size:18px;color:#999;"> </div><div style="position:absolute;top:125px;width:348px;height:60px;left:0px;"><div id="char_0" class="nameChar" style="color:#FFF;position:absolute;top:0px;left:0px;width:40px;height:32px;border-width:0px 0px 3px 0px;border-style:solid;border-color:#5D5B65;"></div><div id="char_1" class="nameChar" style="color:#FFF;position:absolute;top:0px;left:42px;width:40px;height:32px;border-width:0px 0px 3px 0px;border-style:solid;border-color:#5D5B65;"></div><div id="char_2" class="nameChar" style="color:#FFF;position:absolute;top:0px;left:84px;width:40px;height:32px;border-width:0px 0px 3px 0px;border-style:solid;border-color:#5D5B65;"></div><div id="char_3" class="nameChar" style="color:#FFF;position:absolute;top:0px;left:126px;width:40px;height:32px;border-width:0px 0px 3px 0px;border-style:solid;border-color:#5D5B65;"></div><div id="char_4" class="nameChar" style="color:#FFF;position:absolute;top:0px;left:168px;width:40px;height:32px;border-width:0px 0px 3px 0px;border-style:solid;border-color:#5D5B65;"></div><div id="char_5" class="nameChar" style="color:#FFF;position:absolute;top:0px;left:210px;width:40px;height:32px;border-width:0px 0px 3px 0px;border-style:solid;border-color:#5D5B65;"></div><div id="char_6" class="nameChar" style="color:#FFF;position:absolute;top:0px;left:252px;width:40px;height:32px;border-width:0px 0px 3px 0px;border-style:solid;border-color:#5D5B65;"></div></div><style type="text/css">
		
		.keyboard_key{
			width:40px;
			height:40px;
			line-height:40px;
			border-radius:5px;
			margin:4px;
			display:inline-block;
			border:1px solid grey;
			font-size:22px;
			
		}
		.keyboard_key:hover, .keyboard_key:focus{
			border:1px solid #26BBFE;
			color:#26BBFE;
			font-weight:bold;
		}
		.key_large{
			width:70px;
		}
		.key_large110{
			width:110px;
		}
		.key_extralarge{
			width:120px;
		}
		#cursor{
			-webkit-animation: 1s blink step-end infinite;
  		-moz-animation: 1s blink step-end infinite;
			-ms-animation: 1s blink step-end infinite;
			-o-animation: 1s blink step-end infinite;
			animation: 1s blink step-end infinite;
		}
		pre{
			padding:0px;
			margin:0px;
			display:inline;
			font-size:26px;
			line-height:21px;
		}
		
		
		
		@keyframes "blink"{
			from, to {
				color: transparent;
			}
			50% {
				color: black;
			}
		}

		@-moz-keyframes blink{
			from, to {
				color: transparent;
			}
			50% {
				color: black;
			}
		}

		@-webkit-keyframes "blink" {
			from, to {
				color: transparent;
			}
			50% {
				color: black;
			}
		}

		@-ms-keyframes "blink"{
			from, to {
				color: transparent;
			}
			50% {
				color: black;
			}
		}

		@-o-keyframes "blink" {
			from, to {
				color: transparent;
			}
			50% {
				color: black;
			}
		}
	</style><div id="keyboard"><div class="keyboard_row"><a href="#" class="keyboard_key" id="key_a">A</a><a href="#" class="keyboard_key" id="key_b">B</a><a href="#" class="keyboard_key" id="key_c">C</a><a href="#" class="keyboard_key" id="key_d">D</a><a href="#" class="keyboard_key" id="key_e">E</a><a href="#" class="keyboard_key" id="key_f">F</a></div><div class="keyboard_row"><a href="#" class="keyboard_key" id="key_g">G</a><a href="#" class="keyboard_key" id="key_h">H</a><a href="#" class="keyboard_key" id="key_i">I</a><a href="#" class="keyboard_key" id="key_j">J</a><a href="#" class="keyboard_key" id="key_k">K</a><a href="#" class="keyboard_key" id="key_l">L</a></div><div class="keyboard_row"><a href="#" class="keyboard_key" id="key_m">M</a><a href="#" class="keyboard_key" id="key_n">N</a><a href="#" class="keyboard_key" id="key_o">O</a><a href="#" class="keyboard_key" id="key_p">P</a><a href="#" class="keyboard_key" id="key_q">Q</a><a href="#" class="keyboard_key" id="key_r">R</a></div><div class="keyboard_row"><a href="#" class="keyboard_key" id="key_s">S</a><a href="#" class="keyboard_key" id="key_t">T</a><a href="#" class="keyboard_key" id="key_u">U</a><a href="#" class="keyboard_key" id="key_v">V</a><a href="#" class="keyboard_key" id="key_w">W</a><a href="#" class="keyboard_key" id="key_x">X</a></div><div class="keyboard_row"><a href="#" class="keyboard_key" id="key_y">Y</a><a href="#" class="keyboard_key" id="key_z">Z</a><a href="#" class="keyboard_key key_large" id="key_backspace"><img src="/spielecenter/images/keyboard_backspace.png" style="vertical-align:middle"></a></div></div><div id="gameDataContainer" style="position:absolute;top:-20px;left:480px;width:624px;height:270px;">
		
		
		<div style="" id="gameDataImage"><div style="" id="gameDataImageCover"></div></div>
		<div style="" id="gameDataImageLine"></div>
		<div style="position:absolute;top:0px;left:0px;width:500px;height:270px;">
			<div style="" id="gameDataStats"></div>
			<div style="" id="gameDataName"></div>
			<div style="position:relative;font-size:18px;color:#FFF;" id="gameDataDesc"></div>
			<div style="position:absolute;bottom:5px;font-size:14px;color:#CCC;" id="gameDataText"></div>
		</div>
		
	</div><div id="inputField" style="scrollTop:0;position:absolute;top:250px;left:480px;width:624px;height:300px;overflow:hidden">
		<div id="listContainerEmpty" style="position:absolute;font-size:22px;display:block;color:#FFF;"><span style="vertical-align:top;display:inline-block;position:relative;background-color:#444;width:146px;height:106px;margin:4px;"></span><span style="vertical-align:top;display:inline-block;position:relative;background-color:#444;width:146px;height:106px;margin:4px;"></span><span style="vertical-align:top;display:inline-block;position:relative;background-color:#444;width:146px;height:106px;margin:4px;"></span><span style="vertical-align:top;display:inline-block;position:relative;background-color:#444;width:146px;height:106px;margin:4px;"></span><span style="vertical-align:top;display:inline-block;position:relative;background-color:#444;width:146px;height:106px;margin:4px;"></span><span style="vertical-align:top;display:inline-block;position:relative;background-color:#444;width:146px;height:106px;margin:4px;"></span><span style="vertical-align:top;display:inline-block;position:relative;background-color:#444;width:146px;height:106px;margin:4px;"></span><span style="vertical-align:top;display:inline-block;position:relative;background-color:#444;width:146px;height:106px;margin:4px;"></span><span style="vertical-align:top;display:inline-block;position:relative;background-color:#444;width:146px;height:106px;margin:4px;"></span><span style="vertical-align:top;display:inline-block;position:relative;background-color:#444;width:146px;height:106px;margin:4px;"></span><span style="vertical-align:top;display:inline-block;position:relative;background-color:#444;width:146px;height:106px;margin:4px;"></span><span style="vertical-align:top;display:inline-block;position:relative;background-color:#444;width:146px;height:106px;margin:4px;"></span></div>
		<div id="listContainer" style="transition:top 500ms;position:absolute;font-size:22px;display:block;color:#FFF;"></div>
	</div><div class="scrollBar" id="scrollBar" style=""><div class="scrollBarSquare" id="scrollBarSquare" style="top:0px;transition:top 500ms;"></div></div><div id="backButtonContainer" style=""><a id="backButton" style="" class="portalButton" href="/spielecenter/?&amp;prod=itsmytv&amp;pid=foxxum">Back<div class="buttonHand"><div style="position:absolute;left:0px;top:0px;width:44px;height:44px;background:url('/images/cms_images/nav_mauszeiger_20160301120347_44x44.png') left top no-repeat"></div></div></a></div></div><script type="text/javascript" src="/spielecenter/js/search_v7.js"></script><script type="text/javascript">
// <![CDATA[
	Search.init([["a","b","c","d","e","f"],["g","h","i","j","k","l"],["m","n","o","p","q","r"],["s","t","u","v","w","x"],["y","z","backspace"]], "1e2a32");
	setYellowButtonUrl("/spielecenter/?", "GameCenter");
// ]]>
</script></div><div id="poweredby"></div></div>
		<script type="text/javascript">
		/* <![CDATA[ */
		
		(function(){
			
			window.addEventListener('load', function(e)
			{
				//console.log('register onLoad html_class.inc');
				
				
				try{
					if (typeof document.activeElement=='undefined')
					{
						ErrorReports.log('html_class.inc',3456, 'no support for activeElement');
					}
				}catch(err){
			
				}
				
		
				try
				{
					var firstLinkEle = document.getElementsByClassName('firstLink');
					if (typeof firstLinkEle[0] != 'undefined')
					{
						//console.log('set focus '+firstLinkEle[0]);
						firstLinkEle[0].focus();
					}
				}
				catch(err)
				{
					ErrorReports.log('html_class.inc',1177, err);
				}
				
				
				
				
					
			}, false);
						
		})();
		/* ]]> */
		</script>
			<script type="text/javascript">
			/* <![CDATA[ */
				var _paq = false;
			/* ]]> */
			</script></body></html>