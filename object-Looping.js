const nums= [1,2,3,4,5]
for (const num of nums){
    console.log(num);
    
}
const employee={
    name: 'soder',
    age: 24,
    salary: 23000
}
for(const key in employee ){
    console.log(key)
    const value = employee[key]
    console.log(value)
}
const keys = Object.keys(employee)
console.log(keys)
for(const key of keys){
    const value= employee[key];
    console.log(value)
}
