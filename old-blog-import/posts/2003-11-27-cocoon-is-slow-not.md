---
title: "Cocoon is slow (not!)"
date: 2003-11-27
tags: 
  - "post"
slug: cocoon-is-slow-not
---

_Cocoon is slow_ says customer: the generation of their list of persons takes several minutes, which makes it unusable for data verification by office personnel.

Let's have a look: database query takes five seconds, not too bad considering the aggregation of about ten different SQL queries. We'll optimize this one later, our problem must be downstream.

Look at the XSLT transform that follows the query. Hmm...lots of _xsl:for-each_ and _xsl:choice_, usually signs of misuse of the XSLT tree model.

That's it! Replace full-tree scanning select expressions with better ones based on XSLT keys. Three hours and some refactoring later, the (relatively complex) transform takes 9 seconds instead of 65. Not bad, the list is now output in about 20 seconds in HTML.

Just make sure you don't measure performance by loading the big generated XML document (16 megabytes) in a browser, this knocks many browsers out for a while.

Cocoon in itself is definitely _not_ slow. XSLT can be sometimes, if one is not careful about the constructs used. Most browsers are _awfully_ slow when loading big XML files (but readers of this weblog already know this, right?).

That's my story for today. Sleep well ;-)
