// let nmb=[66,6,5,4,4];
// for (let x = 0; x < nmb.length; x++) {
//     console.log(nmb[x]);

// }

// let nmr=[1,2,3,4];
// nmr.forEach(function(y){
//     console.log(y);
// })

// let nmr=[1,2,3,4];
// let sqr=[]
// nmr.forEach(function(y){
//     let p=(y*y)
//     sqr.push(p);
//     console.log(y);
// })
// console.log(sqr);

// let items = [1,2,3,4,5]
// items.forEach(function(item){

// })

// let nmr=[1,2,3,4];
// let sqr=[]
// console.log(nmr);
// nmr.forEach(function(y,index, arr){
//     arr[index]=y+5;
// })
// console.log(nmr);



let nmr = [1, 2, 3, 4];
let sqr = [];
nmr.forEach((d,index,arry) => {
  
//   sqr.push(d * d);
//   sqr.push((d*d)+5)
arry[index]=d+5
});
console.log(nmr);