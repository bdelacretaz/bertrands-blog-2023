---
title: "Is Google using your CPU time for its computations?"
date: "2006-04-01"
categories: 
  - "the-web"
---

Just got news from an as yet unverified, but usually very reliable source, that a team of Russian scientists would have found Google guilty of using _your_ CPU to power its clusters!

IIUC, the trick is to use the Ajax-based interactions between clients and server to piggyback a clever remote procedure call, where Google sends your browser a small piece of data that needs to be analyzed, and the (obfuscated of course, you wouldn't know it a first sight) Javascript code in your browser causes the analysis to run on _your_ CPU without you noticing it.

It's just a tiny part of a much larger analysis, that runs for a few seconds only. But multiplied by the huge number of requests that they process every day, this represents a sizeable amount of additional CPU power for their global cluster, according to my Russian friends.

If confirmed, this would explain the funny spikes in CPU usage that I'm seeing when using GMail, Google Reader and other Ajax-based Google stuff...did you notice that as well?

So these guys are using my CPU as part of their cluster? I want my share! A few dollars on Paypal, at least, would be fair.

By the way, GMail is [just two years old](http://codeconsult.ch/bertrand/archives/000283.html) today. Caught in the act - what a birthday!
