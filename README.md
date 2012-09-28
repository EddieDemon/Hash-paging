Hash-paging
===========

Browsing pages with the hash-tag. Like Twitter does.

When using hash paging you don't point to curtain parts of a page, but rather use
it as navigator with a lower bandwidth.

Lower bandwidth? Yes, instead of having to load a whole page again, including un-cached
external files, you'll only download a part of the page. In most cases this is used
to load content dynamically without loading the containing body.

This hash paging library uses the suffix value as its requested page. However, you
can also use it to browse through a mapstructure if used properly. That, however,
is a server-side part of the website.

There are a few things you can easily change and a few things that are required to be inserted yourself.
    1. Handle the error event. (hashPaging.error(request, textStatus, error))
    2. Set the ID of the element which content should change. (hashPaging.elementId)

This library was built using Script# v0.7.4.0 [http://scriptsharp.com/] GitHub [https://github.com/nikhilk].