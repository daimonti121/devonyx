// Get the modal
var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn-1");
var btn2 = document.getElementById("myBtn-2");
var btn3 = document.getElementById("myBtn-3");
var btn4 = document.getElementById("myBtn-4");

// When the user clicks on the button, open the modal
btn1.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    modal.style.display = "block";
}
btn3.onclick = function () {
    modal.style.display = "block";
}
btn4.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
