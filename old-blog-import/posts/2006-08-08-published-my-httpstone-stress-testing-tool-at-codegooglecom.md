---
title: "Published my httpstone stress-testing tool at code.google.com"
date: 2006-08-08
tags: 
  - "tools"
  - "post"
slug: published-my-httpstone-stress-testing-tool-at-codegooglecom
---

![httpstone-screenshot-200608.jpg](http://codeconsult.ch/bertrand/archives/images/httpstone-screenshot-200608.jpg)I took the opportunity of the recent [code.google.com](http://code.google.com) hosting announcement to publish my [httpstone](http://code.google.com/p/httpstone/) tool there.

It's a (very) simple but useful stress-testing tool: you create simple Worker classes in Java and the tool runs many of them simultaneously, displaying a summary of their status in a GUI window.

Being able to quickly create a stress-test cycle for your software (HTTP server, database, numeric, RMI, whatever) is very useful, and running a few instances overnight on several hosts can generate _lots_ of load on your system.

The colored status windows give a useful overview of what's going on, telling you when you find a way to bring your system on its knees. Assuming you want it to break in the lab, not in the user's hands...

Want to try it? Grab the [source](http://code.google.com/p/httpstone/source), run [ant](http://ant.apache.org/) and you're done. The default config tests HTTP requests on Google, Yahoo and on this blog, so it's not very useful, but easy to change.

Many thanks to Thomas Rimmele of [swissinfo](http://swissinfo.ch), with whom we designed the current version of this simple tool.

Feedback is welcome, of course!
