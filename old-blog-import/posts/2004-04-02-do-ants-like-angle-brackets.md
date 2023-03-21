---
title: "Do ants like angle brackets?"
date: "2004-04-02"
categories: 
  - "xml"
---

[James Duncan Davidson](http://x180.net/), who created [Apache Ant](http://ant.apache.org/), [reflects](http://x180.net/Articles/Java/AntAndXML.html) on ant's use of XML to define builds.

As is often the case, what started as a simple configuration file for builds is increasingly being used as a scripting language.

James says he'd do it differently now: although well suited to the tree structure of build files, XML tends to get in the way when _editing_ these files.

For me the lesson is: XML is without question the best format to exchange data between machines. But as soon as there is a human in the chain, using a friendlier structured format is often better. [Python](http://www.python.org/) is a great example of _human-friendly structured text_.
