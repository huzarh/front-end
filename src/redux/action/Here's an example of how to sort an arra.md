Here's an example of how to sort an array of numbers in descending order using JavaScript's `sort()` method:

```
let numbers = [5, 2, 9, 1, 7];

numbers.sort(function(a, b) {
  return b - a;
});

console.log(numbers);
// Output: [9, 7, 5, 2, 1]
```

In this example, the `sort()` method takes a callback function that specifies the sorting order. The function compares two elements `a` and `b` and returns `b - a` which sorts the elements in descending order.
