
let pic=["img/Screenshot (26).png","img/Screenshot (27).png","img/Screenshot (30).png"]
let slider=document.getElementById("slideImage")

let i=0
// prooblm

function go() {
    i++
    if (i>=pic.length) {
        i=0;
        slider.src=pic[i]
    }
    else
    slider.src=pic[i]
}

function back() {
    i--
    if (i<0) {
        i=pic.length-1
        slider.src=pic[i]
    }
    else
    slider.src=pic[i]
    
}