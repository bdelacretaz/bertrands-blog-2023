---
title: "Using the JCR-Explorer with Sling"
date: "2009-01-06"
categories: 
  - "content"
  - "jcr"
  - "sling"
---

![jcr-explorer-with-sling-200.jpg](images/jcr-explorer-with-sling-200.jpg)Here's how to configure the [JCR-Explorer](http://www.jcr-explorer.org/) tool under Tomcat, to use it with Sling.

Tested with [Tomcat](http://tomcat.apache.org) 6.0.18, JDK 1.5 and the [Sling](http://incubator.apache.org/sling) launchpad/webapp from revision 731934.

Starting with a fresh Tomcat install, add this to `conf/server.xml`, inside `<GlobalNamingResources>`:

<Resource name="jcr/globalRepository"
  auth="Container"
  type="javax.jcr.Repository"
  factory="org.apache.jackrabbit.rmi.client.ClientRepositoryFactory"
  url="rmi://127.0.0.1:1099/jackrabbit"/>

Add this to `conf/context.xml`, inside `<Context>`:

<ResourceLink name="jcr/repository"
  global="jcr/globalRepository"
  type="javax.jcr.Repository"/>

Copy the `jcr-explorer.war` file to the tomcat webapps folder, start tomcat, stop it (so that the webapp is expanded) and add this at the end of `webapps/jcr-explorer/WEB-INF/web.xml`, inside `<web-app>`:

<ResourceLink name="jcr/repository"
  global="jcr/globalRepository"
  type="javax.jcr.Repository"/>

Copy these two jar files to the `lib` folder (or `common/lib` for Tomcat 5): [jackrabbit-jcr-rmi-1.5.0.jar](http://mirrors.ibiblio.org/pub/mirrors/maven2/org/apache/jackrabbit/jackrabbit-jcr-rmi/1.5.0/jackrabbit-jcr-rmi-1.5.0.jar) and [jcr-1.0.jar](http://mirrors.ibiblio.org/pub/mirrors/maven2/javax/jcr/jcr/1.0/jcr-1.0.jar).

Start Sling with the RMI export of the repository enabled. That's standard if you start the Sling `launchpad/webapp` module with `mvn jetty:run`, for example. Sling can either run inside Tomcat, or standalone, as the connection is made via RMI.

On the jcr-explorer login page (`http://localhost:8080/jcr-explorer/login.jsf`), use `java:comp/env/jcr/repository` as the JNDI URL, and `admin/admin` for login and password.

You should now see the JCR-Explorer page, as in our screenshot, displaying the contents of the Sling repository in the left pane (index.html, sling-logo.png, etc.).

This JCR-Explorer setup can be used to access any Jackrabbit repository accessible via _rmi://127.0.0.1:1099/jackrabbit_, that should work with plain Jackrabbit setups as well, of course.

See the [JCR-Explorer](http://www.jcr-explorer.org/) website for more info about how to use that tool.
