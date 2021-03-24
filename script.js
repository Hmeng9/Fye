const scrollY = window.pageYOffset

function scrollNav() {
    const nav = document.querySelector(".navbar")

    //Scroll 2 step navbar background will change color
    if (this.scrollY > 200) {
        nav.classList.add("sticky")
    } else {

        nav.classList.remove("sticky")
    }
}
window.addEventListener("scroll", scrollNav)

// menu btn
var menubtn = document.getElementById("menu-btn")
    // var menu = document.querySelector(".navbar .menu")
var menu = document.getElementById("menu")
var i = 1
menubtn.addEventListener("click", () => {
    console.log("click")
    menu.classList.toggle("active")
    console.log("active")


})
var typed = new Typed(".typing", {
    strings: ["UX/UI Designer", "Web Developer", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});
var typed = new Typed(".typing-2", {
    strings: ["UX/UI Designer", "Web Developer", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});
// const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId),
//         nav = document.getElementById(navId)

//     // Validate that variable exit
//     if (toggle && nav) {
//         // We add the show-menu class to div tag with the nav_menu class
//         toggle.addEventListener('click', () => {
//             console.log("click")
//             nav.classList.toggle('active')
//         })
//     }
// }
// showMenu('menu-btn', 'menu')