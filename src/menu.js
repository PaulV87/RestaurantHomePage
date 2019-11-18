import _ from 'lodash';
import './style.css';
import menuPicture from './menu.jpg';
export { menu }

function menu(home, menu, about){    
    const container = document.querySelector("#content");
    // resets page
    container.innerHTML = "";

    const textHeader = document.createElement("h1");
    const textContainer = document.createElement("div");    
    

    // Add the image to our existing div.
    const backgroundImages = document.createElement("img");
    backgroundImages.src = menuPicture;
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
    const menuItems =   [
                        ["Margirita", "5"], 
                        ["Hawaian", "7"], 
                        ["Anchovi", "All the gold in scotland"]
                        ];
    
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("information");
    for (let i = 0; i < menuItems.length; i ++)
    {
        let menuItemName = document.createElement("div");
        let menuItemPrice = document.createElement("div");
        menuItemName.textContent = menuItems[i][0];
        menuItemPrice.textContent = menuItems[i][1];
        menuContainer.appendChild(menuItemName);
        menuContainer.appendChild(menuItemPrice);
    }
    //const menuItemName = document.createElement("div");
    //menuItemName.textContent = menuItems[0][0];
    
    //console.log(menuItems[0][0]);
    textContainer.appendChild(textHeader);
    textContainer.appendChild(navMenu);
    textContainer.appendChild(menuContainer);
    container.appendChild(textContainer);


    return container;
}