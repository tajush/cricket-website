var stdt1=[
    {
        name:"tajus",
        age:10,
        id:112,
        gpa:3.5

    },
    {
        name:"tajus2",
        age:101,
        id:1122,
        gpa:3.20

    },
    {
        name:"tajus3",
        age:120,
        id:1142,
        gpa:2.5

    },
    {
        name:"tajus4",
        age:120,
        id:112,
        gpa:2.3

    }
]

// console.log(stdt1);

// function namee(){
// console.log(stdt1);
// }
// namee();


// function namee(){
//    return  stdt1.filter(function(x){
//        return x.gpa>3
//     }).map(function(y){
//         return y.name
//     })
//     }
//     console.log(namee());


// const nam = () => stdt1.filter((x) => x.gpa>3).map((y)=>y.name);
// console.log(nam());

// function infost() {
   
// }

let gpaa=stdt1.filter(function (p) {
    return p.gpa>3
    // console.log(p);
}).map(function name(a) {
    return a.name
});
console.log(gpaa);


