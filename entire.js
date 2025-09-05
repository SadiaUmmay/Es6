const employee = {
    name : 'Raja',
    designation : 'QA',
    salary : '3000',
    experience : 1
}
// freeze modify o korte dibena
Object.freeze(employee)
// seal  modify korte dibe, add/delete korte dibena
Object.seal(employee)
const keys = Object.keys(employee)
const values = Object.values(employee)
const entries = Object.entries(employee)
// console.log(keys)
// console.log(values)
// console.log(entries)

// delete 
delete employee.salary
console.log(employee)