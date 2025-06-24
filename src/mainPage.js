// Write a function that will empty div with id="content" and add in new elements

function loadMainContent(idToClear){
    // Clear the element with the provided ID value
    const elementToClear = document.getElementById(idToClear);
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
    let restaurantNameElement = document.createElement("div");
    restaurantNameElement.innerText = 'Java Galore';
    restaurantNameElement.style.borderStyle = 'solid';
    restaurantNameElement.style.borderWidth = '1px';
    newContainerElement.appendChild(restaurantNameElement);

    // create new element for the Description
    let descriptionElement = document.createElement("div");
    descriptionElement.innerText = 'A homebrewed place to feel cozy';
    descriptionElement.style.borderStyle = 'solid';
    descriptionElement.style.borderWidth = '1px';
    newContainerElement.appendChild(descriptionElement);

    // Create an array to hold the days + hours
    let hours = {
        'Sunday' : '6AM - 8PM',
        'Monday' : '5AM - 3PM',
        'Tuesday': '5AM - 3PM',
        'Wednesday': '5AM - 3PM',
        'Thursday': '5AM - 3PM',
        'Friday': '5AM - 7PM',
        'Saturday': '6AM - 8PM',
    }

    // create new element for the restaurant name
    let hoursElement = document.createElement("div");
    hoursElement.style.display = 'flex';
    hoursElement.style.flexDirection = 'column';
    hoursElement.style.alignItems = 'center';
    hoursElement.style.justifyContent = 'center';
    hoursElement.style.borderStyle = 'solid';
    hoursElement.style.borderWidth = '1px';

    // Loop through hours and create elements as needed to be added to hoursElement
    for (let day in hours){
        let newDayElement = document.createElement("div");
        newDayElement.innerText = `${day} : ${hours[day]}`;

        hoursElement.appendChild(newDayElement);
    }
    newContainerElement.appendChild(hoursElement);

    elementToClear.appendChild(newContainerElement);

}

export { loadMainContent};