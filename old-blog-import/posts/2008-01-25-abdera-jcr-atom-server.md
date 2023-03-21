---
title: "Abdera + JCR = Atom server?"
date: "2008-01-25"
categories: 
  - "content"
  - "jcr"
---

Like [several](http://www.symphonious.net/2008/01/18/how-atom-and-jcr-work-together/) [other](http://netzooid.com/blog/2008/01/15/jcr-and-atompub/) [people](http://dev.day.com/microsling/content/blogs/main/jcr-loves-atom.html) I think Atom and JCR are made to collaborate.

I just had a look at the [JCR CollectionProvider](http://svn.apache.org/repos/asf/incubator/abdera/java/trunk/jcr/src/main/java/org/apache/abdera/jcr/JcrCollectionProvider.java) that [Dan Diephouse](http://netzooid.com/blog/) created for [Abdera](http://incubator.apache.org/abdera/), and it's cool stuff! The [Test code](http://svn.apache.org/repos/asf/incubator/abdera/java/trunk/jcr/src/test/java/org/apache/abdera/jcr/JcrCollectionProviderTest.java) shows how easy it is to setup Abdera to use a JCR Repository for storage.

Having [APP](http://bitworking.org/projects/atom/rfc5023.html) besides [WebDAV](http://www.webdav.org/) as an access protocol for [JCR](http://en.wikipedia.org/wiki/Content_repository_API_for_Java) repositories would be great. JCR semantics are richer than both of these protocols, but having multiple content access and manipulation methods accessing the same storage is very helpful in many cases.
