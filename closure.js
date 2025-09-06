function counter (){
    let count = 0;
    function innerFunction (){
        console.log('inside the inner function 1')
    }
    return innerFunction;

}
// const output = counter();
// console.log(output())

function counter (){
    let count = 10;
    return function(){ 
        count += 1;
        console.log('inside the inner function 2' ,count)
    }
}
// const inner =counter()
// inner()
// inner()
// inner()

const rahimcoun = counter();
rahimcoun()
rahimcoun()

console.log('-------------------')
const karimcoun = counter();
karimcoun()
rahimcoun()