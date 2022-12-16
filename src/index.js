import {pageLoad} from './pageLoad.js';
import {loadAbout} from './about.js';
import {loadMenu} from './menu.js';
import {loadContact} from './contact.js';
import './style.css';

pageLoad();

const menuNav = document.getElementById('menu-nav');
const aboutNav = document.getElementById('about-nav');
const contactNav = document.getElementById('contact-nav');

let pageContent = document.querySelector('.page-content');
const info = document.querySelector('.info');
const content = document.querySelector('.content');

const refreshContent = function(tab){
    content.removeChild(pageContent);
    if(tab === 'about'){
        pageContent = loadAbout();
    }else if(tab === 'menu'){
        pageContent = loadMenu();
    }else{
        pageContent = loadContact();
    }

    content.appendChild(pageContent);
}


menuNav.addEventListener('click', ()=>{
    refreshContent('menu');
});


aboutNav.addEventListener('click', ()=>{
    refreshContent('about');
});

contactNav.addEventListener('click', ()=>{
    refreshContent('contact');
});