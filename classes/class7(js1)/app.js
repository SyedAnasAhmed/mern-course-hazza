
// function mypopup (){
//     alert("Hello World")
//         debugger
// }

// function displayName(){
//     var myName = document.getElementById('myName').value;
//     alert(myName)
// }

// var anas;
// anas = "Syed Anas Ahmed";


// // Q.Diffrence between var let and const.. imp for interview.. 

function multiply(num1,num2){
    var val = num1 * num2;
    return val;
}

function calculate() {
    var markobtained = document.getElementById('marksObtained').value;
    var totalmarks = document.getElementById('totalMarks').value;
    var percentage = (markobtained / totalmarks) * 100;
    document.getElementById('rsltbtn').value = percentage.toFixed(2);
}

// OBJECTS

// var student = {
//     // key = value; 
//     name: "Syed Anas Ahmed",
//     email: "syedanasahmed412@gmail.com",
//     age: 20,
// }

// console.log(student)


// // ARRAY
// var newstudents = [
//     {
//         name: "Syed Anas Ahmed",
//         email: "syedanasahmed412@gmail.com",
//         age: 20,
//     }
//     ,
//     {
//         name: "Syed Zain Ahmed",
//         email: "zainahmed412@gmail.com",
//         age: 20,
//     }
// ]

// console.log(newstudents)

// var names  = ["anas","usman","ali","ahmed"];
// console.log(names);

// for (let i = 0;  i < names.length; i++) {
//     var element = names[i];
//     console.log(element)
    
// }

// for (let i = 0;  i < names.length; i++) {

//     if(i== 2){
//         continue;
//     }
//     var element = names[i];
//     console.log(element)
    
// }


// for (let i = 0;  i < names.length; i++) {

//     if(i== 3){
//         break;
//     }
//     var element = names[i];
//     console.log(element)
    
// }

// === is used for type check












