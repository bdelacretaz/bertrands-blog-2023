bertrands-blog-2023
---

I ported my [grep.codeconsult.ch blog](https://grep.codeconsult.ch/) personal blog to [11ty](https://www.11ty.dev/) in Spring 2023.

The theme is https://github.com/mattdecamp/eleventonia

## How to build the site

    npm install
    npm run 11ty:dev
    npm run 11ty:prod

To debug template syntax problems use

    export DEBUG="Eleventy:Template" ; npx @11ty/eleventy

## Conversion notes

- Export from wordpress.com, provides an XML file for the content and a tar file for images
- Use https://github.com/lonekorean/wordpress-export-to-markdown to convert to Markdown. This required some changes to get the right front matter, including a `slug` to keep the original URLs, patch saved under `old-blog-import` .
