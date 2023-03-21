---
title: "What is source code, anyway?"
date: "2005-01-28"
categories: 
  - "the-web"
---

I'm preparing a talk on Open Source for a group of project managers, and my contact mentioned that being clear about what _source code_ actually is would help.

So, here we go. I'm sharing this below for the benefit of mankind my two readers.

Apart from that, I'm going to tell them [How the ASF works](http://www.apache.org/foundation/how-it-works.html), point them to a paper by the [European Working Group on Free Software](http://eu.conecta.it/) (mainly about licences but there are lots of good things in there), and talk about the [lightweight tools](http://orixo.com/events/gt2003/sessions.html#bertrand) that we use to reach our goals.

Here's the blurb about source code - WDYT?

# What is "source code"?

[Wikipedia](http://en.wikipedia.org/wiki/) says:

> Source code (commonly just source or code) is any series of statements written in some human-readable computer programming language.

and

> A computer program's source code is the collection of files that can be converted from human-readable form to an equivalent computer-executable form. The source code is either converted into executable by a compiler for a particular computer architecture, or executed from the human readable form with the aid of an interpreter.

## An example in the C language

Here's the source code of a very simple program, written in a _programming language_ called "C":

main()
{
printf("Hello, World!\\n");
}

When _compiled_ and _executed_, this program displays **Hello, World!** on screen.

Real programs are much more complex, of course, often consisting of thousands of such _source code files_, totalizing tens of thousands or even millions of lines of source code.

The _compilation_ process creates a machine-readable _binary_ version of the program, optimized for quick execution on a given computer system.

Before Open Source, this binary version was the only one people would get when they bought software: a static, frozen version of the software.

Here's a binary listing of the compiled version of the above program (on mac OSX, using the od -h command):

0000000     feed    face    0000    0012    0000    0000    0000    0002
0000020     0000    000a    0000    0500    0000    0085    0000    0001
0000040     0000    0038    5f5f    5041    4745    5a45    524f    0000
0000060     0000    0000    0000    0000    0000    1000    0000    0000
... about 400 more lines like this ...
0026360     6e64    5f64    796c    645f    7265    6d6f    7665    5f69
0026400     6d61    6765    5f68    6f6f    6b00    0000
0026414

_(Note that "feed face" don't mean "give food to your head", they're hexadecimal values ;-)_

As you can imagine, modifying the program from the source code (for example to change the message) is relatively easy, but doing the same change on the _binary, compiled_ version of the program, although theoretically possible, is much harder, and in most practical cases impossible.

_Update: thanks to Ezra for pointing out my mistake, the binary was a dump of the source code instead of the compiled version, it is corrected now. Also, the three comments seem to indicate that you readers are indeed more than two. I stand corrected on both points._
