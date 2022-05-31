/* Carousel_discover version Desktop */

// const activate = document.querySelector(".activate");
const photo_carousel = document.querySelectorAll(".photo_carousel");
const carousel_1 = document.querySelector(".carousel_1");
const carousel_2 = document.querySelector(".carousel_2");
const carousel_3 = document.querySelector(".carousel_3");
const carousel_4 = document.querySelector(".carousel_4");

carousel_1.onclick = function() {
    remove_activate();
    carousel_1.classList.add("activate");
}

carousel_2.onclick = function() {
    remove_activate();
    carousel_2.classList.add("activate");
}

carousel_3.onclick = function() {
    remove_activate();
    carousel_3.classList.add("activate");
}

carousel_4.onclick = function() {
    remove_activate();
    carousel_4.classList.add("activate");
    
}

function remove_activate() {
    photo_carousel.forEach(element => {
        if (element.classList.contains("activate")) {
            element.classList.add("last");
        } else if (element.classList.contains("last")){
            element.classList.remove("last");
        }
        element.classList.remove("activate");
    });
}
