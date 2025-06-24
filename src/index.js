import {loadMainContent} from "./mainPage.js"
import {loadMenuContent} from "./menuPage.js"
import {loadContactContent} from "./contactPage.js"
import "./styles.css";

// Get elements
const contentDiv = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

contentDiv.style.display = 'flex';
contentDiv.style.flexDirection = 'column';
contentDiv.style.justifyContent = 'center';
contentDiv.style.alignItems = 'center';


loadMainContent('content');

homeBtn.addEventListener("click", () => loadMainContent('content'));
menuBtn.addEventListener("click", () => loadMenuContent('content'));
contactBtn.addEventListener("click", () => loadContactContent('content'));
