/* const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

// const a = alphabet[0]
// console.log(a) 
// const b = alphabet[1]
// console.log(b) 

const [a, c, ...rest] = alphabet

const newArray = [...alphabet, ...numbers]// or aplphabet.concat(numbers)

console.log(newArray) */

function sumAndMultiply (a,b) {
  return [a+b, a*b, a/b]
  }

const [sum, multiple, division = 'No division'] = sumAndMultiply(2,3)
console.log(sum)
console.log(multiple)
console.log(division)

const {name: firstname, ...rest /* ='jonh', age, favoriteFood = 'rice' */} = persontTwo
console.log(name)
//console.log(age)
console.log(rest)

const personThree = {...personOne, ...personTwo}