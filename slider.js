var reviews = [
    {
        id: 1,
        name: "User 1",
        job: 'Web Development',
        img:'folks.jpg',
         text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,quisquam. Amet perspiciatis facilis reprehenderit. Similique, saepeipsum a, et vitae impedit eum dicta nostrum accusamus placeat ametnisi, praesentium iusto."

    },
    {
        id: 2,
        name: "User 2",
        job: 'Web Development',
        img: 'daffy.jpg',
        text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,quisquam. Amet perspiciatis facilis reprehenderit. Similique, saepeipsum a, et vitae impedit eum dicta nostrum accusamus placeat ametnisi, praesentium iusto."

    },
    {
        id: 3,
        name: "User 3",
        job: 'Web Development',
        img: 'baby.jpg',
        text:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,quisquam. Amet perspiciatis facilis reprehenderit. Similique, saepeipsum a, et vitae impedit eum dicta nostrum accusamus placeat ametnisi, praesentium iusto."

    }
]


// select items

var img = document.querySelector('#person-img')
var author = document.querySelector('#author')
var job = document.querySelector('#job')
var info = document.querySelector('#info')

var prevBtn = document.querySelector('.prev-btn')
var nextBtn = document.querySelector('.next-btn')
var randomBtn = document.querySelector('.random-btn')

//set startinig values

let currentItem = 0;

//load initial item

window.addEventListener('DOMContentLoaded', () =>{
    showPerson()
});

function showPerson(){
    const items = reviews[currentItem];
    console.log('hey you')
    img.src = items.img;
    author.textContent = items.name;
    job.textContent = items.job;
    info.textContent = items.text
}

nextBtn.addEventListener('click', () =>{
    currentItem ++;
    if(currentItem >  reviews.length -1){
        currentItem = 0;
    }
    showPerson()
})

prevBtn.addEventListener('click', () =>{
    currentItem --;
    if(currentItem <  0 ){
        currentItem = 2;
    }
    showPerson()
})

