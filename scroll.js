// set date

const navToggle = document.querySelector('.toggle-bar');
const linksContainer = document.querySelector('.links-container');
const list = document.querySelector('.list');
const btn = document.querySelector('.toggle')
var header = document.querySelector('header')
navToggle.addEventListener("click", () => {
   linksContainer.classList.toggle("show-class")
    console.log('nav')
//   const containerHeight = linksContainer.getBoundingClientRect().height;
//   const linksHeight = links.getBoundingClientRect().height;

//   if (containerHeight === 0){
//       linksContainer.style.height = `${linksHeight}px`;
//   }
})


//sticky navbar


window.addEventListener('scroll', () =>{
    var scrollHeight = window.pageYOffset;
    var nav = header.getBoundingClientRect().height;
    if(scrollHeight > nav){
        header.classList.add('nav-class')
    }
    else{
        header.classList.remove('nav-class')
    }
})


