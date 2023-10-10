const mario = document.getElementById('mario')

//Task 2
const imgMario = document.querySelector("img");
imgMario.src = './assets/mario-stand.gif'
imgMario.style.position = 'absolute'
imgMario.style.top = '0px'
imgMario.style.left = '0px'
let movement = 0;

//Task 3
const stopMario = e => {
    if( e.key === 'ArrowRight' || e.key === 'ArrowLeft' ) imgMario.src = './assets/mario-stand.gif'
}

//Task 4
const moveMario = e => {

    //start Animation
    if( imgMario.src !== './assets/mario-move.gif' 
        && !e.repeat 
        && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')
    ) {
        imgMario.src = './assets/mario-walk.gif'
    }

    //define boundaries
    if(movement < 0) {
        movement = 0
    }else if(movement > window.innerWidth-210){
        movement = window.innerWidth-210
    }

    //start Movement
    console.log(movement);
    switch(e.key){
        case 'ArrowRight':
            movement += 10
            imgMario.style.left = movement+'px'   
            imgMario.style.transform = 'scaleX(1)'
            break;
        case 'ArrowLeft':
            movement -= 10
            imgMario.style.left = movement+'px'  
            imgMario.style.transform = 'scaleX(-1)'
            break;    
    }
    
}

//Task5
document.addEventListener( 'keydown', moveMario);
document.addEventListener( 'keyup', stopMario);