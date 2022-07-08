/* Carousel_discover start + Scroll Auto */

const photoCarousel = document.querySelectorAll(".photo_carousel");

const abbaye = document.getElementById("abbaye");
const grotte = document.getElementById("grotte");
const cascade = document.getElementById("cascade");
const reculee = document.getElementById("reculee");

photoCarousel.forEach(element => {
    element.onclick = function() {fctCarousel(element, element.classList[1])}
});

function fctCarousel(carousel, className) {

    photoCarousel.forEach(element => {
            if (element.classList.contains("activate") && element.classList[1] != className ) {
                element.classList.add("last");
            } else if (element.classList.contains("last")) {
                element.classList.remove("last");
            /* Scroll start */
            } else if (element.classList.contains("activate") && element.classList[1] === className ){
                if (className === 'carousel_1'){
                    abbaye.scrollIntoView({ behavior: 'smooth' })
                } else if (className === 'carousel_2'){
                    grotte.scrollIntoView({ behavior: 'smooth'})
                } else if (className === 'carousel_3'){
                    cascade.scrollIntoView({ behavior: 'smooth'})
                } else if (className === 'carousel_4'){
                    reculee.scrollIntoView({ behavior: 'smooth'})
                }
            /* Scroll end */
            }
        element.classList.remove("activate");
        element.children[0].classList.add("hiden");
    });
        carousel.classList.add("activate");
        carousel.children[0].classList.remove("hiden");
}

/* Carousel_discover + Scroll Auto end */
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
fctGaleriePhoto();

function fctGaleriePhoto(moreOrLess) {

    /* reponsive */
    if (window.innerWidth < 767) {galeryPhotoPhone = "/galery_photo_phone";} else {galeryPhotoPhone = "";}
    /* reponsive */

    if (moreOrLess == -1 ){ x--, p--, y-- } else { x++, p++, y++ }
    
    if (x == 0){ x = nbr_max_photo;} else if (x == nbr_max_photo+1) {x = 1;};
    if (p == 0){ p = nbr_max_photo;} else if (p == nbr_max_photo+1) {p = 1;};
    if (y == 0){ y = nbr_max_photo;} else if (y == nbr_max_photo+1) {y = 1;};

    arrowLeft.style.backgroundImage = "url('images/galery_photo"+galeryPhotoPhone+"/galery_"+x+".webp')";
    galeryMain.style.backgroundImage = "url('images/galery_photo"+galeryPhotoPhone+"/galery_"+p+".webp')";
    arrowRight.style.backgroundImage = "url('images/galery_photo"+galeryPhotoPhone+"/galery_"+y+".webp')";

    /* fondu */
    galeryMain.classList.add("galery_photo_animation");
    setTimeout(() => {galeryMain.classList.remove("galery_photo_animation");}, 600);
    /* fondu */

    if (window.innerWidth < 767) { setTimeout(fctGaleriePhoto, 3000);}
} 

/* arrow_galerie_photo start */

if (window.innerWidth > 1280) {

const imgArrowLeft = document.querySelector(".img_arrow_left");
const imgArrowRight = document.querySelector(".img_arrow_right");

arrowLeft.addEventListener("mouseover", function() {imgArrowLeft.style.display = ("flex");})
arrowLeft.addEventListener("mouseout", function() {imgArrowLeft.style.display = ("none");})
arrowRight.addEventListener("mouseover", function() {imgArrowRight.style.display = ("flex");})
arrowRight.addEventListener("mouseout", function() {imgArrowRight.style.display = ("none");})

}
/* arrow_galerie_photo end */
/*Galerie Photo end */

/* All scroll */
/* scroll NavBar */

const navLeft = document.querySelector("#nav_left");
const desktop = document.querySelector("#desktop");

navLeft.onclick = function() { desktop.scrollIntoView({ behavior: 'smooth' })}

/* scroll NavBar */
/*scroll navBar_btn_discover */

const btnNavBarReculee = document.querySelector("#btn_navBar_reculee");

btnNavBarReculee.onclick = function() { reculee.scrollIntoView({ behavior: 'smooth', block: 'center'})}

/*scroll navBar_btn_discover */
/* all scroll end */

/* NavBar apparition */

const header = document.querySelector("#header");
const navBar = document.querySelector("#navigation");

if (window.innerWidth > 1280) {
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
}

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
/* navBar Responsive Apparition */

const openBtn = document.querySelector('#openBtn');
const menuToggle = document.querySelector('.menu-toggle');
const navResponsiveUl = document.querySelector('#nav_responsive_ul');
const navResponsive = document.querySelector('#nav_responsive');
const burgerLine1 = document.querySelector('.burgerline1');
const burgerLine2 = document.querySelector('.burgerline2');
const burgerLine3 = document.querySelector('.burgerline3');

// menuToggle.onclick = function () {navResponsiveOpenOrNot(menuToggle)};
document.addEventListener("click", function(e){
    var eTarget = e.target;
    navResponsiveOpenOrNot(eTarget);
});

function navResponsiveOpenOrNot(e){

    if ( navResponsiveUl.style.transform != 'translateX(0px)' && (e === menuToggle || e === burgerLine1 || e === burgerLine2 || e === burgerLine3 )){
        navResponsiveUl.style.transform = ("translateX(0px)");
        burgerLine1.style.transform = ('translateY(3px) rotate(45deg)');
        burgerLine2.style.display =("none");
        burgerLine3.style.transform = ('translateY(-3px) rotate(-45deg)');
    } else if (navResponsiveUl.style.transform = 'translateX(0px)' && e != navResponsiveUl) {
        navResponsiveUl.style.transform = ("translateX(100%)");
        burgerLine1.style.transform = ('unset');
        burgerLine2.style.display =("unset");
        burgerLine3.style.transform = ('unset');
    }
}

/* navBar Responsive Apparition */
/* Intersection Observer start */

const allImgMainContainer = document.querySelectorAll(".img_main_container");
const imgMainLeft1 = document.querySelector('.img_main_left_1');
const imgMainLeft2 = document.querySelector('.img_main_left_2');

const callback = function( entries ) {

    let observedImg = entries[0];

    if (!observedImg.isIntersecting) {
        observedImg.target.style.transition = 'none';
        observedImg.target.style.opacity = '0%';
        if (observedImg.target == imgMainLeft1 || observedImg.target == imgMainLeft2) {
        observedImg.target.style.transform = 'translateX(-100%)';
        } else {
            observedImg.target.style.transform = 'translateX(100%)';
        }
    }else{
        observedImg.target.style.transition = 'all 1s ease-in-out';
        observedImg.target.style.transform = 'translateX(0px)';
        observedImg.target.style.opacity = "100%";
    } 
};

allImgMainContainer.forEach(element => {
    const observer = new IntersectionObserver(callback);
    observer.observe(element);
});

/* Intersection Observer end */