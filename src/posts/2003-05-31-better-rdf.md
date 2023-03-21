---
title: "Better RDF"
date: 2003-05-31
tags: 
  - "post"
slug: better-rdf
---

Thanks [Ovidiu](http://www.webweavertech.com/ovidiu/weblog/) for the tip - I have added

<content:encoded><!\[CDATA\[<$MTEntryBody$>\]\]></content:encoded>

to the Movable Type template that generates my [RSS feed](http://www.codeconsult.ch/bertrand/index.rdf), so that the feed contains the full content of entries.

_Update: doing this at 1AM I forgot to ask myself about the content namespace (like "self, do you have any idea where this content namespace comes from?"). It is corrected now:_

xmlns:content="http://purl.org/rss/1.0/modules/content/"

_Thanks again Ovidiu!_
