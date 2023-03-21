---
title: "Javascript's toSource() is fun"
date: 2006-10-18
tags: 
  - "tools"
  - "post"
slug: javascripts-tosource-is-fun
---

js> x = { "name" : 'Duck', "surname" : 'Donald' }
\[object Object\]

js> x.toSource()
({surname:"Donald", name:"Duck"})

js> x.f = function(i) { return i+2; }

function (i) {
return i + 2;
}

js> x.f(12)
14

js> x.toSource()
({surname:"Donald", name:"Duck", f:(function (i) {return i + 2;})})

See the [reference](http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Global_Objects:Object:toSource) for more info.
