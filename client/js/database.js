var createAccountButton = document.getElementById("createAccountButton");
var createAccountPopup = document.getElementById("createAccountPopup");
var closeButton = document.getElementById("closeButton");
var sendAccountButton = document.getElementById("sendAccountButton");

var errorText = document.getElementById("errorText");

createAccountButton.addEventListener("click", () => {
    createAccountPopup.style.display = "block";
});

closeButton.addEventListener("click", () => {
    createAccountPopup.style.display = "none";
});

function sendAccountInfo(username, password) {
    var xhr = new XMLHttpRequest();

    xhr.onload = () => {
        console.log(xhr.responseText);

    }
    xhr.open("POST", "http:")
}

sendAccountButton.addEventListener("click", () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if(password === confirmPassword) {
        sendAccountInfo(username, password);
    } else {
        errorText.style.color = "red";
        errorText.innerHTML = "Sorry the passwords must match. Please try again!";
    }
});