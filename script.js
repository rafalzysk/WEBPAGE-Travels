const searchForm = document.querySelector(".search-form");
const searchBtn = document.getElementById("search-btn");
const menuBtn = document.getElementById("menu-btn");
const navBar = document.querySelector("nav");

searchBtn.addEventListener("click", ()=>{
    searchForm.classList.toggle("active")
    navBar.classList.remove("active")

})

menuBtn.addEventListener("click", ()=>{
   navBar.classList.toggle("active")
   searchForm.classList.remove("active")

})

var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
   
     function windowScroll (){
        navBar.classList.remove("active")
        searchForm.classList.remove("active")
        console.log("bobovaa")
     }
    

    window.addEventListener("scroll", windowScroll)