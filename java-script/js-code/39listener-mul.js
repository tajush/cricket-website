// document.querySelectorAll(".but")[0].addEventListener("click",function () {
//     var tex=this.innerHTML;
//     document.querySelector("h1").innerHTML=  tex +" is clicked";
// })

// document.querySelectorAll(".but")[1].addEventListener("click",function () {
//     var tex=this.innerHTML;
//     document.querySelector("h1").innerHTML=  tex +" is clicked";
// })

// document.querySelectorAll(".but")[2].addEventListener("click",function name(params) {
//     var tex=this.innerHTML;
//     document.querySelector("h1").innerHTML=  tex +" is clicked";
// })

    for (let i = 0; i <=2; i++) {

        document.querySelectorAll(".but")[i].addEventListener("click",function () {
            var tex=this.innerHTML;
            document.querySelector("h1").innerHTML=  tex +" is clicked";
        })
        
        
    }



// var lan=document.querySelectorAll(".but").length;

// for (let i = 0; i <lan; i++) {

//     document.querySelectorAll(".but")[i].addEventListener("click",function () {
//         var tex=this.innerHTML;
//         document.querySelector("h1").innerHTML=  tex +" is clicked";
//     })
// }




// let asas1=document.getElementsByClassName("but")[0];
// let asas2=document.getElementsByClassName("but")[1];
// let asas3=document.getElementsByClassName("but")[2];
// let sasa=document.getElementsByTagName("h1")[0];

// function clc1() {
//     asas1.addEventListener("click",function () {
//         sasa.innerHTML="button 1 is clicked"
        
//     })
// };
// function clc2() {
//     asas2.addEventListener("click",function () {
//         sasa.innerHTML="button 2 is clicked"
        
//     })
// };
// function clc3() {
//     asas3.addEventListener("click",function () {
//         sasa.innerHTML="button 3 is clicked"
        
//     })
// }