const lettres="abcdefghijklmnopqrstuvwxyz"

let lettresArray= Array.from(lettres)

let lettresContainer= document.querySelector(".letters")

lettresArray.forEach(lettre=>{

    let span =document.createElement("span");
    let theLettre =document.createTextNode(lettre);

    span.appendChild(theLettre);
    span.className="letter-box";
    lettresContainer.appendChild(span);
}

)


const words={
    programing:["php","java","javascript","python","mysql","html","css","jquery","scala","laravel"],
    people:["karim","meriem","farid","mohamed","ahmed","hajar","yasmine","bouchra","mohcine","moussa"],
    countries:["morocco","algeria","spain","italy","russia","japan","ghana","brazil","canada","india"],
    movies:["dark","parasite","annabelle","saw","monster"],
}

let allkeys=Object.keys(words);

let randomNumber=Math.floor(Math.random()*allkeys.length);
let randomValue=words[allkeys[randomNumber]];

let randomValuenumber=Math.floor(Math.random()*randomValue.length);

let randomName=words[allkeys[randomNumber]][randomValuenumber];

document.querySelector(".game-info .category span").innerHTML=allkeys[randomNumber]



let lettresGuessContainer=document.querySelector(".letters-guess");
let lettresAndSpace=Array.from(randomName.toLowerCase());
lettresAndSpace.forEach(letter=>{
    let emptySpan =document.createElement("span");
    if (letter===' ') {
        emptySpan.className="with-space";
    }
    lettresGuessContainer.appendChild(emptySpan);
}
)

let geussSpans=document.querySelectorAll(".letters-guess span");

let worngAttempts=0;

let theDraw=document.querySelector(".hangman-draw");

document.addEventListener("click",(e)=>{
    
    if (e.target.className === "letter-box") {
        let theStatus=false;
        e.target.classList.add('clicked');
        let theClickedletter=e.target.innerHTML.toLowerCase();
        lettresAndSpace.forEach((letter,indexWord)=>{
            if (theClickedletter==letter) {
                theStatus=true;
                geussSpans.forEach((span,indexSpan)=>{
                    if(indexSpan===indexWord){
                        span.innerHTML=theClickedletter
                    }
                })
            }
        })
        if (theStatus!==true) {
            worngAttempts++
            theDraw.classList.add(`wrong-${worngAttempts}`)
            if (worngAttempts==8){
                lettresContainer.classList.add("finished")
                endgame()
            }
        }
    }
})


function endgame() {
    let div=document.createElement("div");
    let divText=document.createTextNode(`game over, the word is ${randomName}`);
    div.appendChild(divText);
    div.className="popup";
    document.body.appendChild(div);
}