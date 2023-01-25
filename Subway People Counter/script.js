
let people = 0;

const incrementor = document.getElementById('increment-btn')
const saveEl = document.getElementById('save-prompt')
let counter = document.getElementById('count')

function increment() {
    people += 1
    counter.innerText = people
}

function save() {
    let count = people + " - "
    saveEl.innerText += count
    console.log(people)
}

// Welcome script
const welcomeEl = document.getElementById('welcome-el')
let name = "Gil"
let greeting = "Welcome " + "Gil" + "!"

//rendering the welcome text
welcomeEl.innerText = greeting

welcomeEl.innerText = greeting + "👍"
