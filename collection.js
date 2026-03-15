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


// Searching 

var search = document.getElementById("search");
var container = document.querySelector(".product-search");
var productList = document.querySelectorAll(".product");

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productList.length; count++) {

        if (productList[count].textContent.toUpperCase().
            indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";

        } else {
            productList[count].style.display = "block"

        }
    }
})

// checkbox 

var check = document.querySelectorAll('input[type="checkbox"]');
var productList = document.querySelectorAll(".product");
var searchInput = document.getElementById("search");
var selectedFilters = [];

for (let i = 0; i < check.length; i++) {
    check[i].addEventListener("click", function (event) {
        var value = event.target.value.toLowerCase();

        if (event.target.checked) {
            selectedFilters.push(value);
        } else {
            var index = selectedFilters.indexOf(value);
            if (index > -1) selectedFilters.splice(index, 1);
        }
        updateProductDisplay();
    });
}


searchInput.addEventListener("keyup", function() {
    updateProductDisplay();
});

function updateProductDisplay() {
    var searchText = searchInput.value.toLowerCase();

    productList.forEach(function(product) {
       
        var productName = product.querySelector("h1").textContent.toLowerCase();
        var productTags = product.dataset.tags.toLowerCase();
        var matchesSearch = productName.includes(searchText);

        var matchesFilter = false;
        if (selectedFilters.length === 0) {
            matchesFilter = true; 
        } else {
            matchesFilter = selectedFilters.some(filter => productTags.includes(filter));
        }

        if (matchesSearch && matchesFilter) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}