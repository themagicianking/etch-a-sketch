const grid = document.createElement("div");
grid.classList.add("gridclass");
document.body.appendChild(grid);

const row = document.createElement("div");
row.classList.add("rowclass");
grid.appendChild(row);

const row2 = document.createElement("div");
row2.classList.add("rowclass");
grid.appendChild(row2);

let nameOfRow;

function createRow () {

const div1 = document.createElement("div");
div1.classList.add("boxclass");
div1.textContent = "box one";
nameOfRow.appendChild(div1);

const div2 = document.createElement("div");
div2.classList.add("boxclass");
div2.textContent = "box two";
nameOfRow.appendChild(div2);

const div3 = document.createElement("div");
div3.classList.add("boxclass");
div3.textContent = "box three";
nameOfRow.appendChild(div3);

const div4 = document.createElement("div");
div4.classList.add("boxclass");
div4.textContent = "box four";
nameOfRow.appendChild(div4);

}

nameOfRow = row;

createRow(nameOfRow);

nameOfRow = row2;

createRow(nameOfRow);