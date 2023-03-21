---
title: "Simple startup profiling of OSGi applications"
date: 2013-10-18
tags: 
  - "felix"
  - "sling"
  - "java"
  - "osgi"
  - "post"
slug: simple-startup-profiling-of-osgi-applications
---

Prompted by a colleague's question about profiling the startup time of [Apache Sling](http://sling.apache.org/) systems, I vaguely remembered writing something a while ago, but couldn't find it immediately.

Funny how one's memory works - it took me a while to find it again, but I did indeed write an OSGi events recorder + timeline utility in [SLING-1109](https://issues.apache.org/jira/browse/SLING-1109).

That utility has since moved to the Apache Felix [webconsole events plugin bundle](http://svn.apache.org/repos/asf/felix/trunk/webconsole-plugins/event), which is included in the Sling launchpad and thus was right here under my eyes.

Here's how you can use that webconsole plugin to get a simple timeline of an OSGi system's startup:

1. Install the `org.apache.felix.webconsole.plugins.event` bundle in an OSGi app where the [Apache Felix Webconsole](http://felix.apache.org/site/apache-felix-web-console.html) is active.
2. Set that bundle to a low start level, say 1 or 2, so that it's activated early and captures as much startup events as possible.
3. Configure the events recorder at `/system/console/configMgr/org.apache.felix.webconsole.plugins.event.internal.PluginServlet`, setting the number of events to capture high enough to record your app's startup.
4. Start your app.
5. Look at the startup timeline at `/system/console/events`

This provides a simple graphical timeline, as shown on the screenshot below, that's especially useful in detecting outlier bundles or services that take a long time to start up.

![Webconsole Events plugin screenshot](/assets/images/webconsole-events-716.jpg "webconsole-events-716.jpg")
