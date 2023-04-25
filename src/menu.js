import { mainContent } from "./index";

const menuContent = document.createElement("p");
menuContent.textContent =
  "Currently we do not have anything on our menu. Sorry for the inconvenience!";

export default function generateMenuContent() {
  mainContent.appendChild(menuContent);
}
