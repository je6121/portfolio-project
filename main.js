 const menuBtn = document.getElementById("menu-btn");
 const navLinks= document.getElementById("menu-btn");
const menuBtnIcon =menuBtn.querySelector("1");

menuBtn.addEventListener("click",(e)=> {
    navLinks.classList.toggle("open");

    const isOpen =nav-links.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line":"ri-menu-line")
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});
document.addEventListener("DOMContentLoaded",
function(){
    const contactBtn=
    document.getElementById("contactBtn");
    const contactSection=
    document.getElementById("contactSection");

    contactBtn.addEventListener("click",function(){
        contactSection.scrollIntoView({ behavior:"smooth"});
    });
});

const scrollRevealOption={
    origin:"bottom",
    distance:"50px",
    duration:1000,
};

scrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin:"right",
});
scrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
scrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay:1000,
});
scrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay:1500,
});
scrollReveal().reveal(".header__btn", {
    ...scrollRevealOption,
    delay: 2000,
});

scrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin:"left",
});
scrollReveal().reveal(".about_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
scrollReveal().reveal(".about__content p",{
    ...scrollRevealOption,
    delay: 1000,
});
scrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay:1500,
});

scrollReveal().reveal(".service_card",{
    duration:1000,
    interval:500,
});

scrollReveal().reveal(".facility_content .section_header", {
    ...scrollRevealOption,
    origin:"left",
});
scrollReveal().reveal(".facility_content p", {
    ...scrollRevealOption,
    delay: 500,
});

