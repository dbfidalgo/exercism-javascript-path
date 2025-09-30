/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Margherita: $7
 * Capprese: $9
 * Formaggio: $10
 * 
 * Extras:
 * ExtraSauce: $1
 * ExtraTopping: $2
 */

const PIZZA_PRICES = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10,
};

const EXTRA_PRICES = {
  ExtraSauce: 1,
  ExtraToppings: 2,
};

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  // Base case
  if (extras.length === 0) {
    // no more extras, return the base price of the pizza
    return PIZZA_PRICES[pizza];
  }
  // Recursive case
  // 1. Get the first extra
  const [firstExtra, ...remainingExtras] = extras;
  // 2. Get the price of the first extra
  const extraPrice = EXTRA_PRICES[firstExtra];
  // 3. Recursively call pizzaPrice with the remaining extras
  return extraPrice + pizzaPrice(pizza, ...remainingExtras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  // 1. Initialize total price to 0
  let totalPrice = 0;
  // 2. Loop through each pizza order
  for (const order of pizzaOrders) {
    // 3. For each order, calculate the price of the pizza with extras
    totalPrice += pizzaPrice(order.pizza, ...order.extras);
  }
  return totalPrice;
}
