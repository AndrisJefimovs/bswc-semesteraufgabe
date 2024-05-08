const inputType = document.querySelector("#input-type");
const inputName = document.querySelector("#input-name");
const cbStart = document.querySelector("#cb-start");
const inputStart = document.querySelector("#input-start");
const cbEnd = document.querySelector("#cb-end");
const inputEnd = document.querySelector("#input-end");
const inputCustom = document.querySelector("#input-custom");
const btnNewPackage = document.querySelector("#btn-new-package");

const outputField = document.querySelector("#entries");

btnNewPackage.onclick = async e => {
	e.preventDefault();

	const formData = new FormData();
	formData.append("type", inputType.value);
	formData.append("name", inputName.value);
	formData.append("start", cbStart.value);
	formData.append("startVal", inputStart.value);
	formData.append("end", cbEnd.value);
	formData.append("endVal", inputEnd.value);
	formData.append("custom", inputCustom.value);

	fetch("../cgi-bin/update.cgi", {
		method: "POST",
		body: formData
	})
	.then(data => data.text())
	.then(markup => {
		console.log(markup);
	});
}

