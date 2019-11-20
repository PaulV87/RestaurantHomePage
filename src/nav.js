import _ from 'lodash';
export { nav };
import './style.css';
import { menu } from "./menu.js"
import { about } from './about.js';
import { home } from './homePage.js';

function nav(){
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

    return navMenu;
}