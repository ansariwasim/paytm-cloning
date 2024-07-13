let btm = document.getElementById("btn");
btm.addEventListener("mouseover" , mouseOver);
btm.addEventListener("mouseout" , mouseOut);


function mouseOver() {
    document.getElementById("person").style.background = "#0891b2"
}

function mouseOut() {
    document.getElementById("person").style.background = "#172554"
}

// MENU-BAR

let menu = document.getElementById("menuBar");
// let menu = document.querySelectorAll(".menuBar")
let closeBar = document.getElementById("closebar")
let smallMobile = document.getElementById("small")

menu.addEventListener("click", abc)

function abc(){
    smallMobile.classList.toggle('hidden')

}

let closeMenu = document.getElementById("closebar");

closeBar.addEventListener("click", showAll )

function showAll(){
    smallMobile.classList.toggle('hidden')
    
}
  