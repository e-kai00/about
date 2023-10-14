
// materialize
function initMaterialize() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge: "left",
        draggable: true,
        preventScrolling: true
    });
}

// fancybox
// function initFancybox() {
//     Fancybox.bind('[data-fancybox="gallery"]', {
//         loop: true,
//         protect: true,
//       });
// }

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
    // initFancybox()
    // Fancybox.bind('[data-fancybox="photo-gallery"]', {
    //     Images: {
    //         protected: true
    //     },   
    //   }); 

    const container = document.getElementById("myCarousel");
    //   const options = { Dots: false };
    const options = {
        Thumbs: {
          type: "classic",
        },
        Dots: false 
      };

      new Carousel(container, options, { Thumbs });
    

    getYear()
    
})