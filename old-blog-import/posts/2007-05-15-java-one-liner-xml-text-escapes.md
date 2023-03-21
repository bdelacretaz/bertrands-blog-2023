---
title: "Java one-liner: XML text escapes"
date: 2007-05-15
tags: 
  - "java"
  - "post"
slug: java-one-liner-xml-text-escapes
---

It never occured to me before today but

`str.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");`

is good enough for quick and dirty escaping of XML text.

And escaping it manually to write it here is also fun ;-)
