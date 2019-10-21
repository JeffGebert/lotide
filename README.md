# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jeffgebert/lotide`

**Require it:**

`const _ = require('@jeffgebert/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head : returns first item of array.
* tail : keeps everything but the head of the array.
* middle : returns the single item in an odd array or the middle two items in an even array.
* assertArraysEqual: returns true or false if two arrays are equal.
* assertEqual: returns true or false if two values are equal.
* assertObjectsEqual: returns true or false if two objects are equal.
* countLetters: counts letters from array.
* countOnly: returns number of times a string appears in an array of strings.
* eqArrays: returns true or false if two arrays are equal.
* eqObjects: returns true or false if two objects are equal.
* findKey: returns value with a specified value.
* findKeyByValue: returns key with a specified value.
* flatten: crushes arrays within arrays to a single level array.
* letterPositions: returns object with letters as key and values as indexes of position where letter appears.
* map: accepts an array and a callback function and returns a new array with said function performed.
* takeUntil: pass in array and specify a rule to operate until and return a new array.  example return values until number > 4.
* without: accepts array and item.  Returns a new array with item removed.