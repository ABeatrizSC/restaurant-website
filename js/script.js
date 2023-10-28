const menuList = document.querySelector('.navMobile')
const menuClose = document.querySelector('.btnMenu-close');
const menuOpen = document.querySelector('.btnMenu-open');

const heartList = Array.from(document.querySelectorAll('.menu-favorite img'));
const heart = document.querySelector('.menu-favorite img');

menuClose.addEventListener('click', function(){
    menuList.classList.add('open');
    document.body.style.overflowY = 'hidden';
    document.documentElement.style.overflowY = 'hidden';
})

menuOpen.addEventListener('click', function(){
    menuList.classList.remove('open');
    document.body.style.overflowY = 'visible';
    document.documentElement.style.overflowY = 'visible';
})

function onClickHeart(event) {
    const favoriteComplete = 'https://abeatrizsc.github.io/restaurant-website/images/favorite-complete.svg' 
    const favoriteIncomplete = 'https://abeatrizsc.github.io/restaurant-website/images/favorite.svg';

    const selectedHeart = event.target; 
    
    if (selectedHeart.src == favoriteComplete) {
        selectedHeart.src = favoriteIncomplete;
    } else {
        selectedHeart.src = favoriteComplete;    
    }
}


heartList.map(heartItem => {
    heartItem.addEventListener('click', onClickHeart);
})

