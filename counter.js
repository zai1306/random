var count = 0;
var value = document.querySelector('#value')
var btns = document.querySelectorAll('.btn');


btns.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        var style = e.currentTarget.classList;
        if(style.contains('btn-warning')) {
            count --
        }

        if(style.contains('btn-danger')) {
            count = 0
        }

        if(style.contains('btn-success')) {
            count ++
        }

        if (count > 0){
            value.style.color = 'green'
        }
        else if(count < 0){
            value.style.color = 'red'
        }
        else if (count == 0){
            value.style.color = 'black'
        }
        value.textContent = count;
    })
})
console.log(btns)