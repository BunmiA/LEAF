console.log('LEAF Interrupt App');

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

function isYouTube() {
  return /(^|\.)youtube\.com$/.test(window.location.hostname);
}

function collectYouTubeText() {
  if (!isYouTube()) {
    return '';
  }

  const textSnippets = [];

  if (typeof document.title === 'string') {
    textSnippets.push(document.title);
  }

  const metaSelectors = [
    'meta[name="title"]',
    'meta[name="description"]',
    'meta[property="og:title"]',
    'meta[property="og:description"]',
  ];

  metaSelectors.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element && typeof element.content === 'string') {
      textSnippets.push(element.content);
    }
  });

  const directSelectors = [
    '#title h1',
    'h1.title',
    'h1.ytd-watch-metadata',
    '#description',
    '#description-inline-expander',
  ];

  directSelectors.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element && typeof element.textContent === 'string') {
      textSnippets.push(element.textContent);
    }
  });

  return textSnippets.join('\n');
}

function collectPageText() {
  const textSnippets = [];

  if (document.body && typeof document.body.textContent === 'string') {
    textSnippets.push(document.body.textContent);
  }

  const youtubeText = collectYouTubeText();
  if (youtubeText) {
    textSnippets.push(youtubeText);
  }

  return textSnippets.join('\n');
}

let lastClassification = null;

function evaluatePage() {
  const textContent = collectPageText();
  const hasEntertainment = containsEntertainment(textContent);

  if (lastClassification !== hasEntertainment) {
    lastClassification = hasEntertainment;
    if (hasEntertainment) {
      console.log('Stop Bunmi');
    } else {
      console.log('Continue Bunmi');
    }
  }

  return hasEntertainment;
}

evaluatePage();

if (isYouTube() && document.body) {
  const observer = new MutationObserver(() => {
    evaluatePage();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });
}
