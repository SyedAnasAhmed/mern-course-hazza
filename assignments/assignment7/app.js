

function nameprompt (){ //btn1 funct
    var firstname = prompt("Enter Your First Name");
    var lastname = prompt("Enter your last name");

    var fullname = firstname + lastname;
    document.write("<h1>" + "FULL NAME :" + fullname + "</h1>")
}




function calculate() { //btn2 funct
    var markobtained = document.getElementById('marksObtained').value;
    var totalmarks = document.getElementById('totalMarks').value;
    var percentage = (markobtained / totalmarks) * 100;
    document.getElementById('rsltbtn').value = percentage.toFixed(2);
}