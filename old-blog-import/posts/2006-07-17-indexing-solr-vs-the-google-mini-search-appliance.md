---
title: "Indexing: SOLR vs. the Google Mini search appliance?"
date: "2006-07-17"
categories: 
  - "tools"
---

I'm evaluating indexers for a (potentially as always) important project, played with [SOLR](http://incubator.apache.org/solr/) quite a bit in the last few days and I like what I see _a lot_.

SOLR makes it really easy to build powerful indexing services with simple HTTP/XML interfaces (yes, it's an SOA indexer if your like), it's _very_ flexible and tends to do the right thing out of the box. I've had a few minor issues to get French-language documents to index properly, but nothing major. And it's _fast_.

Also, the code is readable enough to allow you to find out precisely what it's doing with your data, should you need to. But you already know that I like open source tools...

Anyway, to be fair we'd like to compare SOLR's toolkit approach with an out-of-the-box solution like [Google Mini](http://www.google.com/enterprise/mini/), which might be easier in terms of administration.

I haven't found much detailed info on the mini's product pages, on the [features](http://www.google.com/enterprise/mini/features.html) page they list things like _increased number of requests per second_ which is...well..not really a feature I guess. If it wasn't Google, I think that page would make me dismiss the product immediately, it smells so much of salesmen in dark suits...

So, dear Layzweb: if anyone has experiences to share about Google Mini, hit the comments button! Does it do things like precise range-of-dates searches, semi-complex boolean expressions and the like? Has anyone compared it against SOLR or another Lucene-based solution?

I'll post my results here if I get to evaluate it, but for this one has to buy it and take advantage of the 30-days right to return it, which means some paperwork to arrange on my customer's side.
