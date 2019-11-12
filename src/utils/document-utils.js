const DocumentUtils = {
  scrollToTop(params = {}) {
    const documentTop = document.querySelector('.Header');
    if (documentTop) {
      documentTop.scrollIntoView(params);
    }
  },
};

export default DocumentUtils;
