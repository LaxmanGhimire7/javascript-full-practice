//do while loop;

//1. Counting from 1 to 20: Write a loop to print numbers from 1 to 20. 

let a=1;
do{
    console.log(a);
    a++;
}while(a<=20)


//2. Sum of First 10 Numbers: Use a loop to calculate the sum of the first 10 natural numbers (1, 2, 3, ..., 
//10). 
let b=1;
let sum=0;
do{
    sum=sum+b;
    b++;
}
while(b<=10)
    console.log(sum);

//3. Multiplication Table of 5: Create a loop to print the multiplication table of 5. 
let c=1;
do{
    console.log(c*5);
    c++;
}while(c<=10)


//4. Print Numbers from 1 to 100: Write a loop to print numbers from 1 to 100. 
let d=1;
do{
    console.log(d);
    d++;
}while(d<=100)

//5. Sum of Odd Numbers: Use a loop to calculate the sum of odd numbers between 1 and 10. 
let e=1;
let sum1=0;
do{
    if(e%2!==0){
        sum1=sum1+e;
    }
    
    e++;
}while(e<=10)
console.log(sum1);

//6. Count Down from 20 to 1: Write a loop to print numbers from 20 down to 1.
let f=20;
do{
    console.log(f);
    f--;
}while(f>=1)


//7. Print Multiples of 3: Use a loop to print the first 10 multiples of 3.
let g=1;
do{
    console.log(g*3);
    g++;
}while(g<=10);


//8. Print Squares of Numbers: Write a loop to print the square of each number from 1 to 10. 
let h=1;
do{
    console.log(h**2);
    h++;
}while(h<=10)


//9. Sum of First 100 Numbers: Use a loop to calculate the sum of the first 100 natural numbers. 
let i=1;
let sum2=0;
do{
    sum2=sum2+i;
    i++
}while(i<=100)
console.log(sum2)

//10.  Print Cube of Numbers: Write a loop to print the cube of each number from 1 to 5. 
let j=1;
do{
    console.log(j**3);
    j++
}while(j<=5)


//11.Print Numbers in Reverse Order: Write a loop to print numbers from 50 down to 1. 
let k=50;
do{
    console.log(k);
    k--;
}while(k>=2)
    console.log(k)

//12. Count Down Odd Numbers: Create a loop to print odd numbers from 19 down to 1.
let l=19;
do{
    if(l%2!==0){
        console.log(l);
    }
    l--;
}while(l>=1)


//13. Sum of First 5 Odd Numbers: Use a loop to calculate the sum of the first 5 odd numbers (1, 3, 5, 7, 9). 
let m=1;
let sum3=0;
do{
    if(m%2!==0){
        sum3=sum3+m;
    }
    m++;
}while(m<=10){
    console.log(sum3);
}

//14. Print the First 10 Positive Integers: Write a loop to print the first 10 positive integers. 
let n=1;
do{
    console.log(n)
    n++
}while(n<=10)

//15. Print Powers of 2: Use a loop to print the powers of 2 from `2^1` to `2^10`. 
let o=1;
do{
    console.log(2**o)
    o++
}while(o<10)

//16.  Sum of First 10 Even Numbers: Write a loop to calculate the sum of the first 10 even numbers (2, 4, 6, 
//..., 20). 
let p=1;
let sum4=0;
do{
    if(p%2==0){
        sum4=sum4+p;
    }
    p++
}while(p<=20){
    console.log(sum4)
}

//17.Print Multiples of 4: Create a loop to print the first 10 multiples of 4. 
let q=1;
do{
    console.log(q*4);
    q++
}while(q<=10)


//18.Print First 5 Prime Numbers: Write a loop to print the first 5 prime numbers. 



//19. Reverse Counting Even Numbers: Use a loop to print even numbers from 30 down to 10. 
let s=30;
do{
    if(s%2==0){
        console.log(s);
    }
    s--;
}while(s>=10)