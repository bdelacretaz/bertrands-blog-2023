---
title: "Standalone ViewCVS"
date: 2005-06-08
tags: 
  - "tools"
  - "post"
slug: standalone-viewcvs
---

Found out today that [ViewCVS](http://viewcvs.sourceforge.net/) has a standalone mode, including a mini-web server, started like

./standalone.py -p 1234 -r /path/to/cvsroot

Very useful to quickly explore a repository or generate nice HTML diffs without having to install much.

There's a small trick though: you have to access it like http://host:1234/**viewcvs/**. The good thing about Python is that it's usually easy enough to find such things by reading the code. It was in this case.
