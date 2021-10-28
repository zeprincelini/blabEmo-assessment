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

document.querySelector(".review-grid").innerHTML = reviews
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
