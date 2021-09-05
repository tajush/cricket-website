// for (let i = 0; i < 3; i++) {
//     document.querySelectorAll(".bt")[i].addEventListener("click", function () {
//       var txt = this.innerHTML;
//       console.log(txt);
//       ply(txt);
//       anima(txt);
//       anima(txt);
//     });
//   }

// document.addEventListener("keypress",function(event){
//     var txt=event.key;
//     ply(txt);
// });



//   function ply(txt) {
//     switch (txt) {
//       case "a":
//         var audio = new Audio("sounds/a.m4a");
//         audio.play();
//         break;
//       case "b":
//         var audio = new Audio("sounds/b.m4a");
//         audio.play();
//         break;
  
//       case "c":
//         var audio = new Audio("sounds/c.m4a");
//         audio.play();
//         break;
//     }
//   }
//   function anima(txt) {
//     var butt = document.querySelector("." + txt);
//     butt.classList.add("anima");
  
//     setTimeout(function () {
//       butt.classList.remove("anima");
//     }, 1000);
//   }
  
  


// document.addEventListener("keypress",function(event){
// var go=event.key;
// document.querySelector("p").innerHTML="pressed"+go;
// });


// document.querySelector("textarea").addEventListener("keypress",function(event){
//     var go=event.key;
//     document.querySelector("p").innerHTML="pressed"+go;
//     });



var count=0;
    document.querySelector("textarea").addEventListener("keypress",function(event){
        count++
        var go=event.key;
        document.querySelector("p").innerHTML="pressed"+count;
        });






