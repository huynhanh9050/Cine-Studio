let carousel=document.querySelector('.carousel');
let sliders=[];
let slideIndex=0;
const createSlide=()=>{
    if(slideIndex >= movies.length){
        slideIndex=0;
    }
    let slide=document.createElement('div');
    let imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('div');
    let p=document.createElement('p');
    imgElement.appendChild(document.createTextNode(''))
    
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
    imgElement.src=movies[slideIndex].image;
    slideIndex++;
    slide.className="flex-none mr-[30px] relative rounded-[5px] w-[100%] h-[100%] left-0";
    imgElement.className="w-[70%] min-h-[100%] object-cover block ml-auto";
    
    content.className="absolute w-[50%] h-[100%] z-[2] text-white";
    content.style="background: linear-gradient(to right,#030b17 80%,#0c111b00);";
    h1.className="text-3xl font-bold pl-[50px] capitalize mt-[80px]";
    p.className="w-[80%] leading-[30px] pl-[50px] mt-[30px] opacity-[0.8]";
    slide.style="background: rgba(0, 0, 0, 0.5);transition: 1s;overflow: hidden "; 
    sliders.push(slide);
    if(sliders.length){
        sliders[0].style.marginLeft=`calc(-${100 *(sliders.length - 2)}% - ${30 * (sliders.length - 2)}px`
    }
}
for(let i=0;i < 6;i++){
createSlide();
}
setInterval(()=>{
    createSlide();
},3000);
const videoCards=[...document.querySelectorAll('.video-card')];
videoCards.forEach(item=>{
    item.addEventListener('mouseover',()=>{
        let video=item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave',()=>{
        let video=item.children[1];
        video.pause();
    })
})
let cardContainers=[...document.querySelectorAll('.card-container')];
let preBtns=[...document.querySelectorAll('.swiper-button-prev')];
let nxtBtns=[...document.querySelectorAll('.swiper-button-next')];
cardContainers.forEach((item,i)=>{
    let containerDimesions=item.getBoundingClientRect();
    let containerWidth=containerDimesions.width;
    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft+= containerWidth - 200;
    })
    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft-= containerWidth + 200;
    })
})
//Author
const topMenu=document.getElementById("tqd-top-menu");
const toogleTopmenuIcon=document.getElementById("tqd-toggle-top-menu-icon");
document.addEventListener("click",(e)=>{
    if(toogleTopmenuIcon.contains(e.target)){
        topMenu.classList.toggle("tqd-topmenu-expanded");
        topMenu.classList.toggle("hidden");
    }else{
        if(topMenu.classList.contains('tqd-topmenu-expanded')){
            topMenu.classList.remove("tqd-topmenu-expanded");
            topMenu.classList.add("hidden");
        }
    }
})