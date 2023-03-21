---
title: "XSLTAL is available in Cocoon"
date: "2005-07-22"
categories: 
  - "cocoon"
---

[Christian](http://blog.bitflux.ch/archive/2005/07/21/xsltal-gets-cocoon-support.html) gladly accepted to [contribute](http://marc.theaimsgroup.com/?l=xml-cocoon-dev&m=112196402613727&w=2) his clever [XSLTAL](http://wiki.bitflux.org/Templates_TAL) templating system (based on the Zope [TAL](http://www.zope.org/Wikis/DevSite/Projects/ZPT/TAL%20Specification%201.4) presentation templating system) to [Cocoon](http://cocoon.apache.org).

Basically, XSLTAL allows one to create presentation templates as XHTML files, using attributes to pull data out of the XML stream produced by Cocoon.

In this simple example, a <div/> with class=s1 is generated for each s1 element found in the body element of the input document:

<div class="content" tal:repeat="s1 /document/body/s1">
<div class="s1">
<h2 tal:content="$s1/@title">S1 Title</h2>
<div tal:replace="structure $s1/node()"> content</div>
</div>
</div>

Despite all the exciting stuff going on here at [ApacheCon](http://apachecon.com), I have taken some time to implement it as the new _xsltal_ block in Cocoon. It is available in the 2.1.x branch for now, I'll add it to the trunk later.

This is good news! Having an easier to use presentation templating system is a nice plus for Cocoon.

To test the new block, get the BRANCH\_2\_1\_X from SVN, rebuild and see http://localhost:8888/samples/blocks/xsltal/

Thanks Christian! I'll be at you presentation in a few minutes so that we can make a joint announcement and get people excited about this.

_This was committed while sitting in Brian McCallister's excellent session on Ruby on Rails (and tested by Upayavira sitting next to me) so I'm afraid I didnt follow all the details of what Brian said. But it all sounds way cool!_
