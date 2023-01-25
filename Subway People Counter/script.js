
let people = 0;

const incrementor = document.getElementById('increment-btn')
const saveEl = document.getElementById('save-prompt')
let counter = document.getElementById('count')

function increment() {
    people += 1
    counter.textContent = people
}

function save() {
    let countStr = people + " - "
    saveEl.textContent += countStr
    reset()
}

function reset() {
    people = 0
    counter.textContent = people
}

// Welcome script
const welcomeEl = document.getElementById('welcome-el')
let name = "Gil"
let greeting = "Welcome " + "Gil" + "!"

//rendering the welcome text
welcomeEl.innerText = greeting

welcomeEl.innerText = greeting + "👍"
