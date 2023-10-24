const menuOpenList = document.querySelector('.header__navigation-list--mobile')
const menuClose = document.querySelector('.btnMenu-close');
const menuOpen = document.querySelector('.btnMenu-open');

menuClose.addEventListener('click', function(){
    menuOpenList.classList.add('open');
    document.body.style.overflow = 'hidden';
})

menuOpen.addEventListener('click', function(){
    menuOpenList.classList.remove('open');
    document.body.style.overflow = 'visible';
})