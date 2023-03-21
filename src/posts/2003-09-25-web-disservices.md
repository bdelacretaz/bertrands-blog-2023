---
title: "Web disservices"
date: 2003-09-25
tags: 
  - "the-web"
  - "post"
slug: web-disservices
---

Interesting [article](http://www.xml.com/pub/a/2003/09/24/dive.html) by [Mark Pilgrim](http://diveintomark.org) at xml.com, about how to simplify too-complex Web Services (namely, the new [Microsoft.com Web Services](http://msdn.microsoft.com/webservices/building/livewebservices/mscomservices/default.aspx)).

As usual, MS finds a way to introduce a slightly-non-standard-yet-we-tell-you-it-is new "feature" in this interface, using a new and improved way of passing authentication tokens, which most existing SOAP clients do not support.

Mark comes to the rescue in a very interesting way with his no-nonsense REST-like [gateway](http://diveintomark.org/msweb/) to MS's Web Services, including (Python!) source code.

I didn't know that WSDL supports [HTTP GET](http://www.w3.org/TR/wsdl#_http) bindings, but this makes for a fairly simple way of publishing existing apps as Web Services.
