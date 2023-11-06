let tome=document.querySelector(".tomoe-1")
let tome2=document.querySelector(".tomoe-2")
let tome3=document.querySelector(".tomoe-3")

setTimeout(() => {
    tome.classList.add("tomo-active")
    setTimeout(() => {
        tome2.classList.add("tomo-active")
        setTimeout(() => {
            tome3.classList.add("tomo-active")
    
        }, 1000);
    }, 1000);

}, 1000);