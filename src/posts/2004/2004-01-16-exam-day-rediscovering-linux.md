---
title: "Exam day: rediscovering Linux"
date: 2004-01-16
tags: 
  - "thoughts"
  - "post"
  - linux
  - archimob
slug: exam-day-rediscovering-linux
---

Yesterday was the grand opening of the [exhibition](http://www.archimob.ch/) for which [we](http://www.archimob.ch/f/expo/impress.html) have built a Linux-based interactive movie theater system.

Having a crowd of bigwigs and media people watch a big video screen where your software runs live for the first time felt a lot like an exam day: you know you've done everything you could, so you just go for it prepared for either success or failure. It was mostly a success with minor glitches which have been invisible for 99% of the audience. It will take a few days before I'm relaxed about it, but it looks good.

We've been taking risks technically, going for direct replay of DV video for the best picture quality: the results are very good but it took a lot of sweat to find a hardware and software configuration which works reliably.

On the software side we're running java code, small components glued with [BeanShell](http://www.beanshell.org/) and a Flash front end (see [here](http://codeconsult.ch/bertrand/archives/000182.html)).

While creating this system I have rediscovered the toolbox aspect of Linux: although it took a lot of experimentation and tests to create the right configuration, it is great to come up with a user's manual consisting of "turn power on to start, pull the plug to stop". This is basically an embedded system, only with 200-Gig drives to hold the video (raw DV - these files are big!).

We use the exact same config for all PCs in the exhibition, with USB keys to select a particular role, making PCs interchangeable for testing and troubleshooting, and cleanly separating what changes from what doesn't.

Closed systems would not cut it: transparency is required to find out how to tune the system to one's needs and to be able to validate the results. Having been a unix fan and user since 1986, I realize today the huge amount of wisdom that has gone into the design of unix-like systems. Eric Raymond's [book](http://www.catb.org/~esr/writings/taoup/) has helped reinforce the feeling: the unix way of doing things definitely resonates here.

Working with a very diverse (and somewhat chaotic) team of filmmakers, graphic artists, room designers and project managers has been a great experience, it will be hard to go back to business-as-usual stuff after this. Maybe I should talk with [Carsten](http://www.osoco.net/weblogs/rael/archives/000204.html) about setting up this fireworks and laser show company ;-)
