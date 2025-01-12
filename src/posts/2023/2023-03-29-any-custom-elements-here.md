---
title: "Any custom HTML elements on this page?"
date: 2023-03-28
tags: 
  - post
  - webplatform
  - webcomponents
  - javascript
  - favorite
slug: any-custom-elements-here
---

Speaking of Web Components, this script lists the
[custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
registered on a browser's current page.

<!-- excerpt -->

```js
(
  [...new Set([].map.call(
    document.querySelectorAll('*'), 
    el => el.nodeName.toLowerCase()))
  ].filter(
    customElements.get.bind(customElements)
  )
  .sort()
)
```

You can run it in your browser's JavaScript console to analyze the current page.

That's how you can find for example that the
[gist page](https://gist.github.com/bdelacretaz/68ec08b099248542ba7a970b5f1d8ede) which contains this script uses no less than **28** custom elements - GitHub is serious about Web Compoments!