---
title: "Monitoring services with monit"
date: "2006-11-30"
categories: 
  - "tools"
---

I'm testing monit for active monitoring of linux services, and it looks very useful.

See this [example](http://www.tildeslash.com/monit/doc/manual.php#configuration_examples) from the documentation:

check process apache with pidfile /var/run/httpd.pid
start "/etc/init.d/httpd start"
stop  "/etc/init.d/httpd stop"
if failed host www.sol.no port 80 then alert
if failed host shop.sol.no port 443 then alert
if failed host chat.sol.no port 80 then alert
if failed host www.tildeslash.com port 80 then alert

Nice and clean, looks like monit will join my toolbox next to [nagios](http://nagios.org/), which is more suited to "external" monitoring while monit can also easily restart failed or unstable services automatically.
