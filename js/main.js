/* Carousel_discover version Desktop start */

const photoCarousel = document.querySelectorAll(".photo_carousel");
const carousel_1 = document.querySelector(".carousel_1");
const carousel_2 = document.querySelector(".carousel_2");
const carousel_3 = document.querySelector(".carousel_3");
const carousel_4 = document.querySelector(".carousel_4");

carousel_1.onclick = function() {fctCarousel(carousel_1, "carousel_1");}
carousel_2.onclick = function() {fctCarousel(carousel_2, "carousel_2");}
carousel_3.onclick = function() {fctCarousel(carousel_3, "carousel_3");}
carousel_4.onclick = function() {fctCarousel(carousel_4, "carousel_4");}

function fctCarousel(carousel, className) {
    photoCarousel.forEach(element => {
        console.log(element.classList)
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
/*Galerie Photo start */

const arrowLeft = document.getElementById("galery_left");
const arrowRight = document.getElementById("galery_right");
const galeryMain = document.getElementById("galery_main");
let x = 1; let p = 2; let y = 3;

let nbr_max_photo = 5;

arrowLeft.onclick = function() {fctGaleriePhoto(-1);}
arrowRight.onclick = function() {fctGaleriePhoto(+1);}
fctGaleriePhoto()

function fctGaleriePhoto(moreOrLess) {

    if (moreOrLess == -1 ){ x--, p--, y-- } else { x++, p++, y++ }
    
    if (x == 0){ x = nbr_max_photo;} else if (x == nbr_max_photo+1) {x = 1;};
    if (p == 0){ p = nbr_max_photo;} else if (p == nbr_max_photo+1) {p = 1;};
    if (y == 0){ y = nbr_max_photo;} else if (y == nbr_max_photo+1) {y = 1;};

    arrowLeft.style.backgroundImage = "url('/Github/Baume_les_messieurs_website/images/galery_photo/galery_"+x+".jpg')";
    galeryMain.style.backgroundImage = "url('/Github/Baume_les_messieurs_website/images/galery_photo/galery_"+p+".jpg')";
    arrowRight.style.backgroundImage = "url('/Github/Baume_les_messieurs_website/images/galery_photo/galery_"+y+".jpg')";
} 

/*Galerie Photo end */

