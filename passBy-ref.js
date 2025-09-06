
// all primitive values (number, string, boolean) always pass by value
function mult(x,y){
    x = x+5;
    y = y + 5;
    const mul = x * y;
    return mul;
}

const resullt= mult(2,3)
console.log(resullt)
// ///////////////////////////////


const manik = {
    name: 'manik',
    balance: 4000

}
const roton = {
    name: 'name',
    balance: 3000
}

console.log('before call', manik , roton)

function total(p1, p2){
    p1.balance = 0;
    p2.balance = p2.balance/2;
    const all = p1.balance + p2.balance
    return all
}
const balance =total(manik, roton)

console.log(balance)

console.log('after call', manik, roton)