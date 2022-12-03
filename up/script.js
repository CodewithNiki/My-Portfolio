const hamburger = document.querySelector(".header__bar");
const header = document.querySelector(".header");
const nav = document.querySelector(".header__nav");
const overlay = document.querySelector(".header--overlay");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("open");
    header.classList.toggle("open");
    nav.classList.toggle("open");
    overlay.classList.toggle("open");
});

// about session
const seeMore = document.querySelectorAll(".about--display");
const moreText = document.querySelectorAll(".none");

for(let i = 0; i < seeMore.length; i++){
    seeMore[0].addEventListener("click", ()=>{
        moreText[0].classList.remove("none");
        moreText[1].classList.remove("none");
        seeMore[0].classList.add("none");
    })

    seeMore[1].addEventListener("click", ()=>{
        moreText[0].classList.add("none");
        moreText[1].classList.add("none");
        seeMore[0].classList.remove("none");
    })
}