
//button switches
const btnGrid = document.querySelector("#grid")
const btnList = document.querySelector("#list")
const pageBody = document.querySelector("body")

btnGrid.addEventListener('click' , () => pageBody.className = "grid")
btnList.addEventListener('click' , () => pageBody.className = "list")

//data
import {films} from '../data/films.js';
console.log(films);

const pathStart = "//resources.dgmuvu.com/films/"
const myTarget = document.querySelector('#cards');


for (let x = 0; x < films.length; x++) {
let barDiv = document.createElement('div');
barDiv.classList.add('titleBar');
barDiv.innerHTML = `<p>${films[x].title}</p>`;

let myImage = document.createElement('img');
myImage.setAttribute("src", pathStart+films[x].photo)
myImage.setAttribute("alt", films[x].title)

let myCaption = document.createElement('figcaption');
myCaption.innerHTML = `Director: ${films[x].director} <br>Producer: ${films[x].producer} <br>Released: ${films[x].release_date}`;

let contentDiv = document.createElement('div');
contentDiv.classList.add('content');

contentDiv.appendChild(myImage);
contentDiv.appendChild(myCaption);

let myFigure = document.createElement('figure');

myFigure.appendChild(barDiv);
myFigure.appendChild(contentDiv);

myTarget.appendChild(myFigure);
} //end of loop