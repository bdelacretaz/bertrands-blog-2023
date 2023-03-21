---
title: "The vi survival guide"
date: "2006-10-30"
categories: 
  - "tools"
---

If, like mine, your colleagues are constantly moaning about vi when installing their machines, have them read this!

Print the _essential commands_ shown below, stick them on top of the coffee machine and have your coworkers recite them before getting a coffee. After a week, they'll be ready to fix any Linux box with the stock tools, even when lost in the middle of a desert (I must admit I haven't tried the desert bit, but it should work).

#### Essential commands

ESC

toggles between insert and command mode

h,j,k,l

cursor left,down,up,right

i

insert before cursor position

A

add at end of line

o

open (insert) a line after current line

dd

delete current line

CTRL-F / CTRL-B

page forward / backward

ZZ

quit and save

:q!

quit without saving

#### Other useful commands (partial list)

w,b

word forward/backward

cw

change word (end with ESC)

x

erase one character

d5d

delete 5 lines from current position

dw

erase one word

yy

copy current line to buffer (yank)

p

paste buffer after current line

CTRL-G

display file information at bottom of screen

3G

go to line 3

/expr

search forward for a regular expression

n

repeat forward search

N

repeat backwards search

:g/word1/s//word2/gc

replace word1 by word2 in the whole file with user confirmation.

:/word1/s//word2/gc

replace word1 by word2 in current line with user confirmation.
