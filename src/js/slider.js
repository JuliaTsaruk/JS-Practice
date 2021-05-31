const slider = document.querySelector(".slider");
const slidesContainer = document.querySelector(".slides-container");
const sliderWidth = document.querySelector(".slider").offsetWidth;
const sliderImage = document.querySelectorAll(".slider-image");
let imageWidthArray = [];
let slidesContainerWidth = 0;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".slider-dots_item");
let offset = 0;
let step = 0;
let diff =0;
//imageSize = 128;
//position = 0;
//slidesToShow =3;



for(let i = 0; i < sliderImage.length; i++){
    imageWidthArray.push(sliderImage[i].offsetWidth);
    slidesContainerWidth += sliderImage[i].offsetWidth;
    console.log(slidesContainerWidth);
}
slidesContainer.style.width = slidesContainerWidth + 'px';
 console.log(imageWidthArray);

function moveLeft() {
    diff = slidesContainerWidth - sliderWidth - (offset + imageWidthArray[step]);
    if (diff >= 0) {
        offset += imageWidthArray[step];
        slidesContainer.style.left = -offset + 'px';
    } 
    if(step  == sliderImage.length){
        step = 0;
        offset = 0;
    }else{
        step++;
    }
}

function moveRight() {
    if (offset < 0){
        offset += imageWidthArray[step];
        slidesContainer.style.left = offset +'px';
    }
    if(offset === 0){
        offset = - (slidesContainerWidth - sliderWidth);
        slidesContainer.style.left = offset + 'px';
    }else{
        step++;
    }
}
    
  next.onclick = moveLeft;
  prev.onclick = moveRight;




/*function moveSlideRight(){
    position += imageSize;
    if(position > imageSize * (sliderImage.length - slidesToShow)){
        position = 0;
    }
    slidesContainer.style.left = - position + 'px'; 
}

function moveSlideLeft(){
    position -= imageSize;
    if(position <0){
        position = imageSize * (sliderImage.length - slidesToShow);
    }
    slidesContainer.style.left = - position + 'px';
}

next.addEventListener("click", () =>{
    moveSlideRight();
});

prev.addEventListener("click", () =>{
    moveSlideLeft();
});


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
        moveSlideLeft();
    }
     if(xDiff <0){
        moveSlideRight();
    }
    x1 = null;
}

slider.addEventListener("touchstart", handleTouchStart, false);
slider.addEventListener("touchmove" , handleTouchMove, false);*/