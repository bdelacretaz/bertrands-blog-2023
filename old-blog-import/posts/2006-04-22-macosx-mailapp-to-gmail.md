---
title: "MacOSX Mail.App to GMail"
date: 2006-04-22
tags: 
  - "tools"
  - "post"
slug: macosx-mailapp-to-gmail
---

I've been moving to [GMail](http://gmail.com) lately. The original reason was being out of the office fairly often these days, and a good webmail is very convenient. And GMail's search-based features rock!

My mail archives are stored in my macosx's Mail.App, and in recent versions Apple has moved away from the mbox format for storage, so the move is a bit more involved that I'd have liked it to be.

Here's my recipe:

Start with the [cosmicsoft emlx to mbox converter](http://www.cosmicsoft.net/emlxconvert.html). I'd have preferred a command-line thing, tried [Jamie Zawinski](http://www.jwz.org/hacks/emlx.pl)'s emlx converter but the output format didn't seem to be correct.

Next, add a marker in the subject lines, and setup a filter in GMail so that messages are marked with the correct GMail label. You don't want thousands of old messages in your inbox.

sed s"/^Subject: /Subject: (whatevername-g) /"  mbox-with-markers

Finally, use [Mark Lyon's GMail Loader](http://www.marklyon.org/gmail/old/default.htm) to forward the contents of the mbox to your GMail account.

It takes a while...but it'll be useful to have everything there.

Is it safe? I trust Google more than myself about backups, for sure. And there's no privacy in unencrypted email anyway, so I don't care much about what they do with the data.
