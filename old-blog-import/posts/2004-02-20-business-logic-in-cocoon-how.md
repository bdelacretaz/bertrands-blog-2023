---
title: "Business logic in Cocoon - how?"
date: 2004-02-20
tags: 
  - "cocoon"
  - "post"
slug: business-logic-in-cocoon-how
---

A question which often comes when starting with Cocoon is _how to implement my business layer_.

Here are some suggestions, based on my [supersonic tour](http://codeconsult.ch/bertrand/archives/000238.html) workshop.

The short answer: _it's up to you_ ;-)

More precisely, you could say that Cocoon leaves a lot of freedom regarding how to access databases and run business processes or apply business rules.

Here's a brief discussion of possible options. Some are real today and some are still - as Cocoon folks like to say - _in the pipeline_.

Comments are welcome, I do not mean to hold the one and only truth ;-)

#### Flowscript code

Writing your business layer code inside Flowscript might be tempting after looking at some examples, but _please don't_!

Flowscript is not meant for more than glue between pages and business code, and its design and future evolution will stay targeted to small glue modules.

#### Independent java code

As you can see in the Linotype sample, for example, it is very easy to access java objects from Flowscript code. Just instantiate a java object with _new Packages.com.mycompany.mylogic.MyClass_ and you're in business.

Such objects do not necessarily need to know about Cocoon or Avalon classes, which means that legacy code could be easily integrated, provided their are no class libraries conflicts.

Working in this way however, prevents you from using any Avalon features like configuration, logging and monitoring facilities.

As such, this is a suboptimal solution, but might be interesting for small applications where you don't want to learn too much about Avalon and Cocoon.

#### Avalon-based java code

The next step would be to write first-class Cocoon components based on the Avalon framework, allowing your components to use all of the Avalon facilities, and if necessary to access Cocoon components directly.

In this case, your build system will be integrated with the Cocoon build system, and you will tailor your build to include only the required Cocoon blocks.

This is the way to go if you don't mind the tighter coupling between Cocoon, Avalon and your application, and if you are ready to learn these technologies in more detail. The benefits are largely worth it for serious applications.

Structuring your code in _blocks_ as is done inside Cocoon will make integration easier and should help future migrations to newer versions of Cocoon.

#### RMI components

If you're worried about coupling, RMI components might be an interesting option: in this case, only a small facade will be integrated in Cocoon, and your application will run in its own process with no risks of class library conflicts.

The downside is added complexity and a possible loss of performance, depending on your application patterns.

#### REST or SOAP backends

The next step towards decoupling would be to use REST or SOAP backends to communicate with your business layer, leaving you free to choose the language and framework of your choice to implement the backends. Interoperability with other systems can also be a big advantage in this case.

There are some SOAP helper components in Cocoon today, but we don't see a lot of discussions about them on the mailing lists, so we don't know if their use is widespread.

A good example of a REST backend is the XReporter database reporting framework ([http://xreporter.cocoondev.org/](http://xreporter.cocoondev.org/)).

Recent [discussions](http://wiki.cocoondev.org/Wiki.jsp?page=FlowAndWebServices) about a possible integration of SOAP with Flowscript are promising. Being able to transparently access SOAP backends directly from Flowscript would make it possible to create forms-based frontends to SOAP services with a minimal amount of code. Stay tuned...
