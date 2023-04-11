import { saveTripData } from "./storage.js";
import { MY_DATA, calcAvg } from "./data.js";

const FORM_EL = document.getElementById("form-input");
const TBL_OUTPUT = document.getElementById("table-out");

function updateDOM(input, id) {
	const divEL = document.getElementById(id);
	const h3 = document.createElement("h3");
	h3.textContent = input;
	divEL.appendChild(h3);
}

function renderEditDelBtn(index) {
	const td = document.createElement("td");
	const editBtn = document.createElement("button");
	editBtn.textContent = "Edit";
	const delBtn = document.createElement("button");
	delBtn.textContent = "Delete";
	editBtn.addEventListener("click", (e) => {
		FORM_EL[0].value = MY_DATA[index].miles;
		FORM_EL[1].value = MY_DATA[index].gallons;
		FORM_EL[2].value = MY_DATA[index].price;
		MY_DATA.splice(index, 1);
	});
	delBtn.addEventListener("click", (e) => {
		MY_DATA.splice(index, 1);
		saveTripData();
		renderTable();
		calcAvg();
	});
	td.appendChild(editBtn);
	td.appendChild(delBtn);
	return td;
}

function renderTable() {
	TBL_OUTPUT.innerHTML = "";
	if (MY_DATA.length !== 0) {
		const tbl = document.createElement("table");
		const headings = [
			"Miles Driven",
			"Gallons Used",
			"Price Paid",
			"Trip MPG",
			"Trip Cost",
			"Edit/Delete",
		];
		const tr = document.createElement("tr");
		headings.forEach((heading) => {
			let th = document.createElement("th");
			th.textContent = heading;
			tr.appendChild(th);
		});
		tbl.appendChild(tr);
		TBL_OUTPUT.appendChild(tbl);
		populateTableData();
	}
}

function populateTableData() {
	let tbl = document.querySelector("table");
	MY_DATA.forEach((entry, index) => {
		let tr = document.createElement("tr");
		for (const key in entry) {
			let td = document.createElement("td");
			td.textContent = entry[key];
			tr.appendChild(td);
		}
		const btnTD = renderEditDelBtn(index);
		tr.appendChild(btnTD);
		tbl.appendChild(tr);
	});
}

export {renderTable, updateDOM}