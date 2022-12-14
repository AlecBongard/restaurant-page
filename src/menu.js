

const loadMenu = function(){
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const info = document.createElement('div');
    info.classList.add('info');

    const infoTitle = document.createElement('h2');
    infoTitle.textContent = "Menu";
    infoTitle.classList.add('info-title');

    const textWrap = document.createElement('div');
    textWrap.classList.add('text-wrapper');

    const infoText = document.createElement('p');
    infoText.textContent = "placeholder"

    pageContent.appendChild(info);
    info.appendChild(infoTitle);
    info.appendChild(textWrap);
    textWrap.appendChild(infoText);

    return pageContent;
}

export default loadMenu;