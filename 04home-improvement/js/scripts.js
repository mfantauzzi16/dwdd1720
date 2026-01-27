// fat function to add list items
let addLI = (list, message) => {
    theList = document.querySelector(list);
    let myListItem = document.createElement('li');
    myListItem.textContent = message
    theList.appendChild(myListItem);
} // end of the add list item function

document.querySelector('#calculate').addEventListener('click', () => {
    const width = (document.querySelector('#width').value);
    console.log(width);

    const depth = (document.querySelector('#depth').value);
    console.log(depth);

    const height = (document.querySelector('#height').value);
    console.log(height);

    const paintType = document.querySelector('#quality').selectedOptions[0].text;
    console.log(paintType);

    const quality = document.querySelector('#quality').selectedOptions[0].value;
    console.log(quality);

    let carpet = Math.ceil((width * depth) / 9);
    console.log(carpet + " yards of Carpet");

    let tackstrip = (width * 2) + (depth * 2);
    console.log(tackstrip + " feet of Tackstrip");

    let walls = ((width * height) + (depth * height)) * 2
    walls = Math.ceil(walls / quality);
    console.log(walls + " gallons of semigloss paint for the walls");

    let ceiling = Math.ceil((width * depth) / quality);
    console.log(ceiling + " gallons of flat paint for the ceiling");

    let primer = ceiling + walls
    console.log(primer + " gallons of primer");

    addLI("#paint", `${primer} gallons of primer paint for the walls and ceiling`)
    addLI("#paint", `${walls} gallons of semi gloss paint for the walls (easy to clean)`)
    addLI("#paint", `${ceiling} gallons of flat paint for the ceiling`)

    addLI("#carpet", `${carpet} yard of carpet`)
    addLI("#carpet", `${carpet} yards of carpet padding`)
    addLI("#carpet", `${tackstrip} feet of tackstrip for the carpet`)

}) // end of the calculate function