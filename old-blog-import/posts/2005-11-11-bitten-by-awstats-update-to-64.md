---
title: "Bitten by awstats - update to 6.4!"
date: "2005-11-11"
categories: 
  - "tools"
---

This morning one of my servers was attacked via awstats, which in versions before 6.4 has several [known vulnerabilities](http://seclists.org/lists/bugtraq/2005/Feb/0219.html).

In our case, the attacker could execute commands under the web server's identity, _not_ nice.

So, if you're using [awstats](http://awstats.sourceforge.net/), upgrade to 6.4, or in a pinch disable the web access until you upgrade.

And...stats should never be openly accessible, I know this better now ;-)
