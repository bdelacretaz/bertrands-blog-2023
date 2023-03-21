---
title: "dogfood indexing"
date: "2005-04-29"
categories: 
  - "cocoon"
---

In the "XML lab" class that I've been teaching this month, I had a group of students explore the following mechanism to create custom indexes of "web worlds", subsets of the web that interest a given group of people.

Here's the scenario:

1. Kermit, Miss Piggy and many of their friends want to create an index of web pages that they like, about "dogfood" for example.
2. To select what goes into the index, they agree on a unique tag, say _dogfoodindex_, to use on a social bookmarking system of their choice (see [del.icio.us](http://del.icio.us) if you don't know what this is. But you know, don't you?).
3. At regular intervals, a spider gathers URLs by collecting all bookmarks having the _dogfoodindex_ tag on the bookmarks server (as easy as scraping a web page or parsing an RSS feed), and indexes all pages to which these URLs point to.
4. Adding a URL to the index is then only a matter of bookmarking it with the _dogfoodindex_ tag, and waiting for the spider to do its job.

This makes it real easy to collaboratively create custom full-text indexes of possibly scattered resources.

The implementation is not complicated, but of course for real use one would need to be able to moderate the tagged URLs before indexing them, or change the indexing tag often enough to keep spammers out.

Also, you'd have to make sure the bookmarking service is not hit harder than they'd like by the spider when gathering URLs to index.

This could be useful for [projects](http://cocoon.apache.org) which have documentation of varying quality scattered in several places...WDYT?
