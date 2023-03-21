---
title: "Apt-Pinning"
date: "2004-11-15"
categories: 
  - "tools"
---

John H. Robinson's [Apt-Pinning for Beginners](http://jaqque.sbih.org/kplug/apt-pinning.html) shows a very simple way to mix stable and unstable stuff on a Debian system.

In theory that is: the setup is fairly simple but mixing stuff from various distributions can become hairy fairly quickly. But it's still very useful in many cases.

To get that setup to work on my system I had to increase the Cache-Limit even more (APT::Cache-Limit "134217728";)
