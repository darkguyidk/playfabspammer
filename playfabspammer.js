import "https://github.com/darkguyidk/playfabspammer/raw/refs/heads/main/customalphanumeric.js"
import "https://github.com/darkguyidk/playfabspammer/raw/refs/heads/main/playfabthings.js"
const outputBox = document.getElementById("outputBox");document.getElementById("titleIdInput").onchange = () => {setTitleId(document.getElementById("titleIdInput").value)};var callbackk = (result, error) => {if (result !== null) {if (outputBox.innerHTML == ""){outputBox.innerHTML += result}else{outputBox.innerHTML += "\n"; outputBox.innerHTML += result}}else{if (outputBox.innerHTML == ""){outputBox.innerHTML += error}else{outputBox.innerHTML += "\n"; outputBox.innerHTML += error}}}
function createRandomAccountWithRandomAnonymosPlayfabType(callback) 
{
  signinWithRandomanonymosplayfabtype(getRandomAlphaNumeric(10), callback)
}
document.getElementById("doTheThing").onclick = () => {for (i = 0; i < document.getElementById("amountOfAccounts").value;) {createRandomAccountWithRandomAnonymosPlayfabType(callbackk)}}
