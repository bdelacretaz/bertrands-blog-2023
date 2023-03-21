---
title: "macosx hfs+ fragmentation"
date: "2004-05-25"
categories: 
  - "tools"
---

I've always been wondering about filesystems which pretend to be immune to fragmentation - sounds like hairy algorithms at work.

And disk tool vendors will FUDdily try to convince you that defragmentation cannot do any harm anyway, so why not do it?

The detailed [analysis](http://www.kernelthread.com/mac/apme/fragmentation/) done by [Amit Singh](http://www.kernelthread.com/) shows that fragmentation is indeed well tamed by the macosx hfs+ filesystem.

Amit says that _defragmentation shouldn't be necessary as the system does a very good job of preventing it_. Good news!

Note that (shame on me ;-) I've only read the conclusion, but the post looks serious. I have saved it in my _toRead_ folder for one of these rainy days...
