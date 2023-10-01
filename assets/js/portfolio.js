// portfolios

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
    }
];


// map each project to own <li> item

let li_project = "";

projects.map((project) => {
    li_project += `<li><h3>${project.title}</h3><img src="assets/img/${project.image}.png" class="portfolio-img">`;
    if (project.repo) {
        li_project += `<a href="${project.repo}" target="_blank">Repo</a>`;
    }
    if (project.website) {
        li_project += `<a href="${project.website}" target="_blank">Website</a>`;
    }
    
    li_project += `<ul>`
    if (project.tools) {
        project.tools.forEach((tool) => {
            li_project += `<li>${tool}</li>`
        })
    }
    li_project += `</ul></li>`
});

// add the <li> items to the main <ul>
let ul_project = `<ul>${li_project}</ul>`

// append <ul> to portfolio section
let portfolio_section = document.getElementById("portfolio");
portfolio_section.innerHTML += ul_project;