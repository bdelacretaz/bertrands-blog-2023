---
title: "Continous Deployment with Apache Sling"
date: "2014-09-02"
categories: 
  - "adobe"
  - "sling"
---

Today I had the pleasure to attend the Master's thesis defense of our intern Artyom Stetsenko, titled _Continous Deployment of Apache Sling Applications_.

Coaching Artyom for this project has been a pleasure, he did a great job and worked independently while listening very well to our advice. He got an excellent mark for his thesis and that was well deserved. Also due to an excellent no-bullets presentation!

I have uploaded [Artyom's thesis paper](http://bdelacretaz.files.wordpress.com/2014/09/artyom-thesis.pdf "Continuous Deployment of Apache Sling applications") here, with his permission. The code is available at [https://github.com/ArtyomStetsenko/sling-devops-experiments](https://github.com/ArtyomStetsenko/sling-devops-experiments). As the name indicates that's experimental code, but the resulting Sling-based cluster with automated atomic deployment is functional. Just push an updated crankstart file to the Git repository and the cluster is updated atomically and without downtime.

For me the main goal was to see how we can improve [Apache Sling](http://sling.apache.org)'s support of modern operations, with continuous deployment, immutable instances etc. I'm continuing my explorations with a [Docker-based Sling cluster](https://github.com/bdelacretaz/docker-sling-cluster "Docker-based Sling cluster"), the main goal being to create simple clustered environments that allow us to play with these things.

_Update: I forgot to mention that my Docker cluster prototype is the basis for my upcoming talk at [adaptTo() 2014](http://adapt.to/) on September 23rd in Berlin. The talk's title is "Apache Sling and devops - the next frontier" and I'll talk about how Sling can be made more operations-friendly_.
