const btn = document.querySelector("button");
const result = document.querySelector("h3");

// HEDEF #ba33cd

const hexList = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

btn.addEventListener("click", () => {
  let hexCode = "";

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(
      Math.random() * (hexList.length - 1 - 0 + 1) + 0
    );
    randomValue = hexList[randomNumber];
    hexCode += randomValue;
  }
  document.body.style.backgroundColor = "#" + hexCode;
  result.innerHTML = "#" + hexCode;
});
