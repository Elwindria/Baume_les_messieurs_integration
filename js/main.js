/* Carousel_discover version Desktop start */

const photoCarousel = document.querySelectorAll(".photo_carousel");

photoCarousel.forEach(element => {
    element.onclick = function() {fctCarousel(element, element.classList[1])}
});

function fctCarousel(carousel, className) {
    photoCarousel.forEach(element => {
            if (element.classList.contains("activate") && element.classList[1] != className ) {
                element.classList.add("last");
            } else if (element.classList.contains("last")) {
                element.classList.remove("last");
            }
        element.classList.remove("activate");
        element.children[0].classList.add("hiden");
    });
        carousel.classList.add("activate");
        carousel.children[0].classList.remove("hiden");
}

/* Carousel_discover version Desktop end */
/*Carousel_discover animation en savoir plus start */

const divTextCarousel = document.querySelectorAll(".div_text_carousel");

divTextCarousel.forEach(element => {
    element.addEventListener("mouseover", function() {
        element.children[0].classList.add("typing_reverse");
        element.children[1].classList.add("typing_reverse");
        element.children[2].classList.add("typing_reverse");
        element.children[3].style.display = ("unset");
    })
    element.addEventListener("mouseout", function() {
        element.children[0].classList.remove("typing_reverse");
        element.children[1].classList.remove("typing_reverse");
        element.children[2].classList.remove("typing_reverse");
        element.children[3].style.display = ("none");
    })
});

/*Carousel_discover animation en savoir plus end */
/*Galerie Photo start */

const arrowLeft = document.getElementById("galery_left");
const arrowRight = document.getElementById("galery_right");
const galeryMain = document.getElementById("galery_main");
let x = 1; let p = 2; let y = 3;

let nbr_max_photo = 6;

arrowLeft.onclick = function() {fctGaleriePhoto(-1);}
arrowRight.onclick = function() {fctGaleriePhoto(+1);}
fctGaleriePhoto()

function fctGaleriePhoto(moreOrLess) {

    if (moreOrLess == -1 ){ x--, p--, y-- } else { x++, p++, y++ }
    
    if (x == 0){ x = nbr_max_photo;} else if (x == nbr_max_photo+1) {x = 1;};
    if (p == 0){ p = nbr_max_photo;} else if (p == nbr_max_photo+1) {p = 1;};
    if (y == 0){ y = nbr_max_photo;} else if (y == nbr_max_photo+1) {y = 1;};

    arrowLeft.style.backgroundImage = "url('/github/baume_les_messieurs_integration/images/galery_photo/galery_"+x+".webp')";
    galeryMain.style.backgroundImage = "url('/github/baume_les_messieurs_integration/images/galery_photo/galery_"+p+".webp')";
    arrowRight.style.backgroundImage = "url('/github/baume_les_messieurs_integration/images/galery_photo/galery_"+y+".webp')";
} 

/* arrow_galerie_photo start */

const imgArrowLeft = document.querySelector(".img_arrow_left");
const imgArrowRight = document.querySelector(".img_arrow_right");

arrowLeft.addEventListener("mouseover", function() {imgArrowLeft.style.display = ("unset");})
arrowLeft.addEventListener("mouseout", function() {imgArrowLeft.style.display = ("none");})
arrowRight.addEventListener("mouseover", function() {imgArrowRight.style.display = ("unset");})
arrowRight.addEventListener("mouseout", function() {imgArrowRight.style.display = ("none");})

/* arrow_galerie_photo end */
/*Galerie Photo end */

/* All scroll */
/* scroll NavBar */

const navLeft = document.querySelector("#nav_left");
const desktop = document.querySelector("#desktop");

navLeft.onclick = function() { desktop.scrollIntoView({ behavior: 'smooth' })}

/* scroll NavBar */
/*scroll discover_carousel */

const divTextCarousel1 = document.querySelector(".div_text_carousel_1");
const divTextCarousel2 = document.querySelector(".div_text_carousel_2");
const divTextCarousel3 = document.querySelector(".div_text_carousel_3");
const divTextCarousel4 = document.querySelector(".div_text_carousel_4");

const abbaye = document.getElementById("abbaye");
const grotte = document.getElementById("grotte");
const cascade = document.getElementById("cascade");
const reculee = document.getElementById("reculee");

divTextCarousel1.onclick = function() { abbaye.scrollIntoView({ behavior: 'smooth' })}
divTextCarousel2.onclick = function() { grotte.scrollIntoView({ behavior: 'smooth' })}
divTextCarousel3.onclick = function() { cascade.scrollIntoView({ behavior: 'smooth' })}
divTextCarousel4.onclick = function() { reculee.scrollIntoView({ behavior: 'smooth', block: 'end'})}

/*scroll discover_carousel */
/*scroll navBar_btn_discover */

const btnNavBarReculee = document.querySelector("#btn_navBar_reculee");

btnNavBarReculee.onclick = function() { reculee.scrollIntoView({ behavior: 'smooth', block: 'end'})}

/*scroll navBar_btn_discover */
/* all scroll end */

/* NavBar apparition */

const header = document.querySelector("#header");
const navBar = document.querySelector("#navigation");

window.addEventListener('scroll',() => {
  
    let scrollY = this.scrollY;
    if(scrollY > header.clientHeight ){
        navBar.classList.add("nav_bar_opacity_out");
        navBar.classList.remove("nav_bar_opacity_in");
    }else {
        navBar.classList.add("nav_bar_opacity_in");
        navBar.classList.remove("nav_bar_opacity_out");
    }
})

// window.addEventListener("mousein",(e)=>{
//     if(e.target !== navBar && scrollY > header.clientHeight ){
//         navBar.classList.add("nav_bar_opacity_out");
//         navBar.classList.remove("nav_bar_opacity_in");
//     }else {
//         navBar.classList.add("nav_bar_opacity_in");
//         navBar.classList.remove("nav_bar_opacity_out");
//     }
// })

navBar.addEventListener("mouseover", function() {
    navBar.classList.add("nav_bar_opacity_in");
    navBar.classList.remove("nav_bar_opacity_out");
})

navBar.addEventListener("mouseout", function() {
    let scrollY = window.scrollY;

    if (scrollY > header.clientHeight ){
        navBar.classList.add("nav_bar_opacity_out");
        navBar.classList.remove("nav_bar_opacity_in");
    }
})

/* NavBar apparition */
/* NavDiscover Apparition */

const navDiscover = document.querySelector("#nav_discover");
const allLiNavDiscover = document.querySelectorAll(".hidden_btn_nav_discover");

navDiscover.addEventListener("mouseover", function() {
    allLiNavDiscover.forEach(element => {
        element.classList.remove("hidden_btn_nav_discover");
    });
})

navDiscover.addEventListener("mouseout", function() {
    allLiNavDiscover.forEach(element => {
        element.classList.add("hidden_btn_nav_discover");
    });
})

/* navDiscover Apparition */