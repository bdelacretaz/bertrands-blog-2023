---
title: "HtmlUnit testing of Cocoon"
date: "2005-04-07"
categories: 
  - "cocoon"
---

I've just applied to Cocoon 2.1.x the [patch](http://issues.apache.org/bugzilla/show_bug.cgi?id=34294) supplied by Alfred Nathaniel (swiss Cocoonistas rulez;-) which adds a framework for [HtmlUnit](http://htmlunit.sourceforge.net/)\-based testing of Cocoon.

Great work! Adding new tests (for Cocoon itself or your own app) is now as simple as the example shown below.

Here's the complete source code of a test which retrieves a page over HTTP and checks some of its content:

package org.apache.cocoon;
public class FlowscriptRecursiveTestCase
extends HtmlUnitTestCase
{
final String pageurl = "/samples/flow/test/";

/\*\*
\* Check dump without XSLT transform.
\*/
public void testFlowscriptRecursive()
throws Exception
{
loadHtmlPage(pageurl+"factorial?n=5");
assertXPath("html/body/p\[1\]", "Factorial of 5 is ...");
assertXPath("html/body/p\[2\]", "120.0");
}
}

Cool Stuff, thanks Alfred!

There are now even less excuses for not writing tests for Cocoon..maybe we should only accept bug reports accompanied by such tests ;-)
