/* Carousel_discover version Desktop */

const photo_carousel = document.querySelectorAll(".photo_carousel");
const carousel_1 = document.querySelector(".carousel_1");
const carousel_2 = document.querySelector(".carousel_2");
const carousel_3 = document.querySelector(".carousel_3");
const carousel_4 = document.querySelector(".carousel_4");

carousel_1.onclick = function() {fct_carousel(carousel_1, "carousel_1");}
carousel_2.onclick = function() {fct_carousel(carousel_2, "carousel_2");}
carousel_3.onclick = function() {fct_carousel(carousel_3, "carousel_3");}
carousel_4.onclick = function() {fct_carousel(carousel_4, "carousel_4");}

function fct_carousel(carousel, className) {
    photo_carousel.forEach(element => {
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
