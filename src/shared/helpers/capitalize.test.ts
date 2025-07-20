import { describe, expect, it } from 'vitest';

import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('returns empty string unchanged', () => {
    expect(capitalize('')).toBe('');
  });

  it('returns single character capitalized', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('does not change already capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('handles non-letter first character', () => {
    expect(capitalize('1abc')).toBe('1abc');
  });
});
