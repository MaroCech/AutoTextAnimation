const containerEL = document.querySelector(".container")

const careers = ["Graduate", "Looking for a job", "Flexible", "Teamwork player", "Curious", "Self-taught person"]


let careersIndex = 0;

let characterIndex = 0;



function updateText() {
    characterIndex++;
    containerEL.innerHTML = `
    <h1>I am a ${careers[careersIndex].slice(0, characterIndex)}</h1>`;
  
    if(characterIndex === careers[careersIndex].length){
        careersIndex++
        characterIndex = 0
    };

    if(careersIndex === careers.length) {
        careersIndex = 0;
    }

    setTimeout(updateText,300);
}

updateText();












