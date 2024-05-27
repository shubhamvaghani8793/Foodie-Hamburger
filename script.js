
const hamburgerIcon = document.querySelector('.hamburger-menu');
const headerClass = document.querySelector('.nav-container');
const closeMenu = document.querySelector('.closeIcon');
const gotop = document.querySelector('.gototop');

hamburgerIcon.addEventListener('click', (e) =>{
    e.stopPropagation();
    headerClass.classList.add('menu-open');
})

closeMenu.addEventListener('click', () =>{
    headerClass.classList.remove('menu-open');
})

gotop.addEventListener('click', () =>{
    document.querySelector('.main-content').scrollTo(0,0);
})

window.addEventListener('click', () =>{
    headerClass.classList.remove('menu-open')
});    