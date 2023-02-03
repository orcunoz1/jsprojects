const btn = document.querySelector("button");
const result = document.querySelector("h1");
const quotes = [
  "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",

  "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",

  "God save me from my friends. I can protect myself from my enemies.",

  "The price of anything is the amount of life you exchange for it.",

  "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",

  "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
];

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(
    Math.random() * (quotes.length - 1 - 0 + 1) + 0
  );

  result.innerHTML = quotes[randomNumber];
});
