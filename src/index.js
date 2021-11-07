import { navbar } from "./components/initial.js";
import { homepage } from "./components/homepage.js";
import { contact } from "./components/contact.js";
import { menu } from "./components/menu.js";

import "./styles/style.css";

document.body.appendChild(navbar());
homepage();

let listItems = document.querySelectorAll("li");

function removeItem() {
  let content = document.querySelector(".initialContent");
  let lastChild = content.lastChild;
  content.removeChild(lastChild);
}

function changeTab(e) {
  if (e.target.className == "homepage") {
    removeItem();
    homepage();
  }
  if (e.target.className == "menu") {
    removeItem();
    menu();
  }
  if (e.target.className == "contact") {
    removeItem();
    contact();
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", changeTab);
});
