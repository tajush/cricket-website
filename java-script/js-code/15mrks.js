// var number,
// // number="59"
// var number=parseFloat(prompt("enter nmb"));
// console.log(number);
// if (number>100 || number<0)
// console.log("invalid");
// else if (number>=80 && number<=100)
// console.log("A+");
// else if (number>=70)
// console.log("A");
// else if (number>=60)
// console.log("A-");
// else if (number>=50 && number<60)
// console.log("B");
// else
// console.log("invalid")

// var num1, num2, num3;
// num1 = 5;
// num2 = 4;
// num3 = 0;
// if (num1 < num2 && num1 < num3) console.log("Small number is " + num1);
// else if (num1 > num2 && num1 > num3) {
//   console.log("Large number is" + num1);
//   if (num2 < num3) {
//     console.log("Small number is " + num2);
//   }else{
//     console.log("Small number is " + num3);
//   }
// } else if (num2 < num1 && num2 < num3) console.log("Small number is " + num2);
// else if (num2 > num1 && num2 > num3) console.log("Large number is" + num2);
// else if (num3 > num1 && num3 > num2) console.log("Large number is" + num3);
// else if (num3 < num1 && num3 < num2) console.log("Small number is" + num3);
// else console.log("equal");

// var letter=prompt("enter");
// letter.toLowerCase();

// if (letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u")
// console.log("vowel")
// else
// console.log("consunant")

const getParsedValue = (number) => {
  return parseInt(number)
};

var nmb1 = prompt("enter1")
var nmb2 = prompt("enter2")
var nmb3 = prompt("enter3")
nmb1 = getParsedValue(nmb1)
nmb2 = getParsedValue(nmb2)
nmb3 = getParsedValue(nmb3)
// var nmb1 = 19
// var nmb2 = 13
// var nmb3 = 50
if (nmb1 > nmb2 && nmb1 > nmb3) console.log("large is" + nmb1);
else if (nmb2 > nmb1 && nmb2 > nmb3) console.log("large numb is" + nmb2);
else console.log("large nmb is" + nmb3);

console.log(nmb1, nmb2, nmb3);
