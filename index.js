let x = 1;
let sum = 0;

while (x <= 10) {
  sum = sum + x;
  x++;
}
console.log(sum);

let num = 1;
let total = 100;
// (!0) === True
while (num <= total) {
  if (!(num % 3) && !(num % 5)) {
    console.log("FizzBuzz!");
  } else if (!(num % 3)) {
    console.log("Fizz!");
  } else if (!(num % 5)) {
    console.log("Buzz!");
  } else {
    console.log(num);
  }
  num += 1;
}
console.log(Boolean(0));
console.log(Boolean(1));
// Examples of While loops. Notice Initializing, Conditional placements, and Incremention.
/**
 * '!' is the NOT operator. It's a UNARY OPERATOR.
 * Using this in front of any data type (such as a number)
 * will immediately convert that data type into a Boolean.
 * Then, that value will be inversed as per the NOT operator.
 */
console.log(!0);
console.log(!"hello");
console.log(!"");
