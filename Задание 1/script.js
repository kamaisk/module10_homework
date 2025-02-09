document.querySelector(".btn").addEventListener("click", () => {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
        icon.classList.toggle("hidden");
    })
})