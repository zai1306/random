const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "daffy.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "dbz.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "folks.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "baby.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "kids.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "villian.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "tom.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "sonic.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "tweety.png",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
var sectionCenter = document.querySelector('.section-center')  
var filterBtn = document.querySelectorAll('.filter-btn');



window.addEventListener('DOMContentLoaded', () =>{
  displayMenuItems(menu)  
})

//function to access filter buttons
filterBtn.forEach(function(btn) {
  btn.addEventListener('click', (e)=>{
    var category = e.currentTarget.dataset.id;
      var menuCategory = menu.filter(function (menuItems){
        if(menuItems.category == category){
          return menuItems;
        }
      })

      if(category == 'all'){
        return displayMenuItems(menu)
      }
      else{
        displayMenuItems(menuCategory)
      }
      console.log(menuCategory)
  })
})


//function to display all menu items
function displayMenuItems(menuItems){
var displayMenu = menuItems.map(function (item) {

  return ` 
  <article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
         ${item.desc}
      </p>
    </div>
  </article>`
})
displayMenu = displayMenu.join("");
sectionCenter.innerHTML = displayMenu

} 