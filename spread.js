const numbers = [34, 56, 76, 23]
console.log(numbers);
console.log(...numbers)
const max = Math.max(...numbers)
console.log(max)

// /////////////////
const first = [1,2,3,4,5]
const second = [...first]
second.push(6);
console.log(first)
console.log(second)

// ////////////////
const ages = [45, 4,6]
const prices = [23, 12, 76]
const all = [...ages , 444, ...prices]
console.log(all)

// ///////////////
const person = {
    name: 'pagol',
    age: 25
}
const employee = {
    designation : 'dev', ...person
}
console.log(employee)