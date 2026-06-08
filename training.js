const trainingCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZbrCNLtpHwvm38Zwx52sj1tgDcbqIndgBpkZ36DEzWaY1j_qmxYyRxmjBW_l28EwdN3aui-Cy1wbF/pub?output=csv";

function escapeHTML(value){
  return String(value || "").replace(/[&<>"']/g, character => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[character]));
}

async function loadTraining(){
  const box = document.getElementById("training-list");

  if(!box){
    return;
  }

  try{
    const response = await fetch(`${trainingCSV}&cacheBust=${Date.now()}`);
    const text = await response.text();
    const rows = text.trim().split("\n").slice(1).filter(Boolean);

    box.innerHTML = rows.map(row => {
      const columns = row.split(",");
      const date = escapeHTML(columns[0]);
      const title = escapeHTML(columns[1]);
      const location = escapeHTML(columns[2]);
      const time = escapeHTML(columns[3]);

      return `
        <div class="training-full">
          <div class="training-date">${date}</div>
          <div class="training-info">
            <h3>${title}</h3>
            <p>LOCATION: ${location}</p>
          </div>
          <div class="training-time">TIME: ${time}</div>
        </div>
      `;
    }).join("");
  }catch{
    box.innerHTML = "<p>Training could not be loaded.</p>";
  }
}

loadTraining();
