let menuBtn = document.querySelector('#open-menu-btn');
let closeBtn = document.querySelector('#close-menu-btn');
let menu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click',()=>{
        menu.style.display = 'block';
        closeBtn.style.display = 'inline-block';
        menuBtn.style.display = 'none';
});

let closeNav = ()=>{
        menu.style.display = 'none';
        menuBtn.style.display = 'inline-block';
        closeBtn.style.display = 'none';
}

closeBtn.addEventListener('click',closeNav);

// close nav menu when menu items are clicked////////////////////////////////

if(window.innerWidth < 1024){
        document.querySelectorAll(".nav-menu li a").forEach(navItem => {
                navItem.addEventListener('click',closeNav)
        });
}