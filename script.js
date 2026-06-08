const hero = document.querySelector(".hero");
const dots = document.querySelectorAll(".dots span");
const rightButton = document.querySelector(".right");
const leftButton = document.querySelector(".left");

const heroImages = [
  "images/hero1.png",
  "images/hero2.png",
  "images/hero3.png",
  "images/hero4.png",
  "images/hero5.png"
];

let currentSlide = 0;

function showSlide(index){
  if(!hero || !dots.length){
    return;
  }

  currentSlide = index;

  hero.style.backgroundImage = `
    linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.55)),
    url("${heroImages[currentSlide]}")
  `;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

if(hero){
  rightButton?.addEventListener("click", () => {
    showSlide((currentSlide + 1) % heroImages.length);
  });

  leftButton?.addEventListener("click", () => {
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
}

const announcementCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7yw1l-mMGSCq9igqwQdMFRYJr48E-eNgsFL9IEDJFhs30RdN3rWjz4XvAXj9bGxInN8XUwAwY2d3z/pub?output=csv";
const trainingCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZbrCNLtpHwvm38Zwx52sj1tgDcbqIndgBpkZ36DEzWaY1j_qmxYyRxmjBW_l28EwdN3aui-Cy1wbF/pub?output=csv";

function parseCSVRows(text){
  return text.trim().split("\n").slice(1).filter(Boolean);
}

function escapeHTML(value){
  return String(value || "").replace(/[&<>"']/g, character => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[character]));
}

async function loadAnnouncements(){
  const box = document.getElementById("announcements-list");

  if(!box){
    return;
  }

  try{
    const response = await fetch(`${announcementCSV}&cacheBust=${Date.now()}`);

    if(!response.ok){
      throw new Error("Failed to load CSV");
    }

    const rows = parseCSVRows(await response.text());

    box.innerHTML = rows.map(row => {
      const columns = row.split(",");
      const title = escapeHTML(columns[0] || "Untitled Announcement");
      const message = escapeHTML(columns[1] || "");
      const date = escapeHTML(columns[2] || "");

      return `
        <div class="announcement">
          <h4>${title}</h4>
          <p>${message}</p>
          <span>${date}</span>
        </div>
      `;
    }).join("");
  }catch{
    box.innerHTML = `
      <p>Announcements could not be loaded.</p>
      <p style="opacity:.6;font-size:14px;">Try viewing this through GitHub Pages or Live Server.</p>
    `;
  }
}

async function loadHomepageTraining(){
  const box = document.getElementById("homepage-training");

  if(!box){
    return;
  }

  try{
    const response = await fetch(`${trainingCSV}&cacheBust=${Date.now()}`);
    const rows = parseCSVRows(await response.text()).slice(0,3);

    box.innerHTML = rows.map(row => {
      const columns = row.split(",");
      const date = escapeHTML(columns[0]);
      const title = escapeHTML(columns[1]);
      const lineOne = escapeHTML(columns[2]);
      const lineTwo = escapeHTML(columns[3]);

      return `
        <div class="training-item">
          <div class="date">
            <strong>${date}</strong>
          </div>
          <div>
            <h4>${title}</h4>
            <p>${lineOne}<br>${lineTwo}</p>
          </div>
        </div>
      `;
    }).join("");
  }catch{
    box.innerHTML = "<p>Training unavailable.</p>";
  }
}

function updateClock(){
  const now = new Date();
  const timeBox = document.getElementById("currentTime");
  const dateBox = document.getElementById("currentDate");

  if(timeBox){
    timeBox.innerText = now.toLocaleTimeString("en-US", {
      hour:"numeric",
      minute:"2-digit",
      second:"2-digit"
    });
  }

  if(dateBox){
    dateBox.innerText = now.toLocaleDateString("en-US", {
      weekday:"short",
      month:"short",
      day:"numeric"
    });
  }
}

loadAnnouncements();
loadHomepageTraining();
updateClock();
setInterval(updateClock, 1000);
