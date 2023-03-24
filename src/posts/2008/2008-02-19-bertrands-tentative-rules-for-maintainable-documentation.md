---
title: "Bertrand's (tentative) Rules for Maintainable Documentation"
date: 2008-02-19
tags: 
  - "developer-usability"
  - "post"
  - favorite
slug: bertrands-tentative-rules-for-maintainable-documentation
---

On second thought, I'll post my (tentative) recommendations for creating maintainable docs here, excerpted from my [post to sling-dev](http://markmail.org/message/jlyjbu6o63pobtuy).

These rules are meant for projects which operate limited resources. If your budget is unlimited, you might think otherwise ;-)

### Rule 0: Less Documentation is Better

Create as little written documentation as required: every line of documentation that's not automatically generated has to be maintained, and should be checked for each release.

If your system needs lots of documentation to be understandable, that might be a sign of a suboptimal or bloated design, or of a lack of good examples.

### Rule 1: One Task, One Document

Avoid "big" docs that explain too many things.

The goal is to be able to say "this document is totally obsolete" when the time comes, rather than " this doc has some obsolete stuff in it".

### Rule 2: No Duplicated Info

I'd rather point people to (readable) code to find out details about how certain things work, as opposed to duplicating the info in the docs and risking out-of-sync docs. The Truth Is In The Code - it just has to be expressed in an understandable way there, which also helps code quality.

Code tags (identifiable markers in code comments, which are referred to in the written docs) can help link high-level explanations to code that demonstrates the feature.

Dynamic things can be explained by pointing people to descriptive log messages that explain what's going on. Why not create [graphviz](http://www.graphviz.org/) documents dynamically, like ActiveMQ's [connectionDotFilePlugin](http://activemq.apache.org/visualisation.html) does, to explain dynamic things? The long-term impact of such efforts on the project is much higher than writing docs.

### Rule 3: Examples are the Best Explanations

Apart from the overview and general principles, things are best explained by examples. The best examples are live ones, that people can play with immediately and that never go out of sync with the code because they \*are\* code. Or, as in the [Lucene in Action](http://www.manning.com/hatcher2/excerpt_about.html) book, readable automated tests, even if they don't improve the test coverage but are here only as examples.

What do you think?
