// alert("hello world

var inp = +prompt("Enter a number");


if(inp % 5==0 && inp % 3==0){
    console.log("FizzBuzz")
}
else if(inp % 3 == 0  ){
    console.log("Fizz");
}
else if(inp % 5 == 0){
    console.log("Buzz")
}
else{
    console.log("none")
}