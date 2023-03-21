---
title: "Dear Oracle, can we have our nice javadoc URLs back?"
date: 2010-07-21
tags: 
  - "java"
  - "web"
  - "post"
slug: dear-oracle-can-we-have-our-nice-javadoc-urls-back
---

_If you support this request, please vote for it in the comments below and/or on twitter using the **[#E17476](https://www.google.com/search?q=%23E17476)** hashtag!_

**Update (2010/07/24):** it looks like the old java.sun.com URLs are back, thanks Oracle and especially [@mreinhold](http://twitter.com/mreinhold/status/19377658717)!

**Update (2010/07/27):** see also [Good Feedback and Happy Endings - The Ugly URLs](https://web.archive.org/web/20100728085206/http://blogs.sun.com:80/theaquarium/entry/good_feedback_and_happy_endings).

Dear Oracle,

A while ago you bought Sun, and IIRC promised to do good things for Java. Or at least indicated you would. Or something like that.

Now, a bad thing happened a few days ago. Not a bad bad bad thing, just a tiny annoying change in the cool URLs that Sun used to publish the JDK's javadocs. Not annoying annoying annoying but not nice.

Even Google remembers: today if I search for `IndexOutOfBoundsException` on Google it returns the following URL:

[http://java.sun.com/j2se/1.5.0/docs/api/java/lang/IndexOutOfBoundsException.html](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/IndexOutOfBoundsException.html)

Which is a [cool URL that shouldn't change](http://www.w3.org/Provider/Style/URI.html).

Now, requesting this URL today causes a redirect to:

[http://download.oracle.com/docs/cd/E17476\_01/javase/1.5.0/docs/api/java/lang/IndexOutOfBoundsException.html](http://download.oracle.com/docs/cd/E17476_01/javase/1.5.0/docs/api/java/lang/IndexOutOfBoundsException.html)

Which is also somewhat cool, but not as much. Factor 10 down in coolness. It makes me assume that you're serving javadocs from a CD, and that CD's identifier is E17476\_01. That's useful info if you're the filesystem driver who's reading the CD, but I doubt filesystem drivers are searching for javadocs on Google. Also, I'm not looking at downloading anything. Just browsing, okay?

Cool URLs shouldn't change.

Can we have the old one back? Ok, maybe with java.oracle.com instead of java.sun.com - you bought them anyway. But please please please, let the poor CD filesystem driver alone!

Thanks.

_P.S. we're having a little vote on Twitter about this, check it out at [https://twitter.com/hashtag/e17476](https://twitter.com/hashtag/e17476) (URL updated in 2018 to account for Twitter API changes)_
