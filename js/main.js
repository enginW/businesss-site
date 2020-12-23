// RESPONSİVE
const navMenu = () => {
    const navbarToggle = document.querySelector(".navbar-toggle")
    const nav = document.querySelector(".nav")

    navbarToggle.addEventListener("click", () => {
        nav.classList.toggle("nav-active")
        navbarToggle.classList.toggle("toggle")
    })
}

navMenu();

ScrollReveal().reveal('.ani-left', {
    origin: "left",
    distance: "10rem",
    duration: "1000",
    easing: "ease-in"
});
ScrollReveal().reveal('.ani-right',{
    origin: "right",
    distance: "10rem",
    duration: "1000",
    easing: "ease-in"
});
ScrollReveal().reveal('.ani-leftt',{
    origin: "left",
    distance: "10rem",
    duration: "1500",
    easing: "ease-in"
});
ScrollReveal().reveal('.ani-delay',{
    delay: 500,
});
ScrollReveal().reveal('.ani-delay1',{
    delay: 1000,
});