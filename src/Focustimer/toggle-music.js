import { toggleForestMusic, toggleRainMusic, toggleStoreMusic, toggleFireMusic } from './actions.js' 

const btnForest = document.querySelector('#toggleForestSound')
const bgForest = document.querySelector('#forestButton')

const btnRain = document.querySelector('#toggleRainSound')
const bgRain = document.querySelector('#rainButton')

const btnStore = document.querySelector('#toggleStoreSound')
const bgStore = document.querySelector('#storeButton')

const btnFire = document.querySelector('#toggleFireSound')
const bgFire = document.querySelector('#fireButton')

btnForest.addEventListener('click', (event) => {
    toggleForestMusic();
    bgForest.classList.toggle("button-box-forest")
    btnForest.classList.toggle("white-color")
})

btnRain.addEventListener('click', (event) => {
    toggleRainMusic();
    bgRain.classList.toggle("button-box-rain")
    btnRain.classList.toggle("white-color")
})

btnStore.addEventListener('click', (event) => {
    toggleStoreMusic()
    bgStore.classList.toggle("button-box-store")
    btnStore.classList.toggle("white-color")
})

btnFire.addEventListener('click', (event) => {
    toggleFireMusic()
    bgFire.classList.toggle("button-box-fire")
    btnFire.classList.toggle("white-color")
})