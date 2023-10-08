// projects
let projects = [
    {
        title: "Running pace calculator",
        image: "test",
        repo: "https://github.com/e-kai00/pace-calculator",
        website: "https://e-kai00.github.io/pace-calculator/",
        tools: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: " Expense Tracker",
        image: "test",
        repo: "https://github.com/e-kai00/expense-tracker",
        website: "https://kai00-expense-tracker.herokuapp.com/accounts/login/?next=/",
        tools: ["HTML", "CSS", "jQuery", "Python", "Django", "ElephantSQL"]
    },
    {
        title: " Expense Tracker",
        image: "test",
        repo: "https://github.com/e-kai00/expense-tracker",
        website: "https://kai00-expense-tracker.herokuapp.com/accounts/login/?next=/",
        tools: ["HTML", "CSS", "jQuery", "Python", "Django", "ElephantSQL"]
    },
    {
        title: " Expense Tracker",
        image: "test",
        repo: "https://github.com/e-kai00/expense-tracker",
        website: "https://kai00-expense-tracker.herokuapp.com/accounts/login/?next=/",
        tools: ["HTML", "CSS", "jQuery", "Python", "Django", "ElephantSQL"]
    }
];

// Shields.io badges
const badges = {
    html: 'https://img.shields.io/badge/html-%23ffffff?logo=html5&logoColor=%23E34F26',
    css: 'https://img.shields.io/badge/css-%23ffffff?logo=css3&logoColor=%23E34F26',
    javascript:'https://img.shields.io/badge/JavaScript-%23ffffff?logo=javascript&logoColor=%23E34F26'
}


// map each project to its own <li> item
let li_project = "";

projects.map((project) => {
    li_project += `<li><figure><h3 class="project-title">${project.title}</h3><img src="assets/img/${project.image}.png" class="portfolio-img"><figcaption><ul class="container-badges center-align">`;
        
    if (project.tools) {
        project.tools.forEach((tool) => {
            const badgeUrl = badges[tool.toLowerCase()]
            if (badgeUrl) {
                li_project += `<li><img src="${badgeUrl}"</li>`
            }
        })
    }
    li_project += `</ul>`
    if (project.repo) {
        li_project += `<a href="${project.repo}" class="btn-small right" rel="noopener" target="_blank">Repo <i class="fa-brands fa-github"></i></a>`;
    }
    if (project.website) {
        li_project += `<a href="${project.website}" class="btn-small right" rel="noopener" target="_blank">Link <i class="fas fa-link"></i></a>`;
    }
    li_project += `</figcaption></figure></li>`
});

// add the <li> items to the main <ul>
let ul_project = `<ul class="project-list">${li_project}</ul>`

// append <ul> to portfolio section
let portfolio_section = document.getElementById("portfolio");
portfolio_section.innerHTML += ul_project;