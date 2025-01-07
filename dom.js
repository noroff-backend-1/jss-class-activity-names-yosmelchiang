import { apiHelper } from './api.js'

// DOM
const btnGetAll = document.getElementById("btn-show-all")
const btnGetMale = document.getElementById("btn-show-male")
const btnGetFemale = document.getElementById("btn-show-female")
const btnGetBegin = document.getElementById("btn-show-begin")
const inputLetter = document.getElementById("input-letter")
const namesOutput = document.getElementById("text-names-output")
const btnClear = document.getElementById("btn-clear")

// Globals
let letter = ''
let names = []

// Event Listeners
btnGetAll.addEventListener("click", () => handleClick("all"))
btnGetMale.addEventListener("click", () => handleClick("male"))
btnGetFemale.addEventListener("click", () => handleClick("female"))
btnGetBegin.addEventListener("click", () => handleClick("begin"))
inputLetter.addEventListener("change", (event) => handleLetterChange(event))
btnClear.addEventListener("click", handleClear)

// Event Handlers
function handleLetterChange(event) {
    // Update the current letter when the input is changed
    letter = event.target.value
}

async function handleClick(clickType) {
    // Depending on which button the user clicked, follow a certain action
    if (clickType === "all") {
        names = await apiHelper.getAllNames()
    } else if (clickType === "male") {
        names = await apiHelper.getMaleNames()
    } else if (clickType === "female") {
        names = await apiHelper.getFemaleNames()
    } else if (clickType === "begin" && letter.length === 1) {
        names = await apiHelper.getNameBeginsWith(letter)
    } else {
        alert("Please enter only 1 letter.")
        console.log("Something went wrong.") // letter length !== 1
    }

    renderNames()
}

function handleClear() {
    // Reset the <ul> element and the list of names
    namesOutput.innerHTML = ''
    names = []
}

// Functions
function renderNames() {
    // Reset the <ul> element
    namesOutput.innerText = ''

    // List of names is empty
    if (!names || names.length === 0) {
        namesOutput.innerHTML = `<li>No names to display</li>`
        return
    }

    // Render list of names
    for (let name of names) {
        const newLi = document.createElement("li")

        newLi.innerText += `${name.id}: ${name.name} (${name.type})`
        namesOutput.appendChild(newLi)
    }
}