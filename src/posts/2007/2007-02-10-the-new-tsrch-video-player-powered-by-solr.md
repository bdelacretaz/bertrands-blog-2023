---
title: "The new tsr.ch video player, powered by Solr"
date: 2007-02-10
tags: 
  - "tools"
  - "post"
  - flash
  - solr
slug: the-new-tsrch-video-player-powered-by-solr
---

[![tsr-video-200702.jpg](/assets/images/movable-type-blog-archives/tsr-video-200702.jpg)](http://www.tsr.ch/tsr/index.html?siteSect=500000)It took some time (mostly for the front-end devlopers to polish the Ajaxish user interface, I hope you don't find too many bugs in it!), but the new [tsr.ch video page](http://www.tsr.ch/tsr/index.html?siteSect=500000) is now online, powered by a [Solr](http://lucene.apache.org/solr/) search server. It's all in French there, but I'm sure you'll find your way around.

This is a rather unusual client for what is usually perceived as a full-text search server. But, like all Lucene-based software, Solr is also very capable of doing "structured" searches like you would do in a database. Combined with (very simple in this case) full-text search features, you get a very powerful and fast search system.

I will talk about this project at [ApacheCon](http://www.eu.apachecon.com/), to show how we grafted the index with minimal impact on the existing CMS, and how we're using it to create a rich user experience based on exploration rather than searching.

Thanks again to the Lucene and Solr teams for creating some of the best open source software around! And kudos to the tsr.ch team, especially for making the videos bookmarkable. I can now send [that link](http://www.tsr.ch/tsr/index.html?siteSect=500000#page=search;vid=5257968) to my friends to talk them into getting a bike.

The videos are still in RealMedia or Windows Media Player format, I'd much prefer Flash today, but converting all the existing stuff takes a while, so it won't be very soon I guess.
