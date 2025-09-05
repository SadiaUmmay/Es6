// function declaration 
function add(num1 , num2){
    return num1 + num2
}
// arrow function 
const add2 = (num1 , num2) => num1 + num2


const result = add2(12,8);
console.log(result)

// single parameter 
const getSquare = x => x* x;
console.log(getSquare(8))

// multi line arrow function 
const doMath = (x, y) => {
    const doDouble = x * 2;
    const againDouble = y * 2;
    const result = doDouble + againDouble;
    return result
}
console.log(doMath(2,3))