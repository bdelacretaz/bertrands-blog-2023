---
title: "Playing with Google Mini"
date: 2006-07-18
tags: 
  - "post"
  - solr
slug: playing-with-google-mini
---

Thanks to [Colm](http://codeconsult.ch/bertrand/archives/000694.html) (who's finally published the much expected [but-how-do-you-pronounce-your-name](http://www.stdlib.net/~colmmacc/2006/07/17/how-to-say-my-name/) post) I got to play a bit with their [Google Mini](http://www.google.com/enterprise/mini/).

To summarize, it feels like a solid but basic search appliance. The ranking looks good, and it's an important feature for Joe User. On the other hand, "advanced" features like multi-language stemming, date range searches and the much expected "did you mean?" keyword suggestions don't seem to be available.

I haven't been able to dig in the configuration parameters, but there doesn't seem to be much in terms of enabling more precise "database-like" searches in addition to full text.

At this point, my conclusion would be that the mini is a nice out-of-the-box solution for "usual" search requirements, but toolboxes like [SOLR](http://incubator.apache.org/solr/) can enable a much wider range of uses (dynamic RSS feeds, automatic generation of website navigations, faceted browsing, etc.).

Of course, products like SOLR will require more work to setup than just plugging the thing into your network - but the Mini is not free either, and gets more expensive the more documents you need to index.

Anyway, here's a summary of my findings about the Mini:

- Processing of French accented characters works, searching for "referencement" finds "référencement" (that's an easy one).
- Language inference looks good, a document in French is marked as such.
- French stemming did not work in my tests, searching for _analyse de code_ did not find a document containing _analyses de code_, even though it had been recognized as French. That's a big drawback IMHO.
- English stemming does not seem to work either.
- _Did you mean?_ suggestions do not seem to be implemented, searching for _jawa language_ did not suggest _java language_.
- Date-based searches do not seem to be implemented.

All in all, assuming my tests are valid, it seems like the Mini is missing many of the niceties that the real Google has spoiled us with.
