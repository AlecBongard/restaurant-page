const loadContact = function(){
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const info = document.createElement('div');
    info.classList.add('info');

    const textWrap = document.createElement('div');
    textWrap.classList.add('text-wrapper');

    const textTitle = document.createElement('p');
    textTitle.classList.add('text-title');
    textTitle.textContent = "Contact us";

    const phone = document.createElement('p');
    phone.textContent = "Phone: (123)-456-789";

    const email = document.createElement('p');
    email.textContent = "Email: fake@email";

    const locationText = document.createElement('p');
    locationText.textContent = "Visit us in person:"

    const map = document.createElement('iframe');
    map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28417.650072052278!2d9.27454136749324!3d45.611396022746604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786ba360e48bd7d%3A0x645e7ef5a9d3a632!2sAutodromo%20Nazionale%20Monza!5e0!3m2!1sen!2sus!4v1671224614587!5m2!1sen!2sus");
    map.setAttribute("width", "600");
    map.setAttribute("height", "450");
    map.setAttribute("style", "border:0;");
    map.setAttribute("allowfulscreen", "");
    map.setAttribute("loading", "lazy");
    map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");




    pageContent.appendChild(info);
    info.appendChild(textWrap);
    textWrap.appendChild(textTitle);
    textWrap.appendChild(phone);
    textWrap.appendChild(email);
    textWrap.appendChild(locationText);
    textWrap.appendChild(map);


    return pageContent;
}

export {loadContact};