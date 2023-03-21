---
title: "Redeploy OSGi bundles automatically with fizzed-watcher-maven-plugin"
date: "2015-09-17"
categories: 
  - "maven"
  - "osgi"
  - "tools"
---

Being able to redeploy your OSGi bundles automatically when you make changes to their source code is very useful when developing [Apache Sling](http://sling.apache.org/) applications, for example.

Today I tried the `fizzed-watcher-maven-plugin` on a Sling sample bundle, and it seems to work quite well. I just had to add the following to my POM:

`<plugin>   <groupId>com.fizzed</groupId>   <artifactId>fizzed-watcher-maven-plugin</artifactId>   <version>1.0.6</version>   <configuration>     <watches>       <watch>         <directory>src/main</directory>       </watch>     </watches>     <goals>       <param>clean</param>       <param>install</param>     </goals>     <profiles>       <param>autoInstallBundle</param>     </profiles>   </configuration> </plugin>`

And changing any file under src/main causes the bundle to be rebuilt and (via Sling's default `autoInstallBundle` profile) reinstalled in my test Sling instance.

To start the plugin with that setup I used

`mvn fizzed-watcher:run -Dsling.url=http://localhost:8080/system/console`

See https://github.com/fizzed/maven-plugins for more info.

_Filed under: very useful._
