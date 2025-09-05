const friends = ['zabed', 'pavel', 'nobel' ,'kodbel']
const nameLength = friends.map(name=> name.length)
const firstLetter = friends.map(name=> name[0].toUpperCase())
console.log(nameLength)
console.log(firstLetter)

// const result = numbers.map((num, index)=>{
//     console.log(num * index)
//     return index
// })
// console.log(result)