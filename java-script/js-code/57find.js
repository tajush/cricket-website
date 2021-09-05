// let nm=[1,2,4,10,8,7,3]
// let even=nm.find(x=> x%2==0); 
// proooblm
// console.log(even);



let nm=[1,2,4,10,8,7,3]

const even=(value,index,array)=>{
    if(value%2==0)
    return value;
}
let firsteven=nm.find(even);
let firstevenIndex=nm.findIndex(even);
console.log(firsteven);
console.log(firstevenIndex);


let stdent=[
    {
        age:20,
        gpa:3
    },
    {
        age:20,
        gpa:3
    },
    {
        age:20,
        gpa:3
    },
    {
        age:20,
        gpa:4.5
    },
    {
        age:20,
        gpa:5
    }
]
console.log(stdent.find(x=>x.gpa>4));


// let nm=[1,2,4,10,8,7,3]

// // let fstev=nm.find(x=> x%2===0)
// // console.log(fstev);


// const evan=(value,index,arry)=>{
//     if(value%2===0){
//         return value;
//     }
// }
// // console.log(value);

// let fstev=nm.find(evan)
// console.log(fstev);