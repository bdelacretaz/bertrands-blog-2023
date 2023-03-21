---
title: "Fun with the MySQL TIMESTAMP data type (not!)"
date: "2006-01-21"
---

We've been bitten by this twice in the last few days, so maybe it is useful to others: the way MySQL handles its TIMESTAMP fields is...funny.

The most ROFLish part comes from [http://dev.mysql.com/doc/refman/5.0/en/datetime.html](http://dev.mysql.com/doc/refman/5.0/en/datetime.html):

> The TIMESTAMP data type has varying properties, depending on the MySQL version and the SQL mode the server is running in.

Sounds fun already. In real life, my experience has been that _sometimes_ MySQL updates _some TIMESTAMP fields_ automatically when you UPDATE things.

Later in the same page there's a simple suggestion to work around this:

UPDATE table\_name SET my\_timestamp=my\_timestamp, new\_data='something new' ;

You've been warned. Either don't use TIMESTAMP fields, or read the docs very thoroughly and check in which funny mode your server happens to run, or use the above workaround.
