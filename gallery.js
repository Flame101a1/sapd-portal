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
},

];

function loadGallery(){

const box =
document.getElementById(
"gallery-list"
);

box.innerHTML="";

galleryImages.forEach(item=>{

box.innerHTML += `

<div class="gallery-card">

<img

src="${item.image}"

alt="${item.title}"

onclick="openImage('${item.image}')"

>

<div class="gallery-info">

<h3>

${item.title}

</h3>

<p>

${item.description}

</p>

</div>

</div>

`;

});

}

function openImage(image){

document.getElementById(
"galleryModal"
).style.display="flex";

document.getElementById(
"modalImage"
).src=image;

}

function closeImage(){

document.getElementById(
"galleryModal"
).style.display="none";

}

loadGallery();