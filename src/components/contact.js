import Icon from "../images/map.png";

function contact() {
  let content = document.querySelector(".initialContent");
  let div = document.createElement("div");
  div.className = "contactcontent";
  let main = document.createElement("main");
  main.className = "contactmain";
  let p = document.createElement("p");
  p.className = "contactp";

  const myIcon = new Image();
  myIcon.className = "contactimg";
  myIcon.src = Icon;
  p.textContent =
    "Lorem ipsum dolor sit am Lorem ipsum dolor sit am Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia libero reiciendis delectus dignissimos rerum sapiente repellendususcipit recusandae dolor, illum excepturi non ullam magni quasi amet culpa alias ducimus praesentium.";

  main.append(myIcon);
  main.append(p);
  div.appendChild(main);
  content.appendChild(div);
  document.body.append(content);

  return div;
}

export { contact };
