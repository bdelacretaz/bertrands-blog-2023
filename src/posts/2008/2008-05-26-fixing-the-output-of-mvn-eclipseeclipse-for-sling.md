---
title: "Fixing the output of mvn eclipse:eclipse for Sling"
date: 2008-05-26
tags: 
  - xslt
  - "post"
slug: fixing-the-output-of-mvn-eclipseeclipse-for-sling
---

I tend to use Eclipse only for editing/navigating code and for remote debugging, leaving the heavy lifting of building and executing stuff to the old trusted command line.

In this context, the _mvn eclipse:eclipse_ plugin often generates too much magic for me. When working with Sling, especially, I don't want any maven or java builders in my Eclipse projects, and for some reason the plugin generates an extra resource path based on the LICENSE, NOTICE and similar files.

If you like to work in the same way (I know many people like go further with their IDEs), here are two scripts that I use to post-process the Eclipse project files after _mvn eclipse:eclipse_.

This scripts "fixes" all _.project_ and _.classpath_ files under the current directory (uses _xsltproc_):

```bash
#!/bin/bash
XSLT=$(dirname $0)/fix-eclipse-maven.xsl
TMPF=/tmp/$$.tmp

find . -name .project | while read p
do
  echo "Running $(basename $XSLT) on $p..."
  xsltproc $XSLT $p > $TMPF
  rm -f $p
  mv $TMPF $p
done

EXPR="LICENSE.\*DISCLAIMER"
find . -name .classpath | while read c
do
  echo "Removing lines containing $EXPR from $c)"
  grep -v $EXPR $c > $TMPF
  rm -f $c
  mv $TMPF $c
done
```

And uses this XSLT transform to get rid of the build commands in .project files:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>

  <xsl:template match="\*">
    <xsl:copy>
      <xsl:copy-of select="@\*"/>
      <xsl:apply-templates/>
     </xsl:copy>
  </xsl:template>

  <!-- remove all Eclipse buildCommands -->
  <xsl:template match="buildCommand"/>
</xsl:stylesheet>
```