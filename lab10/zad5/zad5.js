window.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".title");

    titles.forEach((title) => {
        title.addEventListener("click", () => {
            if (title.classList.contains("active")) {
                title.classList.remove("active");
            } else {
                const titlesActive = document.querySelectorAll(".active");
                titlesActive.forEach((titleActive) => {
                    titleActive.classList.remove("active");
                });
                title.classList.add("active");
            }
        });
    });
});

