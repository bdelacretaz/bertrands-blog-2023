---
title: "Solr: indexing XML with Lucene and REST"
date: 2006-08-10
tags: 
  - "tools"
  - "xml"
  - "post"
slug: solr-indexing-xml-with-lucene-and-rest
---

[![111-solr.gif](http://codeconsult.ch/bertrand/archives/images/111-solr.gif)](http://www.xml.com/pub/a/2006/08/09/solr-indexing-xml-with-lucene-andrest.html)[xml.com](http://xml.com) just published my article, [Solr: indexing XML with Lucene and REST](http://www.xml.com/pub/a/2006/08/09/solr-indexing-xml-with-lucene-andrest.html), written after [evaluating](http://codeconsult.ch/bertrand/archives/000694.html) Solr in the last few weeks.

You'll certainly perceive my enthusiasm for [Solr](http://incubator.apache.org/solr/) in the article: the "solid indexing component with a simple interface" philosophy of Solr fits my current projects perfectly, and it's a simple enough layer on top of [Lucene](http://lucene.apache.org/) to be easy to understand. On top of that, its [references](http://wiki.apache.org/solr/PublicServers) are quite solid already.

Note that Solr won't do any crawling or content extraction, it's _just_ an indexer with an HTTP/XML interface. But for integration with content or data management systems, it's just what you need.

The "REST" bit in the article title is not from me, I'd say the interface is "RESTish" but it's not pure REST I think. Actually, designing a pure REST interface for a search engine would be interesting - but Solr's current interface is more than good enough.
