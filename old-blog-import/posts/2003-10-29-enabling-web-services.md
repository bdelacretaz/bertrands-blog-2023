---
title: "Enabling Web Services"
date: "2003-10-29"
categories: 
  - "the-web"
---

Very interesting [paper](http://www.windley.com/docs/EnablingWebServices.pdf) by [Phil Windley](http://www.windley.com/) (via [Gregor Rothfuss](http://greg.abstrakt.ch/archives/001438.html)).

Like Gregor, I'm going to list the principles discussed in the paper here - they're worth trying to remember:

1. Every data record and collection is a resource.
2. Every resource should have a URI.
3. Cool URI’s don’t change.
4. Data queries on existing resources should be done with a GET.
5. Use POST to create new resources.
6. Preserve the structure of data until the last possible moment (i.e. return XML).
7. Make XML Schemas available online for your XML.
8. Make data available in multiple flavors.
9. Use Metadata (RDF) for XML.
10. Document your service API using WSDL, WRDL, or some other standard.
11. Advertise the presence of the data using WSIL.
12. Adhere to data standards such as RSS where available.
13. Use HTTP authentication as much as possible.
