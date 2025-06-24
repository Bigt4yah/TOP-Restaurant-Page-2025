// Write a function that will clear given element with the passed in ID and also create the menu page

function loadMenuContent(divID){
    // Clear the element with the provided ID value
    const elementToClear = document.getElementById(divID);
    elementToClear.innerHTML = '';

    // create top level element to add items to later
    let newContainerElement = document.createElement("div");
    newContainerElement.style.display = 'flex';
    newContainerElement.style.flexDirection = 'column';
    newContainerElement.style.alignItems = 'center';
    newContainerElement.style.justifyContent = 'center';
    newContainerElement.style.borderStyle = 'solid';
    newContainerElement.style.borderWidth = '1px';

    
    // create new element for the restaurant name
    let menuElement = document.createElement("div");
    menuElement.innerText = 'Java Bar';
    menuElement.style.borderStyle = 'solid';
    menuElement.style.borderWidth = '1px';
    newContainerElement.appendChild(menuElement);

    // create new element for the Description
    let descriptionElement = document.createElement("div");
    descriptionElement.innerText = 'Drinks';
    descriptionElement.style.borderStyle = 'solid';
    descriptionElement.style.borderWidth = '1px';
    newContainerElement.appendChild(descriptionElement);

    
    elementToClear.appendChild(newContainerElement);

}


export {loadMenuContent};