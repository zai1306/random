var form = document.getElementById('form');
var itemList = document.querySelector('ul');
var filter = document.querySelector('#search')


//making a searching pallete

filter.addEventListener('keyup', function(e){
    var lower = e.target.value.toLowerCase();

    var items =  itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(items){
        var itemName = items.firstChild.textContent;
       // console.log(itemName);

       if(itemName.toLowerCase().indexOf(lower) != -1){
           items.style.display = 'block';
           items.style.display = 'flex'
       }
       else{
           items.style.display = 'none';
       }
    })
})


//form submit event

form.addEventListener('submit', function (e){
    e.preventDefault();

    //console.log(12345);

    var newItem = document.getElementById('items').value

//creating new element

    var li = document.createElement('li');

    //adding class

    li.className = 'list-item'

    //add text node with values

    li.appendChild(document.createTextNode(newItem));


    //create delete button element

    var deleteBtn = document.createElement('button')
    //add class to deleteBtn

    deleteBtn.className = 'danger'

    //append text node




    deleteBtn.appendChild(document.createTextNode('X'))

    li.appendChild(deleteBtn)
     itemList.appendChild(li)


     // adding prompt into li

var ask = document.createElement('button');

ask.className = 'add';
ask.appendChild(document.createTextNode('Add Something'));

li.appendChild(ask)




    
});


itemList.addEventListener('click', function(e){

    if(e.target.classList.contains('danger')){
    
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li)
    
        }
    }
})

itemList.addEventListener('click', function(e){

    if(e.target.classList.contains('add')){
        var newItem = document.getElementById('items').value


        var prop = prompt(newItem)
        var li = e.target.className = 'list-item'
        console.log(prop);
        li.textContent = 'hello worls'        

        }
    })


    // li.appendChild(document.createTextNode(newItem));
