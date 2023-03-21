---
title: "OSCOM4: Erik Hatcher on Lucene"
date: "2004-09-29"
categories: 
  - "tools"
---

I didn't have an opportunity to use [Lucene](http://jakarta.apache.org/lucene/) for serious stuff yet, but I'm very impressed after hearing Erik's talk.

Lucene's flexibility and pluggability seem limitless, and from what I hear all around the performance is great as well.

I've been doing some indexing stuff for [our Parliament's](http://www.parlement.ch) CuriaVista search system earlier (1998), and one of the big problems was the indexing of German compound works like _Dreifuss_ or _Fussballstadion_. It looks like Lucene's Analyzers would be able to solve the problem cleanly, by breaking up and multiplying words as needed to be able to find such words with many different ways of querying them.

Got to try it soon, including the tools mentioned by Erik (limo, luke, lucli among others).
