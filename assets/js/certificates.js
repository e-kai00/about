const certificates = [
    {
        name: "The Linux Command Line",
        organization: "Udemy",
        date: "Nov 2023",
        url: "https://www.udemy.com/certificate/UC-bc51eed8-87ce-42c6-81eb-9d1381aee932/",
        skills: [],
        media: ""
    },
    {
        name: "NodeJS Tutorial and Projects Course",
        organization: "Udemy",
        date: "Nov 2023",
        url: "https://www.udemy.com/certificate/UC-fe695adb-37fa-4d6b-91fe-6286ffee6c1a/",
        skills: [],
        media: ""
    },
    {
        name: "Diploma in Full Stack Software Development (E-commerce Applications)",
        organization: "Code Institute",
        date: "Aug 2023",
        url: "https://www.credential.net/d37778f2-ddb2-4ea1-8923-e657dee45e76#gs.0ouxj7",
        skills: [],
        media: ""
    }
]


let li_cert = "";

certificates.map((cert) => {
    li_cert += `<li class="section-txt"><a href="${cert.url}" rel="noopener" target="_blank" class="certificate-links">
       ${cert.name}</a>, ${cert.date}</li>`
});

let ul_cert = `<ul>${li_cert}</ul>`;

let certificate_section = document.getElementById("certificate");
certificate_section.innerHTML += ul_cert;