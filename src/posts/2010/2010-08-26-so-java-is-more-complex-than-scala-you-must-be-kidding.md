---
title: "So Java is more complex than Scala? You must be kidding"
date: 2010-08-26
tags: 
  - "java"
  - "programming"
  - "scala"
  - "java"
  - "post"
slug: so-java-is-more-complex-than-scala-you-must-be-kidding
---

My esteemed colleague Michael Duerig posts about [Scala code being simpler than java](http://michid.wordpress.com/2010/08/24/so-scala-is-too-complex/).

His Scala example is beautiful, no question about it:

```scala
object ScalaMain {
  case class Person(name: String, age: Int)

  val persons = List(
    Person("Boris", 40),
    Person("Betty", 32),
    Person("Bambi", 17))

  val (minors, majors) = persons.partition(\_.age <= 18) 

  def main(args: Array\[String\]) = {
    println (minors.mkString(", "))
    println (majors.mkString(", "))
  }
}
```

Though I wonder how many Scala programmers are actually able to come up with such concise and elegant code.

Michi's corresponding java example, however, is...let's say _horrible_. Like making things as complex and bloated as they can be.

Here's my (slightly) more elegant Java version:

```java
import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

public class Person extends HashMap<String, Object> {
    
    public Person(String name, int age) {
        put("name", name);
        put("age", age);
    }
    
    public static void main(String args\[\]) {
        final Person \[\] persons = {
            new Person("Boris", 40),
            new Person("Betty", 32),
            new Person("Bambi", 17),
        };
        
        List<Person> minors = new ArrayList<Person>();
        List<Person> majors = new ArrayList<Person>();
        
        for(Person p : persons) {
            if( (Integer)p.get("age") <= 18 ) {
                minors.add(p);
            } else {
                majors.add(p);
            }
        }
        
        System.out.println(minors);
        System.out.println(majors);
        
        // Output:
        // \[{age=17, name=Bambi}\]
        // \[{age=40, name=Boris}, {age=32, name=Betty}\]
    }
}
```

Not bad hey? 37 lines all included, and although Java does require more boilerplate code, it's not too bad.

All this is kinda tongue in cheek, ok? We could start all sorts of flame wars about type safety, generics and dynamic programming - my point is just that elegant and ugly code can be written in any language.

Scala definitely helps with conciseness, but in my opinion Java does not require things to be as bloated as some of those language wars examples show.

I'm on my way to Michi's office to sort this out face to face as well ;-)

_Update: face to face discussion went well, we agreed to not start religious wars...and in the meantime, here are two additional (and more serious) posts on the subject:

- [Simple or Complicated](http://lamp.epfl.ch/~odersky/blogs/isscalacomplex.html), by Martin Odersky.
- [The “Scala is too Complex” Conspiracy](http://warpedjavaguy.wordpress.com/2010/08/02/the-scala-is-too-complex-conspiracy-1/) by WarpedJavaGuy.

_
