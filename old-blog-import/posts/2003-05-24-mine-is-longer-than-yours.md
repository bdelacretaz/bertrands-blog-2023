---
title: "Mine is longer than yours..."
date: "2003-05-24"
categories: 
  - "xml"
---

but it's much more readable I think. [Steven](http://blogs.cocoondev.org/stevenn/archives/000947.html) helps [Tom](http://blogs.cocoondev.org/tomk/archives/000946.html) with some XSLT, counting the number of lines that are needed to do the job.

Hmm..I don't like counting lines of code. Maybe even more in XSLT than in java code, I'm always focused on readability, even if it means slightly longer code or a few more classes or templates.

Also, I like to keep usage of xsl:choice and xsl:if to the bare minimum in XSLT - using multiple templates for different cases is often clearer.

So, here's my version of the same thing - I know Steven's version is most probably a quick hack, but if Tom needs to be "converted" to XSLT, better show him the cleanest possible thing. This version can certainly be improved too, any takers?

<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output encoding="ISO-8859-1" method="xml"/>

<!-- export an OPML subscriptions list to HTML, sorted by title -->
<xsl:template match="opml">
<html>
<body>
<xsl:apply-templates select="body/outline">
<xsl:sort select="@title"/>
</xsl:apply-templates>
</body>
</html>
</xsl:template>

<!-- outline elements that have a non-empty htmlUrl -->
<xsl:template priority="10" match="outline\[normalize-space(@htmlUrl)\]">
<a href="{normalize-space(@htmlUrl)}">
<xsl:if test="normalize-space(@description)">
<xsl:attribute name="title">
<xsl:value-of select="normalize-space(@description)"/>
</xsl:attribute>
</xsl:if>
<xsl:value-of select="normalize-space(@title)"/>
</a>
<xsl:call-template name="itemSuffix"/>
</xsl:template>

<!-- outline elements that have no htmlUrl -->
<xsl:template match="outline">
<xsl:value-of select="@title"/>
<xsl:call-template name="itemSuffix"/>
</xsl:template>

<!-- link to the XML source, after each outline element -->
<xsl:template name="itemSuffix">
 
<a href="{@xmlUrl}">
<img src="images/tinyxml.jpg" border="0"/>
</a>
<br/>
<xsl:text>&#xA;</xsl:text>
</xsl:template>

</xsl:stylesheet>

By the way (note to self), here's how I transformed my XSLT to insert it here:

sed 's/&/\\&amp;/g' | sed 's/</\\&lt;/g'

Cool - I'll be able to add a blogroll here too, thanks Steven!
