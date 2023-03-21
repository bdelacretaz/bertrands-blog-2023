---
title: "Simulating rsync in ant"
date: 2005-06-15
tags: 
  - "cocoon"
  - "tools"
  - "post"
slug: simulating-rsync-in-ant
---

When writing Cocoon apps I often include an rsync setup in my ant build scripts, to keep the src and webapp directories synchronized during development.

As Cocoon reloads most stuff (even java classes with the proper setup in 2.2) when files are modified, this is very useful.

But some people with whom I work still insist on developing on a platform which does not provide the sync command out of the box (I'm not telling which ;-) , meaning that we have to keep cross-platforms versions of rsync.

So I was looking for a way to simulate an rsync loop with ant's <copy> task.

Here it is - note the trick to get an infinite loop. I'm not an ant expert, so flames are welcome ;-)

<!--
rsync the source and webapp directories, allows changes to non-java
code (sitemaps, XSLT, etc.) to be propagated to the webapp directory
without having to stop Cocoon
-->
<target name="rsync">
<!-- lower this thread's priority as much as possible -->
<!-- note that the nice task requires ant 1.6.5 -->
<nice newpriority="1"/>

<copy todir="${tools}/cocoon/webapp">
<fileset dir="${src}/cocoon/webapp"/>
</copy>
<sleep seconds="1"/>

<!--
A bit hacky - call another target which calls this one, to create
an infinite loop.
Is there a risk of filling up the stack? This is for development
sessions anyway, so nothing critical.
-->
<antcall target="rsync2"/>
</target>

<!-- used to hack an infinite loop for the rsync target -->
<target name="rsync2">
<antcall target="rsync"/>
</target>

The thing is...this is _much_ slower than native rsync, so there's room for improvement.
