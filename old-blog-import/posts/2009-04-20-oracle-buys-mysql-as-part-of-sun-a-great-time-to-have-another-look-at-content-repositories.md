---
title: "Oracle buys MySQL (as part of Sun) - a great time to have another look at content repositories!"
date: "2009-04-20"
categories: 
  - "content"
  - "jcr"
---

Lots of [noise](http://search.twitter.com/search?q=Oracle) (and some gems) about the [acquisition of Sun by Oracle](http://www.oracle.com/sun/index.html) on Twitter today. But contrary to Oracle's [content servers](http://www.cmswatch.com/Trends/1574-Oracle-content-management-woes), Twitter seems to be holding up quite well.

I half-jokingly added my own noise saying that _now's a good time for people worried about MySQL's future to switch to JCR_, and [Bergie](http://bergie.iki.fi/blog/oracle_sun_acquisition-time_to_think_about_a_content_repository/) agrees!

Rereading this post, what follows sounds a bit like marketingspeak, but it's not - just _enthusiasm_!

We've been discussing the [similarities](http://bergie.iki.fi/blog/midgard_and_jcr-a_look_at_two_content_repositories/) between Midgard and JCR earlier this year with him and also with [Jukka](http://jukkaz.wordpress.com/2009/02/10/comparing-midgard-and-jcr/), and it's amazing to see how close the models of Midgard and JCR are. With their [TYPO3CR](http://forge.typo3.org/projects/show/package-typo3cr), Typo3 also agree that the JCR model is extremely well suited for content storage and manipulation. [Midgard2](http://www.midgard-project.org/midgard2/) doesn't use the JCR APIs, but as mentioned above the concepts are very similar.

Having made the move myself from wire-some-object-relational-stuff-on-top-of-sql-and-suffer-forever to JCR as an API that's designed _from the ground_ up to work with granular content, including observation, unstructured nodes and many other nice features, I'm not going back!

If you're working with content (and yes, _everything is content_ anyway), and started wondering about the future of MySQL today, now might be a good time to take another look at JCR. [Apache Jackrabbit](http://jackrabbit.apache.org) has been making huge progress in the last two years with respect to performance and reliability, and [Apache Sling](http://incubator.apache.org/sling) makes it much easier than before to get started with JCR, mostly due to its HTTP/JSON storage and query interface which takes the J out of JCR.

Never had so many (meaningful) replies and retweets on Twitter before today - but I started by wondering why [CMIS wants to reinvent WebDAV](http://twitter.com/bdelacretaz/statuses/1563936321), so no wonder. We'll save that one for another time I guess.
