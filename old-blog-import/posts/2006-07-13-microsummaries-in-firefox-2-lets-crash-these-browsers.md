---
title: "Microsummaries in Firefox 2: let's crash these browsers!"
date: "2006-07-13"
categories: 
  - "tools"
---

The [Firefox 2 Beta 1 milestone](http://developer.mozilla.org/devnews/index.php/2006/07/12/firefox-2-beta-1-milestone-released/) has been released, and includes [microsummaries](http://wiki.mozilla.org/Microsummaries), a nitfy way of making bookmark labels dynamic.

A microsummary can be as simple as a <link> element pointing to a plain text resource, as used by [woot.com](http://www.woot.com) to return a one-liner about their deal of the day:

`<link href="DefaultMicrosummary.ashx" type="application/x.microsummary+xml" rel="microsummary"/>`

Where [http://www.woot.com/DefaultMicrosummary.ashx](http://www.woot.com/DefaultMicrosummary.ashx) returns (today) a text/plain document saying `$129.99 : iRiver H10 20GB MP3 Player & Recorder - Remix Blue"`.

Microsummaries can also be defined by a _generator_, which executes a client-side XSLT transform to summarize the page, as in this example from [Asa Dotzler's blog](http://weblogs.mozillazine.org/asa/):

<generator xmlns="http://www.mozilla.org/microsummaries/0.1"
name="Latest Blog Post Title">
<template>
<transform xmlns="http://www.w3.org/1999/XSL/Transform" version="1.0">
<output method="text"/>
<template match="/">
<value-of select="/html/body/div\[2\]/div\[1\]/h3"/>
<text></text>
</template>
</transform>
</template>
</generator>

Find more info on the [mozilla.org microsummaries](http://wiki.mozilla.org/Microsummaries) page.

Having more dynamic bookmarks sounds cool, but I wonder what Firefox will make out of the following generator:

<generator xmlns="http://www.mozilla.org/microsummaries/0.1"
name="Don't you love infinite loops?">
<template>
<transform xmlns="http://www.w3.org/1999/XSL/Transform" version="1.0">
<output method="text"/>
<template match="/">
<apply-templates select="/"/>
</template>
</transform>
</template>
</generator>

Hmmm....crashing your browser by bookmarking a page sounds like no fun.

_![bookmark-properties-microsummary.jpg](images/bookmark-properties-microsummary.jpg)Update: maybe I'm too used to dynamic stuff not working properly in browsers, but this is 2006...of course Firefox is not so silly, and gracefully catches the infinite loop. In my tests, the microsummary text was set to either the file name or to an empty string, but the browser didn't freeze as Myk mentions. Note that the microsummary does not appear automatically when bookmarking a microsummary-enabled page, you have to select it in the bookmark's properties, as shown on the screenshot._
