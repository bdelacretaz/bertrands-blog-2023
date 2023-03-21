---
title: "Open-source java profilers"
date: 2003-12-13
tags: 
  - "tools"
  - "post"
slug: open-source-java-profilers
---

Yesterday, I did some (successful) experiments with [HAT](http://java.sun.com/developer/onlineTraining/Programming/JDCBook/perf3.html), a simple yet efficient heap analysis tool for java. It doesn't work with JDK 1.4 though, apparently due to a [bug](http://performance.netbeans.org/articles/hat-howto/) in the JVM. Still very useful and simple to use.

Today I (or rather NetNewsWire) spotted a new [list](http://www.manageability.org/blog/stuff/open-source-profilers-for-java) of open-source profilers at [Carlos E. Perez](http://www.manageability.org/)'s blog. Interesting, need to have a closer look.

I remember starting with java back in [1996](http://mentorsoft.com/DE/jn960625.html), thinking that memory leaks were gone forever. They _are_ mostly gone in java, but when someone programs one in it's sometimes even nastier than before, because people are not used to handle them anymore.
