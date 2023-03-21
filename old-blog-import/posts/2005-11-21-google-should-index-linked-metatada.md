---
title: "Google should index linked metatada"
date: "2005-11-21"
categories: 
  - "the-web"
  - "thoughts"
---

I'm just starting to think about the avenues opened by [Google Base](http://base.google.com), but this brings a question: why doesn't Google "simply" index metadata attached to web pages?

Look for example at what [PiggyBank](http://simile.mit.edu/piggy-bank/enable.html) does, any web page having a link like

<link
rel="alternate" type="application/rdf+xml"
title="Metadata about this page"
href="http://somewhere-on-the-web.com/page224/metadata.rdf">

would have its metadata indexed.

And of course it doesn't have to be RDF. Talking about this with [Sylvain](http://bluxte.net/) the other day, he came up with

<link
rel="alternate" type="application/googlebase+xml"
title="Metadata about this page"
href="http://somewhere-on-the-web.com/page224/metadata.xml">

Where Google might accept the same formats as the Google Base bulk upload does.

Simple enough, or not? I wonder why they're not doing that already, it would be a nice way of making the web more semantic, incrementally, with little additional effort on their part (well, a few more [containers](http://codeconsult.ch/bertrand/archives/000597.html) maybe ;-)

The motivation for people to add this metadata would certainly be high: who doesn't want their web pages to be better indexed?
