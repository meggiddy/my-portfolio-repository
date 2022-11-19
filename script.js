const h2 = document.createElement("h2");
h2.textContent = "Welcome to my portfolio";

const flow = document.getElementById("my-container");
flow.insertBefore(h2, flow.children[0]);


const nextButton = document.querySelector("button.next");

nextButton.addEventListener('click', () => {
    const scroller= document.querySelector('.slideshow-container');
    if(scroller.scrollLeft+500 >= scroller.scrollWidth){
        scroller.scrollLeft = 0;
        return
    }
    scroller.scrollLeft = scroller.scrollLeft+500;
})

const backButton = document.querySelector("button.back");

backButton.addEventListener('click', () => {
    const scroller= document.querySelector('.slideshow-container');
    if(scroller.scrollLeft === 0){
        return
    }
    scroller.scrollLeft = scroller.scrollLeft-500;
})

setInterval(() => {
    const scroller= document.querySelector('.slideshow-container');
    if(scroller.scrollLeft+500 >= scroller.scrollWidth){
        scroller.scrollLeft = 0;
        return
    }
    scroller.scrollLeft = scroller.scrollLeft+500;
}, 4000)