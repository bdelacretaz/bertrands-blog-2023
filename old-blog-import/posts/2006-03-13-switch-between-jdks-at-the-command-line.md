---
title: "Switch between JDKs at the command-line"
date: 2006-03-13
tags: 
  - "tools"
  - "post"
slug: switch-between-jdks-at-the-command-line
---

Here's the script that I use on macosx to switch JDKs in consoles. It can easily be adapted for any unixish system.

export JDK=/System/Library/Frameworks/JavaVM.framework/Versions/$1/Home/

if \[\[ -d $JDK \]\]
then
echo "using $JDK as the current jdk..."
export JAVA\_HOME=$JDK
export PATH=$JAVA\_HOME/bin:$PATH
else
echo "setjdk error: $JDK directory does not exist"
fi

Use it like `. setjdk 1.4.2`, don't forget the initial dot and space which mean "execute this script without starting a new process", so that the JAVA\_HOME and PATH defined in the script are valid for your current shell.

Thanks Helma for asking about this, it's good to know that this entry can actually be _useful_ to some people, as opposed to just noise ;-)
