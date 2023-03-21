---
title: "Free Sling polo shirts! (NOT)"
date: "2008-11-05"
categories: 
  - "apachecon"
  - "content"
  - "sling"
---

We'll be giving away nice Sling polo shirts at the end of my [talk](http://www.us.apachecon.com/c/acus2008/sessions/16) today, be there!

The complete source code of the mini blog application that I'm going to create, in stages, during the talk, is available below.

_Update: slides are available on the [conference website](http://us.apachecon.com/c/acus2008/sessions/16)._

_**Stop press**: the shirts are held by customs in Memphis, we hope to have them by Friday but there's no guarantee...sigh_

_Update: the shirts have finally arrived, grab them at the Day booth at ApacheCon!_

<html>
<!--
  Single page Sling blog demo, shows how content is defined
  by form fields, and the use of Sling.wizard and Sling.getContent.

  To test this, run the Sling launchpad/testing module with "mvn jetty:run",
  copy this script to /apps/blog/blog.esp (via the WebDAV mount at
  http://localhost:8888/) and open
  http://localhost:8888/content/blog/\*.html  

  To add more fields to the posts, simply add them to the form below.
-->

<%
var title = currentNode.title ? currentNode.title : "";
%>

<head>
  <title><%= title %></title>
  <script src="/system/sling.js"></script>
  <link rel="stylesheet" type="text/css" href="/sling.css"/>
</head>

<body>
  <h1>Sling microblog</h1>

  <div class="editor" style="float:right; width:69%">
	  <h2><%= title %></h2>
	  <form method="POST">
	    Title:
	    <br/>
	    <input type="text" name="title" style="width:100%"/>

	    <br/>
	    Text:
	    <br/>
	    <textarea style="width:100%" name="text"></textarea>

	    <br/>
	    <input type="submit" value="save"/>

	    <input type="hidden" name=":redirect" value="\*"/>
	  </form>
  </div>

  <div class="nav" style="float:left; width:30%;">
    <h3>Navigation</h3>
    <ul>
        <li><em><a href="/content/blog/\*">\[Create new post\]</a></em></li>
	    <script>
	      var posts = Sling.getContent("/content/blog", 2);
	      for(var i in posts) {
	      	document.write("<li><a href='/content/blog/" + i + "'>" + posts\[i\].title + "</a></li>");
	      }
	    </script>
    </ul>
  </div>

  <script>Sling.wizard();</script>
</body>
</html>
