---
title: "Native XML scripting"
date: 2003-04-01
tags: 
  - "xml"
  - "post"
slug: native-xml-scripting
---

How about a scripting language that manipulates XML natively, allowing a document's structure to be navigated, queried and modified using a familiar ECMAscript-like syntax?

[Native XML scripting](http://dev2dev.bea.com/articles/JSchneider_XML.jsp) does just this, and frankly the following code:

function calcTotal(order) {
var total = 0;
for (var item in order.item)
total += item.price \* item.quantity;

return total;
}

is soo much more readable than the XSLT equivalent. Interesting!
