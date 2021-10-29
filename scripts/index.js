let reviews = [
  {
    images: [
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/empty-star.svg",
    ],
    rating: "4.0",
    text: [
      "Great place to work with the",
      "good work culture and people",
      "skills",
    ],
    tag: "sexual assault",
    social: "Google",
    reviewer: "./assets/user-1.png",
    name: "anonymous",
    role: "Business Analyst",
  },
  {
    images: [
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/star-half.svg",
    ],
    rating: "4.5",
    text: [
      "Great place to work with the",
      "good work culture and people",
      "skills",
    ],
    tag: "nepotism",
    social: "Apple",
    reviewer: "./assets/user-2.png",
    name: "anonymous",
    role: "Business Analyst",
  },
  {
    images: [
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/empty-star.svg",
      "./assets/empty-star.svg",
      "./assets/empty-star.svg",
    ],
    rating: "2.0",
    text: [
      "Great place to work with the",
      "good work culture and people",
      "skills",
    ],
    tag: "racism",
    social: "Google",
    reviewer: "./assets/user-3.png",
    name: "anonymous",
    role: "Business Analyst",
  },
  {
    images: [
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/empty-star.svg",
    ],
    rating: "4.0",
    text: [
      "Great place to work with the",
      "good work culture and people",
      "skills",
    ],
    tag: "sexual assault",
    social: "Starbucks",
    reviewer: "./assets/user-4.png",
    name: "anonymous",
    role: "Business Analyst",
  },
  {
    images: [
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/empty-star.svg",
    ],
    rating: "4.0",
    text: [
      "Great place to work with the",
      "good work culture and people",
      "skills",
    ],
    tag: "racism",
    social: "Facebook",
    reviewer: "./assets/user-5.png",
    name: "anonymous",
    role: "Business Analyst",
  },
  {
    images: [
      "./assets/star.svg",
      "./assets/star.svg",
      "./assets/empty-star.svg",
      "./assets/empty-star.svg",
      "./assets/empty-star.svg",
    ],
    rating: "2.0",
    text: [
      "Great place to work with the",
      "good work culture and people",
      "skills",
    ],
    tag: "racism",
    social: "Google",
    reviewer: "./assets/user-6.png",
    name: "anonymous",
    role: "Business Analyst",
  },
];

const grid = reviews
  .map(
    (review) =>
      `<div class="review-card">
        <div class="upper">
      <div class="review-rating">
       ${review.images.map((img) => `<img src=${img} alt="" />`).join("")}
        <p>${review.rating}</p>
      </div>
      <div class="review-text">
        ${review.text.map((txt) => `<p>${txt}</p>`).join("")}
      </div>
      <div class="review-tag">
        <div class="review-label">
          <p>${review.tag}</p>
        </div>
        <div class="mail">
          <img src="./assets/mail.svg" alt="" />
          <p>${review.social}</p>
        </div>
      </div>
    </div>
    <div class="lower">
      <div class="reviewer">
        <img src=${review.reviewer} alt="" />
        <div class="details">
          <p>${review.name}</p>
          <p>${review.role}</p>
        </div>
      </div>
    </div>
    </div>`
  )
  .join("");

const container = document.querySelectorAll(".review-grid");
container.forEach((item) => (item.innerHTML = grid));

let quote_container = document.querySelector(".hero-quote");
let quote = document.querySelector(".quote");
let hero = document.querySelector(".main-img");

setTimeout(() => {
  changeQuote();
  changeHeroImage();
}, 3000);

const changeQuote = () => {
  quote_container.classList.add("fade-out");
  setTimeout(() => {
    quote.innerHTML = `<p>If you are not willing to risk <br /> the usual
        you will have to settle for <br /> the ordinary.</p>`;
    quote_container.classList.remove("fade-out");
  }, 1500);
};

const changeHeroImage = () => {
  hero.classList.add("fade-out");
  setTimeout(() => {
    hero.src = "./assets/hero-2.png";
    setTimeout(() => {
      hero.classList.remove("fade-out");
    }, 500);
  }, 1000);
};

const menu_btn = document.querySelector(".menu");
const mob_nav = document.querySelector(".mob-nav");

menu_btn.addEventListener("click", () => {
  mob_nav.classList.toggle("nav-toggle");
});
