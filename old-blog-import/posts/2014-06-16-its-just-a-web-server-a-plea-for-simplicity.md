---
title: "It's just a Web server - a plea for simplicity"
date: "2014-06-16"
categories: 
  - "conferences"
  - "thoughts"
---

I’m currently working on my keynote for next week’s [Connect - Web Experience 2014](http://www.connectcon.ch/ "Connect - Web Experience") conference in Basel and very much looking forward to it! Last year’s conference was excellent, and this year’s schedule looks very exciting.

My keynote is about the value of simplicity in software - including a few tales from the trenches.

We like to think of what we build with [AEM](adobe.com/go/aem "AEM") as large enterprise systems, with complex requirements. Intricate workflows. Rocket science.

However, when you think about it, our systems are “just” HTTP request processors, that manipulate atomic pieces of content in a content repository.

\[slideshare id=36275660&doc=x8kwnzlyrkym3sfue0gd-140625011026-phpapp02\]

What if you wanted to manage the Whole World Wide Web with a single system? The architecture of that 4WCMS might be quite similar to what [Apache Sling](http://sling.apache.org/ "Apache Sling") provides for AEM: mostly independent dynamic HTTP request processors, selected by path and resource type, that render and/or process resources from a huge tree of content.

If our architecture works for that 4WCMS, the systems that we are actually working on are just peanuts compared to that. Managing a single site, or just a small federation of a hundred thousand sites? Easy. Yes I'm being provocative - it's a keynote!

The inherently scalable architecture of the Web, combined with the natural decoupling that HTTP and REST (and OSGi) provide, should allow us to keep our systems simple, transparent, robust and adaptable. Yet, much too often, we fall into the "entrprisey" trap and start designing complex machinery where something simple would do - if only someone had the guts to challenge the status quo.

I have a few examples in mind, from past projects, where simplicity provided huge wins, even though it required convincing customers that had different, usually more complex ideas. My goal is to demonstrate how valuable simplicity is, and how expensive it can be to create initially. Like the story of those 28 lines of code that took three months to create, in 1999, and still live happily in production with Zero Bugs.

We shouldn’t give up - creating simple things is a lot of work, but the rewards are huge.

To paraphrase Blaise Pascal, if your system is complicated it usually means you didn’t work hard enough to make it simpler. Or maybe you have a really complex problem, but that’s not very common. And maybe that complex problem is the wrong one to solve anyway.

I hope to see you next week [in Basel](http://www.connectcon.ch/ "Connect 2014") and until then - keep things simple!
