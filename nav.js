var navToggle = document.querySelector('.nav-toggle');
var links = document.querySelector('.links');

navToggle.addEventListener('click', () =>{
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // }
    // else{
    //     links.classList.add('show-links')
    // }

    //one liner for abpve mentioned code

    links.classList.toggle('show-links')
})
