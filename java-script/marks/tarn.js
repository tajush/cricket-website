var ages = [10, 20, 30, 40, 50, 10, 20, 10, 5, 15];
let sum = 0;
let total ;
for (let i = 0; i <ages.length; i++) {
  if (ages[i] == 15) {
    let a = ages.indexOf(ages[i])
    console.log(a);
  }
  if (ages[i] <= 20) {
    sum = sum + ages[i];
    total ++
  }
}
console.log(sum);
console.log('Total under 21 age found:'+ total);
