//colors = ['green', 'red', 'purple','cyan', 'orange', 'rgba(133,122,200)', '#f15025']
colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var body = document.querySelector('body')


var btn = document.querySelector('.btn');
var color = document.querySelector('.color');
 
btn.addEventListener('click', () => {
    var hex = '#';

    for(var i = 0; i<6; i++){
        hex += colors[getRandom()]
    }
 

    document.body.style.backgroundColor = hex;
    color.textContent = hex;
})

function getRandom (){
    return Math.floor(Math.random() * colors.length);
}