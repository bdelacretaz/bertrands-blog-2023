---
title: "Handling FLV video outside of Flash - no fun"
date: 2006-01-11
tags: 
  - "tools"
  - "post"
slug: handling-flv-video-outside-of-flash-no-fun
---

Following up on the previous post: our Flash video-recording project is going forward nicely (it has to: the deadline is Real Soon Now), but converting the recorded video from FLV to open formats is no fun.

Actually, converting the audio in batch mode seems to be impossible: FLV uses the proprietary (and undocumented I assume) "nellymoser" codec for audio, and well-known tools like [ffmpeg](http://ffmpeg.sourceforge.net) cannot decode this.

Here are some references to more precise information about this:

- [A Critique of FCS 2.0 Sneak Peek at MAX](http://www.communitymx.com/content/article.cfm?cid=0F44C&print=true)
- [FLV to other... Revisited](http://idtech.blogspot.com/2005/02/flv-to-other-revisited.html)
- [Forcing mp3 audio in saved FLV's?](http://www.macromedia.com/cfusion/webforums/forum/messageview.cfm?catid=266&threadid=868432&enterthread=y#3107524)
- [FLV created with FCS and nellymoser audio codec](http://casario.blogs.com/mmworld/2005/04/flv_created_by_.html)

In theory there would be a better way, as the FLV format supports the mp3 codec for audio. But apparently there's no way to force the Flash Media Server to use this codec when recording. However, if you generate an FLV file with ffmpeg or another tool and use mp3 for audio, the resulting file plays ok with FLV players.

One of our goals for this project is to be able to include the recorded videos in a TV show. In the worst case we'll use (archaic?) techniques like [Transphix](http://www.google.ch/search?q=transphix) to move the videos to an editable format, or import them into Flash and export in an older (Flash 6) SWF format which many editors can import.

For me closed formats are often a reason to reject a software solution. In this case, the Flash web-to-video infrastructure is so good, easy to use and platform-independent, and we're such in a hurry, that this will do, as we can live without batch conversion of the FLVs to an open format.

Too bad there's no option to record the audio in mp3 - this is _our_ content that is being locked in a proprietary format.
