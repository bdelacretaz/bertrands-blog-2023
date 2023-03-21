---
title: "GroovyMarkup in Cocoon"
date: "2004-04-15"
categories: 
  - "cocoon"
---

With help from [James Strachan](http://radio.weblogs.com/0112098/), who very quickly corrected a problem with Groovy's SAXBuilder, [GroovyMarkup](http://groovy.codehaus.org/markup.html) now works in Cocoon via the ScriptGenerator (BSF block).

Makes for a very nice syntax to generate XML:

xml.page() {
content() {
section() {
title("GroovyMarkup test")
p("Look ma, no angle brackets!")
ul() {
for(i in 1..5) {
li("This is item " + i)
}}}}}

Way cool. Next step is to implement the [Groovy SQL](http://groovy.codehaus.org/sql.html) syntax.
