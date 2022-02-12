const hamburger = document.querySelector(".nav-hamburger-icon");
const sidebar = document.querySelector(".sidebar")


hamburger.addEventListener('click',()=>{
    sidebar.classList.toggle("sidebar-show")
})
