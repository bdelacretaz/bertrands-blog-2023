---
title: "Big Bad Bug Labels from Jira - the recipe"
date: 2006-10-02
tags: 
  - "post"
slug: big-bad-bug-labels-from-jira-the-recipe
---

We're printing big labels with the titles of the (too many) [open issues](https://issues.apache.org/jira/browse/COCOON) from the Cocoon bug tracking system (doesn't mean Cocoon as so many bugs, but we're doing a bad job at managing the issues in Jira, and many are obsolete or not relevant).

As I do this every year for the GT and usually lose the recipe in between, here it is:

Start from a Jira query and choose the XML format. Change the _tempMax_ parameter in the URL to get all results in one file.

Save the XML file and apply the following XSLT to it:

<xsl:template match="/">
<html>
<head>
<xsl:call-template name="css"/>
</head>
<body>
<xsl:apply-templates/>
</body>
</html>
</xsl:template>

<xsl:template match="item">
<div class="issue">
<div class="title">
<xsl:value-of select="substring-after(title,'\]')"/>
<span class="id">
 
<xsl:value-of select="key"/>
</span>
</div>
</div>
</xsl:template>

<xsl:template match="text()"/>

<xsl:template name="css">
<style type="text/css">
body { font-family:"Lucida Grande",sans-serif; }
.issue { margin-bottom: 4em; page-break-inside:avoid; }
.title { font-weight:bold; font-size:24pt; }
.id { font-size:14pt; font-weight:normal; }
</style>
</xsl:template>

Print the result from Opera, which supports the _page-break-inside:avoid_ rule.

Cut the bug labels and put them on a big table so that a [bunch of cool people](http://www.cocoongt.org) can easily select their favorite issues (by physically grabbing the corresponding labels) to work on them. If like us you have 317 issues, make sure there's enough pizza and drinks in the pipeline.

(hmm....I'm sitting besides a bunch of FOP guys, don't tell them that I did it with HTML + CSS ;-)
