---
title: "List all your Maven dependencies"
date: 2010-07-08
tags: 
  - "tools"
  - "post"
slug: list-all-your-maven-dependencies
---

Here's a one-liner (well, two) that neatly lists all the Maven dependencies from your project. Useful to check their licenses, for example.

\# first grab all dependencies
mvn dependency:resolve

# then list them with -o to keep noise low,
# remove extra information and duplicates
mvn -o dependency:list \\
| grep ":.\*:.\*:.\*" \\
| cut -d\] -f2- \\
| sed 's/:\[a-z\]\*$//g' \\
| sort -u 

The output looks like this:

asm:asm:jar:1.5.3
asm:asm:jar:3.1
biz.aQute:bnd:jar:0.0.169
cglib:cglib:jar:2.1\_3
classworlds:classworlds:jar:1.1
classworlds:classworlds:jar:1.1-alpha-2
...

so it's also useful to detect multiple versions of the same dependency in a multi-module project.
