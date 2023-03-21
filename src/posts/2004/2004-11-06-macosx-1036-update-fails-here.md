---
title: "macosx 10.3.6 update fails here"
date: 2004-11-06
tags: 
  - "tools"
  - "post"
slug: macosx-1036-update-fails-here
---

Very unusual - my powerbook is misbehaving after trying to install the latest 10.3.6 update.

The first warning sign was when it crashed at the end of the update - never happened before.

After restarting, the system about box indeed says "10.3.6" but the update has not been logged in the software update tool list, which leads me to believe that it was not fully completed.

My system mostly works but the Finder doesn't start, I get this error in the finder crash report:

dyld: /System/Library/CoreServices/Finder.app/Contents/MacOS/Finder
Undefined symbols: DiscRecordingContent undefined reference to
\_kDRDeviceMediaTypeDVDPlusRDoubleLayer expected to be defined
in DiscRecordingEngine

DiscRecordingContent undefined reference to \_kDRFlagsKey expected to be defined in DiscRecordingEngine

Hmm....I'm downloading the combo 10.3.6 update to try to redo it by hand. If you were about to make the same update, you might want to wait. I'll update this post once I have more precise info about what's happening.

_Update: the Finder is back after restoring the contents of the /System/Library/Frameworks/DiscRecording.framework/Versions/A directory from the pax archive found in the 10.3.6 combo update. Wondering if other frameworks are in the same half-installed state, but haven't seen any other problems for now._
