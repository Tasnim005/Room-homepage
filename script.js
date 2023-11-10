const header = document.querySelector('header')
const title = document.querySelector('h1')
const text = document.querySelector('.text')
const previousButton = document.getElementById('previous')
const nextButton = document.getElementById('next')

// Resources
let imageURLs = ['images/desktop-image-hero-1.jpg', 'images/desktop-image-hero-2.jpg', 'images/desktop-image-hero-3.jpg']

const headings = ['Discover innovative ways to decorate', 'We are available all across the globe', 'Manufactured with the best materials']

const info = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.", "With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions?Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]

let i = 0

// Show smaller images for smaller screens
if (window.innerWidth <= 500) {
    imageURLs = ['images/mobile-image-hero-1.jpg', 'images/mobile-image-hero-2.jpg', 'images/mobile-image-hero-3.jpg']

    // Initially update DOM with the first item
    header.style.backgroundImage = `url(${imageURLs[i]})`

}

// Initially update DOM with the first item
header.style.backgroundImage = `url(${imageURLs[i]})`
title.textContent = headings[i]
text.textContent = info[i]

nextButton.addEventListener('click', moveForward)
previousButton.addEventListener('click', moveBackward)


function moveForward() {
    i++

    if (i >= imageURLs.length) {
        i = 0
    }

    header.style.backgroundImage = `url(${imageURLs[i]})`
    title.textContent = headings[i]
    text.textContent = info[i]
}

function moveBackward() {
    i--

    if (i < 0) {
        i = imageURLs.length - 1
    }

    header.style.backgroundImage = `url(${imageURLs[i]})`
    title.textContent = headings[i]
    text.textContent = info[i]
}

// Navigation 
const ul = document.querySelector('ul')
const hamburger = document.querySelector('.hamburger')
const closeButton = document.querySelector('#close')

hamburger.addEventListener('click', openLinks)

function openLinks() {
    ul.classList.toggle('clicked')
    closeButton.classList.toggle('clicked')
}

closeButton.addEventListener('click', closeLinks)
function closeLinks() {
    ul.classList.toggle('clicked')
    closeButton.classList.toggle('clicked')
}