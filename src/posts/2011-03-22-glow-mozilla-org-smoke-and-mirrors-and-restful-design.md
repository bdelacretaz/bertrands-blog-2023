---
title: "glow.mozilla.org: smoke and mirrors, and RESTful design"
date: 2011-03-22
tags: 
  - "mozilla"
  - "web"
  - "post"
slug: glow-mozilla-org-smoke-and-mirrors-and-restful-design
---

[![Glow shot](/assets/images/glow-shot1.jpg "glow-shot.jpg")](http://glow.mozilla.org/)When I was a kid, my aunt gave me a book called _the art of engineering_. The title sounded weird to me at first - isn't engineering the opposite of art?

It's not - artful design can be visible in the best pieces of software, and not only at the user interface level. I find the realtime display of Firefox 4 downloads by [glow.mozilla.org](http://glow.mozilla.org/) fascinating, and being my curious self I wondered how the data is transferred.

Starting with the requirement of _broadcasting real-time data to millions of clients simultaneously_, many of us would end up with expensive message queuing systems, RPC, WebSockets, SOAP^H^H^H^H (not SOAP - don't make me cry). Lots of fun ways to add some powers of ten to your budget.

Don't believe anyone who tells you that software has to be complicated, or that engineering cannot be artful. Simplicity always wins, and glow.mozilla.org is an excellent example of that.

The first thing that I noticed when looking at how glow gets its data (which was very easy thanks to the use of _sane_ http/json requests) is that glow is not real-time.

I'd call it _smoke and mirrors real-time_: the client just requests a new batch of data points every minute, and the server can change this interval at any time, which can be very handy if traffic increases. Fetching slightly old data every minute is more than enough for a human user who doesn't care if the data is a bit outdated, and it makes the system _a bit_ simpler.

The first of these two regular data requests is to an URL like [http://glow.mozilla.org/data/json/2011/03/21/14/42/count.json](http://glow.mozilla.org/data/json/2011/03/21/14/42/count.json). The path already tells you a lot about what this is, which although not required is often a sign of a good RESTful design.

The response contains an array of data points (number of downloads per minute), along with two very important items that control the data transfer:

      {
         "interval":60,
         "data":\[
            \[
               \[
                  2011,3,21,13,43
               \],
               1349755
            \],
            \[
               \[
                  2011,3,21,13,44
               \],
               1350332
            \],
            ...
         \],
         "next":"2011/03/21/14/43/count.json"
      }

The _interval_ tells the client when to ask for data next, and the _next_ item is the path to the next batch of data. At least that's what I assume, I haven't checked the client code in detail but that seems obvious.

Using URLs and data that _seem obvious_ is the essence of the Web, and of a good RESTful design. Using RPC, WebSockets or any other supposedly more sophisticated mechanism would bring nothing to the user, and would only make things more complicated. Being able to throttle data requests from the server-side using the _interval_ and _next_ items is very flexible, obvious, and does not require any complicated logic on the client side.

The second data URL looks like [http://glow.mozilla.org/data/json/2011/03/21/14/42/map.json](http://glow.mozilla.org/data/json/2011/03/21/14/42/map.json), and if my quick analysis is correct it returns geographic coordinates of the dots that represent geolocated downloads. It uses the same _interval_/_next_ mechanism for throttling requests.

All in all, an excellent example of engineering smoke and mirrors applied in the right way, and of simple and clean RESTful design. No need for "sophisticated" tools when the use case doesn't really require them. Kudos to whoever designed this!

_Update: The Mozilla team has [more details](http://blog.mozilla.com/data/2011/03/22/how-glow-mozilla-org-gets-its-data/) on their blog. Thanks to [Alex Parvulescu](http://twitter.com/alexparvulescu/status/50299747935854592) for pointing that out._
