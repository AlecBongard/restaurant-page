import { makeCred } from './pageload';
import Pizza from './imgs/pizza_full.jpg';
import Chef1 from './imgs/chef1.jpg';
import Chef2 from './imgs/chef2.jpg';


const loadAbout = function(){

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //img start
    const imgWrap = document.createElement('div');
    imgWrap.classList.add('img-wrap');

    const foodImg = new Image();
    foodImg.src = Pizza;
    foodImg.classList.add('food');

    const infoTitle = document.createElement('p');
    infoTitle.textContent = "BENVENUTI";
    infoTitle.classList.add('info-title');

    const imgCredit = makeCred("Chad Montano", 'https://unsplash.com/photos/MqT0asuoIcU');
    imgCredit.classList.add('credit');
    //img end

    const textTitle = document.createElement('p');
    textTitle.classList.add('text-title');
    textTitle.textContent = "About us"

    const info = document.createElement('div');
    info.classList.add('info');

    const textWrap = document.createElement('div');
    textWrap.classList.add('text-wrapper');

    const infoText = document.createElement('p');
    infoText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque mi. Sed ornare id orci vulputate molestie. Fusce imperdiet neque orci, vel bibendum justo porttitor id. Pellentesque efficitur tempor varius. Proin erat ipsum, pellentesque non bibendum id, tristique sed justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur elementum purus nec purus sagittis, non facilisis quam convallis. Suspendisse sit amet eleifend turpis. Sed quam diam, fermentum a tincidunt eget, feugiat non eros. Nulla a ligula id ligula tincidunt faucibus a at massa. Integer suscipit, lectus sit amet imperdiet pellentesque, justo tellus pellentesque nisi, sit amet bibendum ligula ipsum pellentesque purus. Quisque ut justo semper, mollis orci id, vulputate lorem. Vestibulum lobortis imperdiet condimentum."

    const staffTitle = document.createElement('p');
    staffTitle.classList.add('text-title');
    staffTitle.textContent = "Meet our Chefs"

    const staffWrap = document.createElement('div');
    staffWrap.classList.add('staff-wrapper');

    const chef1Cred = makeCred("Louis Hansel", 'https://unsplash.com/photos/v3OlBE6-fhU');
    chef1Cred.prepend("Left ")

    const chef2Cred = makeCred("Febrian Zakaria", 'https://unsplash.com/photos/SiQgni-cqFg');
    chef2Cred.prepend("Right ")

    const staff1 = new Image();
    staff1.src = Chef1;
    const staff2 = new Image();
    staff2.src = Chef2;

    staff1.classList.add('staff-img');
    staff2.classList.add('staff-img');

    staffWrap.appendChild(staff1);
    staffWrap.appendChild(staff2);

    const staffInfo = document.createElement('p');
    staffInfo.textContent = "Nam efficitur nunc ac elit porta blandit. Cras dui nibh, auctor non viverra in, imperdiet at ex. Donec aliquam vehicula magna et pretium. Fusce eget ex at erat lacinia dignissim sit amet non erat. Sed fermentum iaculis lacus at imperdiet. Duis fermentum finibus elementum. Duis finibus dictum orci, et blandit ligula. Suspendisse ut ornare leo, in bibendum orci."



    pageContent.appendChild(imgWrap);
    imgWrap.appendChild(foodImg);
    imgWrap.appendChild(infoTitle);
    imgWrap.appendChild(imgCredit);



    pageContent.appendChild(info);
    textWrap.appendChild(textTitle);
    info.appendChild(textWrap);
    textWrap.appendChild(infoText);
    textWrap.appendChild(staffTitle);
    textWrap.appendChild(staffWrap);
    textWrap.appendChild(chef1Cred);
    textWrap.appendChild(chef2Cred);
    textWrap.appendChild(staffInfo);


    return pageContent;
}



export {loadAbout};