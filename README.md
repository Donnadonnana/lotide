# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @donnadonnana/lotide`

**Require it:**

`const _ = require('@donnadonnana/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: return the first element in the array;
- `tail(array)`: return everything but the first element
- `middle(array)`: return middle element in the array
- `countLetters(str)`: count the letter number
- `countOnly(allItems, itemsToCount)`: count the required letter
- `findKey(obj,callback)`: find the key bease on the value
- `findKeyByValue(obj, propName)`: find the value bease on the key
- `flatten((arrayWithElements)`: flatten the array with elements into one array
- `map(array, callback)`: return the target item in a array
- `takeUntil(array, callback)`: return the item until the callback hit
- `without(sourceArray, itemsToRemove)`: return the item without the item you want to remove.
