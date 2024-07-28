/**
 * Check if the input is empty
 * @param {*} input 
 * @returns {boolean}
 */
export function isEmpty(input: unknown): boolean {
  if (input === undefined || input === null) {
    return true;
  }

  if (typeof input === 'string') {
    return input.trim() === '';
  }

  if (Array.isArray(input)) {
    return input.length === 0;
  }

  if (typeof input === 'object') {
    if (input instanceof Map || input instanceof Set) {
      return input.size === 0;
    }
    return Object.keys(input).length === 0;
  }

  if (typeof input === 'boolean' || typeof input === 'function' || typeof input === 'symbol' || typeof input === 'bigint') {
    return false;
  }

  if (typeof input === 'number') {
    return Number.isNaN(input);
  }

  return false;
}

