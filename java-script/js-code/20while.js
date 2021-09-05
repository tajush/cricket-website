// for (let i = 0; i <= 100; i = i + 1) {
//   console.log(i);
//   document.write(i);
// }

// let x=0
// while(x<=100){
//     console.log(x);
//     x++
// }

// let x=0;
// sum=0;
// while(x<=10){
//     // console.log(x);
//     sum=sum+x;
//     x++
// }
// console.log(sum);


let x=0;
sum=0;
while(x<=100){
    if (x%3==0 && x%5==0) {
        document.write(" "+x)
        sum=sum+x;
    }
    // console.log(x);
    x++
}
console.log(sum);