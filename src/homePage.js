export { home }
import _ from 'lodash';
import './style.css';
import homepage from './homepage.jpg';

function home(home, menu, about) {

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

// creating the navbar
    const navMenu = document.createElement('ul');
    const homePage = document.createElement("li");
    const menuPage = document.createElement("li");
    const contactPage = document.createElement("li");
    homePage.innerHTML = `<a href="#"> HOME</a>`;
    homePage.onclick = function(){
        home(home, menu, about);
    }
    menuPage.innerHTML = `<a href="#"> MENU</a>`;
    menuPage.onclick = function(){
        menu(home, menu, about);
    }
    contactPage.innerHTML = `<a href="#"> CONTACT</a>`;
    contactPage.onclick = function(){
        about(home, menu, about);
    }
    navMenu.classList.add("navbar");
    navMenu.appendChild(homePage);
    navMenu.appendChild(menuPage);
    navMenu.appendChild(contactPage);
    
    // Creating the title text that goes on the home page
    
    textHeader.textContent = "Welcome to Paul's Pizzaria";
    textHeader.classList.add("textHeader");

    // Creating the page text
    
    textReview.textContent = "Rated number one for pizza places close too the moon."
    textReview.classList.add("review-text");
    
    textContainer.appendChild(textHeader);
    textContainer.appendChild(navMenu);
    textContainer.appendChild(textReview);
    container.appendChild(textContainer);
    
    
    return container;
};
