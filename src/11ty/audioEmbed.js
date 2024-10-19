module.exports = function (audioURL, title) {
    return `
  <audio 
    controls
    src="${audioURL}"
    >
    Sorry - your browser does not seem to support the &lt;audio&gt; tag.
  </audio>
  `;
  }