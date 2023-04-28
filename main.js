let menuBtn = document.querySelector('#open-menu-btn');
let closeBtn = document.querySelector('#close-menu-btn');
let menu = document.querySelector('.nav-menu');
const themeTriggers = document.querySelector('.theme-trigger');


menuBtn.addEventListener('click', () => {
        menu.style.display = 'block';
        closeBtn.style.display = 'inline-block';
        menuBtn.style.display = 'none';
});

let closeNav = () => {
        menu.style.display = 'none';
        menuBtn.style.display = 'inline-block';
        closeBtn.style.display = 'none';
}

closeBtn.addEventListener('click', closeNav);

// close nav menu when menu items are clicked////////////////////////////////

if (window.innerWidth < 1024) {
        document.querySelectorAll(".nav-menu li a").forEach(navItem => {
                navItem.addEventListener('click', closeNav)
        });
}

// change the mode when mode button are clicked////////////////////////////////


themeTriggers.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme-variables');


        themeTriggers.querySelector('span:nth-child(1)').classList.toggle('active');
        themeTriggers.querySelector('span:nth-child(2)').classList.toggle('active');

})
