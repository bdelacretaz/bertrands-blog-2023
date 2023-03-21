---
title: "Linotype has landed"
date: 2003-06-17
tags: 
  - "post"
slug: linotype-has-landed
---

[Stefano](http://www.betaversion.org/~stefano/) has added the Linotype block (a lightweight weblog/content editing system) to Cocoon. I like the name and the retro look of the pages. And I'm sure I will like the functionality but right now I'm too lazy to install yet another browser.

I've always been reluctant to use client-side javascript because of browser incompabilities. Obviously Linotype is heavily dependent on having the right version of Mozilla, but at least it is clever enough to tell me precisely what's wrong with Firebird 0.6:

![linotype-exception.jpg](http://codeconsult.ch/bertrand/archives/images/linotype-exception.jpg)

I like that - _transparent systems_, when something goes wrong, let them know instead of hiding it! (but obviously I will like javascript even more when it works reliably everywhere ;-)

On the server side, it's javascript again, but this time driving the Cocoon flow. How about this:

/\*
\* ...This method checks the flowscript to see if the
\* called action exists as a flowscript function. If so, it's called with
\* the given arguments. If not, the appropriate admin screen is sent
\* to the user.
\*/
function invoke(action, args) {
func = this\[action\];
if (func != undefined) {
func.apply(this,args);
} else {
sendPage("screen/" + action, {"user" : username});
}
}

Wow. If you haven't looked at the Cocoon flow yet [start here](http://wiki.cocoondev.org/Wiki.jsp?page=GettingStartedWithFlow).
