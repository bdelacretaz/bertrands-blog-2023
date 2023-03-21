---
title: "A quick \"first impressions\" tour of microblogging APIs"
date: 2009-01-19
tags: 
  - "content"
  - "esme"
  - "microblogging"
  - "post"
slug: a-quick-first-impressions-tour-of-microblogging-apis
---

I had a look at a few [microblogging](http://en.wikipedia.org/wiki/Micro-blogging) APIs, hoping to find one that's extensible and RESTful.

That world is fairly fragmented at the moment, which is not surprising considering how new the whole microblogging thing is. Having a common API would be good, and the newly incubating [ESME](http://incubator.apache.org) project might be a nice place to make this happen.

I don't think anyone expects microblogging interactions (except for the very basic ones maybe) to happen directly from a naked browser, so a clean RESTful interface, that does not have to work around current browser's HTTP weaknesses, should be possible.

Here's a quick list of my findings - I spent less than an hour on this so it's just a quick "first impressions" tour. Feedback is welcome, as are pointers to APIs that I might have overlooked.

The [Jaiku API](http://devku.appspot.com/docs) uses hostnames to differentiate between users, as in `http://johndoe.jaiku.com/presence/json`. That won't work in the general case, you can't force everybody who installs a microblogging server to setup virtual hosts. The API is also not RESTful when it comes to posting, as it uses method names in request parameters.

The current [ESME API](http://code.google.com/p/esmeproject/wiki/REST_API_Documantation) is not RESTful, and it uses HTTP sessions. But it's simple to understand and describe, which is cool - microblogging is not \*that\* complicated.

The [Twitter API](http://apiwiki.twitter.com/REST+API+Documentation) is the most complete, and provides various useful formats including [Atom](http://twitter.com/statuses/public_timeline.atom) and [JSON](http://twitter.com/statuses/public_timeline.json). The resource URLs are nice, but an URL can have a different meaning based on the name of the authenticating user, which is not good for caching, debugging, etc.

Dick Hirsch (who often writes at [blog.esme.us](http://blog.esme.us/)) mentioned the [Yammer API](http://www.yammer.com/api_doc.html). The spec is simple and clear, with nice URLs, but like in Twitter a resource URL can have a different meaning depending on the username used to sign the request.

I'm not a REST guru, but common sense makes me wonder why an URL like `http://myservice.com/messages.json` is better than `http://myservice.com/johndoe/messages.json`? Expressing the _johndoe_ username in the URL makes it very clear what is what. No username, as in `http://myservice.com/messages.json`, means "all users" which maps nicely to the public timeline.

I'll have a closer look, with the idea (at some point) of creating a microblogging server based on [Sling](http://incubator.apache.org/sling). And talk to the [ESME](http://incubator.apache.org/esme) folks, as I'm a [mentor](http://incubator.apache.org/incubation/Incubation_Policy.html#Mentor) for ESME's incubation.

_Update: [Lars](http://weblogs.goshaky.com/weblogs/lars/) suggests having a look at [openmicroblogging](http://gitorious.org/projects/openmicroblogging/repos/mainline/blobs/master/openmicroblogging.txt) as well. Will do._
