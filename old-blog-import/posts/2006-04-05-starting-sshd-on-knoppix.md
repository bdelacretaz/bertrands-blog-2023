---
title: "starting sshd on knoppix"
date: 2006-04-05
tags: 
  - "tools"
  - "post"
slug: starting-sshd-on-knoppix
---

I'm using Knoppix to teach Linux basics these days, and it took me a while (say, 5 minutes ;-) to find out how to start sshd.

So, more as a note to self than anything else, here's the recipe (untested, potentially unsafe, I didn't check it in detail, you've been warned) in case ssd says _no hostkeys available_ when you try to start it:

\# ssh V1 keys
cd /etc/ssh
sudo ssh-keygen -t rsa1 -f ssh\_host\_key -C '' -N ''
sudo chmod 600 ssh\_host\_key
sudo chmod 600 ssh\_host\_key
sudo chmod 644 ssh\_host\_key.pub

# ssh V2 keys
cd /etc/ssh
sudo ssh-keygen -t rsa -f ssh\_host\_rsa\_key -C '' -N ''
sudo chmod 600 ssh\_host\_rsa\_key
sudo chmod 644 ssh\_host\_rsa\_key.pub
sudo ssh-keygen -t dsa -f ssh\_host\_dsa\_key -C '' -N ''
sudo chmod 600 ssh\_host\_dsa\_key
sudo chmod 644 ssh\_host\_dsa\_key.pub

Via [http://www.seattlewireless.net/SshKeyGeneration](http://www.seattlewireless.net/SshKeyGeneration).
