const date = document.querySelector(".datepicker")
const pictureTitle = document.querySelector(".picture-title")
const picture = document.querySelector(".nasa-picture")
const pictureExplanation = document.querySelector(".picture-explanation")
const readButton = document.querySelector(".read-button")
const pastPictures = document.querySelector(".past-pictures")
const apiKey = "a17PP977i4ezhIpeah2ClOTqBvrvclIN1S0Nda8D"
var apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
const utterance = new SpeechSynthesisUtterance()
utterance.lang = "en-US"

pastPictures.addEventListener("click", () => {
    apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date.value}`
    fetch(apiURL)
        .then(res => res.json())
        .then(data => setAPIData(data))
        .catch(err => console.log(err))
})

function setAPIData(apiData) {
    pictureTitle.innerHTML = `Kiválasztott dátum: ${apiData.date} <br /> ${apiData.copyright}: <br /> ${apiData.title}`
    picture.src = apiData.url
    pictureExplanation.innerHTML = `<strong>${apiData.explanation}</strong>`
    utterance.text = apiData.explanation
}

readButton.addEventListener("click", () => {
    speechSynthesis.speak(utterance)
})