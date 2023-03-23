---
title: "Christian Stocker on XSLTAL"
date: 2005-07-22
tags: 
  - "apachecon"
  - "post"
  - xslt
slug: christian-stocker-on-xsltal
---

![apachecon-christian-stocker.jpg](/assets/images/movable-type-blog-archives/apachecon-christian-stocker.jpg)Here are my usual random notes for this session.

The motivation for XSLTAL is to make it easier for people to write presentation templates, by simply creating (usually with a web editing tool) XHTML templates.

XSLTAL is based on Zope's TAL syntax.

The main goals are to be simple to use for non-programmers, editable in wysiwyg editors like GoLive or Dreamweaver, and to run in different environments.

Basing it on XSLT makes it easier to run XSLTAL wherever an XSLT processor is available, (java, PHP, native code) and makes it possible to do more complex stuff with the same processor, where needed.

The TAL syntax is well established in the Zope community, and is attribute-based, which makes it possible to edit the templates with visual tools.

XSLTAL is just an XSLT stylesheet, which transforms the presentation template to another XSLT transform. The generated transform then transforms the content to generte the output according to the template.

The most important instructions are tal:content, tal:replace and tal:repeat. The difference between structure and text instructions is important. There are in total about 10 instructions, including the @tal:match and @tal:include instructions, which are not in the original TAL syntax but take advantage of the corresponding XSLT features. Two metal: instructions make it possible to define and use macros.

The data selection expressions are copied as is to XPath instructions, so the full power of XPath is available.

The tal:attributes instruction inserts dynamically computed attributes.

The tal:match instruction (not in the original TAL) maps to an xsl:template to process any element from the input, irrelevant of its position in the input document.

The tal:include instruction can be used to include "normal" XSLT transforms, useful when working in teams with people of different skills.

_Update: see [Christian's post](http://blog.bitflux.ch/archive/2005/07/22/xsltal-instant-xslt-for-everyone-slides-online.html) for a link to his slides._
