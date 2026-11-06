//template
let aimlord = document.getElementById("aimlord");
let textTimer;
let textTimer2;
let clearTimer;
let subtitle = document.getElementById("textfiero");
let pointer = document.getElementById("pointer");
let h2p = document.querySelectorAll("h2");
let demo = document.getElementById("demo");
let linkZy = document.querySelectorAll(".linkZ");
let cmdList = document.getElementById("cmdList");

//arrays
let nick = ["S", "L", "4", "Y", "3", "R"];
let knick = ["살", "해", "자"];
let subArray = ["A", "1", "M", " ", " ", "D", "3", "M", "O", "N"];
let cmdArray = ["D"];
let infoArray = ["set darkmode/lightmode"];

//OPTIONAL method

/*function animationFiera() {

subtitle.innerHTML = " ";

    let i = 0;

    textTimer2 = setInterval(() => {

    subtitle.innerHTML += subArray[i];
    i++;

    if(i == subArray.length) {
       clearInterval(textTimer2);
    }

    }, 100); 

}*/

//insert all command options
function insertInfo() {
    for(let i = 0; i < infoArray.length; i++) {
          cmdList.innerHTML += "press " + cmdArray[i] + " to " + infoArray[i] + "<br>";
    }
}

insertInfo();

function showWindowSize() {
   demo.innerHTML = "width:" + window.innerWidth + "; " + "height: " + window.innerHeight;
}

//showWindowSize();

function getMousePosY() {

    pointer.style.display = "none";

    document.addEventListener("mousemove", (e) =>{
        getpos = e.clientY;
        pointer.style.top = getpos + "px";
    });
}

getMousePosY();

function movePointer() {
   for(let i = 0; i < h2p.length; i++) {
        linkZy[i].addEventListener("mouseover", () => {
               pointer.style.display = "block";
        });

        linkZy[i].addEventListener("mouseleave", () => {
            pointer.style.display = "none";
        });
   }    
}

movePointer();

function textAnimation2() {
    aimlord.innerHTML = " ";

    let i = 0;

    textTimer = setInterval(() => {

    aimlord.innerHTML += knick[i];
    i++;

    if(i == knick.length) {
       clearInterval(textTimer);
    }

    }, 100); 
}


function textAnimation1() {
    aimlord.innerHTML = " ";

    let i = 0;

    textTimer = setInterval(() => {

    aimlord.innerHTML += nick[i];
    i++;

    if(i == nick.length) {
       clearInterval(textTimer);
    }

    }, 100); 
}

textAnimation2();
setTimeout(textAnimation1, 800);
//animationFiera();
//setTimeout(clearTextAnimation, 2000);