// Loop

//1. Counting from 1 to 20: Write a loop to print numbers from 1 to 20.

for (i = 1; i <= 20; i++) {
    console.log(i);
}

//2.Sum of First 10 Numbers: Use a loop to calculate the sum of the first 10 natural numbers (1, 2, 3, ..., 10). 

let sum4 = 0;
for (j = 1; j <= 10; j++) {
    sum4 = sum4 + i;
}
console.log(sum4);


//3.  Multiplication Table of 5: Create a loop to print the multiplication table of 5. 
for(a=1; a<=10; a++){
    console.log(a*5);
}


//4. Print Numbers from 1 to 100: Write a loop to print numbers from 1 to 100. 
for(b=1; b<=100; b++){
    console.log(b);
}

//5. Print Numbers from 1 to 100: Write a loop to print numbers from 1 to 100. 
let sum=0;
for(c=1; c<=10; c++){
    if(c%2!==0){
        sum=sum+c;
    }
}
console.log(sum);

//6. Count Down from 20 to 1: Write a loop to print numbers from 20 down to 1. 
for(d=20; d>=1; d--){
    console.log(d)
}

//7. Print Multiples of 3: Use a loop to print the first 10 multiples of 3. 
for(e=1; e<=10; e++){
    console.log(e*3);
}

//8. Print Squares of Numbers: Write a loop to print the square of each number from 1 to 10. 
for(f=1; f<=10; f++){
    console.log(`The square of ${f} is ${f ** 2}`);
}

//9. Sum of First 100 Numbers: Use a loop to calculate the sum of the first 100 natural numbers. 
sum3=0;
for(g=1; g<=100; g++){
    sum3=sum3+g;
}
console.log(`The sum of all first natural number is ${sum3+g}`);

//10. Print Cube of Numbers: Write a loop to print the cube of each number from 1 to 5. 
for(h=1; h<=5; h++){
    console.log(`The cube of ${h} is ${h**3}`);
}

//11.Print Numbers in Reverse Order: Write a loop to print numbers from 50 down to 1. 
for(i=50; i>=1; i--){
    console.log(i);
}

//12. Count Down Odd Numbers: Create a loop to print odd numbers from 19 down to 1. 
for(i=19; i>=1; i--){
    if(i%2!==0){
        console.log(i)
    }
}

//13.Sum of First 5 Odd Numbers: Use a loop to calculate the sum of the first 5 odd numbers (1, 3, 5, 7, 9). 
let sum5=0;
for(j=1; j<=9; j++){
    if(j%2!==0){
        sum5=sum5+j;
    }
}
console.log(sum5);

//14. Print the First 10 Positive Integers: Write a loop to print the first 10 positive integers. 
for(k=1; k<=10; k++){
    console.log(k);
}

//15. Print Powers of 2: Use a loop to print the powers of 2 from `2^1` to `2^10`. 
for(l=1; l<=10; l++){
    console.log(2**l)
}

//16.Sum of First 10 Even Numbers: Write a loop to calculate the sum of the first 10 even numbers (2, 4, 6, 
//..., 20). 
let sum7=0;
for(m=1; m<=20; m++){
    if(m%2==0){
        sum7=sum7+m;
    }
}
console.log(sum7);

//17. Print Multiples of 4: Create a loop to print the first 10 multiples of 4. 
for(n=1; n<=10; n++){
    console.log(n*4)
}

//18.Print First 5 Prime Numbers: Write a loop to print the first 5 prime numbers. 



//19. Reverse Counting Even Numbers: Use a loop to print even numbers from 30 down to 10. 
for(p=30; p>=10; p--){
    console.log(p);
}


//Prime number 
let num7 = 3
let isprime = 0                 //isprime-2
for (i=2;i<num7;i++){
    if(num7%i==0){
        isprime = 1
    }
}

if (isprime==1){
    console.log("not prime number")
}

else if(isprime==0){
    console.log("prime")
}




let num8 = 11;
let isPrime = true;

for (let i = 2; i < num7; i++) {
    if (num8 % i === 0) {
        isPrime = false;
        break;
    }
}

if (!isPrime) {
    console.log("Not prime");
} else {
    console.log("Prime");
}




let num1=3;
let num=4;
if(num>num1){
    console.log(`${num} is greter than other number` );
}
else{
    console.log("Num1 is greater");
}


// num1=3
//num=4
// if(num>num1)
//print num is greater than num1
//else 
//num1 is greater