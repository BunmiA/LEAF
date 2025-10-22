console.log('LEAF Interrupt App');

const pageTextContent = document.body ? document.body.textContent || '' : '';

// window.LEAF is the shared namespace created in entertainmentDetection.js so
// the detection logic can be reused by the content script, popup, tests, etc.,
// without duplicating the keyword list in each file.
const containsEntertainment =
  (window.LEAF && window.LEAF.containsEntertainment) ||
  ((sourceText) => {
    if (typeof sourceText !== 'string' && !(sourceText instanceof String)) {
      return false;
    }

    const normalizedText = String(sourceText).toLowerCase();
    return normalizedText.includes('entertainment') || normalizedText.includes('music');
  });

if (containsEntertainment(pageTextContent)) {
  console.log('Stop Bunmi');
} else {
  console.log('Continue Bunmi');
}
