var num = ["kdkdm","ffdfdf","wwww","qqq","aaa"]
console.log(num);

// shift opposite of pop

num.shift()
console.log(num);

// unshift opposite of push

num.unshift("sagor")
console.log(num);

// splice mane songjukto kora
// adding
num.splice(2,1,"habu")
console.log(num);
num.splice(2,0,"habu")
console.log(num);

// removing
num.splice(2,1)
console.log(num);

// slice new arry return kre
let neww =num.slice(2)
console.log(neww);
console.log(num);

let newww =num.slice(1,2)
console.log(newww);


var numq = ["kdkdm","ffdfdf","wwww","qqq","aaa"]
numq.sort()
console.log(numq);
numq.reverse()
console.log(numq);

let nm=[2,7,3,9,1]
nm.sort(function (a,b) {
    return a-b
})
console.log(nm);