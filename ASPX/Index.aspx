<%@ Page Language="C#" AutoEventWireup="true" %>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Hash Paging example - Hash Paging v2.2.0 - Intcon</title>
    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.2.min.js"></script>
    <script type="text/javascript" src="../Scripts/mscorlib.js"></script>
    <script type="text/javascript" src="../Scripts/hashPaging.js"></script>
    <script type="text/javascript">
        hashPaging.error = function (request, textStatus, error) {
            alert("An error occured while loading a dynamic page.\n" + error);
        };
        hashPaging.elementId = "hp_Content";
        function a(b) { if ($(b).attr("style") == null || $(b).css("display") == "block") $(b).hide(); else $(b).show(); }
    </script>
</head>
<body>
    <div>
        <a href="#Home">Home</a> | <a href="#About">About</a> | <a href="#MusicDemon">MusicDemon</a>
        | <a href="#Intcon">Intcon</a></div>
    <br />
    <div id="hp_Content">
    </div>
    <div>
        <br />
        <button onclick="a('#c1'); return false;">
            Explained</button>
        <div id="c1" style="display: none">
            <pre>
The library will automatically detect changes to the URL, and also when the page is download for the first time. (It will request the page "Home").
This way you don't have to call anything to load any page.

When you click on any of the above links you'll notice that the URL changes but,
the page is not reloaded. This is because the hash-tag with suffix value is a pointer
to a part of the current page.

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

All you need are the files in /Scripts and reference to them in your pages. The included .cs and .aspx files are as example.

This library was built using <a href="http://scriptsharp.com/">Script# v0.7.4.0</a> <sup><a
    href="https://github.com/nikhilk">GitHub</a></sup>.
            </pre>
        </div>
    </div>
</body>
</html>
