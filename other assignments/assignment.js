// const { S_IFIFO } = require("constants")

// for(let i = 1; i <= 100; i++) {
//     console.group(i)
// }


// if(a < b){
// return a;
// }else{
//     return b; 
// }


// console.log(min(2,5))


let arr =[]
for(let i = 1; i <= 100; i++){
    arr.push(i);
}
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0 && arr[i] % 5 === 0){

    arr[i] = "FizzBuzz"
}
else if(arr[i] % 5 === 0){
    arr[i] = "Buzz"
}
else if(arr[i] % 3 === 0){
arr[i] = "Fizz";
}
else{
    arr[i] = arr[i]
}
console.log(arr[i])
}



// let Admin;
// let Guest;
// Admin =  "Andrew"
// Guest = "John"
// console.log(Admin);

// for (let i = 1; i<=100; i++){
//     console.log(i);
// }

