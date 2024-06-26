document.addEventListener("DOMContentLoaded", function() {
    fetch('./data/app.json')
        .then(response => response.json())
        .then(app => {
            const portfolioProjectsContainer = document.querySelector(".portfolio-projects");

            app.forEach(app => {
                const article = document.createElement("article");
                article.classList.add("portfolio-project");

                article.innerHTML = `
                    <div class="tesla"><h2>${app.title}</h2></div>
                    <span class="portfolio-projects-images"><img src="${app.imgSrc}"></span>
                    <div class="portfolio-cta">
                        <a href="${app.githubLink}" target="_blank" class="btn">Github</a>
                        <a href="${app.liveDemoLink}" target="_blank" class="btn btn-primary">Live Demo</a>
                    </div>
                `;

                portfolioProjectsContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Error fetching app:', error));
});