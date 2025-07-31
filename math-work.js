

// //excercise 1
const num1 = 4.789;
const num2 = 12.345;
const num3 = -8.5;

const answer1 = Math.round(num1)
const answer2 = Math.round(num2)
const answer3 = Math.round(num3)
console.log(answer1,answer2,answer3)

//excercise 2
const numberSet = [14, 2, -5, 101, 35, 8];
const max = Math.max(...numberSet)
const min = Math.min(...numberSet)

console.log(max,min)


//excercise 3
const base = 5;
const exponent = 3;
const numberForSqrt = 64;

const sqrt = Math.sqrt(numberForSqrt)
const expo = Math.pow(base,exponent)
console.log(sqrt,expo)

//excercise 4
const radius  = 7
const area = Math.PI * Math.pow(radius,2)
console.log(area)