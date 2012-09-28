/*!
 * hashPaging script version 2.2.0
 * Descritpion: Uses hash values to determine the content of the page. E.G.: http://www.myurl.com/#home
 *
 * Distributed in whole under the terms of the MIT http://jquery.org/license
 *
 * Copyright 2012, Gerben B.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

//! hashPaging.debug.js
//

(function($) {

////////////////////////////////////////////////////////////////////////////////
// _initializer



////////////////////////////////////////////////////////////////////////////////
// hashPaging

window.hashPaging = function hashPaging() {
    /// <field name="url" type="String" static="true">
    /// </field>
    /// <field name="error" type="Function" static="true">
    /// </field>
    /// <field name="elementId" type="String" static="true">
    /// </field>
}
hashPaging.chkGo = function hashPaging$chkGo() {
    if (window.location.hash.length < 2) {
        hashPaging.chkUrl('Home');
    }
    else {
        hashPaging.chkUrl(window.location.hash.replaceAll('#', ''));
    }
}
hashPaging.chkUrl = function hashPaging$chkUrl(hash) {
    /// <param name="hash" type="String">
    /// </param>
    try {
        var fullUrl = '';
        if (hash !== 'Home') {
            var flatUrl = (window.location.href.indexOf('#') > -1) ? window.location.href.substr(0, window.location.href.indexOf('#')) : window.location.href;
            fullUrl = ((flatUrl.charAt(flatUrl.length - 1) === '/') ? flatUrl : flatUrl + '/') + '#' + hash;
            if (window.location.href !== fullUrl) {
                window.location.href = fullUrl;
                return;
            }
        }
        var jqAO = {};
        var rdata = {};
        rdata.pageName = hash;
        jqAO.async = false;
        jqAO.beforeSend = function(request) {
            request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        };
        jqAO.data = rdata;
        jqAO.error = function(request, textStatus, error) {
            hashPaging.error(request, textStatus, error);
        };
        jqAO.success = function(data, textStatus, request) {
            $('#' + hashPaging.elementId).html(data);
        };
        jqAO.type = 'POST';
        jqAO.url = hashPaging.url;
        $.ajax(jqAO);
    }
    catch (ex) {
        alert('An error occured while loading the page. Please try it later again. \n\n' + ex.message);
    }
}


hashPaging.registerClass('hashPaging');
(function () {
    $(function() {
        window.onhashchange = hashPaging.chkGo;
        hashPaging.chkGo();
    });
})();
hashPaging.url = '/Callback.aspx';
hashPaging.error = null;
hashPaging.elementId = null;
})(jQuery);

//! This script was generated using Script# v0.7.4.0
