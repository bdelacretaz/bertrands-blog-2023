---
title: "DAX: XSLT-like transforms in Java"
date: "2007-09-20"
categories: 
  - "tools"
  - "xml"
---

Intrigued by Lars Trieloff's _DAX - Where flowscript and XSLT meet_ talk title for the [Cocoon GT](http://www.cocoongt.org/PROGRAM.html), I did some research and I like what I see!

See this excerpt from Mindquarry's [AnalysisTransform](https://www.mindquarry.org/repos/dax/trunk/dax-java/src/test/java/dax/examples/AnalysisTransform.java) example:

/\*\*
\* Match all romeo and juliet line elements and update speaker map
\* @param node line element
\*/
@Path("//line\[../speaker='Rom.' or ../speaker='Jul.'\]")
public void speaker(Node node) {
// grab speaker node from preceeding sibling axis
Node speakerNode = speakerXPath.selectSingleNode(node);
String speaker = speakerNode.getStringValue();
updateStatistics(speaker);
}

Due to the _@Path_ annotation, this method replaces an `xsl:template` that would have the same XPath.

Using it is as simple as:

public void testExecute() throws DocumentException{
// create a dom4j doc
SAXReader reader = new SAXReader();
Document doc = reader.read(
Thread.currentThread()
.getContextClassLoader()
.getResourceAsStream("dax/examples/randj.xml")
);

// create a transformer
AnalysisTransform t = new AnalysisTransform();

// perform the transform and check results
t.execute(doc);
assertEquals( t.lines.get("Rom."), new Integer(606));
assertEquals( t.lines.get("Jul."), new Integer(542));
}
}

Great stuff! There's more info on the [Mindquarry wiki](https://www.mindquarry.org/work#/wiki/dax/Start), and Lars will be at the GT to tell us more.

The [Transformer](https://www.mindquarry.org/repos/dax/trunk/dax-java/src/main/java/dax/Transformer.java) code is also an interesting example of how to put Java annotations to good use.
