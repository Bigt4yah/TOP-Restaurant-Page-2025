// Write a function that will clear given element with the passed in ID and also create the menu page

function loadContactContent(divID){
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

    // create another element to hold sections of the ContactPage
    let contactDetails = document.createElement("div");
    contactDetails.style.display = 'flex';
    contactDetails.style.flexDirection = 'column';
    contactDetails.style.alignItems = 'center';
    contactDetails.style.justifyContent = 'center';
    contactDetails.style.borderStyle = 'solid';
    contactDetails.style.borderWidth = '1px';

    // create an About Us section
    let aboutUs = document.createElement("div");
    aboutUs.style.display = 'flex';
    aboutUs.style.flexDirection = 'column';
    aboutUs.style.justifyContent = 'center';
    aboutUs.style.margin = '20px';
    
    let aboutUsHeader = document.createElement("div");
    aboutUsHeader.innerText = 'About Us';
    aboutUsHeader.style.fontSize = '16px';
    aboutUsHeader.style.alignSelf = 'center';

    let aboutUsInfo = document.createElement("div");
    aboutUsInfo.innerText = 'This is all about us. The end.';

    aboutUs.appendChild(aboutUsHeader);
    aboutUs.appendChild(aboutUsInfo);

    // create the Contact Us section
    let contactUs = document.createElement("div");
    contactUs.style.display = 'flex';
    contactUs.style.flexDirection = 'column';
    contactUs.style.justifyContent = 'center';
    contactUs.style.margin = '20px';

    let contactUsHeader = document.createElement("div");
    contactUsHeader.innerText = 'Contact Us';
    contactUsHeader.style.fontSize = '16px';
    contactUsHeader.style.alignSelf = 'center';

    let contactEmail = document.createElement("div");
    aboutUsInfo.innerText = 'Email: WeDontCare@Unknown.com';

    let contactNumber = document.createElement("div");
    contactNumber.innerText = 'Phone: 000-111-2222';

    contactUs.appendChild(contactUsHeader);
    contactUs.appendChild(contactEmail);
    contactUs.appendChild(contactNumber);



    


    contactDetails.appendChild(aboutUs);
    contactDetails.appendChild(contactUs);
    newContainerElement.appendChild(contactDetails);
    

    elementToClear.appendChild(newContainerElement);

}


export {loadContactContent};