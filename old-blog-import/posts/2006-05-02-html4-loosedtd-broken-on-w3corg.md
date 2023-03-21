---
title: "HTML4 loose.dtd broken on w3c.org?"
date: "2006-05-02"
categories: 
  - "tools"
---

After getting weird HTML validation errors today we had a look at the [http://www.w3.org/TR/html4/loose.dtd](http://www.w3.org/TR/html4/loose.dtd) and it seems like it's _broken_!

Is it just me? The DTD contains things like

<!ENTITY % ContentType "CDATA"
-- media type, as per \[RFC2045\]
-->

With a comment closing sign, but no opening. Validators fail with an error on the first entity declaration, "HTML.Version".

Unless someone's playing tricks on us with a funny proxy or cache in between, this is _weird_ and must have broken quite a few programs on the web today...have you seen it as well?

(DTDs broken on w3c.org?? This is one of these "I might be going to look silly" posts..but it looks true ;-)

_Update: comments are enabled on this post now, sorry about that_

_Update: Simone Gianni mailed me the following explanation, thanks!: it's not broken, in SGML -- is enough for a comment, but I a lot of parsers do not think it is, and generally XML tools do not like it. This is also clearly stated in [http://www.w3.org/TR/html4/intro/sgmltut.html#h-3.3](http://www.w3.org/TR/html4/intro/sgmltut.html#h-3.3). Anyway, a quick compare with a similar but working one ([http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd](http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd)) shows that they changed their mind, and used a more "compliant" way of including comments in other DTDs._
