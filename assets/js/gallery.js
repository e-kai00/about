

const fileNames = [
    "test.png",
    "img01.jpg",
    "img01.jpg",
    "img01.jpg",
]    

let imgFolder = "assets/img/";
let photo = "";

fileNames.map((fileName) => {
    const imgSrc = imgFolder + fileName;
    photo += `<figure>
    <a href="${imgSrc}" data-fancybox="gallery" title="">
    <img src="${imgSrc}" alt="" width="300" height="300" class=""/>
    <p class="gallery-text">click to enlarge</p>
    </a>
    </figure>`
    
})

let imageGallery = document.getElementById('img-gallery');
imageGallery.innerHTML += photo
