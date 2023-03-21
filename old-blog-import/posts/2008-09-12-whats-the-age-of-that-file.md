---
title: "What's the age of that file?"
date: "2008-09-12"
categories: 
  - "tools"
---

`expr $(date +%s) - $(stat -t %s -f%c that_file)`

Don't you love bash one-liners?
