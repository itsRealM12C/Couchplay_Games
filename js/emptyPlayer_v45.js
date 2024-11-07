var adPlayer={videoParams:{},trackingParams:{},callbackfunction:null,'initWithAjax':function(tmpVideoAdParams,tmpTrackingParams,tmpCallbackfunction)
{this.init(tmpVideoAdParams,tmpTrackingParams,tmpCallbackfunction);},'init':function(tmpVideoAdParams,tmpTrackingParams,tmpCallbackfunction)
{this.trackingParams=tmpTrackingParams;this.videoParams=tmpVideoAdParams;if(tmpVideoAdParams.continueUrl&&tmpVideoAdParams.continueUrl.length>5)
{setTimeout(function(){window.location.href=tmpVideoAdParams.continueUrl;},100);}
else
{if(typeof adPlayer.videoPlayEnded=='function')
adPlayer.videoPlayEnded();if(HbbTV.broadcastStatus=='stopped')
{HbbTV.log('startBroadcast cause of: '+HbbTV.broadcastStatus);HbbTV.startBroadcast('video-container-small','video');}
if(typeof tmpCallbackfunction=='function')
{tmpCallbackfunction();}
if(typeof Banner!='undefined'&&typeof Banner.init=='function')
{if(tmpVideoAdParams.banners==true)
{try{Banner.init(tmpVideoAdParams,tmpTrackingParams);}catch(err){ErrorReports.log('emptyPlayer.js',47,err);}}}}},'videoPlayEnded':function()
{console.log('videoPlayEnded called');if(typeof this.onVideoAdEnd=='function')
{console.log('onVideoAdEnd called');this.onVideoAdEnd();}},'videoPlayStarted':function()
{console.log('videoPlayStarted called');if(typeof this.onVideoAdStart=='function')
{console.log('onVideoAdStart called');this.onVideoAdStart();}},}