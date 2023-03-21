---
title: "Serious security issue with non-IE browsers"
date: 2005-02-07
tags: 
  - "post"
slug: serious-security-issue-with-non-ie-browsers
---

Ouch...for once IE is _not_ subject to this problem.

The exploit allows certain characters in internationalized domain names (IDN) to be hidden in firefox's (and others) address bar, opening the door to easy phishing (relatively - one still needs to register a domain name to go phishing).

The example (no risk as far as I can see, but you're on your own if your try) at [shmoo.com](http://www.shmoo.com/idn/) makes you see www.paypal.com in the address bar while the page comes from www.pаypal.com. Scary.

There's more info at [Boing Boing](http://www.boingboing.net/2005/02/06/shmoo_group_exploit_.html), including an easy workaround: disable IDN handling.

Looks like I was right being [skeptic](http://www.codeconsult.ch/bertrand/archives/000255.html) about this "feature" of domain names. More confusion ahead.

Via [Stephanie](http://climbtothestars.org/archives/2005/02/07/probleme-de-securite-dans-navigateurs-non-ie-firefox-safari/).

_Update: looks like firefox has been [patched](http://www.boingboing.net/2005/02/08/mozilla_and_firefox_.html) within 12 hours. Fixing IDNs will need more time I guess ;-)_
