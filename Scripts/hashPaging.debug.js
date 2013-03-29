//! HashPaging.debug.js
//

/*!
 * hashPaging script version 2.2.0
 * Description: Uses hash values to determine the content of the page. E.G.: http://www.myurl.com/#home
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

(function($) {

////////////////////////////////////////////////////////////////////////////////
// HashPaging

window.HashPaging = function HashPaging() {
    /// <field name="url" type="String" static="true">
    /// </field>
    /// <field name="script_url" type="String" static="true">
    /// </field>
    /// <field name="_enabled" type="Boolean" static="true">
    /// </field>
    /// <field name="error" type="Function" static="true">
    /// </field>
    /// <field name="elementId" type="String" static="true">
    /// </field>
    /// <field name="hashChanged" type="Function" static="true">
    /// </field>
    /// <field name="defaultPage" type="String" static="true">
    /// </field>
    /// <field name="functioning" type="Boolean" static="true">
    /// </field>
}
HashPaging.checkGo = function HashPaging$checkGo() {
    if (!HashPaging._enabled) {
        return;
    }
    if (window.location.hash.length < 2) {
        HashPaging.checkUrl(HashPaging.defaultPage);
    }
    else {
        HashPaging.checkUrl(window.location.hash.replaceAll('#', ''));
    }
}
HashPaging.checkUrl = function HashPaging$checkUrl(hash) {
    /// <param name="hash" type="String">
    /// </param>
    if (!HashPaging._enabled) {
        return;
    }
    if (HashPaging.hashChanged != null) {
        HashPaging.hashChanged(hash);
    }
    try {
        if (hash !== HashPaging.defaultPage) {
            var flatUrl = (window.location.href.indexOf('#') > -1) ? window.location.href.substr(0, window.location.href.indexOf('#')) : window.location.href;
            var fullUrl = '';
            if (window.location.pathname.indexOf('.') > -1) {
                fullUrl = flatUrl + '#' + hash;
            }
            else {
                fullUrl = ((flatUrl.charAt(flatUrl.length - 1) === '/') ? flatUrl : flatUrl + '/') + '#' + hash;
            }
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
        jqAO.error = function(request, textStatus, error) {
            HashPaging.error(request, textStatus, error);
        };
        jqAO.type = 'POST';
        jqAO.data = rdata;
        jqAO.dataType = 'html';
        jqAO.success = function(data, textStatus, request) {
            $('#' + HashPaging.elementId).html(data);
        };
        jqAO.url = HashPaging.url;
        $.ajax(jqAO);
        var sdata = {};
        sdata.script = hash;
        sdata.page = true;
        jqAO.data = sdata;
        jqAO.dataType = 'script';
        jqAO.cache = true;
        jqAO.url = HashPaging.script_url;
        jqAO.success = function(data, textStatus, request) {
        };
        $.ajax(jqAO);
    }
    catch ($e1) {
    }
}


////////////////////////////////////////////////////////////////////////////////
// _initializer



HashPaging.registerClass('HashPaging');
HashPaging.url = '/Callback.aspx';
HashPaging.script_url = '/Callback.aspx';
HashPaging._enabled = true;
HashPaging.error = null;
HashPaging.elementId = null;
HashPaging.hashChanged = null;
HashPaging.defaultPage = 'Home';
HashPaging.functioning = false;
$(function() {
    HashPaging.error = function(request, textStatus, error) {
    };
    if ("onhashchange" in window) { window.onhashchange=HashPaging.checkGo;
    HashPaging.checkGo();
    HashPaging.functioning = true;
    };
});
})(jQuery);

//! This script was generated using Script# v0.7.6.0
