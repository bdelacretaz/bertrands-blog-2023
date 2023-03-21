// From https://www.seanmcp.com/articles/add-a-youtube-embedder-shortcode-to-your-eleventy-site/

module.exports = function (videoURL, title) {
  const url = new URL(videoURL);
  const id = url.searchParams.get("v");
  return `
<iframe 
  class="yt-shortcode" src="https://www.youtube-nocookie.com/embed/${id}"
  title="YouTube video player${title ? ` for "${title}"` : "" }"
  frameborder="0"
  allowfullscreen>
</iframe>
`;
}