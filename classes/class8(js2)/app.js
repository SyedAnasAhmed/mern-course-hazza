// alert("hey");


// function changetext(){

//     document.getElementById('head1').innerText = "hey there";
// }


// function changetext2(){

//     document.getElementById('head2').innerHTML = "<span> hey there </span>";
// }


document.getElementById('stdform').style.display = "none";
document.getElementById('teaform').style.display = "none";

function formchanger() {
    // debugger
    var id = document.getElementById('selector').value;
    if (id == "1") {
        document.getElementById('stdform').style.display = "";
        document.getElementById('teaform').style.display = "none"
    }
    else if (id == "2") {
        document.getElementById('stdform').style.display = "none";
        document.getElementById('teaform').style.display = "";

    }
}