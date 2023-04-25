import { mainContent } from "./index";

const p1 = document.createElement("p");
p1.textContent =
  "You can contact us at either (410) CAT-MEOW or at catandrabbit@pancake.com";

const address = document.createElement("p");
address.textContent = "We are also located at 1800 Pancake Blvd";

export default function generateContactContent() {
  mainContent.appendChild(p1);
  mainContent.appendChild(address);
}
