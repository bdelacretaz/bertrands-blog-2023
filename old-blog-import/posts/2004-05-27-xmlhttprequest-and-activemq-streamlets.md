---
title: "XMLHttpRequest and ActiveMQ Streamlets"
date: "2004-05-27"
categories: 
  - "tools"
---

_(hopefully there are less than three words that you don't understand in the title of this post;-)_

James Strachan talks about [web streaming](http://radio.weblogs.com/0112098/2004/05/26.html#a483) with [ActiveMQ Streamlets](http://activemq.codehaus.org/Streamlets), a way cool combination of RESTful access to a JMS message queue on the server side, and a simple client-side [javascript library](http://cvs.activemq.codehaus.org/activemq/src/webapp/webmq.js?rev=1.4&view=auto) based on [XMLHttpRequest](http://codeconsult.ch/bertrand/archives/000317.html).

Have a look at the [chat example](http://cvs.activemq.codehaus.org/activemq/src/webapp/chat.js?rev=1.3&view=auto). /me loves simple powerful tools!

So that's a bunch of different tools combined, but the result is a very simple way to stream live data to web pages, in a fairly client-portable way (assuming modern browsers are used).

Great work!
