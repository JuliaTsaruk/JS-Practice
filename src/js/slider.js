const container = document.querySelector(".slides-container");
const images = document.querySelectorAll(".slider-image");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".slider-dots_item");
let stepSize;
let counter = 0;
const slidesToShow = 3;
const slider = document.querySelector(".slider");
let imgSize =0;


 const moveRight = number =>{ 
    if(counter >= images.length - 1){
        counter = -1;
        //container.style.transform = 'translateX(0px)';
    }
    counter++;
    imgSize =  imgSize + images[number].offsetWidth;
    console.log(imgSize);
    container.style.transform = 'translateX(-' +imgSize + 'px)';
    console.log(container.style.transform);
}

const moveLeft = number =>{
    if(counter <=0){
        //images.length %3 ===0 ? counter = images.length - slidesToShow:
        //images.length%3 === 1 ? counter = images.length -2:
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
    dots[number].classList.add("active-dot");     //Хотела сделать, что i проходит по массиву картинок, до определенного 
    let i = 0;      
    let value = 0;                                  // индекса(индекса кнопки) и прерывается.
    while (i < images.length){
        if (i=== number){
            break;
        }
        i++;                                      //а потом берет все длины картинок , которые он прошел,
        value += images[i - 1].offsetWidth;              //суммирует их и сдвигает на это значение.           
        container.style.transform = 'translateX(-' +value + 'px)';  //Но появилась проблема, теперь слайдер не сдвигается
                                                        //на первый слайд ни при помощи точек, ни при помощи кнопок.
        
    }
}
    

dots.forEach((item , indexDot) => {
    item.addEventListener("click", () => {
        counter = indexDot;
        activeDot(counter);
    })
});
