---
title: "It's nouvo and it runs on Cocoon"
date: "2004-09-25"
categories: 
  - "cocoon"
---

Pheeew...after what was probably the craziest month on my life, [www.nouvo.ch](http://www.nouvo.ch) just went live (it's all in French over there) . This...let's say _multimedia content management system_ is built for a new TV show of our [national broadcaster](http://www.tsr.ch).

From the backoffice point of view it's more like a wiki on steroids, but the first impressions from the users are positive - they seem to enjoy the simplicity and openness of the system.

Using a wiki-like format for story editing certainly saved money in terms of development and testing, and allows us to do cool tricks for special documents (site configs, etc) based on special or slightly twisted wiki syntaxes. People have to learn a bit more than with precrunched configuration forms, but the system costs less to build and is simpler - more value, more robustness.

Also, with a structured ASCII format for content, people can do their creative editing work on any tool (including a Palm if they wish, back-of-the-jeep Hemingway style) instead of being tied to the system for editing. This is a big plus for journalists on the move, like the "one-man-show" journalists of the nouvo [team](http://www.nouvo.ch/team) who usually work alone without cameramen or sound technicians.

They can then copy and paste or email publication-ready articles once they learn the (very simple) wiki-like syntax. The customers were initially reluctant about "going back to wordperfect-like codes" but now that they've seen the simplicity and flexiblity they're becoming converts!

Nouvo is is the first "multi-screen" show around here: the videos, of which only some will be shown on TV, can be viewed from the web as well as from mobile phones via [wap.nouvo.ch](http://wap.nouvo.ch). Mobile videos are available from the swiss _sunrise_ network only for the moment. To view the wap version from a browser you can use the [MobileRunner](http://waprunner.wap3.net/emu_wap3/p/wap3/) emulator or the [wmlbrowser](http://wmlbrowser.mozdev.org/) mozilla/firefox extension, for example. Ok, video looks crappy on most mobile phones today, but nouvo is ready for the (near) future when this gets way better.

What's special about this..MCMS is that different versions of what we call "media elements" (videos, images, etc.) are very easily managed and selected automatically at publication time so that different clients (broadband web, web, mobile phones) get the most appropriate version of the media, based for the web on actual bandwidth measurements.

Cocoon has proven itself as an incredibly powerful and productive tool to build this system (provided the right skills are available in the team - I'll have more to say about this at the [GetTogether](orixo.com/events/gt2004/)). The people in charge didn't progress as much as I expected during my Big Trip, which means that the software had to be finalized in four weeks when I got back, in addition to three weeks of infrastructure and basic components programming before I left. Tight schedule...

I'll have more to say about how simplicity in design has allowed us to make it on a crazy schedule, like starting to program the forum components two days ago while the system was already running with content pouring in almost 24 hours a day...

Mind you, it is pretty fast when coupled with the way cool Apache [mod\_proxy / mod\_cache](http://wiki.apache.org/cocoon/ApacheModProxy) combination:

ab2 -n25000 http://www.nouvo.ch/50-1
Requests per second:    890.00 \[#/sec\] (mean)
Time per request:       1.124 \[ms\] (mean)

So, although Cocoon needs about 500msec to generate a page (which is not bad considering that we spent no time optimizing anything), peak loads like we can expect right after the TV show shouldn't be a problem...we'll know that in an hour or so, the show starts at 6:35PM today...
