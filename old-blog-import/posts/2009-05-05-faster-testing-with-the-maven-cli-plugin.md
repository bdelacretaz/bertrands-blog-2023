---
title: "Faster testing with the Maven CLI plugin"
date: 2009-05-05
tags: 
  - "maven"
  - "tools"
  - "post"
slug: faster-testing-with-the-maven-cli-plugin
---

Although it's not [that new](http://markmail.org/message/dpejtchtyeg6ve6k), I discovered Don Brown's [Maven CLI plugin](http://wiki.github.com/mrdon/maven-cli-plugin) only this morning, and played with [mojavelinux](http://www.mojavelinux.com/blog/archives/2009/05/a_gamechanging_maven_2_plugin_you_absolutely_must_use/index.php)' s enhanced version which supports -D parameters and profiles, among other things.

The great thing is to be able to run a simple `test` or `test -D MyTest` command quickly. You first start Maven with `mvn cli:execute-phase`, which gives you a `maven2>` command prompt to start Maven lifecycle phases. As Maven is already started, phases run much quicker than when starting from scratch.

In my experiments, the `test` command ran about five times faster than using `mvn -o test`, but the difference depends how fast your tests are, of course.

To setup the plugin, I'm adding the following to my `settings.xml`, so as to not interfere with project's POMs, as the CLI is more an environment feature than a project thing:

<!-- 
  mvn settings.xml that enable the CLI plugin described at
  http://tinyurl.com/maven-cli-plugin
  (For example "mvn cli:execute-phase")
-->
<settings>
  <pluginGroups>
    <pluginGroup>org.twdata.maven</pluginGroup>
  </pluginGroups>
  <profiles>
    <profile>
      <id>cli-plugin</id>
      <activation>
        <activeByDefault>true</activeByDefault>
      </activation>
      <pluginRepositories>
        <pluginRepository>
          <id>repository.jboss.org</id>
          <name>JBoss Repository</name>
          <url>http://repository.jboss.org/maven2</url>
        </pluginRepository>
      </pluginRepositories>
    </profile>
  </profiles>
</settings>

Find more info on the [mojavelinux](http://www.mojavelinux.com/blog/archives/2009/05/a_gamechanging_maven_2_plugin_you_absolutely_must_use/index.php) page.

Great tool - thanks Don Brown and mojavelinux!
