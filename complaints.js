document.getElementById(
"complaintForm"
).addEventListener(
"submit",
async function(e){

e.preventDefault();

const data = new FormData();

data.append(
"entry.1451334158",
document.getElementById(
"type"
).value
);

data.append(
"entry.1748522971",
document.getElementById(
"reported"
).value
);

data.append(
"entry.1853307124",
document.getElementById(
"location"
).value
);

data.append(
"entry.2136502571",
document.getElementById(
"details"
).value
);

data.append(
"entry.1655157784",
document.getElementById(
"evidence"
).value
);

data.append(
"entry.993186963",
document.getElementById(
"severity"
).value
);

data.append(
"entry.901663230",
document.getElementById(
"notify"
).value
);

data.append(
"entry.204631976",
document.getElementById(
"anonymous"
).value
);

data.append(
"entry.2128315592",
document.getElementById(
"badge"
).value
);

await fetch(

"https://docs.google.com/forms/d/e/1FAIpQLSd_xV7Zlc0sLHCZiLEGu1T2tmQrzAya1xUXz8IDrK0z6jICXg/formResponse",

{

method:"POST",

mode:"no-cors",

body:data

}

);

document.getElementById(
"complaintSuccess"
).innerHTML=

"✓ Complaint submitted successfully.";

this.reset();

});