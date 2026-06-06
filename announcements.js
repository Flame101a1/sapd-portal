const announcementCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7yw1l-mMGSCq9igqwQdMFRYJr48E-eNgsFL9IEDJFhs30RdN3rWjz4XvAXj9bGxInN8XUwAwY2d3z/pub?output=csv";

async function loadAllAnnouncements() {
  const box = document.getElementById("all-announcements-list");

  try {
    const response = await fetch(announcementCSV + "&cacheBust=" + Date.now());
    const text = await response.text();

    const rows = text.trim().split("\n").slice(1);

    box.innerHTML = "";

    rows.forEach(row => {
      const columns = row.split(",");

      const title = columns[0] || "Untitled Announcement";
      const message = columns[1] || "";
      const date = columns[2] || "";

      box.innerHTML += `
        <div class="announcement full-announcement">
          <h4>${title}</h4>
          <p>${message}</p>
          <span>${date}</span>
        </div>
      `;
    });

  } catch (error) {
    box.innerHTML = "<p>Announcements could not be loaded.</p>";
  }
}

loadAllAnnouncements();