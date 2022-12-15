import Penne from './imgs/food/penne.jpg';
import Pizza from './imgs/pizza_full.jpg'

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

    const testDish = dishFactory('test', '$1000', 'test dish', Pizza);
    const newItem = testDish.makeEntry();

    

    menuInfo.append(menuTitle);
    menuInfo.appendChild(newItem);

    menuWrap.appendChild(menuPicWrap);
    menuWrap.appendChild(menuInfo);



    return pageContent;
}

const dishFactory = (dishName, price, desc, img) => {
    const makeEntry = () => {
        const dishWrap = document.createElement('div');
        dishWrap.classList.add('dish-wrap');

        const title = document.createElement('p');
        title.classList.add('dish-title');
        title.textContent = dishName;

        const dishDesc = document.createElement('p');
        dishDesc.classList.add('dish-desc');
        dishDesc.textContent = desc;

        dishWrap.appendChild(title);

        dishWrap.addEventListener('mouseover', ()=>{
            const pic = document.querySelector('.menu-pic');
            pic.src = img;
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

export default loadMenu;