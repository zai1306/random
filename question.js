// var plusBtn = document.querySelector('.plus-icon');
// var minusBtn = document.querySelector('.minus-icon');
// var text = document.querySelectorAll('.question-text');


var btns = document.querySelectorAll('.questoin-btn')



btns.forEach(function (btn) {
    btn.addEventListener('click', (e) =>{
        var ques = e.currentTarget.parentElement.parentElement
        ques.classList.toggle("show-text")
    })
});



 
 