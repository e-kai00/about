// materialize
function initMaterialize() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: "left",
        draggable: true,
        preventScrolling: true
    });
}

// Fancyapp carousel
function initCarousel() {
    const container = document.getElementById("myCarousel");
    const options = {
        Thumbs: {
            type: "modern",
        },        
        Dots: false 
    };
    
    new Carousel(container, options, { Thumbs });
}    

// current year for Copyright
function getYear() {
    let year = document.getElementById('year');
    let currentYear = new Date().getFullYear();
    if (currentYear === 2023) {
        year.innerHTML = currentYear
    } else {
        year.innerHTML = `2023 - ${currentYear}`;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    initMaterialize()
    initCarousel()
    getYear()
    
})