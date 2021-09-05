
 let result=0
function getElementById(id) {
  return document.getElementById(id);
}
let div=getElementById("v1")

const number1 = getElementById("number1");
const number2 = getElementById("number2");

function getParseData({value}) {
  return parseInt(value)
}
function rslt(result) {
  return console.log(result);
}
// function rsl(result) {
//   return result;
// }
// function getParseData(element) {
//   const {value} = element;
//   return parseInt(value)
// }
// function getParseData(value) {
//   return parseInt(value)
// }


function check(conditon) {
  if (number1.value == "" && number2.value == "") {
    rslt(" number one and number two required");
  } else if (number1.value == "") {
    rslt("number one is required");
  } else if (number2.value == "") {
    rslt("number two is required");
  } else {
    if (conditon == "add") {
      result = getParseData(number1) + getParseData(number2);
      rslt(result);
        
    } else if (conditon == "sub") {
      let result = getParseData(number1) - getParseData(number2);
      rslt(result);
    } else if (conditon == "mul") {
      let result = getParseData(number1) * getParseData(number2);
      rslt(result);
    } else if (conditon == "divi") {
      let result = getParseData(number1) / getParseData(number2);
      rslt(result);
    }
  }
}
const add = () => {
  check("add");
};

const sub = () => {
  check("sub");
  //11111111111111
};
const mul = () => {
  check("mul");
};
const divi = () => {
  check("divi");
};

let showResult = () => {
  div.value=result
};
