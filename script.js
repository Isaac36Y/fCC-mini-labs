const image = document.querySelectorAll(".gallery-item") 
const lightbox = document.querySelector(".lightbox")
const lightboxImg = document.querySelector("#lightbox-image")
const close = document.querySelector("#close-btn")

const showLightbox = (img) => {
    lightbox.style.display = "flex"
    lightboxImg.src = `${img.src.slice(0, -14)}.jpg`
}

image.forEach((pic) => {
    pic.addEventListener("click", () => {
        showLightbox(pic)
    })
})

close.addEventListener("click", () => {
    lightbox.style.display = "none"
})
