export { about };
import _ from 'lodash';
import './style.css';
import aboutPicture from './about.jpg';

function about(home, menu, about) {
    
    const container = document.querySelector("#content");
    container.innerHTML = "";
    const textHeader = document.createElement("h1");
    const textContainer = document.createElement("div");    
    const textContactNumberLabel = document.createElement("div");
    const textContactNumber = document.createElement("div");
    const textAddressLabel = document.createElement("div");
    const textAddress = document.createElement("div");
    const contactInfoContainer = document.createElement("div");
    // Add the image to our existing div.
    const backgroundImages = document.createElement("img");
    backgroundImages.src = aboutPicture;
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
    textContactNumberLabel.innerHTML = `<span>Contact number:</span>`    
    textContactNumber.textContent = "080010111"    
    textAddressLabel.innerHTML = "<span>Address :</span>"
    textAddress.textContent = "21 Tollgate Road, London, E16 7TH"

    contactInfoContainer.classList.add("information");
    textContainer.appendChild(textHeader);
    textContainer.appendChild(navMenu);
    contactInfoContainer.appendChild(textContactNumberLabel);
    contactInfoContainer.appendChild(textContactNumber);
    contactInfoContainer.appendChild(textAddressLabel);
    contactInfoContainer.appendChild(textAddress);
    textContainer.appendChild(contactInfoContainer);
    container.appendChild(textContainer);
    
    return container;
}