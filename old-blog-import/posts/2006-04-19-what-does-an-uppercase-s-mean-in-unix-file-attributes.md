---
title: "What does an uppercase S mean in unix file attributes?"
date: "2006-04-19"
categories: 
  - "tools"
---

I wasted an hour this morning on this one, so maybe it is useful to somebody.

If you get something like _drwxr-**S**\--_ when listing directories on a unixish system, the uppercase **S** means that the directory's setgid bit is set, but the execute bit isn't set.

It's been 20 years since I started with Unix - you never stop learning I guess!
