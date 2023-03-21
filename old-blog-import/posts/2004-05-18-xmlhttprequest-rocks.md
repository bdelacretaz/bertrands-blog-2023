---
title: "XmlHttpRequest rocks"
date: "2004-05-18"
categories: 
  - "tools"
---

I've been using the [XmlHttpRequest](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk30/htm/xmobjxmlhttprequest.asp) mechanism to communicate directly between client-side javascript and a server application.

Very useful, simple to use and fairly portable: although my target in this case is Internet Explorer, the same javascript code works on Firebird and Safari on macosx (but not with Opera for example).

So this is limited to cases where you control the client population, but being able to communicate "behind the scenes" between a page and the application server opens many possibilities for data validation, multiple clipboards, spell checking and much more, with a minimum of javascript code. I've also seen some great examples of this combined with [XUL](http://www.mozilla.org/projects/xul/).

The following pages were very useful in getting this to work:

- [Using the XML HTTP Request object](http://jibbering.com/2002/4/httprequest.html) by Jim Ley.
- Mozilla's [XML Extras Online Tests](http://www.mozilla.org/xmlextras/tests.html)
