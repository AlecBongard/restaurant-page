import Pizza from './imgs/pizza.jpg';

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

    const menuNav = document.createElement('p');
    menuNav.textContent = "Menu";
    menuNav.classList.add('nav-btn');

    const contactNav = document.createElement('p');
    contactNav.textContent = "Contact us";
    contactNav.classList.add('nav-btn');
    //header end

    //image start
    const imgWrap = document.createElement('div');
    imgWrap.classList.add('img-wrap');

    const foodImg = new Image();
    foodImg.src = Pizza;
    foodImg.classList.add('food');

    const imgCredit = document.createElement('a');
    imgCredit.textContent = "Photo by Chad Montano on Unsplash";
    imgCredit.href = 'https://unsplash.com/photos/MqT0asuoIcU';
    imgCredit.classList.add('credit');
    //image end

    //info start
    const info = document.createElement('div');
    info.classList.add('info');

    const infoTitle = document.createElement('h2');
    infoTitle.textContent = "Our Story";
    infoTitle.classList.add('info-title');

    const textWrap = document.createElement('div');
    textWrap.classList.add('text-wrapper');

    const infoText = document.createElement('p');
    infoText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque mi. Sed ornare id orci vulputate molestie. Fusce imperdiet neque orci, vel bibendum justo porttitor id. Pellentesque efficitur tempor varius. Proin erat ipsum, pellentesque non bibendum id, tristique sed justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum purus nec purus sagittis, non facilisis quam convallis. Suspendisse sit amet eleifend turpis. Sed quam diam, fermentum a tincidunt eget, feugiat non eros. Nulla a ligula id ligula tincidunt faucibus a at massa. Integer suscipit, lectus sit amet imperdiet pellentesque, justo tellus pellentesque nisi, sit amet bibendum ligula ipsum pellentesque purus. Quisque ut justo semper, mollis orci id, vulputate lorem. Vestibulum lobortis imperdiet condimentum."
    //info end

    content.appendChild(header);
    header.appendChild(title);

    header.appendChild(navbar);
    navbar.appendChild(aboutNav);
    navbar.appendChild(menuNav);
    navbar.appendChild(contactNav);

    content.appendChild(imgWrap);
    imgWrap.appendChild(foodImg);
    imgWrap.appendChild(imgCredit);

    content.appendChild(info);
    info.appendChild(infoTitle);
    info.appendChild(textWrap);
    textWrap.appendChild(infoText);
}

export default pageLoad;