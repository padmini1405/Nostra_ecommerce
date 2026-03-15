// sidenav 

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closeicon = document.getElementById("closeicon")

menuicon.addEventListener("click", function () {
    sidenav.style.left = 0
})

closeicon.addEventListener("click", function () {
    sidenav.style.left = "-100%"
})


//validation contact form 

var btn = document.getElementById("btn");

var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var messageError = document.getElementById("warningMessage");

function validateName() {
    var name = nameInput.value.trim();

    if (name === "") {
        nameError.innerHTML = "Name is required";
        return false;
    } else {
        nameError.innerHTML = "";
        return true;
    }
}

function validateEmail() {
    var email = emailInput.value.trim();
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailError.innerHTML = "Email is required";
        return false;
    }
    else if (!email.match(emailPattern)) {
        emailError.innerHTML = "Enter valid email";
        return false;
    }
    else {
        emailError.innerHTML = "";
        return true;
    }
}

function updateCount() {
    var textarea = document.getElementById("message");
    // var count = document.getElementById("count");
    var warning = document.getElementById("warningMessage");

    var maxLimit = 200;

    if(textarea.value.trim() === ""){
        warning.textContent = "Message is required";
        return false;

    } else if (textarea.value.length > maxLimit) {
        textarea.value = textarea.value.substring(0, maxLimit);
        warning.textContent = "Character limit is 200";
        textarea.style.border = "2px solid red";
        return false;
    }
     else {
        warning.textContent = "";
        textarea.style.border = "1px solid #ccc";
        return true;
    }
    // count.textContent = maxLimit - textarea.value.length;
}

function checkForm() {
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    if (name !== "" && email !== "" && message !== "") {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}
nameInput.addEventListener("input", function () {
    validateName();
    checkForm();
})

emailInput.addEventListener("input", function () {
    validateName();
    checkForm();
})
messageInput.addEventListener("input", function () {
    validateName();
    checkForm();
})

nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
messageInput.addEventListener("blur", updateCount);

form.addEventListener("submit", function (event) {
    var nameValid = validateName();
    var emailValid = validateEmail();
    var messageValid = updateCount();

    if (nameValid && emailValid && messageValid) {
        var name = nameInput.value.trim();
        alert("You are successfully registered! Welcome " + name);
    }

});

