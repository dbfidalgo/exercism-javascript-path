// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join('')) + Number(array2.join(''));
}

/**
 * Checks whether a number is a palindrome.
 * palindromic numbers remain the same when the digits are reversed.
 * same forwards and backwards i.e. 121, 1331, 12321, etc.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  /** 
   * hint: This task can be solved by treating the number as a string and checking whether the string equals its reversed version.
   * 1. Convert the number into a string
   * 2. Reverse the string
   * 3. Compare the original string with the reversed string
   */
  const stringValue = String(value);
  const reversedStringValue = stringValue.split('').reverse().join('');
  return stringValue === reversedStringValue;

}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input === '') {
    return 'Required field';
  }
  if (isNaN(Number(input)) || Number(input) === 0) {
    return 'Must be a number besides 0';
  }
  return '';
  
}
