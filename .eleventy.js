const pluginRss = require("@11ty/eleventy-plugin-rss");
const svgSprite = require("eleventy-plugin-svg-sprite");
const dateFilter = require('./src/11ty/dateFilter.js');
const dateFoldersFilter = require('./src/11ty/dateFoldersFilter.js');
const uniqFilter = require('./src/11ty/uniqFilter.js');
const youTubeEmbed = require("./src/11ty/youtubeEmbed.js");
const vimeoEmbed = require("./src/11ty/vimeoEmbed.js");
const pdfEmbed = require("./src/11ty/pdfEmbed.js");
const slugify = require("slugify");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (config) {
  // PASSTHROUGHS
  config.addPassthroughCopy("src/assets/images/");
  config.addPassthroughCopy("src/assets/js/");

  // LAYOUTS //
  config.addLayoutAlias("base", "layouts/base.njk");
  config.addLayoutAlias("post", "layouts/post.njk");

  // FILTERS //
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('dateFoldersFilter', dateFoldersFilter);
  config.addFilter('slugify', slugify);
  config.addFilter('uniq', uniqFilter);

  // SHORTCODES //
  config.addShortcode("youtube", youTubeEmbed);
  config.addShortcode("vimeo", vimeoEmbed);
  config.addShortcode("pdf", pdfEmbed);

  // PLUG-INS //
  config.addPlugin(pluginRss);
  config.addPlugin(svgSprite, {
    path: "./src/assets/icons",
    svgShortcode: "icon",
    globalClasses: "icon",
  });
  config.addPlugin(syntaxHighlight);

  // EXTRAS //
  // Post List Excerpts
  config.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  });

  // BASE CONFIGURATION //
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      data: "data",
    },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
