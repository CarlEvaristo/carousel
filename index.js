const dotBtnContainer = document.getElementById("dot-btns")
const dotBtns = document.getElementsByClassName("dot-btn")
const overlay = document.getElementById("overlay")
const carousel = document.querySelector(".carousel")

let movies = [
    {
        image:"images/1.jpg",
        title:"movie title 1"
    },
    {
        image:"images/2.jpg",
        title:"movie title 2"
    },
    {
        image:"images/3.jpg",
        title:"movie title 3"
    }
]

for (let i=0; i<movies.length; i++) {
    let movieDiv = document.createElement("div")
    if (i == 0) {
        movieDiv.setAttribute("class", "carousel-item carousel-item-visible")
    } else {
        movieDiv.setAttribute("class", "carousel-item")
    }
    let movieImg = document.createElement("img")
    movieImg.setAttribute("class", "carousel-img")
    movieImg.setAttribute("alt", movies[i].title)
    movieImg.setAttribute("src", movies[i].image)
    let movieTitle = document.createElement("h2")
    movieTitle.textContent = `${movies[i].title}`
    movieDiv.append(movieImg)
    movieDiv.append(movieTitle)
    carousel.append(movieDiv)
}

const slides = document.getElementsByClassName("carousel-item")
const totalSlides = slides.length
let slidePosition = 0

document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide)
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide)

// show modal on open click
document.getElementById("open-carousel").addEventListener("click", function(){
    slidePosition = 0
    overlay.style.display = "block"
})
// remove modal on exit click
document.getElementById("exit-btn").addEventListener("click", function(){
    slidePosition = 0
    location.reload()
})
// create all dot buttons on start
for (let i = 0 ; i < slides.length; i++) {
    let button = document.createElement("button")
    button.setAttribute("class", "dot-btn") 
    button.setAttribute("id", `${i}`) 
    button.setAttribute("onclick", "clickHandler(this.id)")
    button.style.color = "grey"
    button.innerHTML = `<i class="fa-solid fa-circle"></i>`
    dotBtnContainer.append(button)
}
// make current dot button white on start
dotBtns[0].style.color = "white"

// dot button click handler
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