---
title: "Are checked exceptions evil?"
date: "2003-09-24"
categories: 
  - "java"
---

Bill Venner's [artima](http://www.artima.com/) web site is becoming a gold mine of interviews with influent technologists and language gurus.

After reading [Failure and Exceptions](http://www.artima.com/intv/solidP.html), where James Gosling explains his vision (not too convincingly in my opinion, he sounds a bit defensive to me), and the related [thoughts](http://www.mindview.net/Etc/Discussions/CheckedExceptions) of Bruce Eckel, I realize that I've been more and more leaning towards not using checked exceptions the way they are meant to, rather just throwing _Exception_ everywhere and figuring it out at the upper levels of the call stack, sometimes using marker interfaces to classify exception types.

The problem with java's checked exceptions is that clueless programmers (no offense - it happened to me too) being forced to catch them tend to write code like

try {
.. something cool
} catch(NastyException nah) {
// gotta catch this, method throws FunnyException only
// helphelp - dunno what to do??
}

at which point the NastyException and its so precious stack trace is lost forever. Of course this can be caught by code reviews or tools, but I bet you can find some of this in most existing java projects. And maybe you've spent hours chasing bugs hidden by such code.

The hard part is when designing interfaces: what kind of exceptions should _IMultimediaDatabaseConnector_ throw, when it's supposed to work with either in-memory data, networked databases or removable media? Any guess is usually quickly proven wrong, so, in my opinion, moving to plain Exceptions makes it easier and can help avoid the above _don't know how to catch this_ syndrome.

Eckel also has an interesting _ExceptionAdapter extends RuntimeException_ example, but this hides exceptions from method declarations and could confuse programmers, whereas throwing Exception makes it clear that something can happen. JDK 1.4's built-in chained exceptions mechanism also helps in cases where you're forced to throw a specific Exception, but it's still not ideal.

Eckel makes interesting parallels with Python, where exceptions are unchecked yet can be caught at every level. The more I read about Python, the more I think it might be the next "big" language.
