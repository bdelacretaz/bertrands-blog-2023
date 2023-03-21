---
title: "Recursion in XSLT is fun"
date: "2005-04-22"
categories: 
  - "cocoon"
---

Well, recursion is always fun and powerful, isn't it?

If you're into XSLT you might like this one - the problem was converting a flat structure (a wordML text run) in a nested structure as used for formatting in HTML.

<!--
Convert the wordML "siblings attributes and content" format
to a "nested styles" structure as used in HTML.

This is not meant to actually process wordML documents, it's
more a demonstration of recursive processing in XSLT.

With input like:

<word-textrun-example
xmlns:w="http://schemas.microsoft.com/office/word/2003/wordml">
<w:r>
<w:rPr>
<w:i/>
<w:b/>
<w:lang w:val="EN-GB"/>
</w:rPr>
<w:t>Here's a textrun with attributss i and b</w:t>
</w:r>
</word-textrun-example>

where the i and b attributes are stored in siblings of the content,
this produces a nested structure:

<textrun>
<i>
<b>
<lang lang="EN-GB">
<content>Here's a textrun with attributes i and b</content>
</lang>
</b>
</i>
</textrun>

-->

<xsl:stylesheet
version="1.0"
xmlns:w="http://schemas.microsoft.com/office/word/2003/wordml"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- by default copy -->
<xsl:template match="\*">
<xsl:copy>
<xsl:copy-of select="@\*"/>
<xsl:apply-templates/>
</xsl:copy>
</xsl:template>

<!-- text run: recursively process style elements, ending with content -->
<xsl:template match="w:r">
<xsl:variable name="styles" select="w:rPr/\*"/>
<textrun>
<xsl:call-template name="styleProcessor">
<xsl:with-param name="styles" select="$styles"/>
<xsl:with-param name="content" select="w:t"/>
</xsl:call-template>
</textrun>
</xsl:template>

<!--
Here's the beef - recursively generate nested elements based on
the "styles" list of nodes
-->
<xsl:template name="styleProcessor">
<xsl:param name="styles"/>
<xsl:param name="content"/>

<!-- Remove the first element from "styles" for the next recursion step -->
<xsl:variable name="nextStyles" select="$styles\[position() > 1\]"/>

<!-- Pluggable conversion of style element names -->
<xsl:variable name="styleElement">
<xsl:apply-templates select="$styles\[1\]" mode="styleElement"/>
</xsl:variable>

<!-- Generate a nested style element, with pluggable attributes -->
<xsl:element name="{$styleElement}">
<!-- This is meant to generate additional attributes for certain style elements -->
<xsl:apply-templates select="$styles\[1\]" mode="styleAttributes"/>

<xsl:choose>
<xsl:when test="$nextStyles">
<!-- There are more recursion steps -->
<xsl:call-template name="styleProcessor">
<xsl:with-param name="styles" select="$nextStyles"/>
<xsl:with-param name="content" select="$content"/>
</xsl:call-template>
</xsl:when>

<xsl:otherwise>
<!-- no more recursion steps, process content -->
<xsl:apply-templates select="$content"/>
</xsl:otherwise>
</xsl:choose>

</xsl:element>
</xsl:template>

<!-- styleElement mode: generate the element name to use for a given style element -->
<xsl:template match="\*" mode="styleElement">
<xsl:value-of select="local-name()"/>
</xsl:template>

<!-- styleAttributes mode: can be used to add attributes for certain style elements -->
<xsl:template match="\*" mode="styleAttributes"/>

<!-- add the language as an attribute for the w:lang element -->
<xsl:template match="w:lang" mode="styleAttributes">
<xsl:attribute name="lang">
<xsl:value-of select="@w:val"/>
</xsl:attribute>
</xsl:template>

<!-- process the content of the text run -->
<xsl:template match="w:t">
<content>
<xsl:apply-templates/>
</content>
</xsl:template>

</xsl:stylesheet>
