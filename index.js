const images = [
  {
    imageSrc: "Images/1.jpg",
    message: "Hello Ahmed!",
  },
  {
    imageSrc: "Images/2.jpg",
    message: "Hello Omar!",
  },
  {
    imageSrc: "Images/4.jpg",
    message: "Hello Ali!",
  },
];
let index = 0;
const span = document.getElementById("burger-menu");
const menu = document.getElementById("menu");
const links = document.getElementsByClassName("menu-link");
span.addEventListener("click", function () {
  menu.classList.toggle("open");
  span.classList.toggle("clicked");
  for (const element of links) {
    element.classList.toggle("animate");
  }
});

setInterval(() => {
  index++;
  let currentImage = images[index % images.length];
  let img = document.getElementById("slider-img");
  let message = document.getElementById("message");
  let messageHeader = document.getElementById("message-header");
  img.classList.add("hide");
  message.classList.add("slide");
  img.setAttribute("src", currentImage.imageSrc);
  messageHeader.innerText = currentImage.message;
  setTimeout(() => {
    img.classList.remove("hide");
    message.classList.remove("slide");
  }, 3000);
}, 5000);
