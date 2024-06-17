'use strict';

// Preload
// Загрузка закончится, когда документ подгрузится

const preloader = document.querySelector('.preload');

window.addEventListener('load', () => {
    preloader.classList.add('loaded');
    document.body.classList.add('loaded');
})

// Navbar

const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const navBar = document.querySelector('.nav');
const overlay = document.querySelector('.overlay')

openBtn.addEventListener('click', () => {
    navBar.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    navBar.classList.remove('active');
    overlay.classList.remove('active');
});

// Header on scroll changing

const header = document.querySelector('.header');

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    hideHeader();
});

// Hero slider

const heroSlider = document.querySelector('.slider');
const heroSliderItems = document.querySelectorAll('.slider__item');

let currSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updatePos = function () {
    lastActiveSliderItem.classList.remove('active');
    heroSliderItems[currSlidePos].classList.add('active');
    lastActiveSliderItem = heroSliderItems[currSlidePos];
};

const slideNext = function () {
    if (currSlidePos >= heroSliderItems.length - 1) {
        currSlidePos = 0;
    } else {
        currSlidePos++;
    }

    updatePos();
};

const slidePrev = function () {
    if (currSlidePos <= 0) {
        currSlidePos = heroSliderItems.length - 1;
    } else {
        currSlidePos--;
    }

    updatePos();
};

let autoSlideInterval;

const autoSlide = function () {
    autoSlideInterval = setInterval(function () {
        slideNext();
    }, 7000);
};

window.addEventListener('load', autoSlide);