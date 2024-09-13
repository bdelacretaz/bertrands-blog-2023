---
title: "The single mailing list dream"
date: 2009-06-13
tags: 
  - "asf"
  - "collaboration"
  - "thoughts"
  - "mailing-lists"
  - "post"
  - favorite
slug: the-single-mailing-list-dream
---

The [ASF](http://apache.org) uses a (way too) large number of [mailing lists](http://apache.org/foundation/mailinglists.html) for all its internal and project communications.

Having crosscutting discussions is quite hard - for example, many projects use [OSGi](http://www.osgi.org) these days, and the only way for them to share their OSGi experience would be to create yet another list, or to subscribe to all of each other's lists, which means a lot more traffic to manage.

One of my current technical dreams is to have a single list for all of the ASF, using tags to define the audience and visibility of messages - a la Twitter hashtags.

A message about the maven-scr-plugin on the Sling list, for example, would be tagged

#sling #osgi #maven-scr-plugin #scr #public

so that people subscribing to the `#osgi` and `#scr` tags, for example, would see it.

Another obvious use case is to easily ignore all discussions about a given topic (like `#budget` maybe? ;-), in a reliable way and without losing other communications within the same group.

I'm not sure how to implement this today (particularly the access control part for things like the `#asf-private` tag), but that would in my opinion be a huge improvement on what we have now.

_Update: it's now 2017 and I heard from a colleague that his company [the OpenStack dev list](http://lists.openstack.org/pipermail/openstack-dev/2017-June/thread.html) is using this model for group communications. That's using mailing lists, but the model would apply to any shared channel that supports threaded discussions with searchable thread titles. I'm so happy to hear that this actually works! And too bad I haven't been able to use it myself so far._
