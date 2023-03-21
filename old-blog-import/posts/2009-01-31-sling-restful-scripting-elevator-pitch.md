---
title: "Sling RESTful scripting elevator pitch"
date: 2009-01-31
tags: 
  - "content"
  - "sling"
  - "post"
slug: sling-restful-scripting-elevator-pitch
---

Just sent the explanation below to the newly created [Server-side Javascript discussion group](http://groups.google.com/group/serverjs) (thanks [Lars](http://weblogs.goshaky.com/weblogs/lars/) for the ping).

Such a compact explanation of how Sling processes requests using scripts could be useful on an elevator (you'd need a few floors though), so here it is:

Sling stores data in a JCR repository, which is basically a (potentially large) tree of Nodes and Properties attached to those Nodes, adressable by paths like in a filesystem.

An incoming URL maps to a Resource, which is usually a Node in the JCR repository. That mapping is 1:1 at the path level. Plus extension and "selectors": a path like /content/foo.print.a4.html points to the /content/foo Node, print.a4 are selectors and html is the extension.

The Resource then defines a "resource type", usually via a Property of the Node. If our /content/foo Node has a sling:resourceType Property with value "bar", Sling looks for scripts under /apps/bar to process the request. For the html extension, for example, /apps/bar/html.js is used, if it exists. That could also be /apps/bar/html.rb for a Ruby script, if that scripting engine is installed. For other method names than GET, Sling looks for scripts named after the method, like POST.js or DELETE.js, under /apps/bar in our example.

This gives you RESTful interactions with content, with no configurations or annotations - just drop a script under the right path.
