// var letter="A"
// letter=letter.toLowerCase();

// if (letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u")
// console.log("vowel")
// else
// console.log("consunant")

var letter=prompt("ent")
letter=letter.toLowerCase();
switch(letter){
    case"a":
    case"e":
    case"i":
    case"o":
    case"u":
    console.log("vowel");
    break;
    default:
        console.log("consunant");

}

 
// var x,sum=0;
// for(x=1;x<=5;x=x+1)
// {
//     sum=sum+x;
// }
// console.log(sum);

// var num1,num2,sum,x;
// num1=10
// num2=20
// for(x=1;x<=5;x++)
// {
//     sum=num1+num2
//     console.log(sum)
// }
// var sum1 = 0;
// for (let i = 0; i <= 5; i++) {
//     sum1=sum1+i;
// }
// console.log(sum1); 

// sum1 = 0;
//  var x=1;
// while(x<=50)
// {
//     if((x%3==0)&&(x%5==0))
//     {
//         sum1=sum1+x;
//         document.write(x)
//     }
   
//     x=x+1;
// }
// console.log("sum = "+ sum1); 

// var x=1;
// do{
//     document.write(" "+x)
//     x++;
// }
// while(x<=10);

// for (i = 1; i <= 100; i++) {
//   if (i == 10) {
//     break;
//   }
//   document.write(i);
// }
// document.write("end");
// for (i = 1; i <= 100; i++) {
//     if (i >= 10) {
//       continue;
//     }
//     document.write(i);
//   }
//   document.write("end");

//   for (i = 1; i <= 100; i++) {
//     if (i%2!=0) {
//       continue;
//     }
//     document.write(i);
//   }
//   document.write("end");

//   var num=-10
//   var result = num>=0 ? "positive" : "negative"
//   console.log(result)
//   var work=1
//   var result = work==1 ? "on":"off"
//   console.log(result)

// var good = 4
// var result = good==1 ? "nice": good==0 ? "bad" : good==2 ? "well": "bad"
// console.log(result)

// function calculator(num1,num2){
//   var result=(num1*num2)
//   return result;
// }
// var x=calculator(2,3)

// document.write(x);
// document.write(calculator(3,5));

// var num = new Array(5);
// num[0]="ka0rim";
// num[1]="kar1im";
// num[2]="ka2rim";
// num[3]="kar3im";
// num[4]="ka4rim";
// console.log(num.length)

// var num = ["kdkdm","ffdfdf","wwww",]
// console.log(num.length);
// num.push("aaaa");
// num.push("aaaa");
// num.push("aaaa");
// num.push("aaaa");
// console.log(num);
// console.log(num.length);
// num.pop();
// console.log(num);

// var con1=["bd","in","eng"]
// var con2=["chin","wes"]
// var country=con1.concat(con2)
// console.log(country)


var num=[10,20,30,40,50];
var sum=0;
for(var i=0;i<num.length;i++){
  sum=sum+num[i];
}
console.log(sum);

// var nmbr=new Array();
// var sum=0
// for(i=0;i<=5;i++){
//    nmbr[i]=parseInt(prompt("number"));
//    console.log(nmbr[i])
//    sum=sum+nmbr[i]
 
// }
// console.log(sum)

// var nam=["aaa","bbb","ccc"]
// console.log(nam[i])