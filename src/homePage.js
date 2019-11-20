export { home }
import _ from 'lodash';
import './style.css';
import homepage from './homepage.jpg';
import { nav } from './nav.js';

function home() {

    // create all the divs that will be used on the homepage   
    const container = document.querySelector('#content');
    const textHeader = document.createElement("h1");
    const textContainer = document.createElement("div");    
    const textReview = document.createElement("div");
    // resets page 
    container.innerHTML = "";  

// Add the image to our existing div.
    const backgroundImages = document.createElement("img");
    backgroundImages.src = homepage;
    backgroundImages.classList.add("image");    
    container.appendChild(backgroundImages);
    textContainer.classList.add("text-container")

    //navbar
    const navbar = nav();
    
    // Creating the title text that goes on the home page
    
    textHeader.textContent = "Welcome to Paul's Pizzaria";
    textHeader.classList.add("textHeader");

    // Creating the page text
    
    textReview.textContent = "Rated number one for pizza places close too the moon."
    textReview.classList.add("review-text");
    
    textContainer.appendChild(textHeader);
    textContainer.appendChild(navbar);
    textContainer.appendChild(textReview);
    container.appendChild(textContainer);
};
