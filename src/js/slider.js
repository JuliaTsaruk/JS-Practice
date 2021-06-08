const container = document.querySelector(".slides-container");
const images = document.querySelectorAll(".slider-image");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".slider-dots_item");
let counter = 0;
const slidesToShow = 3;
const slider = document.querySelector(".slider");
let imgSize =0;
let sum = 0;

 const moveRight = number =>{ 
    if(counter >= images.length - 1){
        imgSize = -images[0].offsetWidth;
        counter = -1;
    }
    counter++;
    imgSize =  imgSize + images[number].offsetWidth;
    container.style.transform = 'translateX(-' +imgSize + 'px)';
}


const moveLeft = number =>{
    if(imgSize === 0){
        for( let i =0; i <= images.length -1; i++){
            imgSize += images[i].offsetWidth;
        }
    container.style.transform = 'translateX(-' -imgSize + 'px)';
    counter = images.length;
    }
    counter--;
    imgSize -= (images[number].offsetWidth);
    container.style.transform = 'translateX(-' +imgSize + 'px)';
}

next.addEventListener("click", () => {
    moveRight(counter);
    activeDot(counter);
    });

prev.addEventListener("click", () =>{
    moveLeft(counter);
    activeDot(counter);
})

const activeDot = number =>{
    for(let dot of dots){
        dot.classList.remove("active-dot");
    }
    dots[number].classList.add("active-dot");
    imgSize = 0;
    for( let i = 0; i <= number -1; i++){
        imgSize += images[i].offsetWidth;
    }
    container.style.transform = 'translateX(-' +imgSize + 'px)';
} 


dots.forEach((item , indexDot) => {
    item.addEventListener("click", () => {
        counter = indexDot;
        activeDot(counter);
    })
});
