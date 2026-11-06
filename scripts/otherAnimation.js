let selector = document.querySelectorAll(".linkZ");
let moveTimer;
let isSelected = false;

//move element to right when u touch it XD 
function moveToRight(selector, iter, increaser) {

     moveTimer = setInterval(() => {
                selector[iter].style.left = increaser +  "%";
                increaser++;

                if(increaser >= 18) {
                   clearInterval(moveTimer);
                   increaser = 0;
                   return;
                }
     }, 10); 
}

//move element to left when u touch it XD
function moveToLeft(selector, iter) {

    let decreaser = 18;

     moveTimer = setInterval(() => {
                selector[iter].style.left = decreaser +  "%";
                decreaser--;

                if(decreaser <= -1) {
                   clearInterval(moveTimer);
                   decreaser = 0;
                   return;
                }
     }, 10);
}

function selectorAnimation() {

    let moveLeft = 0;

    for(let i = 0; i < selector.length; i++) {

            selector[i].addEventListener("mouseover", () => {          
                if(!isSelected) {
                    clearInterval(moveTimer);
                    moveToRight(selector, i, moveLeft);
                    isSelected = true;
                }
               
            });


            selector[i].addEventListener("mouseleave", () => {
              if(isSelected) {
                    clearInterval(moveTimer);
                    moveToLeft(selector, i);
                    isSelected = false;
              }
                
            });
             
    }
}

selectorAnimation();