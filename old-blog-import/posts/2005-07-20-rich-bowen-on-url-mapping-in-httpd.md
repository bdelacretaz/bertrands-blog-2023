---
title: "Rich Bowen on URL mapping (in httpd)"
date: "2005-07-20"
categories: 
  - "apachecon"
---

Some random notes on that session, which is mostly about the Alias, Redirect, ScriptAlias, Location and related directives - _not_ about mod\_rewrite which is discussed in two other sessions. Rich himself is working on a mod\_rewrite book currently, but that's another topic.

Explaining http redirects, Rich talks about regular expressions recommends Jeffrey Friedl's [Mastering Regular Expressions](http://regex.info/) book.

[Content negociation](http://httpd.apache.org/docs/content-negotiation.html) (_Options +Multiviews_) can be used to serve a website in the appropriate language based on the browser's _Accept-Language_ header.

Negociation can also be done on content-type, where the browser indicates which formats it prefers and the server sends the appropriate format (for example WML for mobile devices).

The mod\_deflate or mod\_gzip modules can also decide to send compressesd content to the client based on content negociation.

Content negociation can be made more efficient with .var files which declare the available options.

A CGI 404 handler and several other options (includes, etc.) can be used for intelligent handling of ErrorDocuments. But don't send yourself mail on every broken link, a better use is to create error documents which don't look too surprising to your visitors.

The _mod\_speling_ module (yes it's written like that) corrects common typos in URLs, upper/lowercase, etc.

Rich can't resist showing an example of the powerful _mod\_rewrite_, converting a nice URL like /stuff/one/two into a parameterized thing like /whatever/myscript.xyz?p1=one&p2=two. More on this in Mads Toftum talk later.

The _mod\_vhost\_alias_ module can also be used to implement virtual hosts, but according to Rich it is much harder to use than simple _mod\_rewrite_ stuff.

On _mod\_userdir_, Rich stresses the necessity to set the correct permissions on files which must be served by the web server, as the server runs under its own identity. UserDir can be enabled/disabled per user.

_Update: Rich has put his [presentations online](http://people.apache.org/~rbowen/presentations/)._
