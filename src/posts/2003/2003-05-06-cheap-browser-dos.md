---
title: "Cheap browser DOS"
date: 2003-05-06
tags: 
  - "fun"
  - "post"
slug: cheap-browser-dos
---

I mean Denial Of Service, not Disk Operating System ;-)

Funny how some code can easily be crashed - the rest of this page contains HTML code that will supposedly crash [a bunch of browsers](http://www.secunia.com/advisories/8642/) from a company that, sometimes, happens to produce code that fails in mysterious and creative ways.

I didn't imagine DOS would become so easy to write. We live in wonderful times!

Just imagine that someone might find it funny to send email worms containing this kind of code to people who for some reason use an email client that for some reason automatically interprets HTML code...I'm sure it would make a fun challenge for bored CS students somewhere (but hey kids don't forget: this would be illegal).

So, either you're running solid code and you have nothing to fear, or you want to try anyway. But you've been warned: **reading the rest of this article might crash your browser**!

Here's the code - but after serious testing by [Sylvain](http://www.anyware-tech.com/blogs/sylvain/) it looks like it won't crash your browser anyway - it doesn't work if simply embedded in the <body> of a page.

`<html>  
<form>  
<input type crash>  
</form>  
</html>  
`

It is slightly more complicated than I thought, looks like this code has to be put in a specific element of the HTML page. I'm not telling which one but Google and the cocoon-dev mailing list know...
