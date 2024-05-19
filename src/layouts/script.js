const inputType = document.querySelector("#input-type");
const inputName = document.querySelector("#input-name");
const cbStart = document.querySelector("#cb-start");
const inputStart = document.querySelector("#input-start");
const cbEnd = document.querySelector("#cb-end");
const inputEnd = document.querySelector("#input-end");
const inputCustom = document.querySelector("#input-custom");
const btnNewPackage = document.querySelector("#btn-new-package");

const entriesField = document.querySelector("#entries");

const outputField = document.querySelector("#output");

entries = {
    packages: [],
	c: [],
	r: []
};

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

