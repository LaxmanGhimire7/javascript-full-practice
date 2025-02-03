// //call back function.......

// const add = (a, b) => {
//     console.log(a + b);
// }
// function callBackFunction(x) {
//     console.log("callBackFunction");
//     console.log(x);
//     x(100, 2)
// }
// callBackFunction(add);


// //Multiplication

// const all = (a, b) => {
//     console.log(a + b, a - b, a * b, a / b);

// }
// function callBack(x) {
//     console.log(x);
//     x(20, 5)
// }
// callBack(all);


// // call
// const lakxh = (x, y) => {
//     console.log(x + y);
// }

// const sub = (x, y) => {
//     console.log(x - y);
// }

// const div = (x, y) => {
//     console.log(x / y);
// }

// const mul = (x, y) => {
//     console.log(x * y);
// }


// function laxman(m, n, o, p) {
//     m(100, 2);
//     n(20, 5);
//     o(4, 2);
//     p(1, 1);

// }
// laxman(lakxh, sub, div, mul);



// // real world used call back function

// function callBackFunctions(x) {
//     x(100, 50);
// }

// callBackFunctions((a, b) => {
//     console.log(a + b);
// })



let arr=[1,2,3,4,5,6]               //instead of for loop we use this .forEach method........and this donot return anything......
arr.forEach((item)=>{
    console.log(item);
})

let array=[1,2,3,4,5,6]
let sum=0;
arr.forEach((add)=>{
sum=sum+add;
})
console.log(sum);

//sum of even numbers
let arrey=[1,2,3,4,5,6]
let sum1=0;
arrey.forEach((addEven)=>{
    if(addEven%2==0){
        sum1=sum1+addEven;
    }
})
console.log(sum1);

//map (this return the value) and yesma .push() method afai lagxa tyo chai abstraction ma baseko hunxa i.e hamile process dekhdinam.....and tyo push le chai teii array mai haldine kaam
let lakxh=[1,2,3,4,5]
let newArr=lakxh.map((hello)=>{
    return hello*2;
})
console.log(newArr);

//power of all =2 le square gareko....
let power=[1,2,3,4,5,6]
let newPower=power.map((power)=>{
    return power**2;
})
console.log(newPower);

//jkhabks
const product=[
    {
        id:1,
        qty: 5,
        name:"apple"

    },
    {
        id:2,
        qty:2,
        name:"Samsung"
    },
    {
        id:3,
        qty:1,
        name:"Nokia"
    }
]

let newLakxh=product.map((hellos)=>{
    if(hellos.id==2){
        return{...hellos, qty: hellos.qty+1};
    }
    else{
        return hellos;
    }
})
console.log(newLakxh);

