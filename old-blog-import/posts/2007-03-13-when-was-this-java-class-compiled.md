---
title: "When was this Java class compiled?"
date: "2007-03-13"
categories: 
  - "tools"
---

Credits to Dmitry Beransky on the [advanced-java@discuss.develop.com](http://discuss.develop.com/advanced-java.html) list.

import java.util.Date;
import java.io.IOException;
public class When {
public static void main(String args\[\]) throws IOException {

Date d =
new Date(
When.class.getResource("When.class")
.openConnection()
.getLastModified()
);

System.out.println("This class was compiled on " + d);
}
}

Just check the .class file modification time. Clever!
