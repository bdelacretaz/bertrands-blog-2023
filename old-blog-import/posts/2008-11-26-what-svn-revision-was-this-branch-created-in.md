---
title: "What svn revision was this branch created in?"
date: "2008-11-26"
categories: 
  - "tools"
---

Let's talk about non-controversial subjects for a change: how do I find out in which svn revision a branch was created?

The answer is `svn log --stop-on-copy .` which stops at the revision that created the branch.

Courtesy of Jukka, filed in the _notes to self_ category.
