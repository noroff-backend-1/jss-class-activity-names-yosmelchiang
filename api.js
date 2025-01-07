const API_URL_ALL_NAMES = "http://localhost:3004/"
const API_URL_MALE_NAMES = "http://localhost:3004/male"
const API_URL_FEMALE_NAMES = "http://localhost:3004/female"
const API_URL_NAMES_BEGIN = "http://localhost:3004/begin"

async function getAllNames() {
    try {
        const resp = await fetch(API_URL_ALL_NAMES)
        const data = await resp.json()
        return data
    } catch (ex) {
        console.log(ex.message)
    }
}

async function getMaleNames() {
    try {
        const resp = await fetch(API_URL_MALE_NAMES)
        const data = await resp.json()
        return data
    } catch (ex) {
        console.log(ex.message)
    }
}

async function getFemaleNames() {
    try {
        const resp = await fetch(API_URL_FEMALE_NAMES)
        const data = await resp.json()
        return data
    } catch (ex) {
        console.log(ex.message)
    }
}

async function getNameBeginsWith(letter) {
    try {
        const resp = await fetch(API_URL_NAMES_BEGIN, {
            method: "POST",
            body: JSON.stringify({ letter: letter.toUpperCase() })
        })
        const data = await resp.json()
        return data
    } catch (ex) {
        console.log(ex.message)
    }
}

export const apiHelper = {
    getAllNames,
    getMaleNames,
    getFemaleNames,
    getNameBeginsWith,
}