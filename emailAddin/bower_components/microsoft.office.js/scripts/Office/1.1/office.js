/* Office JavaScript API library */
/* Version: 16.0.3425.1000 */
/*
	Copyright (c) Microsoft Corporation.  All rights reserved.
*/

/*
	Your use of this file is governed by the Microsoft Services Agreement http://go.microsoft.com/fwlink/?LinkId=266419.
*/

var OSF=OSF||{};OSF.HostSpecificFileVersion="16.00";OSF.ConstantNames={HostSpecificFallbackVersion:OSF.HostSpecificFileVersion,OfficeJS:"office.js",OfficeDebugJS:"office.debug.js",DefaultLocale:"en-us",LocaleStringLoadingTimeout:2e3,OfficeStringJS:"office_strings.js",O15InitHelper:"o15apptofilemappingtable.js"};OSF.InitializationHelper=function(d,b,f,e,c){var a=this;a._hostInfo=d;a._webAppState=b;a._context=f;a._settings=e;a._hostFacade=c};OSF.InitializationHelper.prototype.getAppContext=function(){};OSF.InitializationHelper.prototype.setAgaveHostCommunication=function(){};OSF.InitializationHelper.prototype.prepareRightBeforeWebExtensionInitialize=function(){};OSF.InitializationHelper.prototype.loadAppSpecificScriptAndCreateOM=function(){};OSF._OfficeAppFactory=function(){var b="undefined",d=true,c=false,a=null,h=function(b,a){if(a&&b&&!a[b])a[b]={}};h("Office",window);h("Microsoft",window);h("Office",Microsoft);h("WebExtension",Microsoft.Office);window.Office=Microsoft.Office.WebExtension;var k={},q={},j={},g={id:a,webAppUrl:a,conversationID:a,clientEndPoint:a,wnd:window.parent,focused:c},e={isO15:d,isRichClient:d,hostType:"",hostPlatform:"",hostSpecificFileVersion:""},f={},l=a,o=function(){var c,g="_host_Info=",d=window.location.search;if(d){var b=d.split(g);if(b.length>1){var e=b[1],f=new RegExp("/[&#]/g"),a=e.split(f);if(a.length>0)c=a[0]}}return c},i=function(f,g,i){var h={},m=3e4;if(f&&g){var l=window.document,b=h[f];if(!b){var e=l.createElement("script");e.type="text/javascript";b={loaded:c,pendingCallbacks:[g],timer:a};h[f]=b;var j=function(){if(b.timer!=a){clearTimeout(b.timer);delete b.timer}b.loaded=d;for(var e=b.pendingCallbacks.length,c=0;c<e;c++){var f=b.pendingCallbacks.shift();f()}},k=function(){delete h[f];if(b.timer!=a){clearTimeout(b.timer);delete b.timer}for(var d=b.pendingCallbacks.length,c=0;c<d;c++){var e=b.pendingCallbacks.shift();e()}};if(e.readyState)e.onreadystatechange=function(){if(e.readyState=="loaded"||e.readyState=="complete"){e.onreadystatechange=a;j()}};else e.onload=j;e.onerror=k;i=i||m;b.timer=setTimeout(k,i);e.src=f;l.getElementsByTagName("head")[0].appendChild(e)}else if(b.loaded)g();else b.pendingCallbacks.push(g)}},n=function(){var g="hostInfoValue",f=o(),k=function(){var b=a;try{if(window.sessionStorage)b=window.sessionStorage}catch(c){}return b},h=k();if(!f&&h&&h.getItem(g))f=h.getItem(g);if(f){e.isO15=c;var i=f.split("$");if(typeof i[2]==b)i=f.split("|");e.hostType=i[0];e.hostPlatform=i[1];e.hostSpecificFileVersion=i[2];var j=parseFloat(e.hostSpecificFileVersion);if(j>OSF.ConstantNames.HostSpecificFallbackVersion)e.hostSpecificFileVersion=OSF.ConstantNames.HostSpecificFallbackVersion.toString();if(h)try{h.setItem(g,f)}catch(l){}}else e.isO15=d},m=function(b,a){f.getAppContext(b,a)},p=function(){n();for(var y=function(b,c){var d,a;b=b.toLowerCase();c=c.toLowerCase();a=b.indexOf(c);if(a>=0&&a===b.length-c.length&&(a===0||b.charAt(a-1)==="/"||b.charAt(a-1)==="\\"))d=b.substring(0,a);return d},s=document.getElementsByTagName("script"),z=s.length,v=[OSF.ConstantNames.OfficeJS,OSF.ConstantNames.OfficeDebugJS],x=v.length,p,h,o=0;!h&&o<z;o++)if(s[o].src)for(p=0;!h&&p<x;p++)h=y(s[o].src,v[p]);if(!h)throw"Office Web Extension script library file name should be "+OSF.ConstantNames.OfficeJS+" or "+OSF.ConstantNames.OfficeDebugJS+".";var t=500,w,r=function(){var a="function";if(typeof Sys!==b&&typeof Type!==b&&Sys.StringBuilder&&typeof Sys.StringBuilder===a&&Type.registerNamespace&&typeof Type.registerNamespace===a&&Type.registerClass&&typeof Type.registerClass===a){f=new OSF.InitializationHelper(e,g,k,q,j);f.setAgaveHostCommunication();m(g.wnd,function(a){l=a._appInstanceId;var j=function(){var c=100,b;function d(){if(Microsoft.Office.WebExtension.initialize!=undefined){f.prepareRightBeforeWebExtensionInitialize(a);b!=undefined&&window.clearTimeout(b)}else if(c==0){clearTimeout(b);throw"Office.js has not been fully loaded yet. Please try again later or make sure to add your initialization code on the Office.initialize function."}else{c--;b=window.setTimeout(d,100)}}f.loadAppSpecificScriptAndCreateOM(a,d,h)},e=c,g=function(){if(typeof Strings==b||typeof Strings.OfficeOM==b)if(!e){e=d;var f=h+OSF.ConstantNames.DefaultLocale+"/"+OSF.ConstantNames.OfficeStringJS;i(f,g)}else throw"Neither the locale, "+a.get_appUILocale().toLowerCase()+", provided by the host app nor the fallback locale "+OSF.ConstantNames.DefaultLocale+" are supported.";else{e=c;j()}},k=OSF.OUtil.formatString("{0}{1}/{2}",h,a.get_appUILocale().toLowerCase(),OSF.ConstantNames.OfficeStringJS);i(k,g,OSF.ConstantNames.LocaleStringLoadingTimeout)})}else if(t===0){clearTimeout(w);throw"MicrosoftAjax.js is not loaded successfully."}else{t--;w=window.setTimeout(r,100)}};if(e.isO15)i(h+OSF.ConstantNames.O15InitHelper,r);else{var u;u=e.hostType+"-"+e.hostPlatform+"-"+e.hostSpecificFileVersion+".js";i(h+u.toLowerCase(),r)}window.confirm=function(){throw"Function window.confirm is not supported.";return c};window.alert=function(){throw"Function window.alert is not supported."};window.prompt=function(){throw"Function window.prompt is not supported.";return a};window.history.replaceState=a;window.history.pushState=a};p();return {getId:function(){return g.id},getClientEndPoint:function(){return g.clientEndPoint},getContext:function(){return k},setContext:function(a){k=a},getHostFacade:function(){return j},setHostFacade:function(a){j=a},getInitializationHelper:function(){return f},getCachedSessionSettingsKey:function(){return (g.conversationID!=a?g.conversationID:l)+"CachedSessionSettings"}}}()