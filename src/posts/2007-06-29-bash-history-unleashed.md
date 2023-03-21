---
title: "bash history unleashed"
date: 2007-06-29
tags: 
  - "tools"
  - "post"
slug: bash-history-unleashed
---

I'm a big fan of `set -o vi` in bash, and a also of multiple [tabbed](http://iterm.sourceforge.net/) terminal windows as a way to keep multiple programming/debugging/experimenting contexts active simultaneously.

Nevertheless, it took me almost ten years to take ten minutes to lookup the settings which merge the histories of several terminals in a common file, as opposed to each terminal overwriting the other's history when exiting.

So here it is, mostly as a note to self:

export HISTSIZE=5000
export HISTCONTROL=ignoredups
shopt -s histappend

/me is happy with his big "treasure chest" history file...
