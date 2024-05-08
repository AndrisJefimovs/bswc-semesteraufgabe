const inputType = document.querySelector("#input-type");
const inputName = document.querySelector("#input-name");
const cbStart = document.querySelector("#cb-start");
const inputStart = document.querySelector("#input-start");
const btnNewPackage = document.querySelector("#btn-new-package");

btnNewPackage.onclick = async e => {
	e.preventDefault();

	const formData = new FormData();
	formData.append("type", inputType.value);
	formData.append("name", inputName.value);

	fetch("../cgi-bin/update.cgi", {
		method: "POST",
		body: formData
	});
}

