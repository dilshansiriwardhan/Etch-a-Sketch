const element = document.getElementById("canvas-container");
let isDown;
for (let i = 0; i < 1296; i++) {

    var div = document.createElement("div");
    div.setAttribute('class', 'pixel');
    div.addEventListener('mousedown' , () => {isDown = true});
    div.addEventListener('mousemove' , move );

    element.appendChild(div);
}


element.addEventListener('mouseup' , () => { isDown = false; });

function move(e){
    if(e.type == 'mousemove' && isDown ){
        e.target.style.backgroundColor = "#3a3a3a" ;
    }
};



// let m = false;

// element.addEventListener('mousedown' , (e) => {


//     m = false;
//     e.target.style.backgroundColor = "#3a3a3a";

//     element.addEventListener('mouseup' , (up) => { m = true});

//     element.addEventListener('mousemove' , hoverFunction = (event) => {
        
//         if(m){return};

//         event.target.style.backgroundColor = "#3a3a3a" ;
//     });

// });





