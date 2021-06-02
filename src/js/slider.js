const container = document.querySelector(".slides-container");
const images = document.querySelectorAll(".slider-image");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".slider-dots_item");
let stepSize = images[0].offsetWidth;
let counter = 0;
const slidesToShow = 3;

function addSize(){
    stepSize = images[0].offsetWidth;
    images.forEach(item =>{
        item.style.width = stepSize +'px';
        item.style.height = 'auto';
    })
}

function moveRight(){
    if(counter >= images.length - slidesToShow){
        counter = -1;
    }
    counter++;
    container.style.transform = 'translateX(-' +stepSize * counter + 'px)';
}

function moveLeft(){
    if(counter <=0){
        images.length %3 ===0 ? counter = images.length - slidesToShow:
        images.length%3 === 1 ? counter = images.length -2:
        counter = images.length -1;
    }
    counter--;
    container.style.transform = 'translateX(-' +stepSize * counter + 'px)';
}

next.addEventListener("click", () => {
    addSize();
    moveRight();
    activeDot(counter);
    });

prev.addEventListener("click", () =>{
    addSize();
    moveLeft();
    activeDot(counter);
})


const activeDot = number =>{
    for(let dot of dots){
        dot.classList.remove("active-dot");
    }
    dots[number].classList.add("active-dot");
    let dotStep = stepSize * number;
    container.style.transform = 'translateX(-' +dotStep + 'px)';

}


dots.forEach((item , indexDot) => {
    item.addEventListener("click", () => {
        counter = indexDot;
        activeDot(counter);
    })
});
