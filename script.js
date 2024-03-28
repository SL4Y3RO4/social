//global variables

let h2 = document.querySelectorAll('h2');
let i;
let d = 0;
let j;
let animation;



//attributes

let attrb = {

x: 200 + 'px',
y: 45 + 'px',
w: 850 + 'px',
h: 610 + 'px',
x2: 430 + 'px',

}


/*this instruction need to do a animation about scrolling 
of text in below*/

function formatEl(d = 0, d2 = 0) {

    animation = setInterval(effect, 60);
    
    function effect() { 
    
    for(i = 0; i < h2.length; i++) { 
      
    d++;
    d2++;
    
    h2[i].style.position = "relative";
    h2[i].style.left = d + "%";
    h2[i].style.margin = d2 + 'px';
    
    }
    
    if(d >= 43 && d2 >= 42) {
    
    clearInterval(animation);
    
    }
    
    }
    
    }


    
    formatEl();



    