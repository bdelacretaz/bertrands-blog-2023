---
title: "microsling - Yet Another (cool) Web Applications Framework"
date: 2007-10-12
tags: 
  - "content"
  - "jcr"
  - "osgi"
  - "post"
  - sling
  - microsling
  - favorite
slug: microsling-yet-another-cool-web-applications-framework
---

_Links have been updated in August 2025._

From the _new and improved_ department: I spent part of this week writing a "reduced to the max" version of the [Sling](https://sling.apache.org) core that I've called _microsling_.

That's been a lot of fun of course, and I think the results are fairly impressive in terms of power per line of code, thanks to the power of the JCR API. Using "modern" Java, with scripting in the right places, helps a lot as well, but that's [nothing new](/2003/11/21/java-flash-and-beanshell-winning-team/).

In its current state, microsling allows you to use `SlingServlets`to process HTTP requests in a RESTful way, acting on abstract `Resources` and using "pluggable" request processing scripts in various languages.

A few useful `SlingServlets`are provided to create content and to render it using either Velocity templates or server-side javascript.

All this in less than 1'200 lines of Java code, all inclusive.

I'm not sure yet if microsling matches the complete vision of the Sling request processing, but this is already powerful stuff - and very simple to use.

See [SLING-47](https://issues.apache.org/jira/browse/SLING-47) for more info.

Or get the [code](https://github.com/apache/sling-whiteboard/tree/master/history/microsling) straight from the Sling whiteboard if you want to play with it.

The full [Sling](https://sling.apache.org) codebase can be overwhelming to start with, as there are lots of (useful) stuff in there: OSGi helpers and management console, a JSP compiler, JCR utilities, etc. This is an attempt to demonstrate the core Sling principles in a much simpler way, by getting rid of all the ancillary stuff (which deserves to be better organized in Sling, but that's another story).

Let's hope the current (2007) [API redesign](http://cwiki.apache.org/confluence/display/SLING/Sling+API+Redesign) and the microsling effort help us communicate more clearly the Sling vision to the JCR community, in order to give it the audience that it deserves!