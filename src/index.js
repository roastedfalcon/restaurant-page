import generateHomeContent from "./home";
import generateMenuContent from "./menu";
import generateContactContent from "./contact";

export const mainContent = document.querySelector("#main-content");

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const contactTab = document.querySelector("#contact");

homeTab.addEventListener("click", () => {
  mainContent.innerHTML = "";
  generateHomeContent();
});

menuTab.addEventListener("click", () => {
  mainContent.innerHTML = "";
  generateMenuContent();
});

contactTab.addEventListener("click", () => {
  mainContent.innerHTML = "";
  generateContactContent();
});

generateHomeContent();
