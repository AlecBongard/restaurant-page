import loadAbout from './about.js';


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

    const author = document.createElement('p');
    author.textContent = "Made by Alec Bongard";


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
    
}

export default pageLoad;