const menuOpenList = document.querySelector('.header__navigation-list--mobile')
const menuClose = document.querySelector('.btnMenu-close');
const menuOpen = document.querySelector('.btnMenu-open');

menuClose.addEventListener('click', function(){
    menuOpenList.classList.add('open');
})

menuOpen.addEventListener('click', function(){
    menuOpenList.classList.remove('open');
})