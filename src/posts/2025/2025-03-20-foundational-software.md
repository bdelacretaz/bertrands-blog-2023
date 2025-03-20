---
title: "Foundational vs. application software: two worlds?"
date: 2025-03-20
tags: 
  - "current"
  - "favorite"
  - "thoughts"
  - "software"
  - "ai"
  - "post"
slug: foundational-vs-application-software
---

We often consider software engineering as one discipline, but I think foundational
and application software are almost two different worlds.

<!-- excerpt -->

The required skills and processes can be _very_ different when building foundational
software that's expected to run for years, as opposed to application software that
might have a much shorter lifespan.

This is especially important when considering that large parts of our software can
be _generated_ nowadays, as opposed to being handcrafted.

I am _very_ skeptical about generating foundational software, as it needs special
care and often takes much more time designing than writing anyway. So it's not
the writing or typing efficiency that matters here.

_Hey this ended up as quite a long post. I'm sure it goes well with a cup of whatever-beverage-you-like!_

## Building a house

![A shed being built, with a concrete foundation and wooden framing](/assets/images/foundational-vs-application-software.webp)

If I had to build the house like in this picture, I could probably take care of the wooden framing and walls. I am not a professional carpenter, but my woodworking skills should be sufficient for that, given some advice from someone more experienced.

The concrete foundation, however, is a different story. Getting it even slightly wrong is likely
to cause major issues over time, water leaks, unstable walls or more serious problems
that you don't want to risk.

I would definitely contract a professional or find a very experienced hobbyist to build that foundation, where the stakes are much higher. There's no space for amateurism or
imperfections for the foundational parts of my fictitious house.

Like in software, actually.

## Foundational software

_Foundational_ software is often critical, has a large "blast radius" if something goes wrong, and usually impacts the well-being and efficiency of all software developers who need to use it or its APIs for a long time.

It has to be robust, [simple](/2025/03/13/zh/), written in a defensive way, performant, and these
attributes will help reduce its development and maintenance costs over time.

Think about how much care went and still goes into developing the Linux kernel, for example. Getting it even slightly wrong is likely to have major consequences, with
very high costs overall.

Would I let an AI write such code? No way! Like the foundation of my fictitious house,
it has to be _exactly_ right, carefully designed by someone with lots of experience and insights,
and the productivity is never measured in lines of code per minute. Especially if you
consider the complete life cycle of such software modules, which can extend to years
or even decades.

Writing the code is only a small part of the overall work for a foundational module, so
generating it will not bring significant gains. On the other hand, that would increase the risks in a way that I find unreasonable.

## Application software

Application software is a different story. In some cases, like when programming
the lights for the evening's show, its lifetime is counted in hours.

Most application software lives longer than that, but usually much less than
the foundations on which it is built.

The "blast radius" of application software is also generally much smaller, as
defects will usually impact a small percentage of the software's scope, without
influence on other modules.

So the risks in generating application software are much lower, again depending
on how critical a given module is.

## How to treat both types of software

Software modules have a "spectrum of criticity", of course, it's not just
two types but a whole range between super-critical long-lived foundational
and throw-it-away-in-a-few-hours application demo software.

The key to ensuring quality in this vast range of software types is to consider
the impact of a given module's quality on your systems and business, and derive
from that the level of quality that is required.

And then, if you want, generate the parts which are not _that_ critical and
where defects won't affect the rest of the system too much. That might work, and
the tools for doing that are quickly improving.

## Conclusion

I think we need to be aware of what type of software we are speaking about
when considering automating parts of its production. Can you afford
suboptimal software structures, duplicated code and ugly constructs in places,
or do you need high quality hand-crafted software throughout for that mission critical 
infrastructure?

There's space for both 100% generated and 100% handcrafted software depending
on how and how long it will be used. As generative AI progresses, we will
certainly automate more things, but I think we have to be careful not to overuse
automation at the expense of the level of quality required for a given module.


## P.S. Another post with an AI-generated image !

Indeed - I used the following prompt to generate this image using
[Adobe Firefly](https://firefly.adobe.com)

> A shed under construction. The foundation is prominently featured, solid, monolithic poured concrete foundation walls with smooth surfaces and characteristic formwork marks. Lightweight wooden framing is being built on top and a small section of the wooden walls is completed. Bertrand is working on the walls, his toolbox well visible.

That's a big shed, for sure!

And, full disclosure, I also used [Claude.ai](https://claude.ai) for a first draft of this blog post,
with this prompt:

> Write an article on how there are two types of software which require different skills and mindset to write. Long lived critical libraries and core modules on one hand, and more throwaway application software that has a much smaller "blast radius" if something goes wrong.

I only reused small bits of the resulting article, but it helped by exposing a few things that I hadn't thought of. Given more time, I would rather discuss this with colleagues,
but that can also happen now that this article is out and I'd be happy to write
an improved version later!


