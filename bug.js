function foo(a, b) {
  if (a === b) {
    return true;
  }
  if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}
console.log(foo(10, 2)); // Output: true
console.log(foo(15, 5)); // Output: true
console.log(foo(24, 18)); //Output: true
console.log(foo(17, 10));// Output: true