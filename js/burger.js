const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.getElementsByClassName("burger-menu-link");
const overlay = document.getElementById("burger-menu-overlay");
const burgerButton = document.getElementById("burger-menu-button");

const toggleMenu = () => {
    const activeClass = "burger-menu-active";
    if (burgerMenu.classList.contains(activeClass)) {
        burgerMenu.classList.remove(activeClass);
        document.body.style.overflow = "visible";
    } else {
        burgerMenu.classList.add(activeClass);
        document.body.style.overflow = "hidden";
    }
};

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', toggleMenu);
}

burgerButton.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
