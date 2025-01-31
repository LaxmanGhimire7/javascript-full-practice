//array
let sum=0;
let arr=[1,2,3,4,5,6]
for(i=0; i<arr.length; i++){
    sum= sum + arr[i]
}
console.log(sum)


//1.ind Even Numbers: - Write a code to find and print all even numbers from the array `[1, 2, 3, 4, 5, 6, 7, 8, 9]`. 
let even=[1,2,3,4,5,6,7,8,9]
for (let j = 0; j < even.length; j++) {
    if(even[j]%2==0){
        console.log(even[j])

    }
    
}


//2.Odd Numbers: - Write a code to find and print all odd numbers from the array `[10, 15, 20, 25, 30]`. 
let odd=[10,15,20,25,30]
for(let k=0; k<odd.length; k++){
    if(odd[k]%2!==0){
        console.log(odd[k])
    }
}

//3. um of Array Elements: - Write a code to calculate and print the sum of all elements in the array `[5, 10, 15]`. 
let sum1=0;
let code=[5, 10, 15]
for(l=0; l<code.length; l++){
    sum1=sum1+code[l]
}
console.log(sum1)


//4. d Maximum Value: - Write a code to find and print the maximum value in the array `[3, 5, 7, 2, 8]`. 
let max=[3,5,7,2,8]
let array=max[0]
for(m=0; m<max.length; m++){
    array=max[m]
}
console.log(array)


//5. ind Minimum Value: - Write a code to find and print the minimum value in the array `[12, 4, 6, 9, 1]`. 
let min=[12,4,6,9,1]
let value=min[0]
for(n=0; n<min.length; n++){
    value=min[n]
}
console.log(value)


//6. Count Array Elements: - Write a code to count and print the number of elements in the array `[8, 3, 7, 5]`. 
let count=[8,3,7,5]
let counting=count.length
console.log(counting)

//7.Multiply Array Elements: - Write a code to multiply all elements in the array `[2, 3, 4]` and print the result. 
let multiply=[2,3,4]
let multiplication=1;
for(i=0; i<multiply.length; i++){
    multiplication=multiplication*multiply[i];
}
console.log(multiplication)

//8.Check for a Specific Number: - Write a code to check if the number `7` is present in the array `[5, 6, 7, 8]` and print "Found" 
//or "Not Found". 
let check=[5,6,87,7]
    if(check.includes(7)){
        console.log("Found")
    }
    else{
        console.log("Not found")
    }

//9. Remove Duplicates: - Write a code to remove duplicate elements from the array `[1, 2, 2, 3, 4, 4, 5]` and print the 
//new array. 
let remove=[1,2,2,3,4,4,5]





//10. Create an Array with Squares: - Write a code to create a new array containing the squares of the elements from the array `[1, 
//2, 3]`. 
let square=[1,2,3]

for(i=0; i<square.length; i++){
    console.log(`The square of ${square[i]} is ${square[i]**2}`);
}

//11.Filter Numbers Greater than 10: - Write a code to filter and print numbers greater than `10` from the array `[5, 12, 7, 14, 3]`. 
let filter=[5,12,7,14,3]
for(i=0; i<filter.length; i++){
    if(filter[i]>10){
        console.log(filter[i])
    }
}

//12. ne Two Arrays: - Write a code to combine the arrays `[1, 2, 3]` and `[4, 5, 6]` into a single array. 
let combine=[1,2,3]
let combine1=[4,5,6]

combine.push(combine1[0])
combine.push(combine1[1])
combine.push(combine1[2])
console.log(combine)

//13. Array Length: - Write a code to print the length of the array `[9, 7, 5, 3, 1]`. 
let length=[9,7,5,3,1]
console.log(length.length)

//14. Find Average Value: - Write a code to calculate and print the average of the numbers in the array `[10, 20, 30]`. 




//15.. Reverse an Array: - Write a code to reverse the array `[1, 2, 3, 4, 5]` and print the reversed array. 
let reverse=[1,2,3,4,5,6]
let reverse1=reverse.reverse();
console.log(reverse1);

//16 Find Common Elements: - Write a code to find and print the common elements between the arrays `[1, 2, 3]` and `[2, 3, 
//4]`. 


//18. Index of an Element: - Write a code to find the index of the element `5` in the array `[10, 20, 5, 30]`. 
 let element=[10,20,5,40]
 if(element.indexOf(5)){
    console.log(element.indexOf(5))
 }

//19. Check if Array Contains a Number: - Write a code to check if the number `4` is in the array `[2, 4, 6, 8]` and print "Yes" or "No". 
let num=[2,4,6,8]
if(num.includes(4)){
    console.log("Yes")
}
else{
    console.log("No")
}

//20.Find an Array with String Lengths: - Write a code to create a new array containing the lengths of each string from the array 
//`["apple", "banana", "cherry"]`. 
let length2=["apple", "banana", "cherry"]
for(i=0; i<=length2.length; i++){
    
}


// Map.filter, reduce, forEach, find  is used instead of for loop in react..........in array


const arr8=[1,2,3,4,5]
let reverse6=arr8.reverse();
console.log(reverse6);

//mean
const arr9 = [1, 2, 3, 4, 5];
let sum5=0;

for (let i = arr9.length - 1; i >= 0; i--) {
    sum5=sum5+arr9[i];
}
const mean=sum5/arr9.length;
console.log(mean);


//sum
const arr10 = [1,2,3,4,5]
const reverseArray=[];
for(i=arr10.length; i>0; i--){
   reverseArray.push(i)
}
console.log(reverseArray);

//median
const arr11=[1,2,3,4,5]
let summ=0;
for(i=0; i<arr11.length; i++){
    summ=summ+arr11[i]
}
const median=summ/2;
console.log(median);
median2=Math.round(median);
console.log(median2);


