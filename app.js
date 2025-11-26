function scrollToAbout() {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
  });
}

const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) =>
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  })
);

// const popup = document.getElementById("videoPopup");
// const frame = document.getElementById("videoFrame");
// const closeBtn = document.querySelector(".close-popup");

// document.querySelectorAll(".play-btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     frame.src = btn.getAttribute("data-video") + "?autoplay=1";
//     popup.style.display = "flex";
//   });
// });

// closeBtn.addEventListener("click", () => {
//   popup.style.display = "none";
//   frame.src = "";
// });

// popup.addEventListener("click", (e) => {
//   if (e.target === popup) {
//     popup.style.display = "none";
//     frame.src = "";
//   }
// });

const reviews = [
  "images/reviews/1.png",
  "images/reviews/2.png",
  "images/reviews/3.png",
  "images/reviews/4.png",
  "images/reviews/5.png",
  "images/reviews/6.png",
];

let index = 0;
const img = document.getElementById("reviewImage");

document.getElementById("prevReview").onclick = () => {
  index = (index - 1 + reviews.length) % reviews.length;
  img.src = reviews[index];
};

document.getElementById("nextReview").onclick = () => {
  index = (index + 1) % reviews.length;
  img.src = reviews[index];
};

const langBtn = document.querySelector(".lang-btn");
const dropdown = document.querySelector(".lang-dropdown");

langBtn.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-selector")) {
    dropdown.style.display = "none";
  }
});

dropdown.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", () => {
    dropdown
      .querySelectorAll("li")
      .forEach((li) => li.classList.remove("active"));
    item.classList.add("active");
    langBtn.textContent = item.textContent + " ▾";
    dropdown.style.display = "none";
  });
});
