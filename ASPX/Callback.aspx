<%@ Page Language="C#" AutoEventWireup="true" %>

<%
    if (Request.Headers.AllKeys.Contains("X-Requested-With") && Request.Headers["X-Requested-With"] == "XMLHttpRequest") // Checks if sent from AJAX Callback.
    {
        if (Request.Form.AllKeys.Contains("pageName") && Request.Form["pageName"] != string.Empty)
        { 
%>
Loaded page: <%= Request.Form["pageName"] %>.
<%
        }
    }
%>