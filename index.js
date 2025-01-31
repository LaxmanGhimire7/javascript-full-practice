// // console.log("Hello user")
// // alert("Hi user")

// // user_name=prompt("Enter your name")
// // age=prompt("Your age?")
// // school_name=prompt("Enter your school")
// // contact=prompt("Your contact")
// // console.log(user_name)
// // console.log(age)
// // console.log(school_name)
// // console.log(contact)


// userName="Lakxh"
// console.log(userName)


// lastName="Ghimire"
// console.log(lastName)


// user2="hehehe"
// console.log(user2)

// userName="Ram"
// console.log(userName)

 

// //data type  (2)

// //1. Primitive : a. String  (strr="sjsh11")
//                        // console.log(type of strr)


//             // b. boolean >> true(1)  and false(0)
//             // c. Number
//             // d. undefined
//             // e. null   

//             x=null;
//             x={name: "Lakxh"}
//             console.log(typeof null)

//             //null is user defined and it is defined by user like x=null and if there is x; only it is undefined.



//             // f. symbol  : unique id generate garna 

//             // g. bigInt
            
//             x=9090
//             console.log(typeof x)

//             y=BigInt(7289364764896348164481686376837676576726346)
//             console.log(typeof y)


// //2. Non-primitive : a. Array
//                  // b. Object
//                  // c. function


//     x=9090
//     console.log(typeof x)

//     y=BigInt(7289364764896348164481686376837676576726346)
//     console.log(typeof y)



//     //object
//     lax={ firstName:"Lakxh", lastName: "Ghimire", address:"ktm"};
//     console.log(lax)
//     console.log(typeof lax)

//     //array
//     student=[firstName = "Laxman", lastName = "Ghimire", age=12, contact=9876544312, id=12233]
//     console.log(student[4])


    
// //function collection of logic.......input,professing and output dinye logically....

// function print(){
//    console.log("Hello")
// }
// print()


// function logic(a){
//     return a
// }
// console.log(logic(7));
// console.log(typeof logic)


// //const values are not changed....we can never update or assign any value in const
// //values should be assigned initially in const while defining

// //var everything is possible we can easily update and assign values according to our desire ......not usable nowadays because of bugs....

// //let   values are updated or overwritten by another and we cannot create orther variables using let as it throws error or we cannot re declare
//                                            //  eg; let x=30
//                                            //console.log(x)

//                                            //let x now we cannot use x again using let

                                           




// console.log(true+1)
// console.log(true+"hi"+true)   //type casting if it used in number it gives number and if it is used with string it gives in string
// console.log(true-1)
// console.log(true/0)
// console.log(false/0)
// console.log(true/0)
// console.log(0/true)
// console.log(0/false)
// console.log(true+false+1)


// // operators in js

// //Assignment operator
// let z=5
// z+=5           //z=z+5
// console.log(z)
   



// let age=60
// if (age>20 && age<60){
//     console.log("Adult")
// }
// else if(age>=60){
//     console.log("Old")

// }
// else{
//     console.log("Minor")
// }


for(h=1;h<=10;h++){
    console.log(h*5)
}


let num=100;

if(num%2==0){
    console.log("Even")
}
else{
console.log("odd")
}


let sum=0
for(o=1;o<=20;o++){
if(o%2==0){
 sum=o+sum;
}
}
console.log(sum)


//Assignment of 50 questions............


//1. Age Check: Write an `if-else` statement to check if a person is 18 years old or older. Print "Adult" if 
//true, otherwise "Not an adult." 
let age=18;
if(age>=18){
    console.log("Adult");
}
else{
    console.log("Not an adult");
}

//2.Number Sign: Write an `if-else` statement to check if a number is positive. Print "Positive" if true, 
//otherwise "Not positive." 

let hi=-1;
if(hi>0){
    console.log("Positive");
}
else{
    console.log("Negative");
}


//3.Even or Odd: Write an `if-else` statement to check if a number is even. Print "Even" if true, otherwise 
//"Odd." 
let hlo=10;
if(hlo%2==0){
    console.log("Even");
}
else{
    console.log("Odd")
}


//4.Vowel or Consonant: Write an `if-else` statement to check if a given character is a vowel. Print "Vowel" if true, otherwise "Consonant." 
let char=h;
if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u' || char==='A' || char==='E' || char==='I' || char==='O' || char==='U'){
    console.log("Vowel")
}
else{
    console.log("Consonant")
}


//5.Check Zero: Write an `if-else` statement to check if a number is zero. Print "Zero" if true, otherwise 
//"Non-zero."
let zero=0;
if(zero===0){
    console.log("Zero")
}
else{
    console.log("Non-zero")
}

//6.Multiple of Five: Write an `if-else` statement to check if a number is a multiple of 5. Print "Multiple of 5" if true, otherwise "Not a multiple of 5." 
let multiple=2445;
if(multiple%5==0){
    console.log("Multiple of Five");
}
else{
    console.log("Not a multiple of 5");
}

//7.Greater Than Ten: Write an `if-else` statement to check if a number is greater than 10. Print "Greater 
//than 10" if true, otherwise "10 or less." 
let than=10;
if(than>10){
    console.log("Greater than ten")
}
else{
    console.log("10 or less than 10")
}

//8.Check Equality: Write an `if-else` statement to check if two numbers are equal. Print "Equal" if true, 
//otherwise "Not equal." 
let num1=2;
let num2=2;
if(num1===num2){
    console.log("Equal");
}
else{
    console.log("Not equal");
}

//9.String Length Check: Write an `if-else` statement to check if the length of a string is greater than 5. 
//Print "Long string" if true, otherwise "Short string."
let string="Laxman";
if(string.length>5){
    console.log("Long String")
}
else{
    console.log("Short string")
}

//10.Check Uppercase: Write an `if-else` statement to check if a character is uppercase. Print "Uppercase" 
//if true, otherwise "Lowercase." 
let cases='A';
if(cases===cases.toUpperCase()){
    console.log("Uppercase");
}
else{
    console.log("Lowercase")
}

//11.Check Weekend: Write an `if-else` statement to check if a day of the week is Saturday. Print 
//"Weekend" if true, otherwise "Not weekend." 

let today= new Date();
let day= today.getDay();
if(day===6){
    console.log("Weekend");
}
else{
    console.log("Not weekend");
}

//12. Age Category: Write an `if-else` statement to check if a person is a child (under 12). Print "Child" if 
//true, otherwise "Not a child." 
let ages=13;
if(ages<12){
    console.log("Child");
}
else{
    console.log("Not a child");
}

//13. Temperature Check: Write an `if-else` statement to check if the temperature is above 30 degrees. Print 
//"Hot" if true, otherwise "Cold." 
let temperature=40;
if(temperature>30){
    console.log("Hot")
}
else{
    console.log("Cold");
}

//14.Number Range: Write an `if-else` statement to check if a number is between 1 and 100. Print "In 
//range" if true, otherwise "Out of range."
let range=177;
if(range>=1 && range<=100){
  console.log("In range")
}
else{
    console.log("Not in range");
}


//15. Grade Check: Write an `if-else` statement to check if a student’s score is greater than or equal to 50. 
//Print "Pass" if true, otherwise "Fail." 
let check=49;
if(check>=50){
    console.log("Pass");
}
else{
    console.log("Fail");
}

//16. Divisibility Check: Write an `if-else` statement to check if a number is divisible by 3. Print "Divisible 
//by 3" if true, otherwise "Not divisible by 3." 

let div=99;
if(div%3==0){
    console.log("Divisible by 3.")
}
else{
    console.log("Not divisible by 3.")
}

//17.Morning or Afternoon: Write an `if-else` statement to check if the time is before 12 PM. Print 
//"Morning" if true, otherwise "Afternoon." 
let today1= new Date();
let time= today1.getHours();
if(time<12){
    console.log("Morning");
}
else{
    console.log("Afternoon");
}

//18.  Teenager Check: Write an `if-else` statement to check if a person’s age is between 13 and 19. Print 
//"Teenager" if true, otherwise "Not a teenager."

let teenager=15;
if(teenager>=13 && teenager<=19){
    console.log("Teenager.")
}
else{
    console.log("Not a teenager.")
}

//19. . String Content Check: Write an `if-else` statement to check if a string contains the letter "a". Print 
//"Contains 'a'" if true, otherwise "Does not contain 'a'." 

let strings="Apple";
if(strings.includes('a') || strings.includes('A')){
    console.log("Contains 'a'");
}
else{
    console.log("Does not contain 'a'");
}

//20. Leap Year Check: Write an `if-else` statement to check if a given year is a leap year. Print "Leap year" 
//if true, otherwise "Not a leap year." 
let leap= 2021;
if((leap%4==0 && leap%100!==0) || (leap%400==0)){
    console.log("Leap year");
}
else{
    console.log("Not a leap year");
}

//21.Check Negative: Write an `if-else` statement to check if a number is negative. Print "Negative" if true, 
//otherwise "Positive or zero." 
let che=-6;
if(che<0){
    console.log("Negative")
}
else{
    console.log("Positivce or zero");
}

//22. Password Match: Write an `if-else` statement to check if a user’s input matches the password "1234". 
//Print "Access granted" if true, otherwise "Access denied."
let pass=1234;
let user=12235;
if(pass===user){
    console.log("Access Granted");
}
else{
    console.log("Access Denied")
}

//23.Greater Number: Write an `if-else` statement to check if the first of two numbers is greater. Print 
//"First is greater" if true, otherwise "Second is greater or equal." 
let number1=90;
let number2=23;
if(number1>number2){
    console.log("First is greater");
}
else{
    console.log("Second id greater or equal")
}

//24. Prime Check: Write an `if-else` statement to check if a number is greater than 1 and divisible only by 
// 1 and itself. Print "Prime" if true, otherwise "Not prime." 
let num7 = 11
let isprime = 2                 //isprime-2
for (i=2;i<num7;i++){
    if(num7%i==0){
        isprime = 1
    }
}

if (isprime==1){
    console.log("not prime number")
}

else if(isprime==2){
    console.log("prime")
}


//25. Eligible for Discount: Write an `if-else` statement to check if a customer’s age is 65 or older. Print 
//"Eligible for senior discount" if true, otherwise "Not eligible."
let eligibility= 64;
if(eligibility>=65){
    console.log("Eligible for senior discount");
}
else{
    console.log("Not eligible")
}

//26.String Comparison: Write an `if-else` statement to check if two strings are exactly the same. Print 
//"Match" if true, otherwise "Do not match." 
let string1="Lakxh";
let string2="Lakh";
if(string1===string2){
    console.log("Match");
}
else{
    console.log("Do not match")
}

//27.Multiples of Two: Write an `if-else` statement to check if a number is a multiple of 2. Print "Multiple 
//of 2" if true, otherwise "Not a multiple of 2." 
let two=444;
if(two%2==0){
    console.log("Multiple of 2");
}
else{
    console.log("Not a multiple");
}

//28. Driving License Check: Write an `if-else` statement to check if a person is old enough to get a driving 
//license (age 18 or older). Print "Eligible" if true, otherwise "Not eligible." 
let license= 18;
if(license>=18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible")
}

//29. Letter Case Check: Write an `if-else` statement to check if a character is lowercase. Print "Lowercase" 
//if true, otherwise "Uppercase." 
let case1='a';
if(case1===case1.toLowerCase()){
    console.log("Lowercase");
}
else{
    console.log("Uppercaes")
}

//30.Number Check: Write an `if-else` statement to check if a number is a single-digit number. Print 
//"Single-digit" if true, otherwise "More than one digit."
let num3=10;
if(num3<=9 && num3>=0){
    console.log("Single-digit")
}
else{
    console.log("Double-Digit")
}

//31.Divisibility by 10: Write an `if-else` statement to check if a number is divisible by 10. Print "Divisible 
//by 10" if true, otherwise "Not divisible by 10."
let division=993;
if(division%10==0){
    console.log("Divisible by 10");
}
else{
    console.log("Not divisible by 10");
}

//32. Check Month: Write an `if-else` statement to check if a month number corresponds to a month with 
//31 days. Print "31 days" if true, otherwise "Not 31 days." 
let month= 2;
if(month===1 || month===3 || month===5 || month===7 || month===8|| month===12){
    console.log("31 days");
}
else{
    console.log("Not 31 days");
}

//33.Password Length Check: Write an `if-else` statement to check if a password is at least 8 characters 
//long. Print "Valid password" if true, otherwise "Password too short." 
let pass1="jah324244";
if(pass1.length>=8){
    console.log("Valid Password");
}
else{
    console.log("Password too short");
}

//34.Check for Zero: Write an `if-else` statement to check if a number is zero. Print "Zero" if true, 
//otherwise "Not zero." 
let number4=2;
if(number4===0){
    console.log("Zero");
}
else{
    console.log("Not Zero");
}

//35.  Grade A Check: Write an `if-else` statement to check if a student’s score is 90 or above. Print "Grade 
//A" if true, otherwise "Less than Grade A." 
let grade=99;
if(grade>=90 && grade<=100){
    console.log("Grade A");
}
else{
    console.log("Less than Grade A")
}

//36. Empty String Check: Write an `if-else` statement to check if a string is empty. Print "Empty" if true, 
//otherwise "Not empty." 
let empty="";
if(empty.length===0){
    console.log("Empty");
}
else{
    console.log("Not empty");
}

//37.Multiple of 4: Write an `if-else` statement to check if a number is a multiple of 4. Print "Multiple of 4" 
//if true, otherwise "Not a multiple of 4."
let multiple2=400;
if(multiple2%4==0){
    console.log("Multiple of 4");
}
else{
    console.log("Not a multiple of 4");
}

//38. Day of the Week: Write an `if-else` statement to check if a given day is Sunday. Print "Sunday" if true, 
//otherwise "Not Sunday." 

let date= new Date();
let week= date.getDay();
if(week===0){
    console.log("Sunday");
}
else{
    console.log("Not sunday");
}

//39.String Starts with A: Write an `if-else` statement to check if a string starts with the letter "A". Print 
//"Starts with A" if true, otherwise "Does not start with A." 
let string3="Apple";
if(string3.charAt()==='a' || string3.charAt()==='A'){
    console.log("Starts with a");
}
else{
    console.log("Does not start with a");
}


//40. Check for Space: Write an `if-else` statement to check if a string contains a space. Print "Contains 
//space" if true, otherwise "No space." 

let space="Laxman Ghimire";
if(space.includes(" ")){
    console.log("Contains space");
}
else{
    console.log("No space");
}

//41.String Length Even: Write an `if-else` statement to check if the length of a string is an even number. 
//Print "Even length" if true, otherwise "Odd length." 
let pranil= "Laxman";
if(pranil.length%2==0){
    console.log("Even length");
}
else{
    console.log("Odd length")
}


//42. Temperature Conversion: Write an `if-else` statement to check if a temperature in Celsius is above 100 
//degrees. Print "Above boiling point" if true, otherwise "Below boiling point."
let temperature1=101;
if(temperature1>100){
    console.log("Above boiling point");
}
else{
    console.log("Below boiling point");
}

//43. Work Hours Check: Write an `if-else` statement to check if the current time is during work hours (9 
//AM to 5 PM). Print "Working hours" if true, otherwise "Off hours." 
let day1= new Date();
let hour2= day1.getHours();
if(hour2>=9 && hour2<=17){
    console.log("Working Hour");
}
else{
    console.log("Off hours");
}

//44. BMI Check: Write an `if-else` statement to check if a person’s Body Mass Index (BMI) is in the 
//healthy range (18.5 to 24.9). Print "Healthy" if true, otherwise "Not healthy."
let BMI=25.9;
if(BMI>=18.5 && BMI<=24.0){
    console.log("Healthy");
}
else{
    console.log("Not healthy");
}

//45. Check Odd Number: Write an `if-else` statement to check if a number is odd. Print "Odd" if true, 
//otherwise "Even." 
let num5=7;
if(num5%2!==0){
    console.log("Odd");
}
else{
    console.log("Even");
}

//46. Check for Digit: Write an `if-else` statement to check if a character is a digit (0-9). Print "Digit" if 
//true, otherwise "Not a digit." 
let character=0;
if(character>=0 && character<=9){
    console.log("Digit");
}
else{
    console.log("Not a digit");
}

//47.Check for Exclamation: Write an `if-else` statement to check if a string ends with an exclamation 
//mark (!). Print "Exclamation mark" if true, otherwise "No exclamation mark." 
let exclamation="Hello!";
if(exclamation.includes('!')){
    console.log("Exclamation mark");
}
else{
    console.log("No exclamation mark");
}

//48.Day Check: Write an `if-else` statement to check if today is a weekday (Monday to Friday). Print 
//"Weekday" if true, otherwise "Weekend." 
let date4= new Date().getDay();
if(date4>=1 && date4<=5){
    console.log("Weekday");
}
else{
    console.log("Weekend");
}

//49. Check Square Number: Write an `if-else` statement to check if a number is a perfect square. Print 
//"Perfect square" if true, otherwise "Not a perfect square." 
let square=56;







//50.Temperature Range Check: Write an `if-else` statement to check if a temperature is between 15 and 25 
//degrees Celsius. Print "Comfortable" if true, otherwise "Uncomfortable." 
let range4= 20;
if(range4>=15 && range4<=25){
    console.log("Comfortable");
}
else{
    console.log("Uncomfortable");
}


