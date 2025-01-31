// //string
// // charAt() also can be used instead of str.length........
// //toUppercase() saab small letter lai capital letter ma banaidinxa
// //toLowercase() saab capital letter lai small letter ma convert garxa

// // string is immutaible because we cannot change or modify it but tesko satto ma arko paxi rakhna chai milxa....


// let str="Lakxh Ghimire";
// console.log(str.length)

// //this is to access all the string withou using index so for that we use loop............

// console.log(str[0])
// for(i=0; i<str.length; i++){
//     console.log(str[i]);
// }

// // to remove space like this we use trim..........
// let str1="                      Laxman Bahadur Ghimire  ";
// console.log(str1.trim());



// // to take specific letter or word we use slice and we have to pass some argument which is starting and end..........we use like if example we have "Laxman" we use str.slice(0,5) index

// let str2="Laxman Bahadur Ghimire";
// console.log(str2.slice(0,5))//we have to give tyo vanda ekstep aagadi ko lekhne......
// //to know index we can use
// console.log(str2.indexOf("B"))
// console.log(str2.slice(0,6))

// console.log(str2.slice(1,str2.length-1))




// //if we did mistake while writing the name we cannot modify our string so we have to replace that string index by using replace
// let lakxh="Sipelaya Info Tech"
// console.log(lakxh.replace('e', 'a'))
// console.log(lakxh.replaceAll('a', 'o'))
// console.log(lakxh.replace('Info','information' ))


// let string="Sipalaya Info Tech"
// let arr=string.split("")//if we give space in between the inverted comma("  ") like this it prints all words like ['sipalaya', ....]
// console.log(arr)







// //to connect string
// let str4="I am a boy " // either we can give space in above container
// str5="He is a dog"
// console.log(str4+str5)


// let str6="I am a boy" // or we can give " " in between
// str7="He is a dog"
// console.log(str6+ " " +str7)

// //str.concat() we can also use this to join two sentences



// let ghimire="Sipalaya Info Tech"  //endwith, startwith
// console.log(ghimire.startsWith("S"))
// console.log(ghimire.endsWith("tech"))//false coz its ending with Tech not in tech.





// //Questions..............

// //1. Write a program that counts how many times the letter 'e' appears in the string `"Hello EveryOne"`. 
// let a="Hello Everyone";
// let count=a.split("e").length-1;
// console.log(count)

// //2.Create a program that checks if a string starts with the letter 'H' and ends with the letter 'e'. Use `if
// //else` statements. 
// let b="Hello Everyone";
// if(b.startsWith('H') && b.endsWith('e')){
//     console.log("Starts with H and ends with 'e'")

// }else{
//     console.log("Doesnot start")
// }

// //3.Write a program that loops through a string and prints only the uppercase letters. 
// let text="Laxman Bahadur Ghimire"
// for (let i = 0; i < text.length; i++) {
  
//   if (text[i] === text[i].toUpperCase() && text[i] !== text[i].toLowerCase()) {

//     console.log(text[i]);
//   }
// }

// //4. Using a loop, write a program that replaces every occurrence of the word "Hello" with "Hi" in a given string. 
// let loop="Hello";
// console.log(loop.replace('Hello', 'Hi'));

// //5. Create a program that counts the number of vowels (a, e, i, o, u) in the string `"Hello EveryOne"`.
// const str3 = "Hello EveryOne";
// const vowels = "aeiouAEIOU"; // Including uppercase and lowercase vowels
// let count3 = 0;

// for (let char of str3) {
//   if (vowels.includes(char)) {
//     count3++;
//   }
// }

// console.log(`The number of vowels in the string is: ${count3}`);



// //6. Write a program that uses a loop to concatenate the first letter of each word in the string `"Hello 
// //EveryOne"` to form a new string. 
// let concatenate="Hello World";
// let word= concatenate.split(" ");






// //7. Create a program that checks if a string is a palindrome (reads the same backward as forward). Use `ifelse` statements. 

// //parangdom means sulto ulto garda same aaunu paro like radar....
// let fullName="radar";
// let newFullName="";
// for(let v=fullName.length-1; v>=0; v-- ){
//   newFullName+=fullName[v];
// }
// if(fullName==newFullName){
//   console.log("P")
// }else{
//   console.log("Not P")
// }

// // 
// let names='hi i am sipalaya';
// console.log(names.replace('hi i am sipalaya', 'Hi I Am Sipalaya'));


//Without using replace......
let name1='hi i am sipalaya';
let arr6=name1.split(" ");

let newStr=''
for(i=0; i<arr6.length; i++){

  let word=arr6[i]
 
  newStr=newStr+" "+word[0].toUpperCase()+word.slice(1);
}
console.log(newStr);









// let givenToken="Bearer nvjfvnhubhfohwsehihsihfishfusihffuehfisduhsd ";
// let yourTaken="nvjfvnhubhfohwsehihsihfishfusihffuehfisduhsd"

// let arr7=
// console.log(arr7);
// if(givenToken===yourTaken){
//   console.log("Same");
// }
// else{
//   console.log("Not same");
// }



// let friend = "Ram";
// for(i=0; i<friend.length; i++){
//   console.log(friend[i]);
// }



let givenToken = "Bearer nvjfvnhubhfohwsehihsihfishfusihffuehfisduhsd ";
let yourTaken = "nvjfvnhubhfohwsehihsihfishfusihffuehfisduhsd";

let apple=givenToken.indexOf(" ");
// console.log(apple);

let banana=givenToken.slice(apple).trim();
console.log(banana)

if(banana===yourTaken){
  console.log("Yes")
}
else{
  console.log("No")
}














let name7="ljdbdfjnbvsdjknvsljnjsnlsvvhjsdbj Laxman jhbdshjkbvskjbslsk"
let given="jhbdshjkbvskjbslsk"

const parts = name7.split(" ") // Split the string at the "given" part
console.log(parts);
const beforeGiven = parts[1].trim();// Get the part before "given" and remove trailing spaces
console.log(beforeGiven);
// const words = beforeGiven.split(" "); // Split into words
// console.log(words);
// const laxman = words[words.length-1]; // Get the last word ("Laxman")

// console.log(laxman); // Output: "Laxman"











// let anything= givenToken.indexOf(" ");
// console.log(anything)


// let hello=givenToken.slice(anything).trim();
// console.log(hello)

// if(hello===yourTaken){
//   console.log("yes");
// }
// else{
//   console.log("no");
// }








// // Find the index where the token starts (after "Bearer ")
// let tokenStartIndex = givenToken.indexOf(" ");

// // Use slice to extract the token
// let extractedToken = givenToken.slice(tokenStartIndex).trim();

// console.log(extractedToken); // Output: "nvjfvnhubhfohwsehihsihfishfusihffuehfisduhsd"

// // Compare the extracted token with yourTaken
// if (extractedToken === yourTaken) {
//   console.log("Same");
// } else {
//   console.log("Not same");
// }











// let string="hello there how are you?"  //to transform this inti Hello There How Are You?

// let newString=string.split(" ");
// console.log(newString);


// let anotherString=''
// for(i=0; i<newString.length; i++){
//   let helloString=newString[i];

// anotherString=anotherString+helloString[0].toUpperCase()+helloString.slice(1)+ "  ";
  
 
// }
// console.log(anotherString);


// let string2 = "hello there how are you?";

// let newString = string.split(" ");
// let anotherString = '';

// for (let i = 0; i < newString.length; i++) {
//   let word = newString[i];
//   // Capitalize first letter + rest of the word
//   anotherString += word[0].toUpperCase() + word.slice(1) + " ";
// }

// // Remove trailing space
// anotherString = anotherString.trim();

// console.log(anotherString); // "Hello There How Are You?"















let string="my name is laxman b ghimire"

let newString=string.split(" ");
console.log(newString);

let helloString='';
for(i=0; i<newString.length; i++){

  let forLoop=newString[i];

  helloString=helloString+forLoop[0].toUpperCase()+forLoop.slice(1)+" ";
}
console.log(helloString);


// let firstName="Laxman B Ghimire";
// let givenName="Ghimire";

// let newName=firstName.split(" ");
// console.log(newName);

// let hi=newName[0].trim();
// console.log(hi);

let firstName = "Laxman B Ghimire"
let givenName= "B";

let newName=firstName.indexOf("B");
console.log(newName);

let container=firstName.slice(7,8);
console.log(container);



















