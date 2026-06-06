const trainingCSV =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vSZbrCNLtpHwvm38Zwx52sj1tgDcbqIndgBpkZ36DEzWaY1j_qmxYyRxmjBW_l28EwdN3aui-Cy1wbF/pub?output=csv";

async function loadTraining(){

const box =
document.getElementById("training-list");

try{

const response =
await fetch(
trainingCSV +
"&cacheBust=" +
Date.now()
);

const text =
await response.text();

const rows =
text.trim()
.split("\n")
.slice(1);

box.innerHTML="";

rows.forEach(row=>{

const columns=row.split(",");

const date =
columns[0] || "";

const title =
columns[1] || "";

const location =
columns[2] || "";

const time =
columns[3] || "";

box.innerHTML += `

<div class="training-full">

<div class="training-date">

${date}

</div>

<div class="training-info">

<h3>

${title}

</h3>

<p>

LOCATION: ${location}

</p>

</div>

<div class="training-time">

TIME: ${time}

</div>

</div>

`;

});

}catch{

box.innerHTML=
"<p>Training could not be loaded.</p>";

}

}

loadTraining();