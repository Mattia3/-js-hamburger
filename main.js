console.log("Hamburgher menù")

let iconMenu = document.querySelector(".header-right > a")
let menu = document.querySelector(".hamburger-menu")

iconMenu.addEventListener('click', 
 function(){
    menu.classList.toggle("active")
  })

let close = document.querySelector(".close")

close.addEventListener('click',
  function() {
    menu.classList.toggle("active")
})


 

