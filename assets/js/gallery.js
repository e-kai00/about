
const photoFileNames = [
    ["10k.jpg", "10k-thumb.jpg"],
    ["10k(1).jpg", "10k(1)-thumb.jpg"],
    ["die-heard.jpg", "die-heard-thumb.jpg"],
    ["dragobrat.jpg", "dragobrat-thumb.jpg"],
    
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
    photo += `<figure>
    <a href="${imgSrc}" data-fancybox="gallery" title="">
        <img src="${thumbSrc}" alt="" class="img-thumbnail"/>
        <p class="gallery-text">click to enlarge</p>
    </a>
    </figure>`
    
})

let imageGallery = document.getElementById('img-gallery');
imageGallery.innerHTML += photo


// library gallery
let imgFolderBooks = "assets/img/books/";
let book = "";

bookFileNames.map((fileName) => {
    const imgSrc = imgFolderBooks + fileName;
    book += `<figure>
    <a href="${imgSrc}" data-fancybox="gallery-1" title="">
    <img src="${imgSrc}" alt="" width="150" height="200" class="book-img"/>
    <p class="gallery-text">click to enlarge</p>
    </a>
    </figure>`
    
})

let bookGallery = document.getElementById('library');
bookGallery.innerHTML += book