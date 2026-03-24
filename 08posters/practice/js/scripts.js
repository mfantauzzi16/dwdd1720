

const btnRed = document.querySelector("#redImg")
const btnGreen = document.querySelector("#greenImg")
const pageBody = document.querySelector("body")

btnRed.addEventListener('click' , () => pageBody.className = "paintRed")
btnGreen.addEventListener('click' , () => pageBody.className = "paintGreen")