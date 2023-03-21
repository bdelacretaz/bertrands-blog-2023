---
title: "Crowbar: scrape javascript-generated pages via Gecko and REST!"
date: 2007-02-24
tags: 
  - "the-web"
  - "tools"
  - "post"
slug: crowbar-scrape-javascript-generated-pages-via-gecko-and-rest
---

Careful with buzzwords on that one...from the _extremely clever hacks_ department, [Stefano](http://www.betaversion.org/~stefano/) strikes again with [crowbar](http://thread.gmane.org/gmane.comp.apache.labs.devel/78), a RESTish page-scraping component based on the Gecko rendering engine.

As a first proof of concept, scraping crowbar's [test page](http://simile.mit.edu/crowbar/test.html), where some content is generated via javascript, works just fine.

Using a non-javascript scraper gets you the raw page, obviously (you lame crawler!):

$ curl -s http://simile.mit.edu/crowbar/test.html
<html>
<head>
<script>
function init() {
document.getElementById("message").innerHTML = "Hi Crowbar!";
}
</script>
</head>
<body onload="init()">
<h1 id="message">Hi lame crawler</h1>
</body>
</html>

Using crowbar as a proxy, the page is rendered using the Gecko engine (called via a simple [XULRunner](http://developer.mozilla.org/en/docs/XULRunner) app), exactly as a a client browser would do (of course - it _is_ the same client browser engine that Firefox would use):

$ curl -s --data "url=http://simile.mit.edu/crowbar/test.html" http://127.0.0.1:10000/  | xml fo -s 2
<?xml version="1.0"?>
<html>
<-- (stuff added by crowbar for its test page omitted)... -->
<HEAD>
<SCRIPT>
function init() {
document.getElementById("message").innerHTML = "Hi Crowbar!";
}
</SCRIPT>
</HEAD>
<BODY onload="init()">
<H1 id="message">Hi Crowbar!</H1>
</BODY>
</html>

Note the use of [XMLStarlet](http://xmlstar.sourceforge.net/) to format the resulting document: as it's a DOM dump from Gecko, the output is well-formed in all cases.

The only thing missing seems to be the encoding declaration in the XML output: crawling [http://www.perdu.com](http://www.perdu.com) for example (one of my favorite references on the Web), didn't work produce parsable XML as the XML output is serialized using the iso-8859-1 encoding (at least here on my macosx system), but the XML declaration doesn't mention this.

The code is at [http://simile.mit.edu/repository/crowbar/trunk/](http://simile.mit.edu/repository/crowbar/trunk/) and can be installed directly under XULRunner.

Very clever! This will take some polishing of course, but if you need to index or analyze javascript-generated content (automated testing anyone?), there's no better way than getting it straight from the browser horse's mouth!

_Update: the brand new [Crowbar](http://simile.mit.edu/wiki/Crowbar) web site has more info._
