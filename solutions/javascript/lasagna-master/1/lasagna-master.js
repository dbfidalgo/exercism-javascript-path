/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */


export function cookingStatus(remainingTime) {
    if (remainingTime === 0) {
        return 'Lasagna is done.';
    }
    if (remainingTime > 0) {
        return 'Not done, please wait.';
    }
    return 'You forgot to set the timer.';
}

export function preparationTime(layers, timePerLayer = 2) {
    return layers.length * timePerLayer;
}

export function quantities(layers) {
    // for each noodle layer, you will need 50 grams of noodles
    // for each sauce layer, you will need 0.2 liters of sauce

    let noodles = 0;
    let sauce = 0;

    for (let layer of layers) {
        if (layer === 'noodles') {
            noodles += 50;
        }
        if (layer === 'sauce') {
            sauce += 0.2;
        }
    }
    return { 'noodles': noodles, 'sauce': sauce };
}

export function addSecretIngredient(friendsList, myList) {
    /**
     * The function should add the last item from your friend's list to the end of your list.
     * The array that represents your recipe should be modified directly and the function should not return anything.
     * However, the first argument should not be modified - i.e. pop() should not be used.
     */
    let secretIngredient = friendsList[friendsList.length - 1];
    myList.push(secretIngredient);
}

/**
 * Implement a function scaleRecipe that takes two parameters:
 * 1. A recipe object that holds the amounts needed for 2 portions.
 * 2. The number of portions you want to cook.
 * 
 * The function should return a recipe object with the amounts needed for the desired number of portions.
 * You want to keep the original recipe though.
 * This means, in this task the recipe argument should not be modified.
 */
export function scaleRecipe(recipe, portions) {
    let scaledRecipe = {};
    for (let ingredient in recipe) {
        scaledRecipe[ingredient] = (recipe[ingredient] / 2) * portions;
    }
    return scaledRecipe;
}