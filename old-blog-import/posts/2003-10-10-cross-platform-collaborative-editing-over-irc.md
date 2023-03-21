---
title: "Cross-platform collaborative editing over IRC?"
date: "2003-10-10"
categories: 
  - "tools"
---

After the eye-opening experience with [SubEthaEdit](http://www.codingmonkeys.de/subethaedit) at the GetTogether, the Cocoon team is looking for collaborative editing / whiteboard tools for the upcoming [First Fridays](http://wiki.cocoondev.org/Wiki.jsp?page=FirstFriday).

I've been searching for tools, and tought it would be good to use IRC as the underlying protocol, as we're planning to use it anyway for "voice" communications and it can be tunneled via SSH over firewalls.

Also, the client software has to be cross-platform, and SubEthaEdit currently works on macosx only.

After some digging, it looks like [DocSynch](http://placebo.hpi.uni-potsdam.de/~alexklim/) might fit the bill: it is a plugin for [JEdit](http://www.jedit.org/), and uses IRC to exchange data.

We'll have to try this one out! There is some additional info on [Lars Trieloff's](http://trieloff.dyndns.org/archive/000427.html) weblog, where I first found mention of it.

_Update: looks like, unlike SubEthatEdit, DocSynch requires exclusive locking of the whole document for editing. Makes it...less useful than I initially thought._
