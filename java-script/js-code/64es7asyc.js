console.log("start");
const task1=()=>{
    return new Promise((resolve,reject)=>{
        resolve("task1 cmtd")
    })
}
const task2=()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        reject("task2 not cmtd")
      })
    })
}
const task3=()=>{
    return new Promise((resolve,reject)=>{
        resolve("task3 cmtd")
    })
}
const task4=()=>{
    return new Promise((resolve,reject)=>{
        resolve("task4 cmtd")
    })
}

// async function all(){
//   try{
//     const t1=await task1();
//     console.log(t1);
//     const t2=await task2();
//     console.log(t2);
//     const t3=await task3();
//     console.log(t3);
//     const t4=await task4();
//     console.log(t4);
//   }
//   catch(err){
//     console.log("err");
//   }
// }
// all();

// const all=async()=> {
//     try{
//       const t1=await task1();
//       console.log(t1);
//       const t2=await task2();
//       console.log(t2);
//       const t3=await task3();
//       console.log(t3);
//       const t4=await task4();
//       console.log(t4);
      
//     }
//     catch(err){
//       console.log("err");
//     }
//   }
//   all();

// console.log("end");


async function wall() {
  try{
    const t1= await task1();
  console.log(t1);
  let t2= await task2();
  console.log(t2);
  let t3= await task3();
  console.log(t3);
  }
  catch(w){
  console.log(w);}
}
wall()