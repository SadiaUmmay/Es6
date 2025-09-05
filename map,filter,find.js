const students =[
    {id: 1, name: 'abul', marks: 86},
    {id: 2, name: 'kabul', marks: 79},
    {id: 3, name: 'babul', marks: 36},
    {id: 4, name: 'tabul', marks: 84},
]
const names = students.map(student => student.name)

// sob gula paite chaile filter korbo 
const good = students.filter(student => student.marks>80)

// shudhu prothom ta chaile find nebo 
const goodStudent = students.find(student => student.marks>80)

console.log(goodStudent)