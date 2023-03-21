---
title: "The Java Service Provider spec and sun.misc.Service"
date: 2007-10-31
tags: 
  - "java"
  - "tools"
  - "post"
slug: the-java-service-provider-spec-and-sunmiscservice
---

Looking for a lightweight plugin mechanism for [microsling](https://issues.apache.org/jira/browse/SLING-47), I found the [jar service provider](http://java.sun.com/j2se/1.4.2/docs/guide/jar/jar.html#Service%20Provider) spec to be good enough.

But wait...although the spec dates back from JDK 1.3, there's no implementation in the JDK before 1.6? And what's the mysterious _Service_ class in the spec's example?

Actually there are some implementations, well hidden in obscure JDK packages. [Jackrabbit](http://jackrabbit.apache.org) for example uses [javax.imageio.spi.ServiceRegistry](http://java.sun.com/j2se/1.4.2/docs/api/javax/imageio/spi/ServiceRegistry.html), which looks completely out of place in that package but is otherwise well specified. And apparently it is [safe](http://java.sun.com/products/jdk/faq/faq-sun-packages.html) to use `javax` packages in any VM.

For now, the final word of this story is [Sun's bug 4640520](http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4640520) - looks like `sun.misc.Service` should have moved to the JDK public API long ago, but for some reason it didn't.

Thanks to the [sling-dev](http://incubator.apache.org/sling) and [advanced-java](http://discuss.develop.com/advanced-java.html) folks for their help in putting this info together. Sounds like a trivial problem, and it should be, but I bet many people have lost hours on this already.

_Update: [Jeremias](http://www.jeremias-maerki.ch/) indicates that the xmlgraphics commons include such a [Service](http://svn.apache.org/viewvc/xmlgraphics/commons/trunk/src/java/org/apache/xmlgraphics/util/Service.java?view=markup) class - Batik and FOP have been using that for years._
