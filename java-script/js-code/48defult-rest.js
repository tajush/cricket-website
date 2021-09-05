// "use strict"
// function hm(gggg){
// console.log(gggg="ttt");
// }
// hm()
// hm("888888888")


// "use strict"
// function hm(go="default paramiter"){
// console.log(`${go}`);
// }
// hm("do do do")
// hm();


// function jog(x,y){
//     // console.log(typeof x, typeof y);
//     // let p=x+y
//     // console.log(`${x + y}`);
//     return `${x + y}`
//     console.log(`${p}`);
//     console.log(`${x} + ${y}`);
// }
// let res = jog(10,20);
// console.log(res);



// function jog(x,y,...z){
//     //console.log(`x=${x},y=${y},z=${z}`);
//     console.log(`${z}`);
// }
// jog(10,20,5,5,5,5)

// let arr = [1,2,3,4]
// console.log(arr);

// let youAr = [5,6,7,8];
// console.log([...arr, ...youAr]);
// console.log(arr.concat(youAr));


function sum(x,y,...z) {
    console.log(`${x},${y},${z}`);
}
sum(10,2,3,4,5,4)