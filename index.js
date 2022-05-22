const slides = document.getElementsByClassName("carousel-item")
const dotBtnContainer = document.getElementById("dot-btns")
const dotBtns = document.getElementsByClassName("dot-btn")
const overlay = document.getElementById("overlay")
const totalSlides = slides.length
let slidePosition = 0

document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide)
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide)

document.getElementById("open-carousel").addEventListener("click", function(){
    overlay.style.display = "block"
})

document.getElementById("exit-btn").addEventListener("click", function(){
    overlay.style.display = "none"
})

for (let i = 0 ; i < slides.length; i++) {
    let button = document.createElement("button")
    button.setAttribute("class", "dot-btn") 
    button.setAttribute("id", `${i}`) 
    button.setAttribute("onclick", "clickHandler(this.id)")
    button.style.color = "grey"
    button.innerHTML = `<i class="fa-solid fa-circle"></i>`
    dotBtnContainer.append(button)
}

dotBtns[0].style.color = "white"

function clickHandler(id) {
    hideAllSlides()
    slidePosition = parseInt(id)
    dotBtns[slidePosition].style.color = "white"
    slides[slidePosition].classList.remove("carousel-item-hidden")
    slides[slidePosition].classList.add("carousel-item-visible")
}

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    } 
    for (let button of dotBtns) {
        button.style.color = "gray"
    }   
}

function moveToNextSlide(){
    hideAllSlides()
    if (slidePosition == totalSlides-1) {
        slidePosition = 0
    } else {
        slidePosition += 1
    }
    console.log("slidePosition ", slidePosition)
    slides[slidePosition].classList.add("carousel-item-visible")
    dotBtns[slidePosition].style.color = "white"
}

function moveToPrevSlide(){
    hideAllSlides()
    if (slidePosition == 0) {
        slidePosition = totalSlides-1
    } else {
        slidePosition -= 1
    }
    slides[slidePosition].classList.add("carousel-item-visible")
    dotBtns[slidePosition].style.color = "white"
}


// function moveToNextSlide(){
//     slides[slidePosition].style.display = "none"
//     if (slidePosition == totalSlides-1) {
//         slidePosition = 0
//     } else {
//         slidePosition += 1
//     }
//     slides[slidePosition].style.display = "block"
// }

// function moveToPrevSlide(){
//     slides[slidePosition].style.display = "none"
//     if (slidePosition == 0) {
//         slidePosition = totalSlides-1
//     } else {
//         slidePosition -= 1
//     }
//     slides[slidePosition].style.display = "block"
// }