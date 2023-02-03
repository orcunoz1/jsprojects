const btn = document.querySelector("button");

const colorList = ["red", "yellow", "black", "blue", "green", "gray", "purple"];

btn.addEventListener("click", () => {
  // generate a random number between 0 and colorList.lenght -1
  const randomNumber = Math.floor(
    Math.random() * (colorList.length - 1 - 0 + 1) + 0
  );

  document.body.style.backgroundColor = colorList[randomNumber];
});
