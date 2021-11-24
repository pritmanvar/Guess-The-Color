let ans = "";
let numberOfOptions = 9;
let grid = document.querySelector('.box');
let options = document.querySelectorAll('.option')
let easyOptions = document.querySelectorAll('.easy');
let mediumOptions = document.querySelectorAll('.medium');
let hardOptions = document.querySelectorAll('.hard');

function makeDisplayBlock(options) {
    Array.from(options).forEach((element)=>{
        element.style.display = "block";
    });
}
function makeDisplayNone(options) {
    Array.from(options).forEach((element)=>{
        element.style.display = "none";
    });
}
function easy() {
    if(mediumOptions[0].style.display === "block"){
        grid.style.gridTemplateColumns = "repeat(3,1fr)";
        makeDisplayNone(mediumOptions);
        makeDisplayNone(hardOptions);
        numberOfOptions = 9;
        generateNewColor();
    }
}
function medium() {
    if(mediumOptions[0].style.display !== "block" || hardOptions[0].style.display === "block"){
        grid.style.gridTemplateColumns = "repeat(4,1fr)";
        makeDisplayBlock(mediumOptions);
        makeDisplayNone(hardOptions);
        numberOfOptions = 16;
        generateNewColor();
    }
}
function hard() {
    if(hardOptions[0].style.display !== "block"){
        grid.style.gridTemplateColumns = "repeat(5,1fr)";
        makeDisplayBlock(mediumOptions);
        makeDisplayBlock(hardOptions);
        numberOfOptions = 25;
        generateNewColor();
    }
}

for(let i = 1; i <= 25; i++){
    const clicked = ".option"+i;
    document.querySelector(clicked).addEventListener("click", function(){
        if(clicked === ans){
            alert("right answer");
        }else{
            alert("wrong answer");
        }
    });
}

function generateNewColor(){
    const RGB = document.querySelector('.color');
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    
    let colorOfAnswer = "RGB(" + red + ", " + green + ", " + blue + ")";
    let color = [];
    color.push(colorOfAnswer);
    RGB.innerHTML = colorOfAnswer;
    
    ans = ".option" + Math.floor(Math.random()*numberOfOptions+1);
    document.querySelector(ans).style.backgroundColor = colorOfAnswer;
    
    for(let i = 1; i <= numberOfOptions; i++){
        const colori = ".option" + i;
        if(colori !== ans){
            red = Math.floor(Math.random()*255);
            green = Math.floor(Math.random()*255);
            blue = Math.floor(Math.random()*255);
            
            let optionColor = "RGB(" + red + ", " + green + ", " + blue + ")";
            if(color.indexOf(optionColor) === -1){
                document.querySelector(colori).style.backgroundColor = optionColor;
                color.push(optionColor);
                console.log(color);
            }else{
                i--;
                console.log("repeted");
            }
        }
    }
}