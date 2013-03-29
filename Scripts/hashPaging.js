// HashPaging.js
(function($){
window.HashPaging=function(){}
HashPaging.checkGo=function(){if(!HashPaging._enabled){return;}if(window.location.hash.length<2){HashPaging.checkUrl(HashPaging.defaultPage);}else{HashPaging.checkUrl(window.location.hash.replaceAll('#',''));}}
HashPaging.checkUrl=function(hash){if(!HashPaging._enabled){return;}if(HashPaging.hashChanged!=null){HashPaging.hashChanged(hash);}try{if(hash!==HashPaging.defaultPage){var $3=(window.location.href.indexOf('#')>-1)?window.location.href.substr(0,window.location.href.indexOf('#')):window.location.href;var $4='';if(window.location.pathname.indexOf('.')>-1){$4=$3+'#'+hash;}else{$4=(($3.charAt($3.length-1)==='/')?$3:$3+'/')+'#'+hash;}if(window.location.href!==$4){window.location.href=$4;return;}}var $0={};var $1={};$1.pageName=hash;$0.async=false;$0.beforeSend=function($p1_0){
$p1_0.setRequestHeader('X-Requested-With','XMLHttpRequest');};$0.error=function($p1_0,$p1_1,$p1_2){
HashPaging.error($p1_0,$p1_1,$p1_2);};$0.type='POST';$0.data=$1;$0.dataType='html';$0.success=function($p1_0,$p1_1,$p1_2){
$('#'+HashPaging.elementId).html($p1_0);};$0.url=HashPaging.url;$.ajax($0);var $2={};$2.script=hash;$2.page=true;$0.data=$2;$0.dataType='script';$0.cache=true;$0.url=HashPaging.script_url;$0.success=function($p1_0,$p1_1,$p1_2){
};$.ajax($0);}catch($5){}}
HashPaging.registerClass('HashPaging');HashPaging.url='/Callback.aspx';HashPaging.script_url='/Callback.aspx';HashPaging._enabled=true;HashPaging.error=null;HashPaging.elementId=null;HashPaging.hashChanged=null;HashPaging.defaultPage='Home';HashPaging.functioning=false;$(function(){
HashPaging.error=function($p2_0,$p2_1,$p2_2){
};if ("onhashchange" in window) { window.onhashchange=HashPaging.checkGo;HashPaging.checkGo();HashPaging.functioning=true;};});})(jQuery);// This script was generated using Script# v0.7.6.0
