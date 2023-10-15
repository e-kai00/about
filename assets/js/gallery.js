
const photoFileNames = [
    ["frauenlauf.jpg", "frauenlauf-thumb.jpg", "Rostocker Frauenlauf"],
    ["citylauf.jpg", "citylauf-thumb.jpg", "Rostocker Citylauf"],
    ["trail1.jpg", "trail1-thumb.jpg", "Chornohora Sky Race"],    
    ["10k(1).jpg", "10k(1)-thumb.jpg", "Dnipro 10k"],
    ["10k.jpg", "10k-thumb.jpg", "Dnipro 10k"],
    ["hm.jpg", "hm-thumb.jpg", "Kyiv Half-marathon"],
    ["die-hard.jpg", "die-hard-thumb.jpg", "Die Hard Community"],
    ["mile1.jpg", "mile1-thumb.jpg", "Battle Mile"],     
    ["kmrc.jpg", "kmrc-thumb.jpg", "KMRC Club Cup"],        
]

const bookFileNames = [
    "book1.jpg",
    "book2.jpg",
    "book3.jpg",
    "book4.jpg",
    "book5.jpg",
    "book6.jpg",
    "book7.jpg",
    "book8.jpg",    
]

// photo gallery
let imgFolder = "assets/img/gallery/";
let imgFolderThumb = "assets/img/gallery/thumbnails/";
let photo = "";
let photoThumb = "";

photoFileNames.map((fileName) => {
    const imgSrc = imgFolder + fileName[0];
    const thumbSrc = imgFolderThumb + fileName[1]

    photo += `<div class="f-carousel__slide" data-thumb-src="${thumbSrc}"><img data-lazy-src="${imgSrc}" alt="" class="img-size"/></div>`
})

let imageGallery = document.getElementById('myCarousel');
imageGallery.innerHTML += photo


// library gallery
let imgFolderBooks = "assets/img/books/";
let book = "";

bookFileNames.map((fileName) => {
    const imgSrc = imgFolderBooks + fileName;
    book += `<figure>
    <a href="${imgSrc}" data-fancybox title="">
    <img src="${imgSrc}" alt="" width="150" height="200" class="book-img"/>    
    </a>
    </figure>`
    
})

let bookGallery = document.getElementById('library');
bookGallery.innerHTML += book