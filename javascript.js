const grid = document.createElement("div");
grid.classList.add("gridclass");
document.body.appendChild(grid);

function createSmallBox () {
    let box = document.createElement("div");
    box.classList.add("boxclass");
    grid.appendChild(box);
}

function createDefaultGrid () {
    for (i = 1; i <= 256; i++) {
        createSmallBox();
    }
}

createDefaultGrid();

const everyBox = document.querySelectorAll("div.boxclass");

function etch () {
    for (let i = 0; i < everyBox.length; i++) {
        everyBox[i].addEventListener("mouseenter", colorChange)
        function colorChange () {
            everyBox[i].style.cssText = "background: black";
        }
    }

    
}

etch();

document.getElementById("clear").addEventListener("click", clearbutton);

function clearbutton () {
    for (let i = 0; i < everyBox.length; i++) {
        everyBox[i].style.cssText = "background: white";
    }
}

document.getElementById("small").addEventListener("click", createSmallGrid);
document.getElementById("medium").addEventListener("click", createMediumGrid);
document.getElementById("large").addEventListener("click", createLargeGrid);

function createSmallGrid () {
    clearbutton();
    for (i = 1; i <= 256; i++) {
        createSmallBox();
    }
}

function createMediumGrid () {
    clearbutton();
    for (i = 1; i <= 2600; i++) {
        createBox();
    }
}

function createLargeGrid () {
    clearbutton();
    for (i = 1; i <= 10000; i++); {
        createBox();
    }
}