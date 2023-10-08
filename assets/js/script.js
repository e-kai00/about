
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
function initFancybox() {
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });
}


document.addEventListener('DOMContentLoaded', function () {
    initMaterialize()
    initFancybox()
})