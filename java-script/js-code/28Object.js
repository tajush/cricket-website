// var stdnt1={
//     nam:"abu",
//     age:30,
//     gpa:3,
//     lang:["bangla","eng"]
// }
// console.log(stdnt1)

// var stdnt2={
//     nam:"abu",
//     age:40,
//     gpa:3,
//     lang:["bangla","eng"]
// }


// var stdnt3={
//     nam:"abu",
//     age:50,
//     gpa:3,
//     lang:["bangla","eng"]
// }
// console.log(stdnt3.lang)
// console.log(stdnt2.lang)

// function Stnt(nam,age,gpa,lang){
//     this.nam=nam;
//     this.age=age;
//     this.gpa=gpa;
//     this.lang=lang;
// }

// var stnt1 = new Stnt ("abu",25,3.6,["bangla","eng"]);
// var stnt2 = new Stnt ("abu",21,3.6,["bangla","eng"]);
// var stnt3 = new Stnt ("abu",22,2.6,["bangla","eng"]);
// var stnt4 = new Stnt ("abu",25,1.6,["bangla","eng"]);
// console.log(stnt1.gpa)
// console.log(stnt2.gpa)
// console.log(stnt3.gpa)
// console.log(stnt1.age);




// function in constructor
function Stnt(nam,age,gpa,lang){
    this.nam=nam;
    this.age=age;
    this.gpa=gpa;
    this.lang=lang;
    this.do=function(){
        console.log(this.nam);
        console.log(this.age);
        console.log(this.gpa);
        console.log(this.lang);
    }
}

var stnt1 = new Stnt ("abu",25,3.6,["bangla1","eng"]);
var stnt2 = new Stnt ("abu",21,3.6,["bangla2","eng"]);
var stnt3 = new Stnt ("abu",22,2.6,["bangla3","eng"]);
var stnt4 = new Stnt ("abu",25,1.6,["bangla4","eng"]);

stnt1.do();
stnt2.do();
stnt3.do();
stnt4.do();


