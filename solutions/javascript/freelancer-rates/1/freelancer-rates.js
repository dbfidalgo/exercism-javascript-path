// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

export const FREELANCER_HOURS_PER_DAY = 8;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * FREELANCER_HOURS_PER_DAY;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour))
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate

  1. Get daily rate.
  2. Split project days into full months (22 days each) + leftover days.
  3. Apply discount on full months.
  5. Add cost of remaining days.
  6. Round up the result.
 
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {  
  const BILLABLE_DAYS = 22;
  let dailyRate = dayRate(ratePerHour);
  let fullMonths = Math.floor(numDays / BILLABLE_DAYS);
  let remainingDays = numDays % BILLABLE_DAYS;
  let monthlyRate = dailyRate * BILLABLE_DAYS;
  let discountedMonthlyRate = monthlyRate * (1 - discount);
  let remainingDaysRate = remainingDays * dailyRate;
  return Math.ceil((fullMonths * discountedMonthlyRate) + remainingDaysRate)
}
