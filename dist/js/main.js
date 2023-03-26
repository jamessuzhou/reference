import { latestPosts } from "./latestposts.js";

let titles = [];
for (let i = 0; i < 6; i++) {
  titles.push(latestPosts[i].title);
}

let bodies = [];
for (let i = 0; i < 6; i++) {
  bodies.push(latestPosts[i].body);
}

const articles = document.querySelector(".cards-go-here");

for (let i = 0; i < titles.length; i++) {
  let fetch = document.querySelector(".cards-go-here").innerHTML;
  articles.innerHTML =
    `
  <div class="card custom-card" id="cards${i}">
  <div class="card-body">
    <h5 class="card-title" id="title">
      ${titles[i]}
    </h5>
    <div class="divider"></div>
    <p class="card-text" id="body">
      ${bodies[i]}
    </p>
  </div>
  <button class="card-btn">Read more <i class="fa-solid fa-angle-right"></i></button>

</div>
  
  ` + fetch;
}
