let boxContainer = document.querySelector(".box-container");
let divBox = document.querySelector(".box");


//creating new divs and appending to the parent .box-container div depending on userInput
function appendBoxes(userInput =  16) {
       for(let i = 1; i <= userInput*userInput; i++) {
            let div = document.createElement("div");
            div.className = "box";
            let box = boxContainer.appendChild(div);
       }
}

appendBoxes();
let boxes = document.querySelectorAll(".box");

//styling to create grid.
function createGrid(userInput = 16) {
    boxContainer.style.display = "grid";
    boxContainer.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    boxContainer.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
}

createGrid();

//keep color of divs when on hover no easing out.
function colorPickerEffect() {
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "purple";
        });
    });
}

colorPickerEffect();


        