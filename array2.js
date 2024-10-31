// let arr=[11,22,33,44];

// //iterates existing array
// arr.forEach((element)=>{
//     console.log(element)
// })

// //makes new array
// let a=arr.map((value,index)=>{
//     console.log(value,index)
//     return value+1;
// })

// console.log(a)

// //filters an array
// let arr2=[10,50,30,40,90,100];

// let a2=arr2.filter((a)=>{
//     return a<50;
// })

// console.log(a2);

let arr3=[1,2,3,4,5,6,1];

let a3=arr3.reduce((h1,h2)=>{
    return h1+h2;
})

console.log(a3);