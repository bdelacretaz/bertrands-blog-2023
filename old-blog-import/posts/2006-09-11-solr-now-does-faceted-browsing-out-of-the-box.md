---
title: "Solr now does faceted browsing out of the box"
date: 2006-09-11
tags: 
  - "tools"
  - "post"
slug: solr-now-does-faceted-browsing-out-of-the-box
---

Whereas earlier versions required custom code, a recent [addition](https://issues.apache.org/jira/browse/SOLR-44) to [Solr](http://incubator.apache.org/solr/) enables faceted browsing [out of the box](http://wiki.apache.org/solr/SimpleFacetParameters).

For example, adding the following parameters to your query. assuming you have "category" and "inStock" fields in your data:

facet=true
facet.field=category
facet.field=inStock

Adds something like this to the search results:

<lst name="facet\_counts">
<lst name="facet\_queries"/>
<lst name="facet\_fields">
<lst name="category">
<int name="music">1</int>
<int name="connector">2</int>
<int name="drive">21</int>
</lst>
<lst name="inStock">
<int name="false">3</int>
<int name="true">1</int>
</lst>
</lst>
</lst>

Showing which facets exist for the category and inStock fields, including result counts for each.

More details are available on the [solr-user](http://marc.theaimsgroup.com/?t=115774012800001&r=1&w=2) mailing list.

This is way cool, and comes right on time for my current project!
