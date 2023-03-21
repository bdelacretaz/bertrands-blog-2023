bertrands-blog-2023
---

Porting my [grep.codeconsult.ch blog](https://grep.codeconsult.ch/)
to [11ty](https://www.11ty.dev/).

The theme is https://github.com/mattdecamp/eleventonia

## Building the site

    npm install
    npm run 11ty:dev
    npm run 11ty:prod

## Import TODO

### Wordpress conversion
- Fix front matter: fix dates, add "post" tag, add slug (from <link> in xml)
- Move categories to tags in front matter
- Redirect images to `/assets`
- Fix http://codeconsult.ch/bertrand/ images links

### Blog

- Do not require the "post" tag??
- Missing images?

## Import DONE

- Remove .html extensions
- Put tags at the top of posts

## Links that should still work after conversion

* [about page](https://grep.codeconsult.ch/about-me/)
* [post 1](https://grep.codeconsult.ch/2023/03/16/wwsw-well-written-subtly-wrong/)
* [post 2](https://grep.codeconsult.ch/2020/08/06/how-to-record-decent-conference-videos-without-breaking-the-bank/)
* [post 3](https://grep.codeconsult.ch/2018/01/03/would-you-hire-an-open-source-developer/)
* [post 4](https://grep.codeconsult.ch/2009/10/30/life-in-open-source-communities-live-at-apachecon/)

## Conversion steps

- Export from wordpress.com, provides an XML file for the content and a tar file for images
- Use https://github.com/lonekorean/wordpress-export-to-markdown to convert to Markdown. This required some changes to get the right front matter, including a `slug` to keep the original URLs