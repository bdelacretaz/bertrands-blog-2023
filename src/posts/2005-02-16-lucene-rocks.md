---
title: "Lucene rocks"
date: 2005-02-16
tags: 
  - "post"
slug: lucene-rocks
---

I've been testing Lucene to index a corpus of one million XML files (relatively small, about 1700 bytes each), the code is dead simple and the performance is good to great.

Indexing does take some time, but without much optimizations we indexed 12'000 files per minute on a 2.5GHz Pentium system, which translates to about 80 minutes to index the whole thing. Not bad at all.

Search is really fast, many queries execute in less than 200 msec.

Once again, Lucene _rocks_!
