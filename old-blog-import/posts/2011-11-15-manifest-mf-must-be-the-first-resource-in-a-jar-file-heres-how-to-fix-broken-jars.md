---
title: "MANIFEST.MF must be the first resource in a jar file - here's how to fix broken jars"
date: "2011-11-15"
categories: 
  - "java"
  - "osgi"
tags: 
  - "jar"
  - "java"
  - "manifest"
---

Some tools, like the [Sling OSGi Installer](http://sling.apache.org/site/osgi-installer.html), require the `MANIFEST.MF` to be the first file in a jar file, or they won't find it.

This happens when using the `java.util.jar.JarInputStream` class to read a jar's manifest, for example.

The manifest is where OSGi bundle headers are found, for example, so not having it in the right place makes the jar unusuable as a bundle.

I won't discuss here whether this requirement is part of the jar file spec (it would make sense, as this makes sure you can read it quickly even from a huge jar file), but anyway there are many cases where this is required.

To fix a jar where this is not the case, you need to unpack the jar and recreate it, as in this example, starting from a `broken.jar` in the current directory:

$ mkdir foo
$ cd foo
$ jar xvf ../broken.jar
$ mv META-INF/MANIFEST.MF /tmp/mymanifest
$ jar cvfm fixed.jar /tmp/mymanifest .

That's it - creating the new jar with the `jar` utility puts the `MANIFEST.MF` in the right place.
