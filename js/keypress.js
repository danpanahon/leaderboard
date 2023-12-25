var active = document.querySelector(".active");

document.addEventListener("keydown", handler);

function handler(key) {
  active.classList.remove("active");
  if (key.which == 40) {
    active = active.nextElementSibling || active;
    active.nextElementSibling;
  } else if (key.which == 38) {
    active = active.previousElementSibling || active;
  }
  active.classList.add("active");

  next = active.nextElementSibling || active;
  next.classList.remove("green-btn");
  next.classList.add("gray-btn");

  prev = active.previousElementSibling || active;
  prev.classList.remove("gray-btn");
  prev.classList.add("green-btn");
}
