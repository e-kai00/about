// projects
let projects = [
   
    {
        title: "Datonix",
        image: "datonix",
        repo: "https://github.com/e-kai00/datonix",
        website: "https://e-kai00.github.io/datonix/",
        tools: ["HTML", "CSS", "Sass"]
    },
    {
        title: "Landing page TW",
        image: "terra-wealth",
        repo: "https://github.com/e-kai00/terra-wealth",
        website: "https://e-kai00.github.io/terra-wealth/",
        tools: ["HTML", "CSS", "Sass"]
    },
    {
        title: "Online Shop",
        image: "online-shop",
        repo: "https://github.com/e-kai00/gungnir-shop",
        website: "https://gungnir-shop-d9723ee6b3ec.herokuapp.com/",
        tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Python", "Django", "ElephantSQL", "Heroku", "Stripe API", "AWS"]
    },
    {
        title: "Budget Busters Hackathon",
        image: "broker-buddy",
        repo: "https://github.com/e-kai00/finFlare",
        website: "https://fin-flare-8f9d374a56d6.herokuapp.com/",
        tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "Python", "Django", "ElephantSQL", "Heroku", "AWS"]
    },
    {
        title: "Expense tracker app",
        image: "expense-tracker",
        repo: "https://github.com/e-kai00/expense-tracker",
        website: "https://kai00-expense-tracker.herokuapp.com/home",
        tools: ["HTML", "CSS", "Materialize", "JavaScript", "jQuery", "Python", "Django", "postgresql", "Heroku"]
    },    
    {
        title: "Survey results analysis",
        image: "python-project",
        repo: "https://github.com/e-kai00/data-analysis",
        website: "https://survey-results-analysis.herokuapp.com/",
        tools: ["Python", "Pandas"]
    },   
    {
        title: "Secret Santa Hackathon",
        image: "hackathon-dec23",
        repo: "https://github.com/e-kai00/Santas-Devs",
        website: "https://e-kai00.github.io/Santas-Devs/",
        tools: ["HTML", "CSS", "Bootstrap", "JavaScript"]
    },

    {
        title: "Loan Calculator",
        image: "loan-calculator",
        repo: "https://github.com/e-kai00/loan-calculator",
        website: "https://e-kai00.github.io/loan-calculator/",
        tools: ["HTML", "Sass", "JavaScript"]
    },   
    {
        title: "Running pace calculator",
        image: "pace-calculator",
        repo: "https://github.com/e-kai00/pace-calculator",
        website: "https://e-kai00.github.io/pace-calculator/",
        tools: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Company profile website",
        image: "company-profile",
        repo: "https://github.com/e-kai00/seabreeze-store",
        website: "https://e-kai00.github.io/seabreeze-store/",
        tools: ["HTML", "CSS", "Bootstrap"]
    },
    {
        title: "Yoga studio website",
        image: "yoga-studio",
        repo: "https://github.com/e-kai00/yoga-studio",
        website: "https://e-kai00.github.io/yoga-studio/",
        tools: ["HTML", "CSS"]
    }
];

// Shields.io badges
const badges = {
    html: 'https://img.shields.io/badge/html-%23ffffff?logo=html5&logoColor=%23E34F26',
    css: 'https://img.shields.io/badge/css-%23ffffff?logo=css3&logoColor=%231572B6',
    javascript:'https://img.shields.io/badge/JavaScript-%23ffffff?logo=javascript&logoColor=%23000000&labelColor=%23F7DF1E',
    python: 'https://img.shields.io/badge/Python-%23ffffff?logo=python&logoColor=%233776AB',
    jquery: 'https://img.shields.io/badge/jQuery-%23ffffff?logo=jquery&logoColor=%230769AD',
    materialize: 'https://img.shields.io/badge/Materialize-%23ffffff',
    bootstrap: 'https://img.shields.io/badge/Bootstrap-%23ffffff?logo=bootstrap&logoColor=%237952B3',
    flask: 'https://img.shields.io/badge/Flask-%23ffffff?logo=flask&logoColor=%23000000',
    django: 'https://img.shields.io/badge/Django-%23ffffff?logo=django&logoColor=%23092E20',
    pandas: 'https://img.shields.io/badge/Pandas-%23ffffff?logo=pandas&logoColor=%23150458',
    expressjs: 'https://img.shields.io/badge/ExpressJS-%23ffffff?logo=express&labelColor=%23000000',
    mongoose: 'https://img.shields.io/badge/Mongoose-%23ffffff?logo=mongoose&logoColor=%23880000',
    postman: 'https://img.shields.io/badge/Postman-%23ffffff?logo=postman&logoColor=%23FF6C37',
    heroku: 'https://img.shields.io/badge/Heroku-%23ffffff?logo=heroku&logoColor=%23430098',    
    postgres: 'https://img.shields.io/badge/PostgreSQL-%23ffffff?logo=postgresql&logoColor=%234169E1',
    mongodb: 'https://img.shields.io/badge/MongoDB-%23ffffff?logo=mongodb&logoColor=%2347A248',
    sass: 'https://img.shields.io/badge/Sass/SCSS-%23ffffff?logo=sass&logoColor=%CC6699',
}


// map each project to its own <li> item
let li_project = "";

projects.map((project) => {
    li_project += `<li><figure class="center fade-in"><div class="img-container"><h3 class="project-title left">${project.title}</h3>
        <img src="assets/img/projects/${project.image}.png" alt="${project.title}" width="300" height="300" class="portfolio-img" loading="lazy"></div>
        <figcaption><ul class="container-badges center-align">`;
        
    if (project.tools) {
        project.tools.forEach((tool) => {
            const badgeUrl = badges[tool.toLowerCase()]
            if (badgeUrl) {
                li_project += `<li><img src="${badgeUrl}" alt="${tool}" crossorigin="anonymous"></li>`
            }
        })
    }
    li_project += `</ul>`
    if (project.repo) {
        li_project += `<div class="center"><a href="${project.repo}" class="project-link" rel="noopener" target="_blank">Repo <i class="fa-brands fa-github"></i></a>`;
    }
    if (project.website) {
        li_project += `<a href="${project.website}" class="project-link" rel="noopener" target="_blank">Link <i class="fas fa-link"></i></a></div>`;
    }
    li_project += `</figcaption></figure></li>`
});

// add the <li> items to the <ul>
let ul_project = `<ul class="project-list">${li_project}</ul>`;

// append <ul> to portfolio section
let portfolio_section = document.getElementById("portfolio");
portfolio_section.innerHTML += ul_project;