---
title: "How we do a release at the ASF"
date: "2007-02-10"
categories: 
  - "asf"
  - "open-source"
---

As a mentor for the [Wicket](http://incubator.apache.org/projects/wicket.html) project, I've tried to explain how we do releases at the [ASF](http://apache.org).

This is no official statement! It's only my view of it, feel free to comment of course. I've tried to reduce the explanation to the important points: basically, [PMC members](http://apache.org/foundation/how-it-works.html#roles) vote to accept the binary files that are going to be released, based on these file's md5 digests.

So, in general (and IMHO) the important steps are:

1) Someone prepares the release artifacts (tar.gz and/or zip archives, etc) in a "release scratchpad area" (usually on people.apache.org) and posts a \[VOTE\] message to the dev list to have them accepted.

This message includes the md5 digests of the artifacts, to avoid any confusion if they're updated later, as happens when adjustments are needed.

2) PMC members download the artifacts, check their md5, unpack them and check the contents (functional checks, automated tests, legal aspects, etc).

3) PMC members vote to accept the release, indicating specific reasons if they don't accept it. I find it good at this stage to indicate what you've checked when voting +1, as sometimes one doesn't have the time or resources to check all aspects of the release.

If the release is not accepted by a PMC member, the vote restarts after correcting the artifacts and posting the new md5 digests.

4) Once the vote passes (according to the ASF's voting rules, \[1\]), the release manager moves the files to the final distribution destination, and makes the necessary announcements, usually after waiting for the artifacts to be propagated to all mirrors.

The main points are that PMC members vote on the actual binaries that are going to be distributed, based on these file's md5 digests. Code repositories should also be tagged when cutting releases, of course, but it's the actual distribution files (via their md5 digests) which are binding.

Although I have described the process in detail, there's not much bureaucracy involved. It's just a logical process that enables the PMC to collectively take responsibility for the releases, so that the release managers don't have to bear the burden alone.

See also:

- \[1\] http://www.apache.org/foundation/voting.html
- http://www.apache.org/dev/release.html
- http://incubator.apache.org/guides/releasemanagement.html#best-practice
