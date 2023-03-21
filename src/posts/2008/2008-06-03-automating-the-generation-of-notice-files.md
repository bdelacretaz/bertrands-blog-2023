---
title: "Automating the generation of NOTICE files"
date: 2008-06-03
tags: 
  - "maven"
  - "tools"
  - "post"
slug: automating-the-generation-of-notice-files
---

[](http://incubator.apache.org/sling)[ASF](http://www.apache.org) projects need to include the correct attributions for the dependencies that they redistribute, in [NOTICE](http://www.apache.org/legal/src-headers.html) files (see the [http example](http://www.apache.org/licenses/example-NOTICE.txt)).

Creating those NOTICEs is a pain in a multi-module project like [Sling](http://incubator.apache.org), so considering the _lazyness is a virtue_ principle, I decided yesterday to automate this based on the _mvn dependency:resolve_ output.

The resulting [mknotice script](http://svn.apache.org/repos/asf/incubator/sling/trunk/etc/notice/mknotice) has been happily generating the millions (almost) of Sling NOTICE files today, and the output is much better than we we had before.

However, the _mvn dependency:resolve_ is not always sufficient. In our [dojo extensions](http://svn.apache.org/repos/asf/incubator/sling/trunk/extensions/) modules, for example, the [Dojo](http://dojotoolkit.org/) stuff is copied by Ant tasks run from Maven (which is supposed to be declarative, but that's another story), without having a dependency at the Maven level.

Also, our [Launchpad webapp](http://svn.apache.org/repos/asf/incubator/sling/trunk/launchpad/webapp/) copies dependencies that are embedded in the launchpad base module using the Maven dependency plugin, which only has a dependency to the launchpad base module, but not on what's inside, obviously. Another case where the _mknotice_ script fails to provide complete information.

For now, such cases are handled using local [module.notice.txt](http://svn.apache.org/repos/asf/incubator/sling/trunk/extensions/dojo/module.notice.txt) files, to define additional notice entries.

As is often the case when one starts to _quickly write a script to fix something_, this has taken me much longer than expected. And the script is slow. And a Maven plugin would be better. But hey, it works ;-)
