
//* -------SWIPER1-------ANIMATIONN---------*/

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 2000
});





//* -------SWIPER5-------ANIMATIONN---------*/

var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        300: {
            slidesPerView: 2
        },
        760: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
        1250: {
            slidesPerView: 5
        },
        1480: {
            slidesPerView: 6
        }
    }

});




//* -------SWIPER2-------ANIMATIONN---------*/

var swiper2 = new Swiper(".mySwiper2", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});




//* -------SWIPER3-------ANIMATIONN---------*/

var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: true,

    breakpoints: {
        300: {
            slidesPerView: 1
        },
        760: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 2
        },
        1250: {
            slidesPerView: 3
        },
        1480: {
            slidesPerView: 4
        }
    }
});





//* -------SWIPER4-------ANIMATIONN---------*/

var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: true,

    breakpoints: {
        300: {
            slidesPerView: 2
        },
        760: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        },
        1250: {
            slidesPerView: 5
        },
        1480: {
            slidesPerView: 6
        }
    }
});





//* -------SWIPER6-------ANIMATIONN---------*/

var swiper6 = new Swiper(".mySwiper6", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: true,
});






//* -------SWIPER7-------ANIMATIONN---------*/

var swiper7 = new Swiper(".mySwiper7", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper8 = new Swiper(".mySwiper8", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper7,
    },

});





//* -------SCROLL ANIMATIONN---------*/

const target = document.querySelectorAll(".target");

const callBack = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("anime")
        }
        else {
            entry.target.classList.remove("anime")
        }
    })
}

const options = {
    threshold: 0
}



const observer = new IntersectionObserver(callBack, options);

target.forEach((target => {
    observer.observe(target);
}));







//* -------SCROLL ANIMATIONN NAVBAR---------*/


const navElement = document.getElementById("navbarId");

document.addEventListener("scroll", () => {

    if (window.scrollY > 220) {
        navElement.classList.add("scrolled");
    } else {
        navElement.classList.remove("scrolled");
    }
    if (window.scrollY > 250) {
        navElement.classList.add("scrolled2");
    } else {
        navElement.classList.remove("scrolled2");
    }
})










//*-----------SHOP SINGLE COUNT-------------------- */


const minuceElement = document.getElementById("minuce");
const plusElement = document.getElementById("plus");
const screenElement = document.getElementById("screen");

let count = 0;

plusElement.addEventListener("click", () => {
    count++;
    screenElement.innerText = count
})


minuceElement.addEventListener("click", () => {
    if (count > 0) {
        count--;
        screenElement.innerText = count
    }
})


