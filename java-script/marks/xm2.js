var ages = [10, 20, 30, 40, 50, 10, 20, 10, 5, 15,20];
let sum = 0;
let mul=1
for (var i=0; i <ages.length; i++) {
    if (ages[i]%10==0) {
        sum = sum + ages[i];
    }
    else{
        mul=mul*ages[i]
      
    }
    
}
console.log(sum);
console.log(mul);

// var ages = [10, 20, 30, 40, 50, 10, 20, 10, 5, 15];
// let sum = 0;
// for (var i=0; i<ages.length; i++) {
//     sum = sum + ages[i];
// }
// console.log(sum);


