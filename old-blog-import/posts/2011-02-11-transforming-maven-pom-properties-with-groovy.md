---
title: "Transforming Maven POM properties with Groovy"
date: 2011-02-11
tags: 
  - "maven-osgi-groovy"
  - "java"
  - "maven"
  - "osgi"
  - "post"
slug: transforming-maven-pom-properties-with-groovy
---

We're moving to [fragment bundles](http://osgi.mjahn.net/2008/03/13/half-bundle-half-jar-%E2%80%93-the-nature-of-fragment-a-blessing-or-a-curse/) in [Sling](http://sling.apache.org) instead of using system properties, for example to export packages from the JVM's classpath.

If you have no idea what I'm talking about, bear with me - this is just about a simple Maven trick to transform POM properties using bits of Groovy script.

Basically, an OSGi fragment bundle is a jar file that contains just metadata under META-INF, especially META-INF/MANIFEST.MF that contains the OSGi bundle headers.

One of these headers is `Bundle-Version`, which does not support values like `5.4.2-SNAPSHOT` which are common in Maven. The dash is invalid in an OSGi bundle version number, that value needs to be converted to `5.4.2.SNAPSHOT`

To avoid having a separate `bundle.version` property in your POM, which if you're like me you'll forget to update before a release, here's how to transform the value using a bit of Groovy scripting:

<plugin>
  <groupId>org.codehaus.groovy.maven</groupId>
  <artifactId>gmaven-plugin</artifactId>
  <version>1.0</version>
  <executions>
    <execution>
      <phase>generate-resources</phase>
        <goals>
          <goal>execute</goal>
      </goals>
      <configuration>
      <properties>
        <rawVersion>${pom.version}</rawVersion>
      </properties>
      <source>
        // Convert POM version to valid OSGi version identifier
        project.properties\['osgi.version'\] = 
          (project.properties\['rawVersion'\] =~ /-/).replaceAll('.')
      </source>
    </configuration>
  </execution>
 </executions>
</plugin>  

As usual in Maven POMs (though I think Maven 3.x can improve on that, feedback welcome) that's a bit verbose to write, the actual Groovy code is just

project.properties\['osgi.version'\] = 
  (project.properties\['rawVersion'\] =~ /-/).replaceAll('.')

But even with the verbosity it's cool to be able to do that without having to write a plugin. You can then use the `${osgi.version}` property for the `Bundle-Version` header.

For the sake of completeness, here's the other interesting part of that pom, which sets the required OSGi headers to create a fragment bundle. `com.example,whatever` is the package that we need to be exported by the system bundle.

<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-jar-plugin</artifactId>
  <configuration>
    <archive>
      <index>true</index>
      <manifest>
        <addClasspath>false</addClasspath>
      </manifest>
      <manifestEntries>
        <Bundle-Version>${osgi.version}</Bundle-Version>
        <Bundle-Description>${project.description}</Bundle-Description>
        <Bundle-Name>${project.name}</Bundle-Name>
        <Bundle-DocURL>http://www.example.com/</Bundle-DocURL>
        <Bundle-ManifestVersion>2</Bundle-ManifestVersion>
        <Bundle-Vendor>YourCompanyAG</Bundle-Vendor>
        <Fragment-Host>system.bundle;extension:=framework</Fragment-Host>
        <Bundle-SymbolicName>${project.artifactId}</Bundle-SymbolicName>
        <Export-Package>
          com.example,whatever;version=1.0,
      </Export-Package>
    </manifestEntries>
  </archive>
 </configuration>
</plugin>

_Update: a complete sample pom is available at [http://svn.apache.org/repos/asf/sling/trunk/samples/framework-fragment/pom.xml](http://svn.apache.org/repos/asf/sling/trunk/samples/framework-fragment/pom.xml)_
