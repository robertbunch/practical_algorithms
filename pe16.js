console.time('pe16')
gridSize = 3;

// Answer: 1366
// 2^15 is 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26
// What is the sum of the digits of the number 2^1000

// const two_fact = (2 ** 1000).toString()
// console.log(two_fact)
// console.log(Math.pow(2,1000))
let number = [1]
let sum = 0;

for(let i = 0; i < 10; i++)
{
    let overflow = 0
    let count = number.length + 1
    console.log("i: ",i)
    console.log(overflow,count)

    for(let j = 0; j < count; j++){
        console.log("j: ",j)
        let digit = number[j] || 0;
        console.log(digit)
        digit = 2 * digit + overflow;
        console.log(digit)

        if(digit > 9)
        {
            digit -= 10;
            overflow = 1;
        }
        else
        {
            overflow = 0;
        }
        number[j] = digit;
    }
}

for(var i = 0; i < 1000; i++)
{
    sum += number[i];
}

console.log(sum);

console.timeEnd('pe16')