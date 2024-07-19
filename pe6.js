// answer: 25164150
// The sum of the squares of the first ten natural numbers 
// is 1^2 + 2^2 + 3^2... = 385
// The square of the sum of the first ten natural numbers 
// is (1 + 2 + 3 + 4...)^2 == 55^2 = 3025,
// Hence the difference between the sum of the squares 
// of the first ten natural numbers and the square of the 
// sum is 3025 - 385 = 2640.
// Find the difference between the sum of the squares of 
// the first one hundred natural numbers and the square 
// of the sum.

console.time('squares')
let sum_of_squares = 0
let sum_for_squaring = 0

// we need a loop for our number to keep track of 
for(let i = 0; i < 101; i++){
    sum_of_squares += i ** 2 //sum the squares
    sum_for_squaring += i //sum the numbers
}
sum_squared = sum_for_squaring ** 2
console.log(sum_squared - sum_of_squares)

console.timeEnd('squares')