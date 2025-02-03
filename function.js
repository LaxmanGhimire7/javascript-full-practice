//Function

function printNumbers() {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }
  
  // Call the function
  printNumbers();


//2. Write a function that uses a `for` loop to calculate and return the sum of the first `n` natural numbers. 
function sumofnumbers(n) {
    let sum=0;
    for(let a=1; a<=n; a++){
        sum=sum+a;
    }
    return sum;
}
let n=11;
console.log(sumofnumbers(n))


//3. Write a function that uses a `for` loop to print all even numbers between 1 and 20. 
function b(){
    for(let c=1; c<=20; c++){
        console.log(c)
    }
}
b();

//4. Write a function that uses a `for` loop to print all odd numbers between 1 and 20. 
function lakxh(){
    for(let d=1; d<=20; d++){
        if(d%2!=0){
            console.log(d);
        }
    }
}
lakxh();

//5.Write a function that uses a `for` loop to calculate and return the factorial of a given number `n`.
function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers.";
    }
    
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    
    return result;
  }
  
  // Example usage
  const number = 5;
  console.log(`The factorial of ${number} is:`, factorial(number));

//6. Write a function that uses a `for` loop to print the multiplication table of 5. 
function multiplication(){
    for(let f=1; f<=10; f++){
        console.log(f*4);
    }
}
multiplication();

//7. Write a function that uses a `for` loop to print numbers from 10 to 1 in reverse order. 
function reverse(){
    for(let i=10; i>=1; i--){
        console.log(i)
    }
}
reverse();
  
//8. Write a function that uses a `for` loop to print all multiples of 3 between 1 and 30. 
function multiples(){
    for(i=3; i<=30; i+=3){
        console.log(i);
    }
}
multiples()

//9.Write a function that uses a `for` loop to calculate and return the sum of all even numbers between 1 
//and 50.
function even(){
    let sum2=0;
    for(i=1; i<=50; i++){
        if(i%2==0){
        sum2+=i;
        
        }
        
    }
    return sum2;
}
console.log(`The sum of all even numbers between 1 and 50 is ${even()}`);

//10.Write a function that uses a `for` loop to calculate and return the sum of all odd numbers between 1 
//and 50.
function odd(){
    let sum3=0;
    for(i=3; i<=50; i+=3){
        sum3+=i;
    }
    return sum3;
} 
console.log(`Thw sum of all odd numberd from 1 to 50 is ${odd()}.`);

//11. Write a function that uses a `for` loop to print all numbers between 1 and 100 that are divisible by 5. 
function divisible(){
    for(let p=5; p<=100; p+=5){
        console.log(p);
    }
}
divisible();

//12.Write a function that uses a `for` loop to print the first 10 numbers in the Fibonacci sequence.



//13.Write a function that uses a `for` loop to count and return the number of digits in a given positive integer.
function digits(){
} 


//14. Write a function that uses a `for` loop to print the square of each number from 1 to 10.
function square(){
    for (let i=1; i<=10; i++){
        console.log(i**2)
    }
} 
square();

//15.Write a function that uses a `for` loop to calculate and return the sum of the squares of the first `n` natural numbers. 
function calculate(n3){
    let sum3=0;
    for(let i=1; i<=n3; i++){
        sum3=sum3+i*i; // sum3+=i*i;
    }
    return sum3;
}
let n3=4;
console.log(calculate(n3));

//16.Write a function that uses a `for` loop to print the cube of each number from 1 to 10.
function cube(){
    for(i=1; i<=10; i++){
        console.log(`The cube of ${i} is ${i**3}`);
    }
}
cube();

//17.Write a function that uses a `for` loop to find and return the smallest number greater than 0 that is divisible by both 3 and 4.
 function and(){
    for(i=1; ;i++){
        if(i%3==0 && i%4==0){
            return i;
        }
    } 
 }
console.log(`The smallest number divisible by 3 and 4 is:${and()}`);

//18. Write a function that uses a `for` loop to print the first 10 even numbers. 
function even(){
    for(i=1; i<=10; i++){
        console.log(i*2);
    }
}
even();

//19.Write a function that uses a `for` loop to print all numbers from 1 to 100 that are divisible by both 2 and 5.

function hello(){
    for (let x=1; x<=100; x++){
        if( x%2==0 && x%5==0 ){
            console.log(x);
        }
    }
}

hello();



function printDivisibleBy2And5() {
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0 && i % 5 === 0) {
        console.log(i);
      }
    }
  }
  
  // Call the function
printDivisibleBy2And5();
  

//20. Write a function that uses a `for` loop to calculate and return the sum of all multiples of 3 or 5 below 100. 
function multipleeee(){
    let sum6=0;
    for(let m=1; m<=100; m++){
        if(m%3==0 && m%5==0){
            sum6+=m;
            sum6=sum6+m;
        }
    }
    return sum6;
}
console.log(multipleeee());



//function arrow function.......
const sum10=(x,y)=>{
    return x+y
}
let val=sum10(12,12)
console.log(val);

//substraction
const sum11=(x,y)=>{
    return x-y
}
let val1=sum11(5,4)
console.log(val1);


//division
const multi=(a,b)=>{
    return a/b;
}
let value2=multi(6,2)
console.log(value2);

//multi
const div=(a,b)=>{
    return a*b;
}
let value3=div(4,5)
console.log(value3);



//arrow function 

//1. Write an arrow function that returns the sum of two numbers. 
const sum=(a,b)=>{
    return a+b;
}
let value1=sum(1,2);
console.log(`The sum of a and b is ${value1}`);

//2. Write an arrow function that returns the square of a number. 
const square1=(a)=>{
    return a**2;
}
let value5=square1(4);
console.log(`The square of a is ${value5}`);

//3.Write an arrow function that checks if a number is even or odd. 
const or=(d)=>{
    if(d%2==0){
        console.log("Even")
    }
    else{
        console.log("Odd");
    }
}
let value6=or(9);

//4. Write an arrow function that returns the length of a given string. 
const hello5=(str6)=>str6.length;
let string7=hello5('Laxman');
console.log(string7);


//5. Write an arrow function that converts a string to uppercase. 
const uppercase=(h)=> h.toUpperCase();
let variable=uppercase("hello there");
console.log(variable);

//6.Write an arrow function that concatenates two strings. 
const concate=(a,b)=>{
    console.log(a+b);
}

concate("Hello, ", "world!"); 

//7. Write an arrow function that returns the larger of two numbers. 
const larger=(a,b)=>{
    if(a>b && b<a){
        return  a;
    }
    else{
        return b;
    }
}
let numb=larger(12,76);
console.log(`${numb} is greater than another number`);


//8. Write an arrow function that checks if a number is positive, negative, or zero. 
const check=(num)=>{
    if(num>0){
        console.log(`${num} is positive number.`);
    }
    else if(num==0){
        console.log(`${num} is zero.`);
    }
    else{
        console.log(`${num} is a negative number.`);
    }
}
let numbe=check(1-12);


//9. Write an arrow function that takes an array of numbers and returns the first element. 
const ar=(num)=>{
    return num[0];
}
console.log(ar([11,12,13]));

//10. Write an arrow function that returns the last character of a given string. 
const st=(char)=>{
    return char[char.length-1];
}
console.log(st('Laxman'));


//11. Write an arrow function that takes an array and returns the sum of its elements. 
const summ=(arr0)=>{
    let sum12=0;
    for(let numeee of arr0){
sum12=sum12+numeee;
    }
    return sum12;
}
console.log(summ([1,2,10,1]));


//12. Write an arrow function that returns all even numbers from an array. 
const evenNumb=(best)=>{
    let foundEven=[];
    for(let number of best){
        if(number%2==0){
            foundEven.push(number);
        }
    }
    return foundEven;
}
console.log(evenNumb([1,2,4,6,78,99,100]));


//13.Write an arrow function that returns all strings longer than 5 characters from an array.
const longer=(string)=>{
    let foundLong=[];
    
    for(let number of string){
        if(number.length>5){
            foundLong.push(number);
        }
    }
    return foundLong;
}
console.log(longer(["watermelon", "banana", "pea", "apple"]));

//14.Write an arrow function that doubles each number in an array. 
const double=(num)=>{
    let doublednum=[];

    for(doubled of num){
      doublednum.push(doubled*2);
    }
return doublednum;
}
console.log(double([2,3,4,5,6]));

//15. Write an arrow function that checks if a given element exists in an array. 







//16.Write an arrow function that filters out numbers greater than 10 from an array. 
const hell=(num)=>{
    let hellarray=[];
for(let n of num){
    if (n>10){
        hellarray.push(n);
    }
}
return hellarray;
}
console.log(hell([1,5,7,11,1009,87,-1]));




