document.getElementById("suggestionForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const data = new FormData();

  data.append("entry.1072292940", document.getElementById("officerName").value);
  data.append("entry.1389462491", document.getElementById("badge").value);
  data.append("entry.2061918619", document.getElementById("category").value);
  data.append("entry.1686014524", document.getElementById("details").value);
  data.append("entry.955589059", document.getElementById("urgency").value);
  data.append("entry.1733810739", document.getElementById("contact").value);

  await fetch(
    "https://docs.google.com/forms/d/e/1FAIpQLScXeKcWkAMsV7z_Xz-qpokYIqwwwV3xgZA1UtXbPxGLgHyfjg/formResponse",
    {
      method:"POST",
      mode:"no-cors",
      body:data
    }
  );

  document.getElementById("successMessage").innerHTML = `
    <div class="success-card">
      <strong>Suggestion Submitted</strong>
      <p>Your suggestion has been sent to command staff for review. Thank you for helping improve department operations.</p>
    </div>
  `;

  this.reset();
});
