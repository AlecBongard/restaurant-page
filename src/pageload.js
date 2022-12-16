import { loadAbout } from './about.js';


const content = document.querySelector(".content");

const pageLoad = function(){
    const header = document.createElement('div');

    //header start
    header.classList.add('header');
    
    const title = document.createElement('p');
    title.textContent = "Italian Restaurant";
    title.classList.add('title');

    const navbar = document.createElement('div');
    navbar.classList.add('nav');

    const aboutWrap = document.createElement('div');
    aboutWrap.classList.add('nav-wrap');

    const aboutNav = document.createElement('p');
    aboutNav.textContent = "About";
    aboutNav.classList.add('nav-btn');
    aboutNav.id = 'about-nav';

    const menuWrap = document.createElement('div');
    menuWrap.classList.add('nav-wrap');

    const menuNav = document.createElement('p');
    menuNav.textContent = "Menu";
    menuNav.classList.add('nav-btn');
    menuNav.id = 'menu-nav';

    const contactWrap = document.createElement('div')
    contactWrap.classList.add('nav-wrap');

    const contactNav = document.createElement('p');
    contactNav.textContent = "Contact us";
    contactNav.classList.add('nav-btn');
    contactNav.id = 'contact-nav';
    //header end

    //footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const authorText = document.createElement('p');
    authorText.textContent = "Created by ";

    const author = document.createElement('a');
    author.textContent = "Alec Bongard";
    author.href="https://github.com/AlecBongard/restaurant-page";

    authorText.append(author);

    footer.appendChild(authorText);


    const pageContent = loadAbout();


    content.appendChild(header);
    header.appendChild(title);

    header.appendChild(navbar);

    navbar.append(aboutWrap)
    aboutWrap.appendChild(aboutNav);

    navbar.append(menuWrap)
    menuWrap.appendChild(menuNav);

    navbar.appendChild(contactWrap)
    contactWrap.appendChild(contactNav);



    content.appendChild(pageContent);
    content.appendChild(footer);
    
}

const makeCred = function(author, url){
    const unsplash = document.createElement('a');
    unsplash.href="https://unsplash.com/";
    unsplash.textContent = "Unsplash";

    const credit = document.createElement('p');
    const link = document.createElement('a');
    link.textContent = author;
    link.href = url;

    credit.textContent = "Photo by ";
    credit.appendChild(link);
    credit.append(" on ");
    credit.append(unsplash);

    return credit;
}

export {pageLoad,
        makeCred};