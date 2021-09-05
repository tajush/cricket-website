let n1mb=[1,4,4,3,3,6]
console.log(n1mb[1]);
console.log(n1mb[2]);

let n1mb=[1,4,4,3]
let [nm1,nm2,nm3,nm4]=n1mb
console.log(nm1);
console.log(nm2);

let n1mb=[1,4,4,3]
let [nm1,nm2,...z]=n1mb
console.log(nm1);
console.log(nm2);
console.log(z);


let x=10,y=20;

[x,y]=[y,x]
console.log(y);
console.log(x);

const info={
    age:2,
    id:12,
    namee:"qqqq"
}
console.log(info.age);
console.log(info.namee);
console.log(info.id);


const info={
    age:2,
    id:12,
    namee:"qqqq"
}

const {age,id,namee}=info

console.log(age);
console.log(namee);
console.log(id);


const info={
    age:2,
    id:12,
    namee:"qqqq",
    lag:{
        nativ:"bd",
        begi:"eng"
    }
}

const {age,id,namee,lag}=info

console.log(age);
console.log(namee);
console.log(id);
console.log(lag.nativ);



let show=(stude)=>{ 
    console.log(`${stude.age},${stude.id} `);
}

const stude={
    age:2,
    id:12,
}

show(stude)

function view(obj) {
    console.log(`normal func ${obj.age},${obj.id} `);
}
view(student)


let info=({age,id})=>{ 
    console.log(`${age},${id} `);
}

const stude={
    age:2,
    id:12,
}

info(stude)


let as=[1,6,4,9,3]
let [n1,m1,g1,d,qq]=as
console.log(n1);