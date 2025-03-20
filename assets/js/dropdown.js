
const dropdown2Element = document.getElementById("dropdown2Id");
const ul2Element = document.getElementById("ul2");
const dropdown3Element = document.getElementById("dropdown3Id");
const ul3Element = document.getElementById("ul3");




const navbarBtnElement = document.getElementById("navBtn");
const navLeftUl = document.querySelector(".nav_left")

navbarBtnElement.addEventListener("click", () => {
    var currentDisplay = window.getComputedStyle(navLeftUl.children[1]).display;
    if (currentDisplay == "none") {
        navLeftUl.children[1].style.display = "flex";
    } else {
        navLeftUl.children[1].style.display = "none";
    }
});







dropdown2Element.addEventListener("click", () => {
    var currentDisplay2 = window.getComputedStyle(ul2Element).display;
    if (currentDisplay2 == "none") {
        ul2Element.style.display = "flex";
    } else {
        ul2Element.style.display = "none";
    }
})

dropdown3Element.addEventListener("click", () => {
    var currentDisplay3 = window.getComputedStyle(ul3Element).display;
    if (currentDisplay3 == "none") {
        ul3Element.style.display = "flex";
    } else {
        ul3Element.style.display = "none";
    }
})


window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".loader_main").style.display = "none";
    }, 5000);
});
