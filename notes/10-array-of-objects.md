# Array Of Objects

This is the same as with props, because props are objects.

Instead of directly accessing the data, we need to specify that we want to access the data from the current object of the map iteration.

The map function takes a function as an argument, which is called for each item in the array.

It returns an array of the results of each iteration, allowing to modify the data, even if it's immutable.