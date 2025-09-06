// function er baire global scope 

const name = 'tom'
if(true){
    const data = 58;
    console.log('inside' ,data)
}
console.log(data)

for (const num of [1,2,3] ){

}

// function er vitor scope ke local scope / function scope bole

function doMath(a,b){

    console.log(a,b)
}
// parameter a,b ke baire use kora jabena

// kono function er vitor function thakle shudhu function er vitor e call kora jabe

