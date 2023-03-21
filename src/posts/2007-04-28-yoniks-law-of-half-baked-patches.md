---
title: "Yonik's Law of Half Baked Patches"
date: 2007-04-28
tags: 
  - "asf"
  - "open-source"
  - "thoughts"
  - "post"
slug: yoniks-law-of-half-baked-patches
---

[![NOT the official Solr logo](https://issues.apache.org/jira/secure/attachment/12353535/12353535_solr-nick.gif)](http://lucene.apache.org/solr)Yesterday an interesting [discussion](http://www.nabble.com/Do-we-agree-on-our-RTC-way-of-working--%28was%3A-Welcome-Ryan-McKinley%21%29-tf3656234.html) started among [Solr](http://lucene.apache.org/solr) community members, about when to commit stuff, [RTC](http://www.apache.org/foundation/glossary.html#ReviewThenCommit) vs. [CTR](http://www.apache.org/foundation/glossary.html#CommitThenReview), and trust between committers.

In less than 24 hours, with each of us spending a few minutes expressing themselves (and a bit more for Hoss to write stuff down, thanks!), the [Solr commit guidelines](http://wiki.apache.org/solr/CommitPolicy) are out. Is this efficient or what?

Along the way I discovered _Yonik's Law Of Half Baked Patches_:

> A half-baked patch with no documentation, no tests and no backwards compatibility is better than no patch at all.

Very True, isn't it? This is my own paraphrased version, see Yonik's [original post](http://www.nabble.com/Re%3A-Do-we-agree-on-our-RTC-way-of-working--%28was%3A-Welcome-Ryan-McKinley%21%29-p10226225.html) for the Real Thing.

A [while](http://codeconsult.ch/bertrand/archives/000192.html) ago I wrote that _the power of loosely-coupled communities or teams is amazing, if they're well coordinated_ - my amazement has not stopped!

(note that the Solr logo shown here is not the official one - it's my favorite among the currently [suggested ones](https://issues.apache.org/jira/browse/SOLR-84))

_Update: Yonik [indicates](http://wiki.apache.org/solr/CommitPolicy) that the patches that he's talking about are the ones submitted to an issue tracker, \*not\* the ones that are committed!_
