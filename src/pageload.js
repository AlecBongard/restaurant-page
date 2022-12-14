import Pizza from './imgs/pizza.jpg';
import loadAbout from './about.js';
import loadMenu from './menu.js'

const content = document.querySelector(".content");

const pageLoad = function(){
    const header = document.createElement('div');

    //header start
    header.classList.add('header');
    
    const title = document.createElement('h1');
    title.textContent = "Hypothetical Italian Restaurant";
    title.classList.add('title');

    const navbar = document.createElement('div');
    navbar.classList.add('nav');

    const aboutNav = document.createElement('p');
    aboutNav.textContent = "About";
    aboutNav.classList.add('nav-btn');
    aboutNav.id = 'about-nav';

    const menuNav = document.createElement('p');
    menuNav.textContent = "Menu";
    menuNav.classList.add('nav-btn');
    menuNav.id = 'menu-nav';

    const contactNav = document.createElement('p');
    contactNav.textContent = "Contact us";
    contactNav.classList.add('nav-btn');
    contactNav.id = 'contact-nav';
    //header end


    //info start
    const pageContent = loadAbout();

     //info end

    content.appendChild(header);
    header.appendChild(title);

    header.appendChild(navbar);
    navbar.appendChild(aboutNav);
    navbar.appendChild(menuNav);
    navbar.appendChild(contactNav);



    content.appendChild(pageContent);
    
}

export default pageLoad;