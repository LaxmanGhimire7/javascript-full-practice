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

// Questions
//1. Write a function that filters out even numbers from an array.
const even=[1,2,3,4,5,6,7,8,9,10] 
let newEven=even.forEach((num)=>{
    if(num%2==0){
        console.log(num);
    }
});

//2. Filter an array to include only odd numbers. 
const odd=[1,2,3,4,5,6,7,8,9,10]
let newOdd=odd.filter((numb)=>{
    if(numb%2!=0){
        console.log(numb);
    }
})

//3. Given an array of strings, filter out strings that have more than 3 characters. 
const string=["laxman", "he", "hi", "hlo","ram","rame"]
const newString=string.map((back)=>{
    if(back.length>3){
        console.log(back);
    }
});

//4. Write a function that filters out negative numbers from an array. 
const negative=[1,0,-23,-1,7,8]
let newNegative=negative.map((lakxh)=>{
    if(lakxh<0){
        console.log(lakxh);
    }
})

//5. Given an array of boolean values, filter out the `true` values. 
const boolean=[true, false, false, true, true]
let newBoolean=boolean.filter((hi)=>{
    if(hi===false){
        console.log(hi);
    }
})

//6. Filter an array of strings to include only those that contain the letter 'a'. 
const contain=["laxman", "bisAl", "hello", "ram"]
let newContain=contain.map((hee)=>{
     if(hee.includes("a") || hee.includes("A")){
         console.log(hee);
     }
})

//7. Filter an array of numbers to return only those greater than 5. 
const greater=[1,2,3,4,5,6,7,8,9,10]
let newGreater=greater.filter((be)=>{
    if(be>5){
        return be;
    }
})
console.log(newGreater);


//filter 
let ar=[1,2,3,4,5,6]
const filterAr=ar.filter((jii)=>{
    return jii %2==0;
})
console.log(filterAr);

//reduce to make a single value......to gain sum..... 
let a=[1,2,3,4,5,6]
const val=a.reduce((acc,y)=>{
    return acc+y;
},0)
console.log(val);


let arrr=[1,2011,3000,4121,50,90]
const vall=arrr.filter((xee)=>{
    return xee>90; 
})
let valle=vall.reduce((acc,h)=>{
    return acc+h;
})
console.log(valle);


//spread operator(...)
const spread=[1,2,3,4,5,6]
let newSpread=[122,...spread,7]
console.log(newSpread);


//rest operator(...) especially used with function......

function jin(...a){
    let add1=a.reduce((acc,items)=>{
        return acc+items;
    },0)
    return add1;
}
const m=jin(1,2,1212,121,212,212,1,22,1,21,21,2,12,1)
console.log(m);


//destructuring.........
const lala=[1,12,34,756]
const [f,b,c,d]=lala
console.log(c);

//destructuring using ...rest operator
const hoho=[1,2,3,4,5,6,7,8,9,0,]
const [v,h,...q]=hoho
console.log(v);
console.log(q);

// 
const obj={
    name:"Lakxh",
    age:21,
    location:"Kathmandu"
}
const {name, age, location}=obj;
console.log(name);
console.log(age);
console.log(location);

//

let userDatan = [
    {
        name:"Lakxh",
        ages:20,
        location:"Kathmandu"
    },
    {
        name:"Sam",
        ages:23,
        location:"Kathmandu"
    },
    {
        name:"Ram",
        ages:26,
        location:"Kathmandu"
    },
    {
        name:"Jivit",
        ages:28,
        location:"Kathmandu"
    }
]

let newUser=userDatan.reduce((ben,ten)=>{
    return ben+ten.ages;
},0)
console.log(newUser);


//8. Write a function that filters out empty strings from an array. 
let empty=["Ram", "Laxman", "","Jivit"]
let newEmpty=empty.filter((you)=>{
    if(you!=""){
        return you;
    }
})
console.log(newEmpty);

//9. Write a function that maps an array of numbers to an array where each number is doubled. 
let double=[1,2,3,4,5,6,7,8,9,10]
let newDaouble=double.map((ers)=>{
    return ers*2;
})
console.log(newDaouble);

//10. Convert an array of numbers into an array of strings using `map`. 
let strings=[1,2,3,4,5,6,7]
let newStrings=strings.map((hjhj)=>{
    return hjhj.toString();
})
console.log(newStrings);

//11. Write a function that converts an array of strings to uppercase using `map`. 
let functiong=["ram", "laxman","saru","saru"]
let newfunctiong=functiong.map((kjkj)=>{
    return kjkj.toUpperCase();
})
console.log(newfunctiong);

//12. Given an array of numbers, map it to an array of `true` (if the number is positive) or `false` (if the number is negative). 
let numbe=[1,2,3,-1,-2,-3]
let newNumbe=numbe.map((nbnb)=>{
    if(nbnb>0){
        return true;
    }
    else{
        return false;
    }
})
console.log(newNumbe);


//13. Write a function that adds 1 to each number in an array using `map`. 
let add=[1,2,3,4,5,6,7,8,9,10]
let newAdd=add.map((addition)=>{
    return addition+1;
})
console.log(newAdd);

//14. Given an array of strings, return an array of the first letter of each string using `map`.
let letter=["Ram", "Laxman", "Saru"]
let newLetter=letter.map((baka)=>{
    return baka.slice(0,1) //charAt(0), baka[0]....

})
console.log(newLetter);

//15. Convert an array of strings to an array of their lengths using `map`. 
let lenth=["Laxman", "Ram", "Bishal"]
let newLenth=lenth.map((yuou)=>{
    return yuou.length;
})
console.log(newLenth);

//16. Write a function that squares each number in an array using `map`.
let square=[2,3,4,5,6,6,7,78,8,6,5,4,4,4,9]
let newSquare=square.map((van)=>{
      return van**2;
})
console.log(newSquare);

//17. Use `forEach` to log each element of an array to the console. 
let consolge=["Ram", "Hari"]
let newConsolge=consolge.forEach((ash)=>{
    console.log(ash);
})

//18. Write a function that uses `forEach` to calculate the sum of an array of numbers. 
let sumn=[1,2,3,4,5,6]
let sano=0;
let newSumn=sumn.forEach((oop)=>{
    sano=sano+oop;
})
console.log(sano);


//19.Use `forEach` to multiply each number in an array by 2 and log the results. 
let arreey=[1,2,3,4,50,6,7]
let newArreey=arreey.forEach((mull)=>{
      console.log(mull*2);
})

//20. Use `forEach` to log each string in an array in uppercase. 
let upper=["hi", "hello","bye"]
let newUpper=upper.forEach((foog)=>{
    console.log(foog.toUpperCase());
})

//21. Use `forEach` to add an exclamation mark to each string in an array and log the new strings. 
let exclamation=["Hello There", "How are you"]
let newExcel=exclamation.forEach((huuh)=>{
    console.log(huuh+"!");
})

