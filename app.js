document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "React Movie App",
            imgSrc: "images/react_app/react_movie_app.png",
            githubLink: "https://github.com/kwanyaya/React-Movie-App",
            liveDemoLink: "https://kwanyaya.github.io/React-Movie-App/"
        },
        {
            title: "Weather App",
            imgSrc: "images/react_app/weather_app.png",
            githubLink: "https://github.com/kwanyaya/Weather-App",
            liveDemoLink: "https://kwanyaya.github.io/Weather-App/"
        },
        {
            title: "Calculator App",
            imgSrc: "images/react_app/calculator.png",
            githubLink: "https://github.com/kwanyaya/Calculator_App",
            liveDemoLink: "https://kwanyaya.github.io/Calculator_App/"
        },
        {
            title: "Dior LipStick App",
            imgSrc: "images/react_app/dior_lipstick.png",
            githubLink: "https://github.com/kwanyaya/dior_lipstick",
            liveDemoLink: "https://kwanyaya.github.io/Todo-App/"
        },
        {
            title: "Todo App",
            imgSrc: "images/react_app/todo_app.png",
            githubLink: "https://github.com/kwanyaya/Todo-App",
            liveDemoLink: "https://kwanyaya.github.io/Todo-App/"
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