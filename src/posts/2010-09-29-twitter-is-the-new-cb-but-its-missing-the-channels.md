---
title: "Twitter is the new CB...but it's missing the channels!"
date: 2010-09-29
tags: 
  - "twitter"
  - "collaboration"
  - "web"
  - "post"
slug: twitter-is-the-new-cb-but-its-missing-the-channels
---

When I was a kid, [Citizen Band Radio](http://en.wikipedia.org/wiki/Citizens'_band_radio) (aka "CB") was all the rage if you could afford it.

Those small unlicensed two-way radios have a relatively short range, actually extremely short if you compare to the global range of Twitter today. And they don't have that many channels, 40 in most cases if I remember correctly. That works as long as the density of CB users is not too high in a given area.

For general chat, CB etiquette requires you to start by calling on a common channel for whoever you want to talk to, and, once you find your partner(s), quickly agree on a different channel to move to, to avoid hogging the common channel.

That "agree on a different channel to move to" feature is key to sharing a limited medium efficiently. As the Twitter population grows, the timeline that I'm getting is more and more crowded, with more and more stuff that I'm not interested in, although I'm willing to follow the general flow of a lot of people.

The global reach of services like Twitter and ubiquitous Internet access makes CB mostly obsolete today.

Twitter is the new CB, in many ways.

What Twitter lacks, however, are the channels, as in:

> Could you guys at SXSW move to the `#c.sxsw` channel and stop boring us with your conference chitchat? We're jealous, ok? Thanks.

Direct messages don't work for that, as they are limited to two users. A bit like a point-to-point channel, like the telephone, as opposed to multipoint as the CB provides.

Twitter channels can also be very useful for data, like weather stations or other continuous data sources that can benefit from hierachically organized channels. But let's keep that discussion for another post. Like my mom said, one topic, one post (not sure it was her actually).

### What does Twitter need to support channels?

I think the following rule is sufficient:

> Any message that contains a hashtag starting with `#c.` is not shown in the general timeline, except to people who are explicitely mentioned with their `@id` in the message.

Such messages can then be retrieved by searching for channel hashtags, including partial hashtag values to support hierarchies.

Using hierachical channel names by convention opens interesting possibilities. The ApacheCon conference general channel would be `#c.apachecon` for example, the java track `#c.apachecon.j`, etc.

This channel filtering could of course be implemented in Twitter clients ([@stephtara](http://twitter.com/stephtara), remember you said you were going to mention that to [@loic](http://twitter.com/loic)?), but in my opinion implementing it on the server side makes more sense as it's a generally useful feature.

Then again, I'm a server-side guy ;-)

Opinions welcome, of course.
