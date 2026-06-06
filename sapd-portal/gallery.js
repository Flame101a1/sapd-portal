const galleryImages = [

{
image:"images/gallery/hero3.png",
title:"Patrol Photo",
description:"SAPD patrol operations."
}

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