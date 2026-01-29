const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");
const slider = document.getElementById("slider");

let index = 0;
let interval;

/* Create dots */
images.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
        index = i;
        showSlide();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

next.onclick = () => {
    index = (index + 1) % images.length;
    showSlide();
};

prev.onclick = () => {
    index = (index - 1 + images.length) % images.length;
    showSlide();
};

function autoSlide() {
    interval = setInterval(() => {
        index = (index + 1) % images.length;
        showSlide();
    }, 3000);
}

slider.addEventListener("mouseenter", () => clearInterval(interval));
slider.addEventListener("mouseleave", autoSlide);

showSlide();
autoSlide();