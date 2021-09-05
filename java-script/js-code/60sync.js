const task = () => {
  console.log("object");
};


let loading = () => {
  console.log("loading");
};

let task2 = () => {
  console.log("object2");
  setTimeout(loading, 2000);
};

let task3 = () => {
  console.log("object3");
};

let task4 = () => {
  console.log("object4");
};

let task20 = () => {
    console.log("object");
    setTimeout(() => {
    console.log("loading20");
  }, 3000);
};

task();
task2();
task3();
task4();
loading()
task20();
