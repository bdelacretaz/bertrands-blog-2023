const pluginRss = require("@11ty/eleventy-plugin-rss");
const svgSprite = require("eleventy-plugin-svg-sprite");
const dateFilter = require('./src/11ty/dateFilter.js');
const dateFoldersFilter = require('./src/11ty/dateFoldersFilter.js');
const uniqFilter = require('./src/11ty/uniqFilter.js');
const youTubeEmbed = require("./src/11ty/youtubeEmbed.js");
const slugify = require("slugify");

module.exports = function (config) {
  // PASSTHROUGHS
  config.addPassthroughCopy("src/assets/images/");

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

  // PLUG-INS //
  config.addPlugin(pluginRss);
  config.addPlugin(svgSprite, {
    path: "./src/assets/icons",
    svgShortcode: "icon",
    globalClasses: "icon",
  });

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
