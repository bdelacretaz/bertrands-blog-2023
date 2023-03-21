---
title: "Better cleanup your Process objects"
date: 2005-02-01
tags: 
  - "post"
slug: better-cleanup-your-process-objects
---

Today we discovered that the java Process class does not close its three standard file handles when the Process terminates. Me, I didn't find anything in the [docs](http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Process.html) about this.

Running a loop where you create many Process objects may eventually reach your system's limit of open file handles. Many systems will close the unused handles after a while, so the final effect might be time dependent. Have fun. We did ;-)

Here's a test program that demonstrates the problem.

/\*\* Demonstrate that java Process objects eat file handles
\*  if their stdin, stderr and stdout channels are not explicitely
\*  closed.
\*
\*  To see this, run the class until it says "done executing" and
\*  do an lsof on the java process (should show 60 pipe channels).
\*  Then uncomment the three close() calls and rerun the test.
\*/
public class Exec {
public static void main(String\[\] args) throws Exception {
int NMAX=20;
final String command="bash -c exit";
System.err.println("Executing " + command + " " + NMAX + " times....");

for(int i=0; i<NMAX; i++) {
final Process p = Runtime.getRuntime().exec(command);
p.waitFor();

// These three calls are required to avoid eating file handles
// (at least under macosx and linux)
// p.getInputStream().close();
// p.getOutputStream().close();
// p.getErrorStream().close();

if(i % 10 == 0) System.err.print(".");
}

System.err.println("Done executing - press ENTER to exit");
System.in.read();
System.err.println("Done.");
}
}
