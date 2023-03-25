module.exports = function (pdfURL, caption) {
  return `
  <figure class="pdf--viewer">
    <pdf-viewer
    canvas-width="600"
    url="${pdfURL}"
    />
    <figcaption>${caption}</figcaption>
    <noscript>
      We're unable to show this preview, but
      you can find the document at
      <br/>
      <a href="${pdfURL}">${pdfURL}</a>
    </noscript>
  </figure>
  `;
}

