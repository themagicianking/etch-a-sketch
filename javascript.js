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

const everyBox = document.querySelectorAll("div.boxclass");

function etch () {
    for (let i = 0; i < everyBox.length; i++) {
        everyBox[i].addEventListener("click", testy)
    }

    function testy () {
        console.log("It's working!!!!!");
    }
}

etch();