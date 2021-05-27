const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const sliderImage = document.querySelectorAll(".slider-image");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".slider-dots_item")
let imageSize = 128;
let position = 0;
const slidesToShow = 3;
const slidesToScroll = 2;

next.addEventListener("click", () =>{
    position += imageSize;
    if(position > imageSize * (sliderImage.length - slidesToShow)){
        position = 0;
    }
    slides.style.left = - position + 'px'; 
    currentSlide(position);
});

prev.addEventListener("click", () =>{
    position -= imageSize;
    if(position <0){
        position = imageSize * (sliderImage.length - slidesToShow);
    }
    slides.style.left = - position + 'px';
    currentSlide(position);
});




