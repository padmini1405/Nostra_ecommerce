//offer closing icon

var closenav = document.getElementById("closenav");
var offer = document.getElementById("offer");

closenav.addEventListener("click", function () {
    offer.style.display = "none"
})

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


// Image slider (curousel)

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {

    slides.forEach(slide => slide.classList.remove("active"));

    slides[i].classList.add("active");

}

function nextSlide() {

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    showSlide(index);

}

function prevSlide() {

    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    showSlide(index);

}