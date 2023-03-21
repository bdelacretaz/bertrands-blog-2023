---
title: "log4j and Chainsaw"
date: 2004-09-10
tags: 
  - "tools"
  - "post"
slug: log4j-and-chainsaw
---

In the _verrrrry useful stuff_ category, today I configured log4j's Chainsaw log exploration tool for my project and it's just great!

(and yes, I know some of you have been using it for a long time ;-)

Basically, you just need to start the `org.apache.log4j.chainsaw.Main` class in addition to your application, and add this to your log4j config:

\# activate this to see when the log4j config is reloaded
log4j.debug = true

\# this sets a global minimal logging threshold, default=ALL
log4j.threshold=ALL

\# setup for Chainsaw logging of everything
log4j.rootCategory=DEBUG, Chainsaw
log4j.appender.Chainsaw=org.apache.log4j.net.SocketAppender
log4j.appender.Chainsaw.remoteHost=127.0.0.1
log4j.appender.Chainsaw.port=4445
log4j.appender.Chainsaw.locationInfo=true

_And_ you can stop and restart Chainsaw at will without causing any harm to your running application.

Great Stuff!
