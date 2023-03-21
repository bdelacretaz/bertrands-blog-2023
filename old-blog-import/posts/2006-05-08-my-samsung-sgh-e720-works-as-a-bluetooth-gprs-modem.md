---
title: "My Samsung SGH-E720 works as a Bluetooth GPRS modem"
date: "2006-05-08"
categories: 
  - "tools"
---

It took me a while to get this working (and I should have done it a long time ago): the trick to use my E720 as a Bluetooth GPRS "modem" for MacOSX was to use the Vodafone VC710SI modem script, and \*99# as the GPRS CID number (after setting the correct GPRS config as the default on the phone).

The [Tao of Mac GPRS/UMTS setup](http://the.taoofmac.com/space/HOWTO/Setup%20GPRS/UMTS%20Access%20on%20a%20Mac) page was very useful in figuring out how to configure and debug this, and contains mostly generic information, also useful if you use another phone type.

Also, for you Swiss readers, the [gosms GPRS configuration page](http://www.gosms.ch/config.php) contains the connexion parameters for our Swiss mobile operators, Sunrise, Orange and Swisscom.
