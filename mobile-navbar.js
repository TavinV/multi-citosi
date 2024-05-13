let mobileMenu = document.getElementById("mobile-menu")
let navList = document.getElementById("nav-list")


mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active')
})