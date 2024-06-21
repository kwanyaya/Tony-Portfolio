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

document.addEventListener("DOMContentLoaded", function() {
        const images = [
            "images/company/dior.jpg",
            "images/company/gucci.png",
            "images/company/jomalone.jpg",
            "images/company/coolthink.png",
            "images/company/jw.png",
            "images/company/hkjc.png",
            "images/company/hermes.png",
            "images/company/tager.jpeg",
            "images/company/rm.png",
        
        ];
    
        const container = document.querySelector(".companies-container");
    
        images.forEach(src => {
            const span = document.createElement("span");
            const img = document.createElement("img");
            img.src = src;
            span.appendChild(img);
            container.appendChild(span);
        });
    });

    // main.js
    document.addEventListener("DOMContentLoaded", function() {
        fetch('./data/website.json')
            .then(response => response.json())
            .then(website => {
                const portfolioProjectsContainer = document.querySelector(".portfolio-projects");
    
                website.forEach(website => {
                    const article = document.createElement("article");
                    article.classList.add("portfolio-project");
    
                    article.innerHTML = `
                        <div class="tesla"><h2>${website.title}</h2></div>
                        <span class="portfolio-projects-images"><img src="${website.imgSrc}"></span>
                        <div class="portfolio-cta">
                            <a href="${website.githubLink}" target="_blank" class="btn">Github</a>
                            <a href="${website.liveDemoLink}" target="_blank" class="btn btn-primary">Live Demo</a>
                        </div>
                    `;
    
                    portfolioProjectsContainer.appendChild(article);
                });
            })
            .catch(error => console.error('Error fetching app:', error));
    });