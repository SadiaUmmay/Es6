// value na thakle undefined 
let money;
console.log(money)

//function a kichu return kora na hole undefined 
function total (a,b){
    console.log('valuue ofparameter', a,b)
    const sum = a+ b;
    console.log(sum)
}
const result = total(5, 7);
console.log('value of function call', result)

// delete kore abar dekhte chaile
const banks = ['sonali', 'rupali', 'jonota']
delete banks[1]
console.log(banks[1])

// /type of undefined is undefined
console.log(typeof undefined)

// type of null is a object
console.log(typeof null)
