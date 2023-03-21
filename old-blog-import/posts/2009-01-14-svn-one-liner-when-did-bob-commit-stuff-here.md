---
title: "svn one-liner: when did bob commit stuff here?"
date: "2009-01-14"
categories: 
  - "tools"
---

From the _blogging this to remember next time_ department:

find src -type f \\
| grep -v svn \\
| while read f
do 
  echo "FILE:$f" 
  svn log -q
done \\
| egrep 'FILE|bob'

Additional `svn log` options like `-r` can be used to restrict the range.

_Update: Julian mentions a way to avoid the grep, using `find src -name .svn -prune -o -type f -print`_
