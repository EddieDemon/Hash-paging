Hash-paging
===========

Browsing pages with the hash-tag. Like Twitter does.

The library will automatically detect changes to the URL, and also when the page is download for the first time. (It will request the page "Home").
This way you don't have to call anything to load any page.

When using hash paging you don't point to curtain parts of a page, but rather use
it as navigator with a lower bandwidth.

Lower bandwidth? Yes, instead of having to load a whole page again, including un-cached
external files, you'll only download a part of the page. In most cases this is used
to load content dynamically without loading the containing body.

The library sends two AJAX requests to the server once the hash value has been changed.


This hash paging library uses the hash value as its requested page. However, you
can also use it to browse through a mapstructure if used properly. That is a server-side part of the website.

There are a few things you can easily change and a few things that are required to be inserted yourself.
 1. Handle the error event. (hashPaging.error(request, textStatus, error))
 2. Set the ID of the element which content should change. (hashPaging.elementId)
 3. Set the callback URL (hashPaging.url) (Default: /Callback.aspx)

All you need are the files in /Scripts and reference to them in your pages. The included .cs and .aspx files are as example.	

This library was built using Script# v0.7.4.0 [http://scriptsharp.com/] GitHub [https://github.com/nikhilk].