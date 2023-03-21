---
title: "FTP: \"Bad EPRT protocol\" solved"
date: "2006-07-26"
categories: 
  - "tools"
---

Lost some time in this, so maybe it is useful to you: I kept getting "Bad EPRT protocol" errors trying to connect to some FTP servers with the macosx command-line client behind a NAT.

The solution is to disable the use of the EPSV / EPRT commands, using the **epsv4** command. Or put it in .netrc to make it sticky.

...
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> epsv4
EPSV/EPRT on IPv4 off.

These extensions are defined in [RFC 2428](http://incubator.apache.org/ftpserver/rfc2428.html).
