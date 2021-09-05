
let nmbofwon=0,nmbofloss=0

for (let i = 0; i < 5; i++) {
  let gess=parseInt(prompt("entr"))
  let ran=Math.floor( Math.random()*5+1);
  if (gess==ran) {
    console.log("random nmbr is "+ran+" won"+" your gess was "+ gess); 
    nmbofwon=nmbofwon+1
   
  }
  else{
    console.log("random nmbr is "+ran+" lost"+" your gess was "+ gess);
    
    nmbofloss=nmbofloss+1
    

  }

}
console.log("total won "+nmbofwon);
console.log("total loss "+nmbofloss);

// let myArray = [1,2,3];

//  var won=1,loss=0
// var guess=["guess1", "guess2", "guess3","guess4","guess5"];
// go1 = 0;
// go2 = 0;
// var go1 = ("you won " + "random number " + ran, "ÿour guess " + guess);
// var go2 = ("you loss " + "random number " + ran, "your guess " + guess);
// for (i = 0; i <= 5; i++) {
//     var guess = parseInt(prompt("number"));
//     var ran = Math.floor(Math.random() * 5) + 1;
 
//   if(guess==ran){
      
//       myArray.push(i + "You won");
//   }
//   else{
//       console.log("loss");
//       myArray.push(i + "You loss");
//   }
// }
// console.log(myArray);
// for (let i = 0; i < myArray.length; i++) {
//     const item = myArray[i];

//     console.log(item);
// }
// console.log("won"+won);
// console.log("loss"+loss);
