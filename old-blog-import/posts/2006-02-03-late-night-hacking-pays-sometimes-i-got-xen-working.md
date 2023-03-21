---
title: "Late night hacking pays (sometimes): I got Xen working!"
date: "2006-02-03"
---

After several unsuccessful tries on various pre-existing configurations, I finally got [Xen](http://www.cl.cam.ac.uk/Research/SRG/netos/xen/) working, and it's _awesome_. To me virtual machines are fascinating anyway, but Xen feels (and really is I think) like another level up.

Here's what I did, in case you want to try it. This worked on my Proliant DL380, a retired server that's been given to me, thanks Gaspard!

- Start with [Fedora Core 4](http://fedora.redhat.com/), which seems to handle most hardware RAID controllers out of the box.
- _yum update_ the thing so that it's current.
- Add the [Xen 3.0 binaries](http://www.xensource.com/xen/downloads/index.html). The version that yum installs wouldn't boot on my system, so I removed it and replaced it with that one.
- Add Xen to /etc/grub.conf, similar to the example on the [Fedora Xen Quickstart](http://fedoraproject.org/wiki/FedoraXenQuickstart) page.
- Reboot with Xen and check that _xm_ works.
- Configure a debian Sarge host using [debootstrap](http://packages.debian.org/stable/admin/debootstrap) as explained [here](http://xen.cosi.clarkson.edu/documentation/xen-tutorial.html) under _Installing other Linux Distributions_.

That's it! Everything seems to work fine, including networking which was very easy to setup, following the provided example Xen guest configurations. A quick java benchmark showed no significant performance hit compared to booting Fedora directly.

For the hostname I selected [hoover](http://www.hoover.com/) as a testimony to the _slight_ noise the box makes.

I can't wait to get more RAM for the box (let me know if you have some spare 1Gig modules) to set it up at [lab7](http://www.lab7.ch) so that each of us can have his own playground/test server.

I've been using many different virtual machine systems, from VMware to VirtualPC to usermode Linux, but for some reason Xen feels much more like a magical multiplication of my server than the other ones. Software schizophrenia maybe?
