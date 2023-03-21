---
title: "Tika 0.1 (incubating) released!"
date: "2008-01-08"
categories: 
  - "tools"
---

Release 0.1 of [Tika](http://incubator.apache.org/tika/) is out, grab it while it's hot!

There's almost no standalone documentation currently, but between the [javadocs](http://incubator.apache.org/tika/apidocs/index.html) and the simple and fairly complete [test cases](http://svn.apache.org/repos/asf/incubator/tika/trunk/src/test/java/org/apache/tika/), it shouldn't be hard to figure out how to use it.

What does Tika do? Basically, extract data and metadata from various binary formats. It's meant to be a framework for plugging in more binary decoders, and we expect it to be used in various Apache projects, instead of each project reinventing the wheel.

Here's an example, from the `ExcelParserTest`:

```

public void testExcelParser() throws Exception {

InputStream input =
  ExcelParserTest.class.getResourceAsStream(
    "/test-documents/testEXCEL.xls");
try {
  Metadata metadata = new Metadata();
  StringWriter writer = new StringWriter();
  ContentHandler handler = new WriteOutContentHandler(writer);
  new ExcelParser().parse(input, handler, metadata);

  assertEquals(
    "application/vnd.ms-excel",
    metadata.get(Metadata.CONTENT_TYPE));

  assertEquals("Simple Excel document", metadata.get(Metadata.TITLE));
  assertEquals("Keith Bennett", metadata.get(Metadata.AUTHOR));

  String content = writer.toString();
  assertTrue(content.contains("Sample Excel Worksheet"));
  assertTrue(content.contains("Numbers and their Squares"));
  assertTrue(content.contains("9.0"));
  assertTrue(content.contains("196.0"));

} finally {
  input.close();
}
}
```

Thanks to Chris Mattmann (Tika's release manager) and the whole [team](http://incubator.apache.org/tika/team-list.html) for all the work that made this first release possible!
