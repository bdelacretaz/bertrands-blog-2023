---
title: "Mail from Cocoon is fun and easy"
date: 2005-09-15
tags: 
  - "cocoon"
  - "post"
slug: mail-from-cocoon-is-fun-and-easy
---

Believe it or not, today is the first time that I used the Cocoon mail block, to create an example for a customer.

What I found is that it's dead easy to use: activate the mail block, download two jars which cannot be distributed with Cocoon (mail.jar and activation.jar), feed a document like the example below to the SendmailTransformer and you're done. Of course, all the components of the transformer's input document (including binary attachments) can be generated dynamically using Cocoon pipelines.

The transformer output indicates whether the message was successfully sent to each address, it's really simple and very useful. You should be prepared to receive spam lots of interesting messages from my next Cocoon application ;-)

<?xml version="1.0">

<!--
Test input for the Cocoon sendmail transformer.

To send an email, activate the Cocoon mail block
(requires mail.jar and activation.jar which are not
distributed with Cocoon), and feed this to the
SendmailTransformer. That's it.

Of course, this document and all its content could
be generated from various pipelines, the cocoon:/
protocol is fully supported.
-->

<document xmlns:email="http://apache.org/cocoon/transformation/sendmail">
<email:sendmail>
<!--
SMTP host configuration, can also be defined when
declaring the SendmailTransformer component.
-->
<email:smtphost>your.smtp.server</email:smtphost>
<email:from>cocoon@codeconsult.ch</email:from>

<!-- The rest is self-explaining -->
<email:to>bdelacretaz@codeconsult.ch</email:to>
<email:to>someone-else@codeconsult.ch</email:to>

<email:subject>This is a test, from sendmail-input.xml</email:subject>

<email:body>
This is the body of the test message.
By using src="cocoon:/somepipeline" in the email:body
element, this
could be generated dynamically from a Cocoon pipeline.
The message contains three attachments: a small PDF logo,
and HTML document with a single line in it, and a PDF document.
</email:body>

<-- use pipelines for attachments to show how this works -->
<email:attachment
name="logo"
mime-type="image/gif"
src="cocoon:/read-file/iconPDF.gif"
/>

<email:attachment name="stuff-in-html.html" mime-type="text/html">
<email:content>This is supposed to be an HTML attachment.</email:content>
</email:attachment>

<email:attachment
name="report file"
mime-type="application/pdf"
src="cocoon:/read-file/pdf-document.pdf"
/>

</email:sendmail>
</document>
