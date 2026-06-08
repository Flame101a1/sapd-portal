const galleryImages = [
  {
    image:"images/gallery/hero1.png",
    title:"Patrol Photo",
    description:"SAPD High Command."
  },
  {
    image:"images/gallery/hero2.png",
    title:"Patrol Photo",
    description:"SAPD patrol operations."
  },
  {
    image:"images/gallery/hero3.png",
    title:"Patrol Photo",
    description:"SAPD patrol operations."
  },
  {
    image:"images/gallery/hero4.png",
    title:"Patrol Photo",
    description:"SAPD patrol operations."
  },
  {
    image:"images/gallery/hero5.png",
    title:"Patrol Photo",
    description:"SAPD patrol operations."
  },
  {
    image:"images/gallery/hero6.png",
    title:"Patrol Photo",
    description:"SAPD patrol operations."
  },
  {
    image:"images/gallery/hero7.png",
    title:"Patrol Photo",
    description:"SAPD patrol operations."
  },
  {
    image:"images/gallery/hero8.png",
    title:"Patrol Photo",
    description:"SAPD patrol operations."
  },
  {
    image:"images/gallery/hero9.png",
    title:"Patrol Photo",
    description:"SAPD patrol operations."
  },
  {
    image:"images/gallery/hero10.png",
    title:"Patrol Photo",
    description:"SAPD patrol operations."
  },
  {
    image:"images/gallery/hero11.png",
    title:"Patrol Photo",
    description:"SAPD patrol operations."
  },
  {
    image:"images/gallery/hero12.png",
    title:"Patrol Photo",
    description:"SAPD patrol operations."
  },
  {
    image:"images/gallery/hero13.png",
    title:"Patrol Photo",
    description:"SAPD patrol operations."
  }
];

function escapeHTML(value){
  return String(value || "").replace(/[&<>"']/g, character => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#39;"
  }[character]));
}

function loadGallery(){
  const box = document.getElementById("gallery-list");

  if(!box){
    return;
  }

  box.innerHTML = galleryImages.map(item => {
    const image = escapeHTML(item.image);
    const title = escapeHTML(item.title);
    const description = escapeHTML(item.description);

    return `
      <div class="gallery-card">
        <img
          src="${image}"
          alt="${title}"
          loading="lazy"
          decoding="async"
          onclick="openImage('${image}')"
        >
        <div class="gallery-info">
          <h3>${title}</h3>
          <p>${description}</p>
        </div>
      </div>
    `;
  }).join("");
}

function openImage(image){
  const modal = document.getElementById("galleryModal");
  const modalImage = document.getElementById("modalImage");

  if(!modal || !modalImage){
    return;
  }

  modal.style.display = "flex";
  modalImage.src = image;
}

function closeImage(){
  const modal = document.getElementById("galleryModal");

  if(modal){
    modal.style.display = "none";
  }
}

loadGallery();
