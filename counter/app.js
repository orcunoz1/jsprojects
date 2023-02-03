// bring all the html elements you need to intract
//add eventlisteners for each btn
//write a fuction that increase currentNumber
//write a function that decrease currentNumber
//display that number

const result = document.querySelector(".number");
const addBtn = document.querySelector(".add");
const lowerBtn = document.querySelector(".lower");

let value = 0;

addBtn.addEventListener("click", add);
function add() {
  value = value + 1;
  result.innerHTML = `${value}`;
}

lowerBtn.addEventListener("click", lower);
function lower() {
  value = value - 1;
  if (value < 0) {
    value = 0;
  }
  //   eğer value 0 dan küçük ise value yu 0 a geri çek
  result.innerHTML = `${value}`;
}
