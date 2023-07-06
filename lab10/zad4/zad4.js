window.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
    const closeIcon = document.querySelector(".fa-xmark");
    const barsIcon = document.querySelector(".fa-bars");
    const items = document.querySelectorAll(".item");

    hamburger.addEventListener("click", toggle);
    items.forEach(
        i => {
            i.addEventListener("click", toggle);
        }
    );
    function toggle() {
        if (navbar.classList.contains("show")) {
            navbar.classList.remove("show");
            closeIcon.style.display = "none";
            barsIcon.style.display = "block";
        } else {
            navbar.classList.add("show");
            closeIcon.style.display = "block";
            barsIcon.style.display = "none";
        }
    }


})


