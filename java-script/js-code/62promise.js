// console.log("object");

// const proms1 = new Promise((resolve, reject) => {
//   let cmptdprms = true;
//   if (cmptdprms) {
//     resolve("cmptd");
//   } else {
//     //   reject("not cmptd")
//     reject(new Error("not cptd work"));
//   }
// });

// const proms2 = new Promise((resolve, reject) => {
//   resolve("cmptd2");
// });

// // proms1
// // .then((resps)=>{
// //     console.log(resps);
// // })
// // .catch((errr)=>{
// //     console.log(errr);
// //     // console.log(errr.message);
// // });

// // proms2
// // .then((resp)=>{
// //     console.log(resp);
// // })

// // Promise.all([proms1,proms2])
// // .then((res)=>{
// //     console.log(res);
// // });

// // Promise.all([proms1,proms2])
// // .then(([res1,res2])=>{
// //     console.log(res1,res2);
// // });

// const proms3 = new Promise((resolve, reject) => {
 
//   setTimeout(()=>{
//     resolve("cmptd3");
//   },2000)
// });


// const proms4= new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("cmptd4")
//     },1000)
// });
// Promise.race([proms3,proms4]).then((resq)=>{
//     console.log(resq);
// })

// console.log("end");
// // console.log(proms1);


