---
title: "Java, Flash and BeanShell: winning team!"
date: "2003-11-21"
categories: 
  - "thoughts"
---

I've been working on a control system for an [exhibition](http://www.archimob.ch/) lately, designing and writing software for an interactive movie theater.

The audience will use hardware buttons (interfaced via an [Ethernet-based module](http://barix.com/)) to vote and decide which short film to play next, based on an interactive display of choices and votes.

From the kind of project and the team's organisation, I felt early on that the specs were going to evolve a lot during the project (read: chaotic team, but mostly in a nice sense). Flexibility of the software is a big requirement here.

That's where [BeanShell](http://www.beanshell.org/) comes in: being able to glue robust java components with a few lines of script to define the interactions between the various mechanical and multimedia components has been a _big_ help.

I've been thinking a lot about how to best combine compiled and interpreted code lately, and this is it! First you build your java components, quickly play with them with small scripts to get the interfaces right, and finally you write interpreted stuff like:

// display choices and vote
flashDisplay.showScreen("screen-1 selection=12");
filmName = votingRules.vote();

// prepare to play film
video.loadFilm(filmName);
flashDisplay.fadeToBlack(FADEOUT\_TIME);
lights.setScene(FILM\_PLAYING\_SCENE);
displaySwitch.select(FILM\_DISPLAY);

// play film and wait for end
video.play();
video.waitForEnd();
. . .

This is the kind of code that you can even show to your customers to discuss the details, but all the critical machinery is safely defined in java code.

The coin dropped when, during a demo, I was able to design and show a new transition (by editing one file while the system was running) on the big screen while people were arguing about how best to move from film to vote phases. They saw it, they like it, case closed!

Scripting is here to stay, and I'm very happy with this combination. There's much more to BeanShell than what the above examples show: event handlers, interfaces, typeless or strict programming, it is very flexible.

For the visuals we use Flash - I'm fortunate to be in touch with [Pierre Rossel](http://www.prossel.com) who's got the right mix of programming and artistic skills to build a Flash-based "intelligent slave display" which is under complete control of the java/BeanShell code and puts a nice face on it all.

This project has really been an eye-opener for me - although not very original, this combination of tools has allowed us to answer every request easily. You want it beautiful? Put it in the Flash module. Complex and robust? Create a new java component. Quick and easy? Ask BeanShell.

It's hard to go back to less exciting projects after this, but so is life...
