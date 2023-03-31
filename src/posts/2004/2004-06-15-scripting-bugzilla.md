---
title: "Scripting bugzilla"
date: 2004-06-15
tags: 
  - "tools"
  - "post"
  - bugzilla
slug: scripting-bugzilla
---

You know I'm a fan of bugzilla (and I know there are better tools but it _does the job_ here ;-)

Today I need to enter a bunch of issues in a bugzilla system, from a software analysis document written in XML, containing for example:

```xml
<function
id="F1100.4"
iteration="4"
description="Scrubolator markup implementation">
<hours design="3" implementation="6" test="2"
  installation="0" documentation="1"/>
</function>
````

After searching all over the world for an XML-RPC or similar interface (there is one on the RedHat version of bugzilla apparently) I found _bugzilla-submit_ right there on the official bugzilla [download page](http://www.bugzilla.org/download.html#utils).

Very useful! With a simple RFC-822 like input file you can create an issue from the command-line:

Op-Sys: MacOS X
Status: NEW
Version: unspecified
Priority: P3
Severity: normal
Product: Milestones
Component: Itérations
Assigned-to: bdelacretaz@codeconsult.ch
Summary: Iteration 5
Description: We'll use dependencies on this issue to schedule iteration 5

So I'll just have to write an XSLT transform to put my analysis into action (well, let's make this _planning_ instead, the action will come right after).

Note that I had to hack the script slightly to make it work on my macosx system:

```bash
#if sys.version\[:6\] < '2.3.0':
#    error("you must upgrade to Python 2.3 or higher to use this script.")
if sys.version\[:4\] < '2.3':
error("you must upgrade to Python 2.3 or higher to use this script.")
````

Another cool tool! Many thanks to its authors [Christian Reis](http://www.async.com.br/~kiko/) and [Eric S. Raymond](http://www.catb.org/~esr/).
