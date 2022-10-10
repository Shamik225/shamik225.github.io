let aboutbutton = document.querySelector('#about-button');
let homebutton = document.querySelector('#home-button');

aboutbutton.addEventListener('click', () => {
    aboutbutton.style.color = '#00c425';
    homebutton.style.color = '#fff'
})

let workbutton = document.querySelector('#work-button');
workbutton.addEventListener('click', () => {
    workbutton.style.color = '#00c425';
    homebutton.style.color = '#fff'
})

let contactbutton = document.querySelector('#contact-button');
contactbutton.addEventListener('click', () => {
    contactbutton.style.color = '00c425';
    homebutton.style.color = '#fff'
})