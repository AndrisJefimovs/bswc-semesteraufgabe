const inputType = document.querySelector("#input-type");
const inputName = document.querySelector("#input-name");
const cbStart = document.querySelector("#cb-start");
const inputStart = document.querySelector("#input-start");
const cbEnd = document.querySelector("#cb-end");
const inputEnd = document.querySelector("#input-end");
const inputCustom = document.querySelector("#input-custom");
const btnNewPackage = document.querySelector("#btn-new-package");

const entriesField = document.querySelector("#entries");

const generateBtn = document.querySelector("#btn-generate");
const outputField = document.querySelector("#output");

const clipboardBtn = document.querySelector("#btn-copy");
const downloadBtn = document.querySelector("#btn-download");

entries = {
packages: [],
		  c: [],
		  r: []
};

const addEntry = _ => {
	entries.packages.push({
type: inputType.value,
name: inputName.value,
startVerDefined: cbStart.checked,
startVer: inputStart.value,
endVerDef: cbEnd.checked,
endVer: inputEnd.value,
custom: inputCustom.value
});
};

const updateList = _ => {
	let newMarkup = "";
	entries.packages.forEach(entry => {
			newMarkup += `<li><span>${entry.type}</span><span>${entry.name}</span><span>${entry.startVerDefined}</span><span>${entry.startVer}</span><span>${entry.endVerDef}</span><span>${entry.endVer}</span><span>${entry.custom}</span></li>`; 
			});
	entriesField.innerHTML = newMarkup;
};

btnNewPackage.onclick = e => {e.preventDefault(); addEntry(); updateList();};

generateRequirementsTxt = async _ => {
	fetch("../cgi-bin/update.cgi", {
method: "POST",
body: JSON.stringify(entries)
})
.then(res => res.text())
	.then(data => {
			outputField.value = data;	
			});
};

generateBtn.onclick = generateRequirementsTxt;

clipboardBtn.onclick = e => {
	outputField.select();
	outputField.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(outputField.value);
};

downloadBtn.onclick = e => {
	download(outputField.value, "requirements.txt", "text/plain");
};

function download(data, filename, type) {
	var a = document.createElement("a"),
		file = new Blob([data], {type: type});
	if (window.navigator.msSaveOrOpenBlob) // IE10+
		window.navigator.msSaveOrOpenBlob(file, filename);
	else { // Others
		var url = URL.createObjectURL(file);
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(function() {
				document.body.removeChild(a);
				window.URL.revokeObjectURL(url);  
				}, 0); 
	}
}

