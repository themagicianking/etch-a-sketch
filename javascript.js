const grid = document.createElement("div");
grid.classList.add("gridclass");
document.body.appendChild(grid);

function createBox () {
    let box = document.createElement("div");
    box.classList.add("boxclass");
    box.textContent = "*";
    grid.appendChild(box);
}

function createGrid () {
for (i = 1; i <= 256; i++) {
    createBox();
    }
}

createGrid();