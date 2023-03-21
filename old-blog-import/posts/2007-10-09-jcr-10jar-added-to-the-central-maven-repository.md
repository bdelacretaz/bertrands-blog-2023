---
title: "jcr-1.0.jar added to the central Maven repository"
date: 2007-10-09
tags: 
  - "content"
  - "jcr"
  - "post"
slug: jcr-10jar-added-to-the-central-maven-repository
---

After some [license clarifications](http://jira.codehaus.org/browse/MAVENUPLOAD-1733), the jcr-1.0.jar is finally available in the central Maven repository.

This means that you just need this in your Maven 2 pom.xml to use the JCR API in your code:

<dependency>
<groupId>javax.jcr</groupId>
<artifactId>jcr</artifactId>
<version>1.0</version>
</dependency>

See the [dev@jackrabbit.apache.org list](http://www.nabble.com/jcr-1.0.jar-on-central-Maven-repository-tf4546510.html#a13117114) for more details.
