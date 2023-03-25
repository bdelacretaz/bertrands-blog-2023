module.exports = function (pdfURL, caption) {
  return `
  <figure class="pdf--viewer">
    <pdf-viewer
    canvas-width="600"
    url="${pdfURL}"
    />
    <figcaption>${caption}</figcaption>
  </figure>
  `;
}

