import PizzaIcon from "../images/individualpizza.jpg";

function menu() {
  let content = document.querySelector(".initialContent");

  let main = document.createElement("main");
  main.className = "menumain";
  for (let i = 0; i <= 5; i++) {
    let div = document.createElement("div");
    div.className = "menu";

    const Icon = new Image();
    Icon.className = "menuimg";
    Icon.src = PizzaIcon;

    let menutext = document.createElement("div");
    let p = document.createElement("p");
    p.className = "menup";
    p.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumodit illo, corporis similique.";

    menutext.appendChild(p);
    div.append(Icon);
    div.append(menutext);
    main.appendChild(div);
  }

  content.appendChild(main);
  return content;
}

export { menu };
