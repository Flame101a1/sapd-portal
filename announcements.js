const announcementCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7yw1l-mMGSCq9igqwQdMFRYJr48E-eNgsFL9IEDJFhs30RdN3rWjz4XvAXj9bGxInN8XUwAwY2d3z/pub?output=csv";

function escapeHTML(value){
  return String(value || "").replace(/[&<>"']/g, character => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[character]));
}

async function loadAllAnnouncements(){
  const box = document.getElementById("all-announcements-list");

  if(!box){
    return;
  }

  try{
    const response = await fetch(`${announcementCSV}&cacheBust=${Date.now()}`);
    const text = await response.text();
    const rows = text.trim().split("\n").slice(1).filter(Boolean);

    box.innerHTML = rows.map(row => {
      const columns = row.split(",");
      const title = escapeHTML(columns[0] || "Untitled Announcement");
      const message = escapeHTML(columns[1] || "");
      const date = escapeHTML(columns[2] || "");

      return `
        <div class="announcement full-announcement">
          <h4>${title}</h4>
          <p>${message}</p>
          <span>${date}</span>
        </div>
      `;
    }).join("");
  }catch{
    box.innerHTML = "<p>Announcements could not be loaded.</p>";
  }
}

loadAllAnnouncements();
