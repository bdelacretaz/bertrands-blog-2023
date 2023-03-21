---
title: "Good technology makes things easier than you think"
date: 2008-10-03
tags: 
  - "osgi"
  - "thoughts"
  - "post"
slug: good-technology-makes-things-easier-than-you-think
---

Working on macosx, I often find that things are easier than I thought - just drop something where it makes sense, or do what you would naturally do, and things work as expected. Often, at least.

I had the same experience today playing with OSGi services - one of my services needs to be informed of all configuration changes. OSGi provides a _ConfigurationListener_ interface for that, but how are those registered with the framework?

That's actually much easier than I thought at first - here's the complete source code:

import org.osgi.service.cm.ConfigurationEvent;
import org.osgi.service.cm.ConfigurationListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/\*\*
 \*  @scr.component 
 \*      immediate="true"
 \*      metatype="no"
 \*  @scr.service
 \*/
public class DebuggingConfigurationListener implements ConfigurationListener {

	private final Logger log = LoggerFactory.getLogger(getClass());	
	
	public void configurationEvent(ConfigurationEvent e) {
		log.info("Got ConfigurationEvent, pid={}, type={}", e.getPid(), e.getType());
	}

}

Not bad hey? The _scr.service_ annotation causes the class to be registered as a _ConfigurationListener_ service, and the framework uses a whiteboard pattern to send configuration events to all such services.

Note to self: make things _easier_ than what people expect.
