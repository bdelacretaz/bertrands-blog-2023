---
title: "RESTful services as intelligent websites"
date: 2012-03-27
tags: 
  - "web"
  - "thoughts"
  - "post"
  - favorite  
slug: restful-services-as-intelligent-websites
---

Thinking of RESTful services as _intelligent websites_ helps drive our architecture decisions towards simplicity, discoverability and maximum use of the HTTP protocol. That should help us design services that are easier to use, debug, evolve and maintain.

In this post I'll try to address a few important aspects of RESTful services, considering them as intelligent websites. We might need more formal specifications in some cases, but this is hopefully a good start.

### Discoverability and service homepage

Having a descriptive homepage for your service helps search engines and people discover it, and the base service URL should "never" change. Service-specific subdomains come to mind.

The service homepage includes all the necessary information such as service owner's contact information, links to source code, etc.

News about service updates live right here on the service homepage, ideally as full content for the most recent news, but at least as links.

The key idea is that _I shouldn't have to tell you more than the service homepage's URL_ for you to be able to use the service.

Even if your service is a company-internal one that's not meant to become public, having a decent-looking homepage, or at least one that's well organized and well readable, won't hurt.

### HATEOAS

In my pragmatic view [Hypermedia as the Engine of Application State](http://en.wikipedia.org/wiki/HATEOAS) basically means _links tell you where to go next_.

In a website meant for humans, the meaning of a link is often expressed by logical groups: navigation links at the top left, "more info" links in a smaller font at the bottom of a page, etc.

For machines, adding `rel` attributes to `<link>` elements (in HTML, or the equivalents in other formats) tells us what we can do next. A client should be able to first try a link with non-destructive results, and get a response the supplies details about how the specified interaction is supposed to work. If those details are too involved to be expressed in a simple HTTP request/response (which should be a "maybe this is too complex" warning), links to explanations can be provided in the HTML content of our intelligent website.

### Self-explaining services

The service documentation, if any is needed, is also provided on the service homepage, or linked from it.

Service interactions are designed to be as obvious as possible to minimize the need for documentation, and readable automated tests (hosted on the service website of course, or linked from it) can help document the details.

### HTML forms describe service parameters

HTML forms are best way to document the service parameters: provide a form that humans can use to play with the service, with enough information such as lists and ranges of values so that users can figure out by themselves what the service expects.

The idea is that a human user will play with your service from the HTML form, then move on to implementing a client in the language of their choice.

The `action` attribute of `<form>` elements also contributes to HATEOAS - intelligent clients can discover that if needed, and it's obvious for human users.

And of course, speaking of parameters, [be liberal in what you accept, and conservative in what you send](http://en.wikipedia.org/wiki/Robustness_principle).

### Speaking in URLs

Like humans, RESTful services need to be precise when they speak about something important.

If your service response says _invalid input format_ for example, it's not hard to include in that response an URL that points to a description of the correct input format. That makes all the difference between a frustrating and a useful error message, and is part of HATEOAS as well.

### Web-friendly responses

Readable response formats will help people make sense of your service. The HTTP protocol does provide standard ways of compressing responses to avoid using more bandwidth than needed, so optimizing the response for wire efficiency does not make much sense unless you're really expecting measuring _huge_ traffic. And even if you need an optimized binary response format, there's probably a way to make that optional.

### HTTP status codes

_Thou shalt not abuse [HTTP status codes](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)_ - or you might be suddenly [transformed into a teapot](http://tools.ietf.org/html/rfc2324).

Returning a `200 OK` status code with content that describes an error is a no-no: if something went wrong, the HTTP status code needs to express that.

### Security

Website authentication and authorization mechanisms and secure connections work for machine clients as well, no need to reinvent that wheel.

HTTP sessions are a bad idea in a RESTful context of course, state is driven by hypertext as discussed above.

### Character encodings

The issues are the same for human users as for machine clients: you need to play by the HTTP protocol rules when it comes to character encodings, and using UTF-8 as the default is usually the best option.

### Stable service URLs

As with good websites, once a service has been published at a given URL, it should continue working in the same way "forever".

A substantially different new version of the service should get its own different URL - at least a different path containing a version number, or maybe a new subdomain name.

### Long-running jobs

Regardless of human or machine clients, you usually don't want HTTP requests to last more than a few seconds. Long-running jobs should initially create a new resource that describes the job's progress and lets the client know when the output is available. We've had an interesting discussion about this in [Apache Stanbol](http://markmail.org/message/rz5nvrijkif54xqw) recently, about long-running jobs for semantic reasoners.

### Service metadata

Non-trivial services often have interesting metadata to provide, which can have both static and dynamic parts, like configuration values and usage statistics for example.

Here again, the website view helps: that metadata is just made accessible from the service homepage via links, ideally with both human (`a href`) and machine (`link rel`) variants.

### Coda

Designing your RESTful service as an intelligent website should help people make good use of it, and will probably also help you make its interactions simpler and clearer.

If your service can't be presented as a website, it might mean that your interaction design is not optimal, or not really RESTful.

I'm happy to see these opinions challenged, of course, if someone has any counter-examples.

_Update: I should have mentioned that this post, and especially the "intelligent websites" concept, was inspired by conversations with Roy Fielding, in the early days of Apache Sling. I haven't asked him to review it, so this doesn't mean he would endorse the whole thing...I'm giving credit for inspiration but still liable for any mistakes ;-)_

_Update #2: See also my [REST reading list](http://delicious.com/bdelacretaz/rest+readinglist), a regularly updated collection of links to articles that I've found useful in understanding and explaining REST.._
