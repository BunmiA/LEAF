(function (root) {
  const KEYWORDS = ['entertainment', 'music'];

  function containsEntertainment(sourceText) {
    if (typeof sourceText !== 'string' && !(sourceText instanceof String)) {
      return false;
    }

    const normalizedText = String(sourceText).toLowerCase();
    return KEYWORDS.some((keyword) => normalizedText.includes(keyword));
  }

  const namespace = root.LEAF || (root.LEAF = {});
  namespace.containsEntertainment = containsEntertainment;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { containsEntertainment };
  }
})(typeof window !== 'undefined' ? window : global);
