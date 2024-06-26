---
title: "What Makes Apache Tick?"
date: 2009-11-17
tags: 
  - "asf"
  - opensource
  - collaboration
  - "post"
  - favorite
slug: what-makes-apache-tick
---

![apachecon_us_09_twleung.jpg](/assets/images/apachecon_us_09_twleung.jpg)Looking at the diversity of [Apache Software Foundation](http://apache.org) communities, one can see a recipe for failure: people from different cultural backgrounds, different mother tongues, different employers, different timezones...all working together to create some of the best software on the planet? You must be kidding.

How can this very loose collage of disparate people pump out dozens of high-quality releases every year, often working better than more structured corporate teams? This "mystery" has been on my mind for a while, and I have identified four drivers that influence the way we use collaboration tools that play a major part in our success.

The first driver is a _common vision_ amongst project members. The Biblical saying, "Without a vision, my people perish" is quite valid for our projects. Both using a central development mailing list for each project, and spending time to collectively define our project's charter, helps us foster this common vision amongst project members. Every member should have the same answer to the "what are our goals?" question, so it's important to get them to talk in a central place, where they all get the same information, as opposed to undocumented, one-to-one discussions.

Secondly, providing _real-time status updates_ to project members is key in helping them stay on track. At Apache, this is implemented by the many events generated by our collaboration tools: commit events to indicate code changes, issue tracker events to provide updates about the status of bugs and new features, success/failure events from continuous build systems, and standardized ways of announcing releases so that other projects are informed. Project members subscribe freely to as few or as many event channels that they want to, so as to stay on top of things in near real-time, and without having to actively ask others about what happened. Status meetings? No need for those, as the information is flowing all the time.

The third success driver lies in enabling _real-time help requests_. In an immediate crisis of the "we need to deliver this by tomorrow" type, especially when working with a big team, you need to be able to ask for help without necessarily 1) knowing who specifically will help, and 2) bothering others with direct person-to-person requests, especially if they work in a different timezone. The key here is using issue trackers, where one web page stores key data and parts of the dialog that leads to resolving an issue. Posting an issue on the tracker, with sufficiently detailed instructions about how to reproduce the problem, along with attributes such as severity level, affected modules, etc., is the best way to expose a problem to the group quickly and with precision. Using an issue tracker also allows you to quickly and efficiently change priorities as well as re-assign issues and tasks – key elements that make all the difference in a crisis.

Finally, having _searchable archives_ of this information allows new project members, or those returning after a period of absence, to learn what transpired and why things have been done in a certain way. Without self-service archives, new participants would have to talk to everybody to find out about the project's history, past decisions, conventions, etc., which is neither efficient nor scalable. Most of our archives are automatically built as project activities progress: mailing lists are archived, source code control history is kept forever, and issue trackers write the full history of the project's micro-decisions.

Combined with Apache's principles of meritocracy and consensus-based decision making, these four collaboration drivers allow our project teams to work very efficiently, and, in many cases, even more so than structured teams that do not establish those central hubs of information exchange.

Does your project team foster a common vision and provide tools for real-time status updates, real-time help requests and self-service archives to its members? If yes, congratulations: you're on a good track to becoming as effective as an Apache project!

_Many thanks to Sally Khudairi for reviewing and copy editing._

_ApacheCon US 2009 picture by [Ted Leung](http://www.flickr.com/photos/twleung/) / Creative Commons License ([CC BY-NC-SA 2.0](http://creativecommons.org/licenses/by-nc-sa/2.0/))._

See also my [Open Source Tools are Good For You](http://grep.codeconsult.ch/2009/04/01/open-source-collaboration-tools-are-good-for-you-relooked-and-live-tomorrow/) presentation, which discusses the tools that Apache projects use to implement this.
