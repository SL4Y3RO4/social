//template
let bgTimer;
let h2 = document.querySelectorAll("h2");
let linkZ = document.querySelectorAll(".linkZ"); //querySelectorALL() -> select ANY element specified on DOM
let h1 = document.querySelector("h1");
let versionBox = document.querySelector("#versionBox h3");
let darkmodeIsEnabled = false;

document.addEventListener("keydown", (ev) => {
     
    if(ev.key == "d") {
       if(!darkmodeIsEnabled) {
            clearInterval(bgTimer);
            darkMode();
           // clearInterval(bgTimer);
       } else {
            clearInterval(bgTimer);
            lightMode();
            //clearInterval(bgTimer);
       }
        
    }
});

function darkMode() {

   // clearInterval(bgTimer);
    let r = 255;
    let g = 255;
    let b = 255;
    let textR = 0;
    let textG = 0;
    let textB = 0;

    bgTimer = setInterval(() => {
        
        for(let i = 0; i < h2.length; i++) {
            document.body.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
            h1.style.color = "rgb(" + textR + ", " + textG + ", " + textB + ")";
            h2[i].style.color = "rgb(" + textR + ", " + textG + ", " + textB + ")";  
            linkZ[i].style.border = "2px solid rgb(" + textR + ", " + textG + ", " + textB + ")"; 
            versionBox.style.color = "rgb(" + textR + ", " + textG + ", " + textB + ")";
            cmdList.style.color = "rgb(" + textR + ", " + textG + ", " + textB + ")";

        r--;
        g--;
        b--;

        textR++;
        textG++;
        textB++;
        
        }
       

        if(r <= 0 && g <= 0 && b <= 0 && 
           textR >= 255 && textG >= 255 && textB >= 255) {
           clearInterval(bgTimer);
        }

    }, 2);

    darkmodeIsEnabled = true;

}

function lightMode() {

    let r = 0;
    let g = 0;
    let b = 0;
    let textR = 255;
    let textG = 255;
    let textB = 255;

    bgTimer = setInterval(() => {

   for(let i = 0; i < h2.length; i++) {
            document.body.style.background = "rgb(" + r + ", " + g + ", " + b + ")";
            h1.style.color = "rgb(" + textR + ", " + textG + ", " + textB + ")";
            h2[i].style.color = "rgb(" + textR + ", " + textG + ", " + textB + ")";  
            linkZ[i].style.border = "2px solid rgb(" + textR + ", " + textG + ", " + textB + ")"; 
            versionBox.style.color = "rgb(" + textR + ", " + textG + ", " + textB + ")";
            cmdList.style.color = "rgb(" + textR + ", " + textG + ", " + textB + ")";


        r++;
        g++;
        b++;

        textR--;
        textG--;
        textB--;
        
        }
       

        if(r >= 255 && g >= 255 && b >= 255 && 
           textR <= 0 && textG <= 0 && textB <= 0) {
           clearInterval(bgTimer);
        }

    }, 2);

    darkmodeIsEnabled = false;
}


