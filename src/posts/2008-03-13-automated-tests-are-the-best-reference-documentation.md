---
title: "Automated tests == reference documentation"
date: 2008-03-13
tags: 
  - "testing"
  - "thoughts"
  - "post"
slug: automated-tests-are-the-best-reference-documentation
---

Someone was asking about ujax:redirect in [Sling](http://incubator.apache.org/sling). We have no docs on that yet, but how about some (readable) [automated test code](http://svn.apache.org/repos/asf/incubator/sling/trunk/launchpad/webapp/src/test/java/org/apache/sling/launchpad/webapp/integrationtest/PostRedirectTest.java)?

Using automated tests as reference documentation means that the docs will always be in sync with the code - assuming you're using [continuous integration](http://vmbuild.apache.org/continuum/projectGroupSummary.action?projectGroupId=53) to run those tests often.

People might object to having to read source code, so maybe creating a filter that presents the code in a nicer way would help?

[Literate programming](http://en.wikipedia.org/wiki/Literate_programming) for test cases...the idea sounds worth pursuing.
