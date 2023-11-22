const certificates = [
    {
        name: " The Complete Sass & SCSS Course",
        organization: "Udemy",
        date: "Nov 2023",
        url: "https://www.udemy.com/certificate/UC-e93b6d1a-f1e1-49be-8d8d-22d4dc0538d1/",
        certification: "certificate of completion",
        media: ""
    },
    {
        name: "The Linux Command Line",
        organization: "Udemy",
        date: "Nov 2023",
        url: "https://www.udemy.com/certificate/UC-bc51eed8-87ce-42c6-81eb-9d1381aee932/",
        certification: "certificate of completion",
        media: ""
    },
    {
        name: "NodeJS Tutorial and Projects Course",
        organization: "Udemy",
        date: "Nov 2023",
        url: "https://www.udemy.com/certificate/UC-fe695adb-37fa-4d6b-91fe-6286ffee6c1a/",
        certification: "certificate of completion",
        media: ""
    },
    {
        name: "Diploma in Full Stack Software Development (E-commerce Applications)",
        organization: "Code Institute",
        date: "Aug 2023",
        url: "https://www.credential.net/d37778f2-ddb2-4ea1-8923-e657dee45e76#gs.0ouxj7",
        certification: "diploma",
        media: ""
    }
]


let li_cert = "";

certificates.map((cert) => {
    li_cert += `<li class="section-txt"><a href="${cert.url}" rel="noopener" target="_blank" class="certificate-links">
       ${cert.name}</a>, <span class="secondary-text">${cert.certification}</span></li>`
});

let ul_cert = `<ul>${li_cert}</ul>`;

let certificate_section = document.getElementById("certificate");
certificate_section.innerHTML += ul_cert;