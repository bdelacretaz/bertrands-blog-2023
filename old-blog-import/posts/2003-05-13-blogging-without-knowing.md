---
title: "Blogging without knowing..."
date: 2003-05-13
tags: 
  - "blogs"
  - "post"
slug: blogging-without-knowing
---

Today I needed to setup a blog without telling its users that it's a blog ;-)

Let me explain: a group of people need to share internal news using a kind of journal but we don't want them to even have to think about blogging, it's just "I'm sending news to the group" or "what happened since last time I looked".

We could use a mailing list, but for non-geeks it might be nicer to use Movable Type (that's what I'm used to) to archive, sort, search and otherwise organize the info. So the preferred scenario becomes: a) send mail to the journal, b) read the journal on a web page.

Problem is, blogging via email doesn't work out of the box with Movable Type.

After looking around I found some examples of procmail to Movable Type gateways, but none was 100% ok for me. Here's what I came up with after some fiddling, first the procmail recipe:

:0
\*^TOsomewhere@yourhost.there
{
:0 fw
| /home/bdelacretaz/blog/stripmime.pl \\
| /home/bdelacretaz/blogrouter/decode-headers.pl \\
| /home/bdelacretaz/blog/do-post.pl
}

And here's the Perl script that posts messages to the blog:

#!/usr/bin/perl -w
# post to Movable Type weblog, from email via procmail

use strict;
use Net::Blogger;
use Mail::Internet;

# blogger setup
my $mt = Net::Blogger->new(engine => 'movabletype');
$mt->Proxy('http://your.host.there/mt/mt-xmlrpc.cgi');
$mt->Username("email");
$mt->Password("\*\*\*");
$mt->BlogId(1);

# read incoming mail
my $fh = \\\*STDIN;
my $msg = Mail::Internet->new($fh, 'Modify' => 0, 'MailFrom' => 'KEEP');
my @headers = @{$msg->head()->header()};
my @body = @{$msg->body()};
my $from = $msg->get('From'); chomp($from) if ($from);
my $subject = $msg->get('Subject'); chomp($subject) if ($subject);
my $cc = $msg->get('Cc'); chomp($cc) if ($cc);

my $text = "De: **" . $from . "**\\n";

if ($cc) {
$text = $text . "Cc: " . $cc . "\\n";
}

my $line = "";
foreach $line (@body) {
$text = $text . $line;
}

# post to blog
my $id = $mt->metaWeblog()->newPost(
title => $subject,
description => $text,
publish => 1
) or die $mt->LastError();

$mt->mt()->setPostCategories(
postid => $id,
categories => \[{categoryId => 1}\]
) or die $mt->LastError();

exit;

Cool! Like Monsieur Jourdain, these people are now blogging without knowing ;-)

* * *

_Update: the above didn't handle quoted-printable, I added the script shown below (found [here](http://sources.redhat.com/ml/gnats-devel/2001-q2/msg00000.html) with a minor correction), called after stripmime_

#!/usr/bin/perl
# Script to translate quoted-printables in MIME-encoded mail messages
# Fully decodes header fields according to RFC2047
# Merges multi-line header fields into single lines

use MIME::QuotedPrint ();

undef $/; # We want to treat everything read from STDIN as one line
$input = ;
($headers, $body) = split (/\\n\\n/, $input, 2);

# Process the headers:
$headers =~ s/\\?=\\s\\n/\\?=\\n/g; # Lines ending with an encoded-word
# have an extra space at the end. Remove it.
$headers =~ s/\\n\[ |\\t\]//g; # Merge multi-line headers into a single line.
$transheaders = '';

foreach $line (split(/\\n/, $headers))
{
while ($line =~ m/=\\?\[^?\]+\\?(.)\\?(\[^?\]\*)\\?=/)
{
$encoding   = $1;
$txt        = $2;
$str\_before = $\`;
$str\_after  = $';

# Base64
if ($encoding =~ /b/i)
{
require MIME::Base64;
MIME::Base64->import(decode\_base64);
$txt = decode\_base64($txt);
}

# QP
elsif ($encoding =~ /q/i)
{
require MIME::QuotedPrint;
MIME::QuotedPrint->import(decode\_qp);
$txt = decode\_qp($txt);
}

$line = $str\_before . $txt . $str\_after;
}
# The decode above does not do underline-to-space translation:
$line =~ tr/\_/ /;
$transheaders .= $line . "\\n";
}

# Process the body:
$transbody = MIME::QuotedPrint::decode($body);

# Output the combined results. We got a free \\n from
# the transheaders concatenation.
print $transheaders . "\\n" . $transbody;
