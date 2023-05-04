// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe('describeArr', () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it('returns an array with a sentence about each person with their name capitalized', () => {
    expect(describeArr(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// FAIL  ./code-challenges.test.js
//   describeArr
//     ✕ returns an array with a sentence about each person with their name capitalized (1 ms)

//   ● describeArr › returns an array with a sentence about each person with their name capitalized

//     ReferenceError: describeArr is not defined
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.
//pseudo
//input: array
//output: an array with a sentence about each person.
//create a function called describeArr that takes in the arr as an argument. Then i want to map over the array to find the name of the person, then to capitalize the first letter, we can use split to separate the letters and the map again to iterate them and capitalize the first intex using toUpperCase. We can put the uppercase letter back with the others with slice, and then join to put the letters back into a string. add everything together using string interpolation.

const describeArr = (arr) => {
   return arr.map(value => `${value.name.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ')} is ${value.occupation}.`)
 }
//*refactor*
// const describeArr = (arr) => arr.map(({ name, occupation }) => `${name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')} is ${occupation}.`);

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe('allThatRemains', () => {

  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]

  it('returns an array of only remainders of the numbers when divided by 3', () => {
    expect(allThatRemains(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(allThatRemains(hodgepodge2)).toEqual([2, 1, -1 ])
  })
})
// FAIL  ./code-challenges.test.js
//   allThatRemains
//     ✕ returns an array of only remainders of the numbers when divided by 3 (7 ms)

//   ● allThatRemains › returns an array of only remainders of the numbers when divided by 3

//     ReferenceError: allThatRemains is not defined

// Expected output: [ 2, 0, -1, 0 ]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.
//input: array
//output: remainders of the numbers divided by three
//create a function called allthatremains that takes an array as an argument. i'll create a new variable called nums, and I'll use filter to pull only the numbers from the array using the typeof method. then ill use map to iterate over each number, and put the remainders when divided by three into a new array. Then return nums.

const allThatRemains = (arr) => {
  const nums = arr.filter((value)=> typeof value === 'number').map(value => value %3)
  return nums
}

// *refactor*
// const allThatRemains = (arr) => {
// let nums = arr.filter(value => typeof value === 'number')
// return nums.map(value => value % 3)
// }



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe('cubeNum', () => {

  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]

  it('takes in an array of numbers and returns the sum of all the numbers cubed', () => {
    expect(cubeNum(cubeAndSum1)).toEqual(99)
    expect(cubeNum(cubeAndSum2)).toEqual(1125)
  })
})



// Expected output: 99
// Expected output: 1125

// b) Create the function that makes the test pass.
//pseudo
//input: array
//output: sum of all numbers cubed
//Then establish a variable for the sum of the numbers.
//make a function called cubeNum. Then use the higher order function map to iterate through the array and cube all the numbers. 
// inside map i want to the sum to be added to the current value at each iteration. 
// lastly return the sum.

const cubeNum = (arr) => {
let sum = 0
arr.map(value => sum += (value**3))
return sum
}