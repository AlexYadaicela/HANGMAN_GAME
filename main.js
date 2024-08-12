const wordDisplay = document.getElementById("word-display");
let wrongGuess = 0; 

const sports = ["boxing", "badminton", "soccer",
    "archery", "golf", "baseball",
    "basketball", "volleyball", "darts",
    "rugby", "shooting", "squash",
    "surfing", "swimming", "cricket", 
    "bowling", "hockey", "fencing", 
    "sailing", "tennis", "skiing"]; 

function createWordContainer(letters){
    const fragment = document.createDocumentFragment(); 
    letters.forEach((letter) => {
        const span = document.createElement("span"); 
        span.setAttribute("data-letter", `${letter}`);
        span.setAttribute("data-visible", "false"); 
        fragment.appendChild(span); 
    }); 

    wordDisplay.appendChild(fragment); 
}



function setVisibility(word){
    const letters = [...word];
    createWordContainer(letters); 
}

function randonNumber(){
    return Math.floor(Math.random() * sports.length); 
}

// testing grounds
const num = randonNumber();
console.log(sports[num]); 
setVisibility(sports[num]);

//check if value matches the current word
const map = new Map();
document.querySelectorAll("#word-display > *").forEach((value) => {
    const letter = value.getAttribute("data-letter"); 
    const visible = value.getAttribute("data-visible"); 
    map.set(`${letter}`, `${visible}`); 
});

//user input
const topRow = document.getElementById("top-row");
const middleRow = document.getElementById("middle-row");
const bottomRow = document.getElementById("bottom-row"); 

topRow.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const letter = e.target.getAttribute("id") 
    const found = matchingString(map, letter); 

    if(found){
        document.querySelectorAll("span[data-letter" + `=${letter}]`).forEach((value) => {
            value.textContent = letter; 
            value.setAttribute("data-visible", "true"); 
        });
    }else{
        displayDull();  
    }

});

middleRow.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const letter = e.target.getAttribute("id") 
    const found = matchingString(map, letter); 

    if(found){
        document.querySelectorAll("span[data-letter" + `=${letter}]`).forEach((value) => {
            value.textContent = letter; 
            value.setAttribute("data-visible", "true"); 
        });
    }else{
        displayDull();  
    }
    
});

bottomRow.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const letter = e.target.getAttribute("id") 
    const found = matchingString(map, letter); 

    if(found){
        document.querySelectorAll("span[data-letter" + `=${letter}]`).forEach((value) => {
            value.textContent = letter; 
            value.setAttribute("data-visible", "true"); 
        });

    }else{
        displayDull();  
    }

});


function matchingString(map, letter){
    return map.has(`${letter}`); 
}


function displayDull(){
    wrongGuess++;  
    console.log(wrongGuess); 
    const arms = document.querySelectorAll(".upper-body > *"); 
    const legs = document.querySelectorAll(".lower-body > *");
    switch(wrongGuess){
        case 1:
            document.querySelector(".head").setAttribute("data-visible", "true"); 
            break; 
        case 2:
            document.querySelector(".upper-body").setAttribute("data-visible", "true");
            break; 
        case 3:
            arms[0].setAttribute("data-visible", "true"); 
            break; 
        case 4:
            arms[1].setAttribute("data-visible", "true"); 
            break;
        case 5:
            legs[0].setAttribute("data-visible", "true");
            break;  
        case 6: 
            legs[1].setAttribute("data-visible", "true"); 
            break; 
        default:
            console.log("game over");
    }
}

