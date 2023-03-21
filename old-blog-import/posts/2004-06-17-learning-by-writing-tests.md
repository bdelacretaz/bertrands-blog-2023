---
title: "Learning by writing tests"
date: 2004-06-17
tags: 
  - "thoughts"
  - "post"
slug: learning-by-writing-tests
---

I spent the whole day writing JUnit tests for the infrastructure of a CMSish Cocoon-based application that I'm working on.

This is my first serious app using [OJB](http://db.apache.org/ojb/) for persistence, and the learning benefits of writing automated tests are huge.

Stressing the system with just a few lines of nasty code makes bugs (mine in this case, OJB behaves very well) surface very quickly - I've learned at least ten important things about OJB today, and without this it would have taken much longer.

I'm really getting [test infected](http://junit.sourceforge.net/doc/testinfected/testing.htm), and I like it!

Red, green, refactor...time to hit the swimming pool ;-)

_Note that there's only one thing that I hate in OJB, it's the acronym: I find myself typing OBJ instead of OJB about a million times a day. Too much ojbect-oriented programming I guess..._
