var modalProject = document.getElementById("modal-Project");

// Get the button that opens the modal
var btnProject = document.getElementById("btnProject");

// Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
btnProject.onclick = function () {
    modalProject.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
document.onclick = function (event) {
    if (event.target == modalProject) {
        modalProject.style.display = "none";
    }
}