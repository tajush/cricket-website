// var dig=prompt("ent")
// if(dig==0)
// console.log("zero");
// else if(dig==1)
// console.log("one");
// else if(dig==2)
// console.log("two");
// else if(dig==3)
// console.log("three");
// else
// console.log("not available");

// switch(dig){
//     case"0":
//     console.log("zero");
//     break;
//     case"1":
//     console.log("one");
//     break;
//     case"2":
//     console.log("two");
//     break;
//     case"3":
//     console.log("three");
//     break;
//     default:
//         console.log("not available");

// }


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