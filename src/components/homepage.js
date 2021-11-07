function homepage() {
  let content = document.querySelector(".initialContent");
  let header = document.createElement("header");
  let h1 = document.createElement("h1");
  let main = document.createElement("main");
  main.className = "intialMain";

  h1.textContent = "Italian Restaurant";
  header.appendChild(h1);

  main.appendChild(header);

  let section = document.createElement("section");
  let p = document.createElement("p");
  p.className = "intialp";
  p.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Remrecusandae voluptate saepe ea mollitia eos quibusdam maiores quos corporis modi laborum autem reiciendis omnis necessitatibus voluptas, libero id nemo tenetur. Totam expedita laboriosam quaerat distinctio laudantium modi fugit possimus, facilis temporibus aspernatur error veritatis nulla eos, vel culpa neque eum sunt, fugiat eius! Enim, eligendi consequatur. Laboriosam tempore eius placeat?";
  section.appendChild(p);
  main.append(section);
  content.appendChild(main);
  return content;
}

export { homepage };
