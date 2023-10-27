const menuOpenList = document.querySelector('.navMobile-open')
const menuClose = document.querySelector('.btnMenu-close');
const menuOpen = document.querySelector('.btnMenu-open');

menuClose.addEventListener('click', function(){
    menuOpenList.classList.add('open');
    document.body.style.overflowY = 'hidden';
})

menuOpen.addEventListener('click', function(){
    menuOpenList.classList.remove('open');
    document.body.style.overflowY = 'visible';
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

const heartList = Array.from(document.querySelectorAll('.menu-favorite img'));

heartList.map(heartItem => {
    heartItem.addEventListener('click', onClickHeart);
})

const heart = document.querySelector('.menu-favorite img');
