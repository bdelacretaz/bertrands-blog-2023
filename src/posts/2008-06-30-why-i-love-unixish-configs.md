---
title: "Why I love unixish configs"
date: 2008-06-30
tags: 
  - "content"
  - "sling"
  - "thoughts"
  - "post"
slug: why-i-love-unixish-configs
---

I wrote this today while discussing configuration mechanisms with my colleagues.

I love the unixish way of configurating things because the configs are:

Discoverable

With find, xargs and grep I can (very often) find out where something is configured in my unixish system, with minimal initial knowledge.

Commentable

It is easy to add comments to configuration items in a text-based config, and comments are not mangled when that config is later modified from a GUI, if that's available.

Cloneable

Copying the right config files from one system to another allows configs to be cloned.

Traceable

By putting my configs under subversion control, I know what happened to them.

Documentable

Processing my configs with simple tools allows me to create reports or dashboards easily.

The opposite of this is the M$ hell of opaque configurations managed by (sometimes even more opaque) GUIs, and unfortunately [Sling](http://incubator.apache.org/sling) leans more towards that opposite at the moment. We'll have to fix this.
