function navbar() {
  let content = document.createElement("div");
  content.className = "initialContent";
  let nav = document.createElement("nav");
  let ul = document.createElement("ul");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");

  li1.textContent = "Homepage";
  li2.textContent = "Menu";
  li3.textContent = "Contact";

  li1.className = "homepage";
  li2.className = "menu";
  li3.className = "contact";

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  console.log(ul);
  nav.appendChild(ul);
  console.log(nav);
  content.appendChild(nav);
  return content;
}

export { navbar };
