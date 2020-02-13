/* ----------------------------------------------------
file for www.dariacode.dev

Updated: 01/29/2020
Author: Daria Vodzinskaia
Website: www.dariacode.dev
-------------------------------------------------------  */

let mainNavLinks = document.getElementById("nav-main").querySelectorAll(".nav-item");
let mainSection = document.querySelectorAll("section");
let lastId;
let cur = [];

window.addEventListener("scroll", event =>{
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add("current");
        } else {
            link.classList.remove("current");
        }
    });
});

