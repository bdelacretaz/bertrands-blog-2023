---
title: "Carsten Ziegeler on Maven"
date: 2005-07-20
tags: 
  - "apachecon"
  - "tools"
  - "post"
slug: carsten-ziegeler-on-maven
---

I won't treat you to another crappy timestamp, but our own [Carsten](http://www.osoco.org/weblogs/rael/) is talking about [Maven](http://maven.apache.org/) now.

Here's a quick summary and some random notes:

- Compared to ant, Maven is descriptive rather than "procedural", it uses a description of your project vs. a build script
- Maven standardizes the build process, avoids the "slightly different build sequence for each project" problem
- Maven is not a "next generation ant", they are different tools
- Many plugins are provided, to generate various artifacts (jar and war files, project reports, code analysis, etc.)
- First steps are easy: write a POM file, invoke maven, that's it
- [Carlos Sanchez](http://jroller.com/page/carlossg/20050218) has a good summary of Maven's important features.

Carsten has seen people starting to use more JUnit tests after moving to Maven, because it made it easier for them to run their tests. Sounds like a compelling plus point for me!

Code analysis reports, TODO reports and other project comprehension features are also used more often by Maven users because they are so easy to run once your project description is written. Like `maven site`.

Maven can be used together with CruiseControl for continuous integration, or Maven Continuum which is still alpha.

Plugins are controlled by overridable properties, for example `$HOME/project.properties` overrides the project's definitions.

Maven supports only one source directory and only one artifact (jar) per project. Multi-project support is coming in Maven 2.

Maven is not ant:

- Use provided functionality
- Try to avoid own goals (maven.xml)
- Use custom plugins if needed
- For special needs use ant
- Avoid the "Struts Trap", check in advance if what you need is possible with Maven

Sounds like I'll have to look yet another time at Maven, and try to find a sizeable pilot project to test it...
