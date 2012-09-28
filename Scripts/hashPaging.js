// hashPaging.js
(function($){
window.hashPaging=function(){}
hashPaging.chkGo=function(){if(window.location.hash.length<2){hashPaging.chkUrl('Home');}else{hashPaging.chkUrl(window.location.hash.replaceAll('#',''));}}
hashPaging.chkUrl=function(hash){try{var $0='';if(hash!=='Home'){var $3=(window.location.href.indexOf('#')>-1)?window.location.href.substr(0,window.location.href.indexOf('#')):window.location.href;$0=(($3.charAt($3.length-1)==='/')?$3:$3+'/')+'#'+hash;if(window.location.href!==$0){window.location.href=$0;return;}}var $1={};var $2={};$2.pageName=hash;$1.async=false;$1.beforeSend=function($p1_0){
$p1_0.setRequestHeader('X-Requested-With','XMLHttpRequest');};$1.data=$2;$1.error=function($p1_0,$p1_1,$p1_2){
hashPaging.error($p1_0,$p1_1,$p1_2);};$1.success=function($p1_0,$p1_1,$p1_2){
$('#'+hashPaging.elementId).html($p1_0);};$1.type='POST';$1.url=hashPaging.url;$.ajax($1);}catch($4){alert('An error occured while loading the page. Please try it later again. \n\n'+$4.message);}}
hashPaging.registerClass('hashPaging');(function(){$(function(){
window.onhashchange = hashPaging.chkGo;hashPaging.chkGo();});})();
hashPaging.url='/Callback.aspx';hashPaging.error=null;hashPaging.elementId=null;})(jQuery);// This script was generated using Script# v0.7.4.0
