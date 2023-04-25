import { mainContent } from "./index";
import CatRabbit from "./cat-rabbit.jpeg";

const myImg = new Image();
myImg.src = CatRabbit;
myImg.style.height = "400px";

const storeDescription = document.createElement("div");
storeDescription.innerText =
  "This store is absolutely incredible! We have the best food!";

const imageCaption = document.createElement("div");
imageCaption.innerHTML =
  "Shown above are two happy customers enjoying their splendid meal.";

export default function generateHomeContent() {
  mainContent.appendChild(storeDescription);
  mainContent.appendChild(myImg);
  mainContent.appendChild(imageCaption);
}
