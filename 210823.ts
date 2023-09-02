// var monday:number[]= [11,12,13,14,15,16,17,18,19,20]
// function monday1() {

//     monday.splice(monday.length,0,21)
//     var result = console.log(monday)
//     return result
    
// }

// monday.splice(monday.length,0,22,23)


// // Create a function that takes an array, an index, and a value as parameters.
// //  Inside the function, use the splice method to insert the value at the specified index in the array. 
// // Return the modified array.
// var names:number[] = [12, 13,14,15,16,17,18,19,20]
// function names1()
// {
// names.splice (2,0,21)
// var result=console.log(names)
// return result
// }
// names.splice (names.length,0,22)
// names1()
// // var number1: number = 10
// // var number2: number =30

// // function number3(number1:number, number2:number){
// // var result:number = number1 + number2
// // result =result + 5
// // return result
// // // console.log(result)
// // }
// // var sumresult:number = number3(20,30)
// // console.log(sumresult)

// // var addresult:number = number3(70,70)
// // var addresult:number= addresult + 25
// // console.log(addresult)
// function names1(arr: number[]){
//     arr.splice( arr.length,0,21)
//     console.log(arr);
// }

// names1([12, 13, 14, 15, 16, 17, 18, 19, 20]);

// function sum(abc: number, abc1:number): number{

//     var result:number = abc + abc1
//     return result

// }
// var addresult: number = sum(10,20)
// addresult = addresult + 10
// console.log(addresult)


// var sumarrow =(abc:number, abc1:number) => abc +abc1

// var arrowresult : number = sumarrow (10,20)
// var arrowresult = arrowresult + 20
// console.log(arrowresult)
// var num1:number = 1

// while(num1<10){
// var num2 = num1 * 5
//     console.log(" 5 *" + num1 + "=" + num2 )
//  var num1 = num1 +1
// // }
// var student1:string[] = ["umair","sultan","ali","chaudhary"]

// function student2(studentnames:string){
// student1[3]= studentnames

// }

// student2('irfan')

// console.log(student1)

// var student1:string[] = ["umair","sultan","ali","chaudhary"]
// function addstuent(studentnames:string) {
//     student1[3] = studentnames
    
// }

// addstuent('irfan')

// var student1:string[] = ["umair","sultan","ali","chaudhary"]

// function addstudent(studentname:string){

// student1[student1.length] = studentname
    
// }

// addstudent("irfan")
// addstudent("shumail")
// addstudent("hammad")
// addstudent("hasnat")
// for (let i=0; i<5 ; i++)
// {

//     console.log(5)

// // }

// var index:number = 1
// while(index<=10){
// let name:number = 2 * index
// console.log ( " 2 * " + index + "=" + name)
// index ++
// }
// Create a function that takes an array, an index, and a value as parameters. 
//Inside the function, use the splice method to insert the value at the specified index in the array. 
//Return the modified array.

// var student:string[] = ["america","Africa", "europe", "australia"] 
// function pakistan(studentname:string) {
// student[student.length]= studentname
// return student
// }
// student= pakistan("south america")
// student.splice(2,0,"africa1")
// student.splice(student.length,0, "inida")
// pakistan("australia1")
// pakistan("australia2")
 // console.log(student)
// var computer:string[] = ["america","Africa", "europe", "australia"]
// function addcomputer(newlaptop:string){
//     computer[computer.length]= newlaptop
//     return computer

// } 
// computer = addcomputer("northamerica")
// addcomputer ('punjab')
// console.log(computer)
//Implement a simple shopping cart program using an array./
// Create functions to add items, remove items, and update quantities using 
//the splice method. Print the cart's contents after each operation

// var shopeapple:any[] = ["apple", 0.05, " KG" , 10, "Rs"]
// var shopesorgne:any[]= ["oragne", 0.10, "kg", 20 ,"RS"]
// var shopbanana:any[]= ["banana", 0.15, "KG", 25,'RS']
//  function shopcart(fruit:any){
//  shopeapple.splice(shopeapple.length,0,"pineapple", 0.40, "KG",30)
//  shopeapple[shopeapple.length] = fruit
// return shopeapple
// }
// function shopcart1(){
// shopesorgne.splice (3,0, 45)
// console.log(shopesorgne)
// }
// function shopcart2(){
// shopbanana.splice(1,1,0.85)
// console.log(shopbanana)
// }

// shopeapple = shopcart("goldenapple")
// shopeapple.push("golden orange")
// shopeapple.splice(shopeapple.length/2, 0, 0.01)
// shopcart1()
// shopcart2()
// console.log (shopeapple)
// // Write a program that uses a while loop to print the first 25 integers.
// var num1: number = 1

// while(num1<25){
//     num1 = num1 +1
//     console.log(num1)
// }

// //Write a program that uses a while loop to print the first 10 even numbers.

// var count = 1

// while(count<=20){

//     if(count % 2 == 0){
// console.log(count)
// count++
//     }
// else{
//     count++
// }
// function calculateFactorial(n: number): number {
//     if (n < 0) {
//       throw new Error("Input must be a positive integer.");
//     }
  
//     let factorial: number = 1;
//     let currentNumber: number = 1;
  
//     while (currentNumber <= n) {
//       factorial *= currentNumber;
//       currentNumber++;
//     }
  
//     return factorial;
//   }
  
//   // Example usage:
//   const inputNumber: number = 5; // Replace with your desired input
//   const result: number = calculateFactorial(inputNumber);
//   console.log(`Factorial of ${inputNumber} is ${result}`);
//Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the 
//factorial of that number.

    // let factorial: number = 1;
    // let currentNumber: number = 1;
  
    // while (currentNumber <= 5) {
    //   factorial *= currentNumber;
    //   currentNumber++;
    // }
    // console.log(factorial)

    
    
    
    // function golden(n:number){
    //     let num1: number = 1
    //     let num3: number = 5
    // while(num1 < n){
    //         num3 *= num1
    //         num1++
            
    //        }
    //        return num3 
           
    // }

    // var result:number= 5
    // var addresult:number = golden(result)
    // console.log(addresult)
    //Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
    
    
    // function removeNegativeNumbers(numbers: number[]): number[] {
    //     // Use the filter method to create a new array with only positive numbers
    //     var positiveNumbers = numbers.filter((num) => num >= 0);
    //     return positiveNumbers;
    //   }
      
    //   // Example usage:
    //   var numbersArray: number[] = [1, -2, 3, -4, 5, -6, 7];
    //   var resultArray: number[] = removeNegativeNumbers(numbersArray);
      
    //   console.log("Original Array:", numbersArray);
    //   console.log("Array with Negative Numbers Removed:", resultArray);
      
    // function removeNegativeNumbers(num1:number[]): number[]{
    // var positiveNumbers = num1.filter((num)=> num >= 0)
    // return positiveNumbers
    // }

    // var Originalarry: number[] = [1,-2,3,-4,5,-6,7,-8,9 ]
    // var result: number[]= removeNegativeNumbers(Originalarry)
    // console.log(result)

    //Create a function that takes an array of numbers as parameter. 
    //Use a while loop to calculate and return the sum of all the numbers in the array.


// function sumarry(num1:number[]){


// let sum : number = 0
// let index: number = 0
//  while(index<num1.length) {
//  sum += num1[index]
// index++
//  }  
//  return sum;
// }

// let addmarry:number [] = [1,2,3,4,5,6,7]
// let resultarry: number= sumarry(addmarry)
// console.log(resultarry)



    // function calculateSum(numbers: number[]): number {
    //     let sum = 0; // Initialize the sum to 0
    //     let index = 0; // Initialize an index to keep track of the current element
      
    //     while (index < numbers.length) {
    //       // While the index is less than the length of the array
    //       sum += numbers[index]; // Add the current number to the sum
    //       index++; // Move to the next number in the array
    //     }
      
    //     return sum; // Return the calculated sum
    //   }
      
    //   // Example usage:
    //   const numbersArray: number[] = [1, 2, 3, 4, 5];
    //   const result: number = calculateSum(numbersArray);
    //   console.log("Sum of numbers:", result);
      
// let number:number[] = [10,10,-10,3,4,5,6,7,8,9];
// for (let i = 0; i < number.length; i++){

//     if ( number[i]%2 ==0){
//     number.splice(i,1)
//     i--;}
// }
// console.log(number)

// map => feturn same length array
// filter => retrun same lenght or less
// foreach => return nothing

// let numbers: number [] =[2,34,6,5,45,28,1000,10000033]
// //[even, odd]
// let updatedarry = numbers.map((number)=> {

//     if(number %2 === 0){
//         return number}
//     else{
//         return "odd"
//     }
//     }

// );
// console.log(updatedarry)
// let numbers: number [] =[2,34,6,5,45,28,1000,10000033]
// //[even, odd]
// let updatedarry = numbers.map((number)=> {

//     if(number %2 === 0){
//         return "even"}
//     else{
//         return "odd"

//     }
//     }

// );
// console.log(updatedarry)

//  Create a function that takes an array, an index, and a value as parameters. 
//Inside the function, use the splice method to insert the value at the specified index in the array
// Return the modified array.

// var fruitnames:string [] = ['apple','goldenapple', 'pineapple', 'orange']
// function arry(arryfruit:string[]) {

// arryfruit.splice(arryfruit.length,0,"banana")
//     return arryfruit
// }

// var addfruit:string []= arry(fruitnames)
// addfruit.splice(addfruit.length,0,"greenapple")
// arry(addfruit)
// console.log(addfruit)

// var arry:any [] = ["fruit", 0.5, "apple", 0.10]

// function poparry(pusharry:any) {

//   pusharry.splice(pusharry.length,0, "green", 0.10)  
//     return pusharry
// }
// var shiftarry = poparry(arry)
// shiftarry.splice(shiftarry.length, 0.12, "antartica")
// poparry(shiftarry)
// console.log(shiftarry)
//Implement a simple shopping cart program using an array//
//Create functions to add items, remove items, and update quantities using the splice method//
// Print the cart's contents after each operation
// var shop: any []= ["chocolate", 0.12, 20, "chip", 0.13, 25, "water", 0.14, 30]

// function update(items:any){

//     items.push("egg", 0.18, 40)
//     items.unshift("water", 0.124, 78)
    
//     return items
// }

//  var shiftpop = update(shop)
// shiftpop.splice(0,9,)
// //update(shop)
// update(shiftpop)

// //console.log(shop)
// console.log(shiftpop)

//Implement a simple shopping cart program using an array//
//Create functions to add items, remove items, and update quantities using the splice method//
// Print the cart's contents after each operation

// var arry:any [] = ["banana", 0.12, 12, "Apple", 0.13, 13, "Orange",0.15,18]

// function poparry(shiftarry:any){

// shiftarry.splice(shiftarry.length, 0, "Pineapple", 0.18,25)
// return shiftarry

// }
// var pusharry= poparry(arry)
// pusharry.splice(pusharry.length,0, "pinebanana",0.19,35)
// pusharry.splice(0,9,0)
// console.log(pusharry)

//Write a program that uses a while loop to print the first 25 integers.

// var integir:number = 0

// while(integir<25){

// console.log(integir)
//     integir++
// }

// console.log(integir)

//Write a program that uses a while loop to print the first 10 even numbers

// var loop10:any = 0

// while(loop10<30){

//     if(loop10 %2 === 0){
//         console.log(loop10)}
//     loop10++
    

// }
//let count = 0; // Initialize a counter to keep track of even numbers


// while (count < 30) { // Continue looping until we have printed 10 even numbers
//     if (count % 2 === 0) { // Check if the number is even
//         console.log(count); // Print the even number
      
//     }
   
//     count++; // Increment the counter
// }
//Create a function that takes a positive integer as parameter and uses a 
//while loop to calculate and return the factorial of that number.

// var fact:number = 1

// function addfact(nummber2:number){
  
//     while (fact<5){

//         nummber2 *= fact
//         fact++
        
//     }
//     console.log(nummber2)
//     return nummber2
// }


// var lessfact:number = addfact(10)

//Write a program having an array of numbers if the number is negative
// it should remove the negative number from the array.

// var addarry:number []= [1,-2,3,-4,5,-6,-7,-8,9,10,11]
// var i:number = 0
// while(i < addarry.length){
//     i++
//     if(addarry[i]>0){
//     console.log(addarry[i])}
//     }

// var addarry:number []= [1,-2,3,-4,5,-6,-7,-8,9,10,11]
// var f:number = 2
// while(f< addarry.length){
// f++
// if(addarry[f]>0){
//     console.log(addarry[f])
// }
//}

//Create a function that takes an array of numbers as parameter.
// Use a while loop to calculate and return the sum of all the numbers in the array.
// var i:number = 0
// var sum:number = 0
// var addarry: number [] = [1,2,3,4,5,6,7,8,9]
// function poparry(){

// while(i < addarry.length){
//   sum += addarry[i] 
//  i++
// }
// }

// poparry()
// console.log(sum)


// let numbers:number[]= [1,2,3,4,-5,-6,-7,8,9,9,10,10,11,12]

// let addarry = numbers.filter((number)=>{
//     return number>=0
//     })

//     console.log(addarry)
//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

// let number:number []= [1,2,3,4]
// var addarry = number.map((numbers)=> {
// var lessnumber = numbers * 2
// return lessnumber
// });

// console.log(addarry)


// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a 
// new array containing only the fruits with more than 5 characters.

// let numbers: string [] = ["apple", "banana", "cherry", "date", "grape", "potatoess", "lemongreen"]

// let addarry = numbers.filter((number) => {

// let lessarry = number.length > 5
// return lessarry

// })
// // console.log(addarry)

// var number:number = 0
// var sum: number = 0
// var evennumber: number [] = []
// while(number < 1000){

//     if(number % 2 ==0){
//     sum += number
//     evennumber.push(number)
// }
//     number++
// }

// console.log(sum)
// console.log(evennumber)
