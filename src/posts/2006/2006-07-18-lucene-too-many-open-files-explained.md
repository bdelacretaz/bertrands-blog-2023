---
title: "Lucene: \"too many open files\" explained"
date: 2006-07-18
tags: 
  - "tools"
  - "post"
  - solr
slug: lucene-too-many-open-files-explained
---

Been bitten by this once again during my [SOLR](http://incubator.apache.org/solr/) tests (after seeing it a few times in [Cocoon](http://cocoon.apache.org)), and found a good explanation by Yonik Seeley in [SOLR-4](http://issues.apache.org/jira/browse/SOLR-4#action_12370001).

The problem is mainly caused by Lucene creating many segment files, I had 335 in my index directory after adding 100'000 documents in several operations to the index, without optimizing it (and I was running on a plain vanilla linux account with a low ulimit -n).

But go read the above mentioned page for details if you need them.

How did I fix it in my case? I ran SOLR as root with a higher ulimit, sent an `<optimize/>` command to it, and restored the correct file owner before restarting with my normal user account. Then made the necessary changes to the SOLR and/or Linux config to avoid future problems.
