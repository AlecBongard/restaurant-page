import { makeCred } from './pageload';
import Penne from './imgs/food/penne.jpg';
import Pizza from './imgs/food/pizza_formatted.jpg'
import Gnocchi from './imgs/food/gnocchi.jpg';

const loadMenu = function(){
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const menuWrap = document.createElement('div');
    menuWrap.classList.add('menu-wrap');

    pageContent.append(menuWrap);

    const menuPicWrap = document.createElement('div');
    menuPicWrap.classList.add('menu-pic-wrap')

    const menuInfo = document.createElement('div');
    menuInfo.classList.add('menu-info');

    const menuPic = new Image();
    menuPic.src = Penne;
    menuPic.classList.add('menu-pic');

    menuPicWrap.appendChild(menuPic);

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';

    const imgCredit = makeCred("Ben Lei", 'https://unsplash.com/photos/flFd8L7_B3g')
    imgCredit.classList.add('menu-credit');

    const pennePasta = dishFactory('Pasta d\'lorem ipsum', '$1000', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum sollicitudin metus in vehicula. Sed porta luctus eros, id cursus nibh.', Penne,
    "Ben Lei", 'https://unsplash.com/photos/flFd8L7_B3g');
    const penneNode = pennePasta.makeEntry();

    const pizzaDish = dishFactory('Donec scelerisque Pizza', '$1', 
    'Donec scelerisque porttitor nisl, nec commodo nisi dapibus vel. Nulla suscipit quam at augue pellentesque mattis. Ut quis ullamcorper tortor, in feugiat ligula. Nam non tortor volutpat, tristique odio et, sagittis ante. Sed elit nisl, pellentesque in lacus vel, lobortis vehicula massa.', 
    Pizza, "Chad Montano", 'https://unsplash.com/photos/MqT0asuoIcU');
    const pizzaNode = pizzaDish.makeEntry();

    const gnocchiDish = dishFactory('Gnocchi a la Nunc laoreet', '$55',
    "Nunc laoreet blandit sem sed pretium. Nam sed lacus est. Nunc vitae auctor dolor.",
    Gnocchi, "Shakti Rajpurohit", 'https://unsplash.com/photos/FvOGEAL2GPE');
    const gnocchiNode = gnocchiDish.makeEntry();
    

    menuInfo.appendChild(menuTitle);
    menuInfo.appendChild(penneNode);
    menuInfo.appendChild(pizzaNode);
    menuInfo.appendChild(gnocchiNode);

    menuWrap.appendChild(menuPicWrap);
    menuWrap.appendChild(menuInfo);

    

    menuPicWrap.appendChild(imgCredit);


    return pageContent;
}

const dishFactory = (dishName, price, desc, img, picAuthor, picURL) => {
    const makeEntry = () => {
        const dishWrap = document.createElement('div');
        dishWrap.classList.add('dish-wrap');

        const title = document.createElement('p');
        title.classList.add('dish-title');
        title.textContent = dishName;

        const dishDesc = document.createElement('p');
        dishDesc.classList.add('dish-desc');
        dishDesc.textContent = desc;

        const dishPrice = document.createElement('p');
        dishPrice.classList.add('dish-price');
        dishPrice.textContent = price;

        dishWrap.appendChild(title);
        dishWrap.appendChild(dishPrice);
        dishWrap.appendChild(dishDesc);

        dishWrap.addEventListener('mouseover', ()=>{
            const pic = document.querySelector('.menu-pic');
            pic.src = img;

            const photoWrap = document.querySelector('.menu-pic-wrap');

            const credit = document.querySelector('.menu-credit');
            const newCredit = makeCred(picAuthor, picURL);
            newCredit.classList.add('menu-credit');

            photoWrap.replaceChild(newCredit, credit);


        })

        return dishWrap;
    }

    return {
        makeEntry,
        dishName,
        price,
        desc,
    }
}

export {loadMenu};