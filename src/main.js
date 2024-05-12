import "./assets/main.css";
import sum from "@sem1colon/sum";

const header = document.querySelector("h1");

header.textContent = "Edited Text";
header.style.color = "dodgerblue";

const sums = sum(4, 2);

console.log(sums);
