(function(){
  const layout = document.querySelector(".page-layout");

  if(!layout){
    markExternalLinks();
    return;
  }

  const pages = [
    ["Dashboard", "index.html"],
    ["Resources", "resources.html"],
    ["SOP", "sop.html"],
    ["CID SOP", "cidsop.html"],
    ["Roster", "roster.html"],
    ["Penal Codes", "penalcodes.html"],
    ["Training", "training.html"],
    ["FTO Resources", "https://flame101a1.github.io/sapd-training-tracker/", "fto-link external-link"],
    ["Warrants", "warrantform.html"],
    ["Complaints", "complaints.html"],
    ["Suggestions", "suggestions.html"]
  ];

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const header = layout.querySelector(".simple-header");

  if(header && !layout.querySelector(".inner-nav")){
    const nav = document.createElement("nav");
    nav.className = "inner-nav";
    nav.setAttribute("aria-label", "Portal navigation");

    pages.forEach(([label, href, className]) => {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = label;

      if(className){
        link.className = className;
      }

      if(href === currentPage){
        link.classList.add("active");
      }

      if(href.startsWith("http")){
        link.target = "_blank";
        link.rel = "noopener";
      }

      nav.appendChild(link);
    });

    header.insertAdjacentElement("afterend", nav);
  }

  markExternalLinks();
  addExternalNotes();
  addFooter(layout);

  function markExternalLinks(){
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      link.classList.add("external-link");

      if(!link.target){
        link.target = "_blank";
      }

      const rel = new Set((link.rel || "").split(" ").filter(Boolean));
      rel.add("noopener");
      link.rel = Array.from(rel).join(" ");
    });
  }

  function addExternalNotes(){
    document.querySelectorAll(".doc-frame, .sheet-frame").forEach(frame => {
      const card = frame.closest(".page-card");

      if(!card || card.querySelector(".external-note")){
        return;
      }

      const note = document.createElement("p");
      note.className = "external-note";
      note.textContent = "This embedded document is hosted outside the portal and may open in Google Docs or Google Sheets.";
      frame.insertAdjacentElement("beforebegin", note);
    });
  }

  function addFooter(target){
    if(target.querySelector(".inner-footer")){
      return;
    }

    const footer = document.createElement("footer");
    footer.className = "portal-footer inner-footer";
    footer.innerHTML = `
      <p>&copy; 2026 San Antonio Police Department | Designed For Republic Of Texas Gaming | Made By FlameOptics</p>
      <div class="footer-quote">
        "Integrity &middot; Service &middot; Leadership"
        <br>
        <span>- San Antonio Police Department</span>
      </div>
      <p>Not For Real Legal Use | Video Game Use Only</p>
    `;

    target.appendChild(footer);
  }
})();
