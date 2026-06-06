const hero = document.querySelector(".hero");
const dots = document.querySelectorAll(".dots span");

const heroImages = [
  "images/hero1.png",
  "images/hero2.png",
  "images/hero3.png",
  "images/hero4.png",
  "images/hero5.png"
];

let currentSlide = 0;

function showSlide(index){
  currentSlide = index;

  hero.style.backgroundImage = `
    linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.55)),
    url("${heroImages[currentSlide]}")
  `;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

document.querySelector(".right").addEventListener("click", () => {
  showSlide((currentSlide + 1) % heroImages.length);
});

document.querySelector(".left").addEventListener("click", () => {
  showSlide((currentSlide - 1 + heroImages.length) % heroImages.length);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

setInterval(() => {
  showSlide((currentSlide + 1) % heroImages.length);
}, 30000);

showSlide(0);

/* ANNOUNCEMENTS */

const announcementCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7yw1l-mMGSCq9igqwQdMFRYJr48E-eNgsFL9IEDJFhs30RdN3rWjz4XvAXj9bGxInN8XUwAwY2d3z/pub?output=csv";

async function loadAnnouncements() {
  const box = document.getElementById("announcements-list");

  try {
    const response = await fetch(announcementCSV + "&cacheBust=" + Date.now());

    if (!response.ok) {
      throw new Error("Failed to load CSV");
    }

    const text = await response.text();

    const rows = text.trim().split("\n").slice(1);

    box.innerHTML = "";

    rows.forEach(row => {
      const columns = row.split(",");

      const title = columns[0] || "Untitled Announcement";
      const message = columns[1] || "";
      const date = columns[2] || "";

      box.innerHTML += `
        <div class="announcement">
          <h4>${title}</h4>
          <p>${message}</p>
          <span>${date}</span>
        </div>
      `;
    });

  } catch (error) {
    box.innerHTML = `
      <p>Announcements could not be loaded.</p>
      <p style="opacity:.6;font-size:14px;">Try viewing this through GitHub Pages or Live Server.</p>
    `;
  }
}

loadAnnouncements();

const trainingCSV =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vSZbrCNLtpHwvm38Zwx52sj1tgDcbqIndgBpkZ36DEzWaY1j_qmxYyRxmjBW_l28EwdN3aui-Cy1wbF/pub?output=csv";

async function loadHomepageTraining(){

const box =
document.getElementById(
"homepage-training"
);

if(!box) return;

try{

const response =
await fetch(
trainingCSV +
"&cacheBust=" +
Date.now()
);

const text =
await response.text();

const rows =
text.trim()
.split("\n")
.slice(1)
.slice(0,3);

box.innerHTML="";

rows.forEach(row=>{

const columns=row.split(",");

box.innerHTML += `

<div class="training-item">

<div class="date">

<strong>

${columns[0]}

</strong>

</div>

<div>

<h4>

${columns[1]}

</h4>

<p>

${columns[2]}

<br>

${columns[3]}

</p>

</div>

</div>

`;

});

}catch{

box.innerHTML=
"<p>Training unavailable.</p>";

}

}

loadHomepageTraining();