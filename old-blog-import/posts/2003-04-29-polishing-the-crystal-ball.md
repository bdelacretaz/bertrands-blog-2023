---
title: "Polishing the crystal ball"
date: "2003-04-29"
categories: 
  - "cocoon"
---

[Marc](http://radio.weblogs.com/0116284/2003/04/28.html#a107) finds this incredibly faithful rendition of me with my [Cocoon Crystal ball](http://www.mediaweb.hu/sybilla/kepek/Crystal-Ball.gif). I didn't know _they_ were watching me ;-)

I agree with Marc that there are still some pieces missing from the Cocoon web applications puzzle, mainly regarding the backend. I've [already stated](http://marc.theaimsgroup.com/?t=103786950400002&r=1&w=2) that for me business code has to be written in java, as independent from the front-end framework as possible, to be testable and long-lived.

So what are the options for the business objects layer? Currently in Cocoon very few I think, and that might be a Good Thing as we might not want to write the business layer of our apps _inside_ Cocoon, but rather _outside of it_, with a clean interface, either REST-like HTTP/XML, RMI, or Avalon components if we're careful about decoupling.

With my team we have started using [hibernate](http://hibernate.bluemars.net/) recently for object persistence and we're very happy with it. Now what's needed is a clean way to interface such backends with a Cocoon frontend. Too many options, that's often the problem these days...
