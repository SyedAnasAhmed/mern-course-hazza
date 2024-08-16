// // alert("hey there")x  

// var name = "Syed Anas Ahmed";
// var age = 20;

// var str = `Hello ! 
// this is ${name} and my age is ${age} and my salary is ${(2000 + 6000)}`
// document.write(str);

// console.log(str);



// const Sum = (a) => a+5; 

// // function Sum(a){
// //     return a + 5;
// // }

// // alert(Sum(10));

// var numarray = [1,2,3,4,5];
// console.log(numarray);
// var numarray2 = numarray ;
// console.log(numarray2)
// numarray.push(6);
// console.log(numarray2 , numarray)

// var arr1 = [1,2,3,4,5];
// var arr2 = [...arr1]
// arr1.push(8);


// console.log(`arr 1 is ${arr1}`);
// console.log(`arr 2 is ${arr2}`);    


const students   = [
    { name : "Anas", age : 20 },
    { name : "Anas", age : 20 },
    { name : "Anas", age : 20 }
];

// var names = students.map((student)=> student.name);
// console.log(students);
// console.log(`names  array : ${name}`)

// var names = peoples.map((people => people.name));
var names = students.map(people => {return  {namenage: `${people.name} ${people.age}`}});
console.log(names);
