const grid = document.createElement("div");
grid.classList.add("gridclass");
document.body.appendChild(grid);

let size = 16;

function createBox () {
    let box = document.createElement("div");
    box.classList.add("boxclass");
    box.style.width = `${400/size}px`;
    box.style.height = `${400/size}px`;
    grid.appendChild(box);
}

function createGrid (size) {
    for (i = 1; i <= size*size; i++) {
        createBox(size);
    }
}

createGrid(size);

let everyBox = document.querySelectorAll("div.boxclass");

function etch () {
    for (let i = 0; i < everyBox.length; i++) {
        everyBox[i].addEventListener("mouseenter", colorChange)
        function colorChange () {
            everyBox[i].style.cssText = "background: black";
            everyBox[i].style.height = `${400/size}px`;
            everyBox[i].style.width = `${400/size}px`;
        }
    }
}

etch(size);

document.getElementById("clear").addEventListener("click", clearbutton);

function clearbutton () {
     for (let i = 0; i < everyBox.length; i++) {
         everyBox[i].parentNode.removeChild(everyBox[i]);
     }
     size = prompt("How many boxes would you like there to be in each row of your new grid?");

     if (size > 100) {
         size = 100;
     }

     createGrid(size);

     everyBox = document.querySelectorAll("div.boxclass");

     etch(size);
}