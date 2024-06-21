document.addEventListener("DOMContentLoaded", function() {
    fetch('./data/clone.json')
        .then(response => response.json())
        .then(clone => {
            const portfolioProjectsContainer = document.querySelector(".portfolio-projects");

            clone.forEach(clone => {
                const article = document.createElement("article");
                article.classList.add("portfolio-project");

                article.innerHTML = `
                    <div class="tesla"><h2>${clone.title}</h2></div>
                    <span class="portfolio-projects-images"><img src="${clone.imgSrc}"></span>
                    <div class="portfolio-cta">
                        <a href="${clone.githubLink}" target="_blank" class="btn">Github</a>
                        <a href="${clone.liveDemoLink}" target="_blank" class="btn btn-primary">Live Demo</a>
                    </div>
                `;

                portfolioProjectsContainer.appendChild(article);
            });
        })
        .catch(error => console.error('Error fetching app:', error));
});