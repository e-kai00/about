
const photoFileNames = [
    "test.png",
    "img01.jpg",
    "img01.jpg",
    "img01.jpg",
]

const bookFileNames = [
    "test.png",
    "img01.jpg",
    "img01.jpg",
    "img01.jpg",
    "test.png",
    "test.png",
    "test.png",
]

// photo gallery
let imgFolder = "assets/img/";
let photo = "";

photoFileNames.map((fileName) => {
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


// library gallery
let book = "";

bookFileNames.map((fileName) => {
    const imgSrc = imgFolder + fileName;
    book += `<figure>
    <a href="${imgSrc}" data-fancybox="gallery-1" title="">
    <img src="${imgSrc}" alt="" width="200" height="300" class=""/>
    <p class="gallery-text">click to enlarge</p>
    </a>
    </figure>`
    
})

let bookGallery = document.getElementById('library');
bookGallery.innerHTML += book