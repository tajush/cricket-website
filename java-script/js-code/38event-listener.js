document.querySelector("button").addEventListener("click",func)

function func() {
    alert("go");
}


document.querySelector("button").addEventListener("click",function () {
    alert("go");
})
// anominous function nam nai tai


var hm=document.querySelector("h1");
hm.addEventListener("click",function name() {
    
    alert("ha")
});

var hm=document.querySelector("h1");
hm.addEventListener("mouseover",function name() {
    
   hm.classList.add("me");
});

var hm=document.querySelector("h1");
hm.addEventListener("mouseout",function name() {
    
   hm.classList.remove("me");
});




document.getElementsByClassName("me")[0].addEventListener("click",function ffd() {
    alert("function");
    
})

document.getElementsByTagName("h1")[0].addEventListener("mouseover",function ffd() {
    this.classList.add("me");
    
})
document.getElementsByTagName("h1")[0].addEventListener("mouseout",function ffd() {
    this.classList.remove("me");
    
})