const container = document.querySelector(".slides-container");
const images = document.querySelectorAll(".slider-image");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".slider-dots_item");
let stepSize;
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
    });

prev.addEventListener("click", () =>{
    addSize();
    moveLeft();
})

let x1 = null;

function handleTouchStart(event){
   
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
}

function handleTouchMove(event){
    if(!x1){
        return false;
    }
    let x2 = event.touches[0].clientX;
    let xDiff = x2 - x1;

    if(xDiff > 0 ){
        addSize();
        moveLeft();
    }
     if(xDiff <0){
        addSize();
        moveRight();
    }
    x1 = null;
}

container.addEventListener("touchstart", handleTouchStart, false);
container.addEventListener("touchmove" , handleTouchMove, false);