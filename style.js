let delay = 0;
let resize;
let h2_3 = document.querySelectorAll('h2');
let arr;


let color = {

g:"gray",
green:"green",
pur:"purple",
yel:"yellow",
ora:"orange",
re:"red",
blk:"black"

}


function formatEl2() {

animation2 = setInterval(effect, 500);
    
function effect() { 
    
for(i = 0; i < h2_3.length; i++) { 
      
delay++;
    
h2_3[i].style.border = "3px solid black";
h2_3[i].style.borderRadius = "45px";
h2_3[i].style.width = attrb.x;
h2_3[i].style.height = attrb.y;
h2_3[i].style.textAlign = "center";
text();
}

}
    
}
    
formatEl2();


function text() {

    for(j = 0; j < h2.length; j++) { 

    h2[j].style.background = color.g;
    h2[j].style.color = color.blk;

    }

}

function reverseText() {

    for(i = 0; i < h2.length; i++) { 

    h2[i].style.background = color.blk;
    h2[i].style.color = color.g;

    }

}


function changeColor() {

  let  ani = setInterval(function() {

 

function i() {
    text(); 
}

function j() {
 
   return reverseText();

}
 
i();
j();

}, 1000);

}


changeColor();

let node = document.createElement('h3');
let indi = document.querySelectorAll('p');
let k;
arr = ["youtube", "telegram", "instagram", "twitch", "discord", "my game", "R or SPACE:reload page"];
let pow = 1;

function generateIndi() {

for(k = 0; k < indi.length; k++) {

indi[k].innerText = "Press " + pow++ + ":" + arr[k] + "\n";

}
}
node.innerText = 'R or SPACE:reload page';
document.body.append(node);
generateIndi();



   


