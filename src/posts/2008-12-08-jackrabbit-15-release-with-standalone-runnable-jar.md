---
title: "Jackrabbit 1.5 release, with standalone runnable jar"
date: 2008-12-08
tags: 
  - "content"
  - "jackrabbit"
  - "jcr"
  - "post"
slug: jackrabbit-15-release-with-standalone-runnable-jar
---

[![jackrabbit-1-5-webapp.jpg](http://bdelacretaz.files.wordpress.com/2008/12/jackrabbit-1-5-webapp.jpg)](http://jackrabbit.apache.org/)Congrats to the [Jackrabbit](http://jackrabbit.apache.org/) team on their [1.5 release](http://markmail.org/message/hvzjypmb6m6npscq)!

One of the nice things in this release is the [standalone server jar](http://www.apache.org/dyn/closer.cgi/jackrabbit/binaries/jackrabbit-standalone-1.5.0.jar):

$ java -jar jackrabbit-standalone-1.5.0.jar 
Welcome to Apache Jackrabbit!
-------------------------------
Using repository directory jackrabbit
Writing log messages to jackrabbit/log
Starting the server...
Apache Jackrabbit is now running at http://localhost:8080/

Makes it much easier to get started, and the http://localhost:8080/ page contains or points to the necessary info to get further. I cannot help mentioning [Sling](http://incubator.apache.org/sling) as another good choice to get started with JCR, but if you're after raw JCR, the Jackrabbit standalone server is very helpful.

_Update: [Jukka](http://jukkaz.wordpress.com/2008/12/08/apache-jackrabbit-150-released/) has more details on the most important changes_.
