"use strict";
// var monday:number[]= [11,12,13,14,15,16,17,18,19,20]
// function monday1() {
//     monday.splice(monday.length,0,21)
//     var result = console.log(monday)
//     return result
// }
// monday.splice(monday.length,0,22,23)
// Create a function that takes an array, an index, and a value as parameters.
//  Inside the function, use the splice method to insert the value at the specified index in the array. 
// Return the modified array.
var names = [12, 13, 14, 15, 16, 17, 18, 19, 20];
function names1() {
    names.splice(9, 0, 21);
    var result = console.log(names);
    return result;
}
names.splice(names.length, 0, 22);
console.log(names.length);
names1();
// var number1: number = 10
// var number2: number =30
// function number3(number1:number, number2:number){
// var result:number = number1 + number2
// result =result + 5
// return result
// // console.log(result)
// }
// var sumresult:number = number3(20,30)
// console.log(sumresult)
// var addresult:number = number3(70,70)
// var addresult:number= addresult + 25
// console.log(addresult)
