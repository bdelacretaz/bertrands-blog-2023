---
title: "Performance in a typical Cocoon application"
date: 2006-06-30
tags: 
  - "cocoon"
  - "post"
slug: performance-in-a-typical-cocoon-application
---

[![cocoon-app-200607-small.jpg](/assets/images/movable-type-blog-archives/cocoon-app-200607-small.jpg)](/assets/images/movable-type-blog-archives/gt2004-bertrand-part-one.pdf)How do you get good performance out of a [Cocoon](http://cocoon.apache.org)\-based application? Generating each page on the fly is often costly, especially when pages are built from an aggregate of different data sources, which is a common case.

The drawing at the right (full-size version [here](/assets/images/movable-type-blog-archives/gt2004-bertrand-part-one.pdf)) shows the structure of a typical Cocoon application. It comes from my [what you _need_ to know about Cocoon](http://www.orixo.com/orixo/events/gt2004/sessions.html#bertrand) presentation at the [Cocoon GetTogether 2004](http://www.orixo.com/orixo/events/gt2004/). Not cutting-edge stuff then, but it's still valid as ever.

The key to performance with dynamically-generated websites is _caching_. Might sound obvious...I should maybe say _intelligent caching_ instead.

In the case of [nouvo.ch](http://www.nouvo.ch) and [archives.tsr.ch](http://archives.tsr.ch), which both run on live Cocoon instances, we've based many of our technical decisions on the cacheability of the pages. These websites do not have very high traffic on average, but we get big peaks of load when something's announced on TV, so we need to be able handle sudden large bursts. It's quite fun to see the peaks in bandwidth right after a TV announcement about these sites. At least when it works....but we've been doing quite good since the launch of nouvo in 2004.

Many "page gadgets" will kill the cacheability, but a website design where as much of the page as possible is stateless is the key to being able to efficiently cache things.

Do your website visitors _really_ need personalized pages? Often not...and if you really need it, there are clever ways of implemeting personalization, like sending small chunks of javascript for the parts that need to be different for each visitor, or using Ajax or [AHAH](http://microformats.org/wiki/rest/ahah) to send very smalll parts of personalized content. We're using the latter technique on nouvo.ch, sending small chunks of XML via XmlHttpRequest when a visitor is logged in.

Once your pages are cacheable, using the Apache [mod\_cache](http://httpd.apache.org/docs/2.2/mod/mod_cache.html) module as the front-end of your website (you don't want to put Cocoon or servlets directly on the Web, right?) will do wonders, effectively serving static pages that can be each updated at different intervals, based on the HTTP headers of your Cocoon response.

In the end, this allows you to fine-tune the caching of each page or page part, directly from your Cocoon application, just by generating the appropriate HTTP headers and configuring the front-end cache correctly. Serving cached pages, you can then easily get several hundred pages per second from a "normal" Linux box, in our case we're at 800 pages per second when tested locally from the (dual Xeon 2GHz Linux) server.

To summarize, structuring your site to have as much stateless content as possible, using a front-end cache controlled by HTTP headers, and including the caching tests in your final testing, will allow you to get the best performance for your dynamically-generated site. Minimizing the number of hits to your page-generating application will allow it to efficiently handle the really dynamic things.

In our case we don't even use the internal caching features of Cocoon, or only very little. This would be the next step if we had more transaction traffic, by allowing us to cache partial pipelines as needed. But we haven't needed yet, applying the above principles is more than good enough in our case.

You can find more information about [configuring mod\_proxy](http://wiki.apache.org/cocoon/ApacheModProxy) and [generating HTTP headers for caching](http://wiki.apache.org/cocoon/ControllingModCache) on the Cocoon wiki.

_Update: fixed a few typos_
