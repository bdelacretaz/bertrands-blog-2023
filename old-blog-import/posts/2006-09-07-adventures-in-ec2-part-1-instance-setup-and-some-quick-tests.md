---
title: "Adventures in EC2, part 1: instance setup and some quick tests"
date: 2006-09-07
tags: 
  - "tools"
  - "post"
slug: adventures-in-ec2-part-1-instance-setup-and-some-quick-tests
---

Got an email yesterday telling me that I could get a beta slot for [Amazon EC2](http://codeconsult.ch/bertrand/archives/000707.html), jumped in and got my fresh new virtual virtual machine.

"Virtual virtual", isn't it? My "computer" is a Xen image running on some mysterious Elastic Compute Cloud...

Here's a quick report on my (very positive) experiences so far:

Setup was easy, following the [getting started](http://developer.amazonwebservices.com/connect/entry.jspa?externalID=354&categoryID=87) guide, things worked exactly as advertised. I used their stock Fedora Core image for my quick tests.

Bandwidth looks solid, a download from Sun moves along nicely at 2MBytes/second. Ping latency is above 100msec from here, which is normal for US-hosted servers.

A full build of Cocoon 2.1.9 took 1'53, not bad.

Running Eclipse remotely via [FreeNX](http://freenx.berlios.de/) (setup as per [Rick Stout's page](http://fedoranews.org/contributors/rick_stout/freenx/)) wouldn't cut it for intensive work, of course, but it's perfectly usable, thanks to the good bandwidth and FreeNX magic.

Installation and testing has cost me 47 US cents in machine time and bandwidth.

My guess is that we're going to see more similar offerings soon.
