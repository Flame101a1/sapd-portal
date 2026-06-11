document.getElementById("siteIssueForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const data = new FormData();
  const issueType = document.querySelector('input[name="issueType"]:checked')?.value || "";
  const description = document.getElementById("issueDescription").value;
  const screenshotFiles = Array.from(document.getElementById("issueScreenshots").files || [])
    .map(file => file.name)
    .join(", ");

  data.append("entry.1116509970", document.getElementById("reporterName").value);
  data.append("entry.2089595990", document.getElementById("discordUsername").value);
  data.append("entry.1231695954", document.getElementById("issuePage").value);
  data.append("entry.1901632737", `Issue Type: ${issueType}\n\n${description}`);
  data.append("entry.419525951", [
    document.getElementById("issueSteps").value,
    screenshotFiles ? `\nScreenshot file(s) selected: ${screenshotFiles}` : ""
  ].join(""));

  await fetch(
    "https://docs.google.com/forms/d/e/1FAIpQLSee5f8TPEkO3yVw1BSNpoJeYIw4AAK9Ynunr759NKnotUM_kg/formResponse",
    {
      method:"POST",
      mode:"no-cors",
      body:data
    }
  );

  document.getElementById("siteIssueSuccess").innerHTML = `
    <div class="success-card">
      <strong>Site Issue Submitted</strong>
      <p>Your report has been sent for review. Thank you for helping keep the portal accurate and working properly.</p>
    </div>
  `;

  this.reset();
});
