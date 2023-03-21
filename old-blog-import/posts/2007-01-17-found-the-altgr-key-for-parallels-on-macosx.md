---
title: "Found the AltGR key for Parallels on macosx"
date: 2007-01-17
tags: 
  - "tools"
  - "post"
slug: found-the-altgr-key-for-parallels-on-macosx
---

I'm playing with a Knoppix LiveCD under [Parallels](http://www.parallels.com/), and the AltGr key (needed to get a pipe character when you have a swiss french keyboard layout) was missing.

Turns out (according to [their forum](http://forum.parallels.com/showthread.php?p=27651&highlight=altgr#post27651)) that you need to configure a special keyboard mapping, to use the numeric keypad's Enter key as AltGr.

To enable this, create the file shown below, containing the single keyword shown, and restart Parallels:

$ cat /Library/Parallels/.keyboard\_config
numenterisaltgr

It works for me.
