const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

document.getElementById("next").onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
};

document.getElementById("prev").onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
};

document.getElementById("close").onclick = () => {
    lightbox.style.display = "none";
};

function filterImages(category) {
    images.forEach(img => {
        if(category === "all" || img.classList.contains(category))
            img.style.display = "block";
        else
            img.style.display = "none";
    });
}