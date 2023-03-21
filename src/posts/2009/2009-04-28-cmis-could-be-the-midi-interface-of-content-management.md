---
title: "CMIS could be the MIDI interface of content management..."
date: 2009-04-28
tags: 
  - "cmis"
  - "content"
  - "day"
  - "jcr"
  - "post"
slug: cmis-could-be-the-midi-interface-of-content-management
---

[MIDI](http://en.wikipedia.org/wiki/Midi) - the Musical Instrument Digital Interface - was created back in 1982 by a consortium of musical equipment manufacturers including, if I remember correctly, Roland, Yamaha, Sequential Circuits, Korg, Oberheim (I've got a Matrix 6 to sell BTW ;-), maybe Ensoniq (did they exist already?) and others. Companies that were fiercely competing in the market, individualistic industry leaders who agreed to get together to create a bigger market for their instruments and equipment.

My diploma work as an electronics engineer was about MIDI, in 1983 - I created a MIDI output interface that could be retrofitted into accordions. The spec was not final at the time (or at least I could get a final version - that was before the web of course), all I had in terms of specs were a few magazine articles, a Yamaha DX7 and one of the first Korg synths to have MIDI. Both synths had slightly different implementations, and some compatibility problems, as can be expected from an early and not yet widespread spec.

What's happening with [CMIS](http://en.wikipedia.org/wiki/Content_Management_Interoperability_Services) today sounds quite similar: competing vendors finally agreeing on an interoperability spec, even if it's limited to a lowest common denominator. If this works as with MIDI, we're in for some exciting times - the few years after 1982 saw a boom in MIDI-related electronic instruments and systems, as suddenly all kinds of equipment from different companies could talk together.

MIDI had serious shortcomings: a slow transmission rate, serial transmission meaning each note in a thick chord is delayed by nearly one millisecond, and somewhat limited data ranges for some real-time controllers. But the basic idea was great, _let's get something done that allows our instruments to talk together in a usable fashion_, even if it's not perfect. MIDI has survived until today, 27 years later, which is quite amazing for such a standard. It's been tweaked and workarounds (including hardware extensions) have been used to adapt it to evolving needs, and often travels via USB or other fast channels today, but it's still here, and the impact on the music equipment industry is still visible.

I must admit that I was quite disappointed with the CMIS spec when I first looked at it, especially due to the so-called REST bindings which aren't [too RESTful](http://roy.gbiv.com/untangled/2008/no-rest-in-cmis). And CMIS seems to consider a "document" as the unit of content, whereas JCR converts like myself prefer to work at a more atomic level. And don't tell me that hierachies are a bad thing in managing content - you might want to ignore them in some cases, but micro-trees are a great way of organizing atoms of content.

Nevertheless, seeing the enthusiasm around the soon-to-be-incubating [Apache Chemistry](http://incubator.apache.org/chemistry) project (that link should work [in a few days](http://markmail.org/message/bfmnzikyztuf4dya), how's that for buzz building?) made me think about MIDI, and how amazing it was at the time that "commercial enemies" could get together to do something that finally benefitted the whole industry.

I still don't understand why WebDAV can't do the job if this is about documents, and still prefer JCR for actual work with content (considering that _everything is content_), but I'm starting to think that CMIS might make a big difference. It will need a test suite for that of course- software engineers know that interoperability without test suites can't work - and this week's [CMIS plugfest](http://dev.day.com/microsling/content/blogs/main/cmisplugfest.html) is a good step in this direction. I'll be around on Thursday, looking forward to it!
