let btm = document.getElementById("btn");
btm.addEventListener("mouseover" , mouseOver);
btm.addEventListener("mouseout" , mouseOut);

let downBtn = document.getElementById("down-btn")

downBtn.addEventListener("mouseover", dounMouseOver)
downBtn.addEventListener("mouseout" , dounMouseOut)

function dounMouseOver(){
    document.getElementById("personal").style.background = "#0891b2"

}

function dounMouseOut(){
        document.getElementById("personal").style.background = "#172554"

}


function mouseOver() {
    document.getElementById("person").style.background = "#0891b2"

}

function mouseOut() {
    document.getElementById("person").style.background = "#172554"
    // document.getElementById("personal").style.background = "#172554"

}

// MENU-BAR

let menu = document.getElementById("menuBar");
// let menu = document.querySelectorAll(".menuBar")
let closeBar = document.getElementById("closebar")
let smallMobile = document.getElementById("small")
let head = document.getElementById("hide")
let imgHide = document.getElementById("img-hide")

menu.addEventListener("click", abc)

function abc(){
    smallMobile.classList.toggle('hidden')
    head.classList.toggle('hidden')
    imgHide.classList.toggle('hidden')


}

let closeMenu = document.getElementById("closebar");

closeBar.addEventListener("click", showAll )

function showAll(){
    smallMobile.classList.toggle('hidden')
    head.classList.toggle('hidden')
    imgHide.classList.toggle('hidden')

    
}
  