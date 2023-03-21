---
title: "Better templates in Cocoon?"
date: "2004-12-07"
categories: 
  - "cocoon"
---

There have been lots of discussions about templating systems in Cocoon lately.

It started with the need to refactor the JXTemplateGenerator (which works well, thanks, but the code could be better structured for maintainability), and quickly branched out to "how about a new and improved templating system".

You often learn a lot in such collective discussions with the brilliant people who are around cocoon-dev. Me, I've learned/realized three important things:

1. Attribute-based template languages (like Zope's [TAL](http://www.zope.org/Wikis/DevSite/Projects/ZPT/TAL), thanks Chregu for the link), are much more tool-friendly (read _Dreamweaver-friendly_) than tag-based syntaxes, like our current JXTG.  
    The main reason is that attributes quickly become "invisible" to the page designer, yet they move with the elements when cut and pasted or duplicated. And there are several such syntaxes around, so designers are getting used to working with them.

- Having _one_ syntax for templating, that can be used either for the Cocoon Generator or Transformer stages, would bring big benefits.  
    See my [Alice and Bob](http://marc.theaimsgroup.com/?l=xml-cocoon-dev&m=110231970204971&w=2) story for details, there has been some argument but mostly agreement, assuming it's doable. I think it is.

- It seems very possible today to replace XSLT (for simple cases) with a much simpler transformation language (a la TAL) in Cocoon, and this would bring huge benefits as XSLT is _the_ stumbling block today for many people starting with Cocoon. It's not a problem for larger projects where you have the budget to learn or hire experts, but I'm sure it is a blocking factor for many smaller projects.  
    XSLT won't go away for sure, its power is really useful when you need it, but for simple things it is simply too costly to learn. We need something better, there are some alternatives in Cocoon today but none is really satisfactory.

There's some additional information, summaries and mailing list references on the [Cocoon wiki](http://wiki.apache.org/cocoon/Templates).

We live in exciting times - an experimental "template" block was added recently to the Cocoon trunk, and several people seem to be available to work on this, so it might become a reality rather sooner than later. Stay tuned.
