---
title: "SSL/TLS certificates with Let's Encrypt"
date: 2021-02-04
tags: 
  - "ssl"
  - security
  - "post"
  - favorite
slug: ssl-tls-certificates-with-lets-encrypt
---

This is mostly a _notes to self_ post, about something that I rarely do and that has become much easier than what I remembered.

<!-- excerpt -->

I recently created a [website for a community project](https://avenir-cheyres-chables.ch/) in my spare time, using [React](https://reactjs.org/), which is a lot of fun and also shows how things have evolved since I last did any substantial front-end work, which is a long time.

But this post is not about React, it's about creating and checking the necessary SSL/TLS certificate. The hosting service does not create [wildcard certificates](https://en.wikipedia.org/wiki/Wildcard_certificate) by default and I needed that for "historical" reasons.

So here we go, this is just my recipes to remember for next time.

## Creating a certficate using certbot

Here's the command that I used to generate a Let's Encrypt certificate using [certbot](https://certbot.eff.org/).

This required setting up a DNS TXT record for validation, and waiting for it to be active by checking the domains DNS servers,, using `dig NS codeconsult.ch` to find them and then `dig @thednsserver.xx TXT <domain>` to verify that the TXT records are live.

    sudo certbot certonly --manual --preferred-challenges dns -d *.thedomain.ch -d thedomain.ch

## Checking the certificate's Subject Alternative Names

Before sending traffic to your website, once the certificate is installed on it you'll need to check that it includes the correct [Subject Alternative Names](https://en.wikipedia.org/wiki/Subject_Alternative_Name), if multiple subdomain names are pointing to it.

Running the below command produces a text dump of the certificate, and grepping that for DNS lists those names:

    openssl s_client -showcerts -connect codeconsult.ch:443 < /dev/null | openssl x509 -text | grep DNS

which outputs

    DNS:codeconsult.ch, DNS:www.codeconsult.ch

That's it! At this point the certificate is installed and verified, we can send traffic to the website. Just remember to renew the certificate before it expires, either automatically if your setup allows it, or manually using similar commands than what we saw here.
