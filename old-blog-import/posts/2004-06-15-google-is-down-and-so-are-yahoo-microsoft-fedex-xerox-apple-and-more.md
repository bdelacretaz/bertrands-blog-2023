---
title: "Google is down, and so are Yahoo,  Microsoft, Fedex, Xerox, Apple and more"
date: 2004-06-15
tags: 
  - "the-web"
  - "post"
slug: google-is-down-and-so-are-yahoo-microsoft-fedex-xerox-apple-and-more
---

We did notice this (GMT) afternoon that Google was apparently down for a few minutes, and interestingly it was only the name resolution that wasn't working.

But as the name servers used by Google seem to be shared with several other important sites, this means that at the same time, Yahoo, Microsoft, Fedex, Xerox, Apple and many others were unreachable. Scary.

Further _dig_ging showed that resolving www.google.com went through DNS servers from the Akamai network, which according to slashdot had an [outage](http://slashdot.org/article.pl?sid=04/06/15/1427213) today. Details are supposed to be available at [http://isc.incidents.org/](http://isc.incidents.org/) but these guys have been slashdotted so the site is much slower than usual.

Now, how about the robust route-around-problems structure of the Net? Akamai goes berserk, causing Google and many others to be inaccessible to their users. Slashdotters notice the problem and indirectly bring down isc.incidents.org via the well-know [slashdot effect](http://slashdot.org/faq/slashmeta.shtml). Interesting chain reaction here!

Note that I said above that Google _went_ through Akamai DNS servers - right now they seem to have switched to their own, probably due to these problems.
