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
        const projects = [
            {
                title: "Chrome Dino Game",
                imgSrc: "images/demo/dino_game.png",
                githubLink: "https://github.com/kwanyaya/Chrome_Dino_Game",
                liveDemoLink: "https://kwanyaya.github.io/Chrome_Dino_Game"
            },
            {
                title: "Tesla Homepage Clone",
                imgSrc: "images/demo/telsa_clone.png",
                githubLink: "https://github.com/kwanyaya/Telsa-homepage-clone",
                liveDemoLink: "https://kwanyaya.github.io/Telsa-homepage-clone"
            },
            {
                title: "Responsive Admin Dashborad",
                imgSrc: "images/demo/admin_dashborad.png",
                githubLink: "https://github.com/kwanyaya/Admin-Dashborad",
                liveDemoLink: "https://kwanyaya.github.io/Admin-Dashborad/"
            },
            {
                title: "Responsive Multipage Edu Website",
                imgSrc: "images/demo/responsive_edu_web.png",
                githubLink: "https://github.com/kwanyaya/Responsive-Multipage-Education-Website",
                liveDemoLink: "https://kwanyaya.github.io/Responsive-Multipage-Education-Website/index.html"
            },
            {
                title: "Bootstrap Portfolio",
                imgSrc: "images/demo/bootstrap_portfolio.png",
                githubLink: "https://github.com/kwanyaya/Bootstarp-Portfolio",
                liveDemoLink: "https://kwanyaya.github.io/Bootstarp-Portfolio/"
            },
            {
                title: "Miss Dior Parfums",
                imgSrc: "images/demo/miss_dior.png",
                githubLink: "https://github.com/kwanyaya/Miss-Dior-Parfums",
                liveDemoLink: "https://kwanyaya.github.io/Miss-Dior-Parfums/"
            }
            ,{
                title: "HKJC Derby",
                imgSrc: "images/demo/hkjc_derby.png",
                githubLink: "https://github.com/kwanyaya/HKJC-Derby",
                liveDemoLink: "https://kwanyaya.github.io/HKJC-Derby/"
            }
        ];
    
        const portfolioProjectsContainer = document.querySelector(".portfolio-projects");
    
        projects.forEach(project => {
            const article = document.createElement("article");
            article.classList.add("portfolio-project");
    
            article.innerHTML = `
                <div class="tesla"><h2>${project.title}</h2></div>
                <span class="portfolio-projects-images"><img src="${project.imgSrc}"></span>
                <div class="portfolio-cta">
                    <a href="${project.githubLink}" target="_blank" class="btn">Github</a>
                    <a href="${project.liveDemoLink}" target="_blank" class="btn btn-primary">Live Demo</a>
                </div>
            `;
    
            portfolioProjectsContainer.appendChild(article);
        });
    });