const convertBtn = document.querySelector("#convert-btn")
const inputDigit = document.querySelector("#input-digit")
const lengthConversion = document.querySelector("#length-conversion")
const volumeConversion = document.querySelector("#volume-conversion")
const massConversion = document.querySelector("#mass-conversion")

convertBtn.addEventListener("click",function(){
    let digit = Number(inputDigit.value)
    let digitMeter = (digit*0.3048).toFixed(3)
    let digitFeet = (digit*3.28084).toFixed(3)
    let digitLiters = (digit*3.7854).toFixed(3)
    let digitGallons = (digit*0.264172).toFixed(3)
    let digitKilograms = (digit*0.453592).toFixed(3)
    let digitPounds = (digit*2.20462).toFixed(3)
    if(inputDigit.value !== ""){
        lengthConversion.textContent = `${digit} meters = ${digitFeet} | ${digit} feet = ${digitMeter} meters`
        volumeConversion.textContent = `${digit} liters = ${digitGallons} | ${digit} gallons = ${digitLiters} liters`
        massConversion.textContent = `${digit} kilos = ${digitPounds} | ${digit} pounds = ${digitKilograms} kilos`
    }
    })