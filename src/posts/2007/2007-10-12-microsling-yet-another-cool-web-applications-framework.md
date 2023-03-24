---
title: "microsling - Yet Another (cool) Web Applications Framework"
date: 2007-10-12
tags: 
  - "content"
  - "jcr"
  - "osgi"
  - "post"
  - microsling
  - favorite
slug: microsling-yet-another-cool-web-applications-framework
---

[![sling-logo.png](/assets/images/movable-type-blog-archives/sling-logo.png)](http://incubator.apache.org/sling/)From the _new and improved_ department: I spent part of this week writing a "reduced to the max" version of the [Sling](http://incubator.apache.org/sling) core that I've called _microsling_.

That's been a lot of fun of course, and I think the results are fairly impressive in terms of power per line of code, thanks to the power of the JCR API. Using "modern" Java, with scripting in the right places, helps a lot as well, but that's [nothing new](http://codeconsult.ch/bertrand/archives/000182.html).

In its current state, microsling allows you to use [SlingServlets](http://svn.apache.org/viewvc/incubator/sling/whiteboard/microsling/src/main/java/org/apache/sling/microsling/api/SlingServlet.java?view=markup) to process HTTP requests in a RESTful way, acting on abstract [Resources](http://svn.apache.org/viewvc/incubator/sling/whiteboard/microsling/src/main/java/org/apache/sling/microsling/api/Resource.java?view=markup) and using "pluggable" request processing scripts in various languages.

A few [useful SlingServlets](http://svn.apache.org/viewvc/incubator/sling/whiteboard/microsling/src/main/java/org/apache/sling/microsling/slingservlets/) are provided to create content and to render it using either Velocity templates or server-side javascript.

All this in less than 1'200 lines of Java code, all inclusive.

I'm not sure yet if microsling matches the complete vision of the Sling request processing, but this is already powerful stuff - and very simple to use.

See [SLING-47](https://issues.apache.org/jira/browse/SLING-47) and the [sling-dev](http://dir.gmane.org/gmane.comp.apache.sling.devel) list for more info. The microsling homepage is attached to SLING-47 and contains an overview of the request processing mechanism, including links to the source code for a quick walkthrough.

Or get the [code](http://svn.apache.org/repos/asf/incubator/sling/whiteboard/microsling) straight from the Sling whiteboard if you want to play with it. Fifteen minutes should be enough to [build](http://svn.apache.org/repos/asf/incubator/sling/whiteboard/microsling/README.txt) and run it if you have a JDK 1.5, Maven 2.0.7 and a WebDAV client.

The full [Sling](http://incubator.apache.org/sling) codebase can be overwhelming to start with, as there are lots of (useful) stuff in there: OSGi helpers and management console, a JSP compiler, JCR utilities, etc. This is an attempt to demonstrate the core Sling principles in a much simpler way, by getting rid of all the ancillary stuff (which deserves to be better organized in Sling, but that's another story).

Let's hope the current [API redesign](http://cwiki.apache.org/confluence/display/SLING/Sling+API+Redesign) and the microsling effort help us communicate more clearly the Sling vision to the JCR community, in order to give it the audience that it deserves!

_Update: the code has been moving around since I wrote this (and deleted from Sling's svn as we incorporated its ideas into Sling later), to get it you need an svn client now: `svn export -r 584116 http://svn.apache.org/repos/asf/incubator/sling/whiteboard/microsling@584116`_

_Update: if you're really nostalgic, microsling is back at https://svn.apache.org/repos/asf/sling/whiteboard/microsling/_
