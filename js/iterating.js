(function () {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    const names = ["Paul", "John", "George", "Ringo"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // for (const name of names) {
    //     console.log(name);
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    // names.forEach(function(name) {
    //     console.log(name);
    // })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

//     FIRST
    function first(arr) {
        return arr[0];
    }

    console.log(first([1, 2, 3, 4, 5]));

    function second(arr) {
        return arr[1];
    }

    console.log(second([1, 2, 3, 4, 5]));

    function last(arr) {
        return arr[arr.length-1];
    }

    console.log(last([1, 2, 3, 4, 5]));

})();
