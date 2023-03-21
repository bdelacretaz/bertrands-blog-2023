---
title: "Amazon Elastic Compute Cloud will change the way we look at servers"
date: "2006-08-26"
categories: 
  - "the-web"
  - "tools"
---

Upload your root Linux filesystem image to the [Amazon Elastic Compute Cloud](http://www.amazon.com/b/ref=sc_fe_l_2/?node=201590011&no=3435361), turn it on and hey presto - you've got a new, reliable, pay-as-you-go server on the Web, with solid connectivity I assume.

I haven't tried the service yet (the limited beta slots are currently full), but, if I understand correctly, customers pay only for the _actual_ CPU power used. This would bring a server running at 20% average CPU load to about $15 a month (744 hours \* $0.10 per instance-hour \* 20%). Not including storage and bandwidth, but these are cheap for mainstream applications (_update: the 20% factor does not apply, see below_).

The virtual hardware is said to be _predictably_ equivalent to a 1.7Ghz Xeon CPU, 1.75GB of RAM, so the above estimate would allow you to run interesting stuff already.

Virtual server instances can be duplicated at will (up to 20 without making special arrangements, currently) to handle more load, and decommissionned easily when they are not needed anymore.

I'm going to try this thing as soon as I get a beta slot. The implications for the kind of medium-sized systems that I'm involved with could be huge, in terms of flexibility, reliability and costs.

_Update: according to the Amazon Web Services Blog [post](http://aws.typepad.com/aws/2006/08/amazon_ec2_beta.html) about EC2, CPU time is billed by clock hour, not by actual usage. Too bad, this makes the service more suitable for applications that actually need CPU power. But the price is still quite good for what you get._
