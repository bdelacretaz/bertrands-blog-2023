---
title: "Surviving large mailing lists in 2024"
date: 2024-09-13
tags: 
  - "collaboration"
  - "current"
  - "favorite"
  - "netiquette"
  - "mailing-lists"
  - "post"
slug: surviving-large-mailing-lists-2024
---

It'll soon be 25 years since I started collaborating via 
mailing lists in open source communities.

<!-- excerpt -->

![Image of people chatting around a bonfire, generated using Adobe Firefly, as the Content Credentials will tell you](/assets/images/adobe-firefly-people-around-a-bonfire.webp)

The [best practices](/2017/11/10/large-mailing-lists-survival-guide/)
for using [mailing lists](/tags/mailing-lists)
haven't changed much since I started doing that: using mailing lists efficiently requires discipline from everyone involved, and if that's lacking you get a big mess, misunderstandings and a waste of time.

How to avoid that? Read on!

## One Topic Per Thread

Sticking to one topic per thread allows others to ignore those that
are not relevant to them, without the fear or missing out on a topic
that's buried inside.

Forking off new threads is easy, just edit the subject line, or start from
a fresh new message if you're unsure of how "modern" mail clients handle
changing subject lines.

The typical convention when doing that is to use "_was:_" to indicate what
the old thread was, such as:

> Avoiding memory leaks (was: performance issues, BLAH-1234)

## Sensible Subject Lines

A discussion thread that's about a single topic is very helpful, but 
what's that topic?

That's where good subject lines come into play. "_Question_" is possibly
the worst subject line, whereas something like:

> Suggestion: how to avoid memory leaks in the blastoligator [memory] [blastoligator]

leaves no doubt as to what the discussion is about, and helps others decide
whether they need to dig deeper into the thread or not.

Note the use of `[tags]` in the subject line, these can be
[very helpful](/2009/06/13/the-single-mailing-list-dream/) if they are well known or obvious.

## Precise Quoting

Some "modern" email clients unfortunately make it hard to precisely
quote what you are replying to, defaulting to top-quoting a large
block of text. Throw them out, if you can.

Top quoting, or imprecise quoting, risk creating shallow discussions
where it's unclear what you are replying to. Approving a large block
of text in bulk either means you agree with all of it, or just with
a single point, or anything in between. Not helpful.

The right way to quote, known as
[Usenet Quoting](https://en.wikipedia.org/wiki/Posting_style#Quoted_line_prefix),
looks like this:

````
> On Sept 13th, at 13:04pm, Leonardo wrote:
> ...I wonder if we could speed up the blastoligator by
> keeping a cache of the most recent outputs...

That would probably work, but have you evaluated the cost
of such a cache in memory usage? We're already pushing the
limits of that in some places.

> ...Cache invalidation might be difficult, however...

Indeed. I think a simple time-based cleanup based on the
age of each entry would work.
````

Such Precise Quoting makes it absolutely clear what you are
replying too and creates an actual and possibly deep
conversation, which is what you want.

Precise Quoting often works better with plain text emails,
which I always use unless rich text is _really_ required.

## That sounds like a lot of work!

It is.

You need to realize that you are _writing to an audience_
when using a mailing list with many subscribers. Investing a 
few minutes of your time to craft a message that saves readers
a few seconds is extremely valuable.

The collective energy savings are huge, and complex discussions are
actually impossible without that kind of discipline.

On the other hand, being able to collaborate asynchronously with
a hundred or a few hundreds of people is quite a feat, so that
additional work is very worth the effort.

## But mailing lists are obsolete anyway, right?

Although mailing lists are considered obsolete by lots of people today, I
still believe they are the workhorse of written collaboration in many cases,
especially for large and loosely coupled teams.

Everybody has a mail client, you don't need Yet Another Account from a third party provider and they Just Work - assuming they are used with enough
discipline as described here.

If you're working in a more private setting where you can add
better tools, by all means please do so! But just giving up because mailing
lists are messy would be wrong. It's _your team_ who is messy, not the tool!

## Coda

Shallow discussions and frequent misunderstandings are the symptoms of
a mailing list that's used without the required discipline.

Creating a nicer and more productive collaboration environment requires
some effort from everyone involved. I hope this article inspires you
to do your part!