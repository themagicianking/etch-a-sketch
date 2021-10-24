const grid = document.createElement("div");
grid.classList.add("gridclass");
document.body.appendChild(grid);

function createBox () {
    let box = document.createElement("div");
    box.classList.add("boxclass");
    grid.appendChild(box);
}

function createDefaultGrid () {
    for (i = 1; i <= 256; i++) {
        createBox();
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