---
title: "My procmail rules IDE"
date: 2007-10-20
tags: 
  - "tools"
  - "post"
slug: my-procmail-rules-ide
---

[![kevinrosseel-mailboxes.jpg](/assets/images/movable-type-blog-archives/kevinrosseel-mailboxes.jpg)](http://www.procmail.org/) Well, IDE maybe not...but now that I've got your attention, here's a useful shell recipe to debug procmail rule files:

export RULEFILE=./not-bd.rc
export OUTPUT\_FOLDER=/tmp/mailout
export TEST\_MSG=/tmp/notbd
procmail \\
DEFAULT=$OUTPUT\_FOLDER \\
VERBOSE=yes \\
$RULEFILE \\
< $TEST\_MSG
cat $OUTPUT\_FOLDER/$(ls -rt $OUTPUT\_FOLDER | tail -1)

This runs procmail on the specified file, outputs debugging information and displays the resulting message:

procmail: \[10561\] Sat Oct 20 12:14:11 2007
procmail: Assigning "MAILDIR=."
procmail: Rcfile: "./not-bd.rc"
procmail: Match on ! "^To.\*bdelacretaz@"
procmail: Assigning "MATCH="
procmail: Matched " here's a mail to admin"
procmail: Match on "^Subject:\\/.\*"
procmail: Executing " formail -I "Subject: \[NOTBD-codeconsult.ch\] $MATCH""
procmail: Assigning "LASTFOLDER=/tmp/mailout/msg.T7An"
procmail: Opening "/tmp/mailout/msg.T7An"
procmail: Acquiring kernel-lock
From machin@truc  Sat Oct 20 12:14:11 2007
Subject: \[NOTBD-codeconsult.ch\]  here's a mail to admin
Folder: /tmp/mailout/msg.T7An                                             171

$ cat $OUTPUT\_FOLDER/$(ls -rt $OUTPUT\_FOLDER | tail -1)
From machin@truc  Sat Oct 20 12:14:11 2007
From: machin@truc
To: admin@codeconsult.ch
Subject: \[NOTBD-codeconsult.ch\]  here's a mail to admin

This is not a mail message

My goal was to add a marker in message subjects, for mail that's not addressed to "bdelacretaz" on my domain. Here's the recipe that I came up with (keeping in mind that I'm no procmail guru, YMMV):

:0
{
:0 fhw
\*! ^To.\*bdelacretaz@
\* ^Subject:\\/.\*
| formail -I "Subject: \[NOTBD-codeconsult.ch\] $MATCH"
}

I'll keep that for a while to check that I get no important mail at the catch-all address that I should have killed long ago...funny how much of my spam has the _NOTBD_ marker now ;-)

See also [Debugging Procmail Recipes: Some Tips](http://partmaps.org/era/mail/procmail-debug.html), where I found about the procmail debugging flags - that page has much more detailed information.

_Picture: [kevinrosseel](http://morguefile.com/archive/?display=185671&)@morguefile_
