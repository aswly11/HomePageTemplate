window.addEventListener("load", function () {
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

  function repeatOften() {
    const sliderItems = document.getElementsByClassName("entry");
    for (const [i, element] of Array.from(sliderItems).entries()) {
      if (i == index % sliderItems.length) {
        element.classList.add("active");
        element.children.message.classList.add("slide");
      } else {
          element.children.message.classList.remove("slide");
        element.classList.remove("active");

      }
    }
    index++;
    setTimeout(() => {
      repeatOften();
    }, 5000);
  }
  repeatOften();

  const rightButton = document.querySelector(".right");

  rightButton.addEventListener("click", function () {
    let currentItem = document.querySelector("#carousel-items img:not(.hide)");
    if (currentItem.nextElementSibling) {
      currentItem.classList.add("hide");
      currentItem.nextElementSibling.classList.remove("hide");
    }
  });
  const leftButton = document.querySelector(".left");

  leftButton.addEventListener("click", function () {
    let currentItem = document.querySelector("#carousel-items img:not(.hide)");
    if (currentItem.previousElementSibling) {
      currentItem.classList.add("hide");
      currentItem.previousElementSibling.classList.remove("hide");
    }
  });

  const closeButton = document.querySelector("#close");

  closeButton.addEventListener("click", function () {
    const carousel = document.querySelector(".carousel");
    carousel.classList.remove("show");
    let currentItem = document.querySelector("#carousel-items img:not(.hide)");
    currentItem.classList.add("hide");
  });

  const gridItem = document.getElementsByClassName("item");

  for (const item of gridItem) {
    const img = item.querySelector("img");
    const carouselItems = document.getElementById("carousel-items");
    carouselItems.innerHTML += `<img src="${img.src}" id="${img.id}" alt="" class="hide">`;
    item.addEventListener("click", function () {
      const carousel = document.getElementById("carousel");
      carousel.classList.add("show");
      const element = carousel.querySelector(`img[id="${img.id}"]`);
      element.classList.remove("hide");
    });
  }
});
