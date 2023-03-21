---
title: "jq : sed, grep and awk for json"
date: "2013-09-26"
categories: 
  - "tools"
tags: 
  - "json"
---

From the _very useful tools_ department: today I stumbled on [jq](http://stedolan.github.io/jq/), via Jeroen Janssen's [7 command-line tools for data science](http://jeroenjanssens.com/2013/09/19/seven-command-line-tools-for-data-science.html) blog post.

As the tagline says, jq is like sed, grep and awk for json: a command-line filter that lets you format, select and output JSON data.

As an example, here's how you can list all the OSGi bundles from your Sling instance together with their state. The raw `bundles.json` input looks like this:

{
  "data": \[
    {
      "category": "",
      "symbolicName": "org.apache.felix.framework",
      "version": "4.2.0",
      "state": "Active",
      "stateRaw": 32,
      "fragment": false,
      "name": "System Bundle",
      "id": 0
    },
    {
      "category": "",
      "symbolicName": "org.apache.aries.jmx.api",
      "version": "0.3.0",
…

And here's the curl + jq command:

$ curl -s -u admin:admin http://localhost:8080/system/console/bundles.json | \\
jq '.data | .\[\] | .symbolicName + " " + .state ' | sort

"derby Active"
"groovy-all Active"
"jcl.over.slf4j Active"
"log4j.over.slf4j Active"
"org.apache.aries.jmx.api Active"
"org.apache.aries.jmx.core Active"
...

Neat, isn't it?

See jq's [tutorial](http://stedolan.github.io/jq/tutorial/) and [manual](http://stedolan.github.io/jq/manual/) for more details.
