// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let cardCounter = 0;
  stack.forEach(element => {
    if (element === card) {
      cardCounter++;
    }
  });
  return cardCounter;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  // type === true -> even
  // type === false -> odd
  let oddCounter = 0;
  let evenCounter = 0;
  for (const element of stack) {
    if (type === true && element % 2 === 0) {
      evenCounter++;
    } else if (type === false && element % 2 !== 0) {
      oddCounter++;
    }
  }
  return type === true ? evenCounter : oddCounter;
}
