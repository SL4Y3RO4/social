let p = document.querySelectorAll('p');
let title = document.querySelector('h1');
let list = document.querySelector('li');
let bord = document.getElementById('bord');

function par() {

    for( i = 0; i < p.length; i++ ) {

        p[i].style.color = color.pur;
        p[i].style.fontWeight = "bold";
       
    }
}

par();

function _title_() {

    title.style.color = color.pur;
    title.style.fontFamily = "arial";

}

_title_();


function _list_() {

    list.style.top = "5%";

}

_list_();



function setBlock() {

    let pixel = 0;

    ani = setInterval(function() {

        bord.style.border = pixel++ + "px " + "solid black";
        bord.style.width = attrb.w;
        bord.style.height = attrb.h;
        bord.style.left = attrb.x2;

        if(pixel == 6) {

            clearInterval(ani);
        }

    }, 200);
}

setBlock();
