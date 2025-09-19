// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let time = 2.5;
  switch (name) {
    case 'Pure Strawberry Joy':
      time = 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      time = 1.5;
      break;
    case 'Tropical Island':
      time = 3;
      break;
    case 'All or Nothing':
      time = 5;
      break;
  }
  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let cutCounter = 0;
  let lime = 0;
  
  while (wedgesNeeded > 0 && lime < limes.length) {
    let wedgesFromLime = 0;
    
    switch (limes[lime]){
      case 'small':
          wedgesFromLime = 6; break;
      case 'medium': 
          wedgesFromLime = 8; break;
      case 'large':
          wedgesFromLime = 10; break;
    }

    wedgesNeeded -= wedgesFromLime;
    cutCounter+=1;
    lime+=1;
  }
  
   return cutCounter;
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let drink = 0;
  do {
    timeLeft -= timeToMixJuice(orders[drink]);
    drink+=1;
  } while (timeLeft > 0 && drink < orders.length)

  return orders.slice(drink);
}
