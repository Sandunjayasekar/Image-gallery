let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
});