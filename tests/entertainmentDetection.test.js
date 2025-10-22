const assert = require('assert');
const { containsEntertainment } = require('../entertainmentDetection');

function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
  } catch (error) {
    console.error(`✗ ${description}`);
    console.error(error);
    process.exitCode = 1;
  }
}

test('returns true when entertainment keyword is present', () => {
  assert.strictEqual(containsEntertainment('Latest Entertainment news'), true);
});

test('returns true when music keyword is present', () => {
  assert.strictEqual(containsEntertainment('Top Music charts'), true);
});

test('is case insensitive', () => {
  assert.strictEqual(containsEntertainment('ENTERTAINMENT weekly'), true);
});

test('returns false when keyword is absent', () => {
  assert.strictEqual(containsEntertainment('Educational content only'), false);
});

test('returns false when input is not a string', () => {
  assert.strictEqual(containsEntertainment(null), false);
});
