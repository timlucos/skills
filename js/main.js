//Navigation bar effects on scroll
window.addEventListener("scroll",function(){
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 0);
})

//Service section - Modal
const serviceModal = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

let  modal = function(modalClick){
    serviceModal[modalClick].classList.add("active");
}
learnmoreBtns.forEach((learnmoreBtns, i) => {
    learnmoreBtns.addEventListener("click", () => {
        modal(i)
    })
})
modalCloseBtns.forEach((modalCloseBtns) => {
    modalCloseBtns.addEventListener("click", () => {
        serviceModal.forEach((modalView) => {
            modalView.classList.remove("active");
        })
    });
})
//Portfolio section - Modal

const partfolioModals = document.querySelectorAll(".partfolio-modal");
const imgCards = document.querySelectorAll(".img-card");
const partfolioCloseBtns = document.querySelectorAll(".partfolio-close-btn");

let  partfolioModal = function(modalClick){
    partfolioModals[modalClick].classList.add("active");
}
imgCards.forEach((imgCards, i) => {
    imgCards.addEventListener("click", () => {
        partfolioModal(i)
    })
})
partfolioCloseBtns.forEach((partfolioCloseBtns) => {
    partfolioCloseBtns.addEventListener("click", () => {
        partfolioModal.forEach((partfolioView) => {
            partfolioView.classList.remove("active");
        })
    });
})



//Our clients - Swiper
var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun")
}

//Scroll to top button
const scrollTopbtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function(){
    scrollTopbtn.classList.toggle("active", window.scrollY > 500);

})
scrollTopbtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;


    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && screenY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + " ]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + " ]").classList.remove("active");
        }
    });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => (
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    })
))

//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    // reset: true ,
    distance: '60px',
    duration: 2500,
    delay:100
});
//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2 , .section-title-02, .section-title-01', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn,.professional-list', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn',  {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, contact-left li ',  {delay: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.home-img, .about-img',  {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-rigth',  {delay: 600, origin: 'right'});
ScrollReveal().reveal('.about ..professinal-list li',  {delay: 500, origin: 'right', interval:200});
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left  ',  {delay: 700, origin: 'left'});
ScrollReveal().reveal('.experience-card, .service-card, .education, .partfolio .img-card',  {delay: 800, origin: 'bottom', interval:200});
ScrollReveal().reveal('footer .group',  {delay: 500, origin: 'top', interval:200});