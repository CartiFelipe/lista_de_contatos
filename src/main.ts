type contact = {
  imgSrc: string;
  name: string;
  email: string;
};

const contacts: contact[] = [
  {
    name: "Josefina da Silva",
    email: "josefinafc@gmail.com",
    imgSrc: "src/assets/profile_1.jpg",
  },
  {
    name: "Maria Silva",
    email: "maria.silva@gmail.com",
    imgSrc: "src/assets/profile_2.jpg",
  },
  {
    name: "João Santos",
    email: "joao.santos@gmail.com",
    imgSrc: "src/assets/profile_3.jpg",
  },
  {
    name: "Ana Souza",
    email: "ana.souza@gmail.com",
    imgSrc: "src/assets/profile_4.jpg",
  },
  {
    name: "Pedro Oliveira",
    email: "pedro.oliveira@gmail.com",
    imgSrc: "src/assets/profile_5.jpg",
  },
  {
    name: "Lucas Ferreira",
    email: "lucas.ferreira@gmail.com",
    imgSrc: "src/assets/profile_6.jpg",
  },
  {
    name: "Juliana Costa",
    email: "juliana.costa@gmail.com",
    imgSrc: "src/assets/profile_7.jpg",
  },
  {
    name: "Gabriel Almeida",
    email: "gabriel.almeida@gmail.com",
    imgSrc: "src/assets/profile_8.jpg",
  },
  {
    name: "Beatriz Rocha",
    email: "beatriz.rocha@gmail.com",
    imgSrc: "src/assets/profile_9.jpg",
  },
  {
    name: "Rafael Martins",
    email: "rafael.martins@gmail.com",
    imgSrc: "src/assets/profile_10.jpg",
  },
];

contacts.forEach(addContact);

function addContact(contact: contact) {
  const ulList: HTMLUListElement = document.getElementById("contacts_container") as HTMLUListElement;

  // profile img
  const headerImg = document.createElement("img");
  headerImg.setAttribute("src", contact.imgSrc);

  // li header
  const liHeader = document.createElement("header");
  liHeader.classList.add("contact_profile");
  liHeader.append(headerImg);

  // email h1

  const contactNameH1 = document.createElement("h1");
  contactNameH1.classList.add("contact_name");
  contactNameH1.innerText = contact.name;

  // name p
  const contactEmailP = document.createElement("p");
  contactEmailP.classList.add("contact_email");
  contactEmailP.innerText = contact.email;

  // info container div

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("contact_info_container");
  infoContainer.append(contactNameH1);
  infoContainer.append(contactEmailP);

  // actions container

  const actionsContaincer = document.createElement("div");
  const deleteIcon = document.createElement("img");
  const editIcon = document.createElement("img");
  deleteIcon.setAttribute("src", "src/assets/delete.png");
  editIcon.setAttribute("src", "src/assets/edit.png");
  actionsContaincer.append(deleteIcon);
  actionsContaincer.append(editIcon);
  actionsContaincer.classList.add("actions_container");

  // ------------------------------------------------- //

  const li: HTMLLIElement = document.createElement("li");
  li.classList.add("contact");
  li.append(liHeader);
  li.append(infoContainer);
  li.append(actionsContaincer);
  ulList.append(li);
}
