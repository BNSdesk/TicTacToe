
// Responsive game field (my way)

var loading = function() {
	
    var viewport_width = window.innerWidth;
    var viewport_height = window.innerHeight;
    var game_width = document.querySelector('.game-table');
    
    if(viewport_height > viewport_width){
        if(viewport_width<530){
            game_width.style.width = viewport_width - 20 +"px";
            game_width.style.height = viewport_width - 20 +"px";
        }
    }else if(viewport_height < viewport_width){
        if(viewport_height<530){
            game_width.style.width = viewport_height - 20 +"px";
            game_width.style.height = viewport_height - 20 +"px";
        }
    }
}
window.addEventListener('resize', loading) 
window.onload = loading();



// START SCREEN 

// loading content

var content = `    
    <div class="container">
        <div class="main">
            <div class="welcome-screen">
                <h1>WELCOME</h1>
                <h3>TO</h3>
                <h2>TicTacToe</h2>
                <h3>GAME</h3>
                <h4>please choose player</h4>
                <div class="player-selection">
                    <button id="btn-player-x">PLAYER &nbsp X</button>
                    <button id="btn-player-o">PLAYER &nbsp O</button>
                </div>
            </div>          
            <div class="game-table">
                <div class="player-move"></div>
                <div class="game-grid">
                    <div class="vertical-line vertical-line-1"></div>
                    <div class="vertical-line vertical-line-2"></div>
                    <div class="horisontal-line horisontal-line-1"></div>
                    <div class="horisontal-line horisontal-line-2"></div>

                    <div id="field-1" class="field field-one"></div>                   
                    <div id="field-2" class="field field-two"></div>
                    <div id="field-3" class="field field-three"></div>
                    <div id="field-4" class="field field-four"></div>
                    <div id="field-5" class="field field-five"></div>
                    <div id="field-6" class="field field-six"></div>
                    <div id="field-7" class="field field-seven"></div>
                    <div id="field-8" class="field field-eight"></div>
                    <div id="field-9" class="field field-nine"></div>
                </div>          
            </div>      
            <button id="restart-btn" class="restart-btn" type="reset">RESTART GAME</button>
        </div>
    </div>`;

var body = document.querySelector('body');
body.innerHTML = content;


//variables

var welcomeScreen = document.querySelector('.welcome-screen');
var gameTable = document.querySelector('.game-table');
var restartBtnS = document.querySelector('.restart-btn');

var fieldOne = document.querySelector('#field-1');
var fieldTwo = document.querySelector('#field-2');
var fieldThree = document.querySelector('#field-3');
var fieldFour = document.querySelector('#field-4');
var fieldFive = document.querySelector('#field-5');
var fieldSix = document.querySelector('#field-6');
var fieldSeven = document.querySelector('#field-7');
var fieldEight = document.querySelector('#field-8');
var fieldNine = document.querySelector('#field-9');

var gameFields = document.querySelectorAll('.field');
var playerMove = document.querySelector('.player-move');

var elementX = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">
<style type="text/css">}
</style>
<g>
<path class="st0" d="M990,899.6C936,714.3,779.9,564.5,646,432c-6.6-6.5-13.1-13-19.6-19.6c61.9-56.1,119.4-117.7,147.5-187.6
   c38.3-95.4-85.2-165.7-162.1-124.6c-60.6,32.4-117.3,76.2-171.8,122.5C366.8,150.4,290.8,81.1,207.7,23.3
   C100.5-51.4-45.1,96.5,27.6,203.4c53.8,79.3,118.2,152.3,185.8,222.8c-64,65.4-121.2,139-159.6,219.5
   C28.4,699.1,70.9,774.2,136.2,753c93.5-30.4,180.3-82.7,259.5-143.4c12.1,12.2,24.2,24.5,36,36.7
   C562.8,781.8,710.2,938.4,895,994.6C951.2,1011.7,1006.2,955.3,990,899.6z"/>
</g>
</svg>`;

var elementO = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">
<style type="text/css">}
</style>
<g>
<path class="st0" d="M526.5,991c221.8-29.4,366.3-236.7,371-453.3c2.7-120.3-36.8-249.2-142.6-316.2c-49-31-114.4-56.4-172.8-56.4
   c-4.3,0-8.6,0.4-12.9,0.8c70.1-67-21.2-193.2-122.2-149.3c-214.7,93.2-352.6,355-346,584.2C108.4,843.7,276.1,1024.3,526.5,991z
    M332.9,529.1c13.7-79.1,37.6-157.1,79.1-222.5c3.9,5.9,9.8,11,17.2,14.9c27,12.5,46.6,34.5,73.3,48.2
   c34.5,18,72.5,18.8,107.4,32.9c61.9,25.5,89.7,84.6,101.5,148.1C736.9,692,645.6,864,481,840.5C328.6,819,311.8,651.7,332.9,529.1z
   "/>
</g>
</svg>`;


// temp values 

var playerOn = "x";
var xElements = [];
var oElements = [];



// FUNCTIONS //

// player selection menu 

var btnPlayerX = document.querySelector('#btn-player-x');
var btnPlayerO = document.querySelector('#btn-player-o');

btnPlayerX.addEventListener('click', ()=>{
    welcomeScreen.style.display = 'none';
    restartBtnS.style.display = 'block';
    gameTable.classList.add("show-apperiance");

    addListeners();
    playerXmove();
    
    playerOn = "x";
})

btnPlayerO.addEventListener('click', ()=>{
    welcomeScreen.style.display = 'none';
    restartBtnS.style.display = 'block';
    gameTable.classList.add("show-apperiance");
    
    addListeners();
    playerOmove();
    
    playerOn = "o";
})
    

// add listeners to fields

var addListeners = function(){
    for (let i = 0; i < gameFields.length; i++) {
        const el = gameFields[i];
        el.addEventListener('click', clickedOnField);  
    }
}


// player turn to play info section

let playerXmove = function(){
    let playerOonMove = `<h1>Player X on move:</h1>`;
    playerMove.innerHTML = playerOonMove;
}
let playerOmove = function(){
    let playerOonMove = `<h1>Player O on move:</h1>`;
    playerMove.innerHTML = playerOonMove;
}


// field click event

var clickedOnField = function(event){

    if(playerOn == "o"){   

        oElements.push(Number((event.target.id).slice(-1)));      
        event.target.innerHTML = elementO;

        playerXmove();
        
        if(oElements.length >= 3){    
            checkModule(oElements); 
        }
        playerOn = "x"; 
        isTie();
    }else{
        
        xElements.push(Number((event.target.id).slice(-1)));      
        event.target.innerHTML = elementX;
         
        playerOmove()
        
        if(xElements.length >= 3){   
            checkModule(xElements);   
        }    
        playerOn = "o";
        isTie();
    }

    let listenerSelect = document.querySelector("#"+event.target.id);
    listenerSelect.removeEventListener('click', clickedOnField);
}

// if there is no winner

var isTie = () => {  
    if(xElements.length + oElements.length == 9){       
        let itIsTie = `<h1>NO winner this time!</h1>`;
        playerMove.innerHTML = itIsTie;
        winAnimation()
    }
}


// winner animation

var winAnimation = () => {

    let decreseSize = gameTable.offsetHeight -= gameTable.offsetHeight*0.1;
    gameTable.style.height = decreseSize+"px";
    gameTable.style.width = decreseSize+"px";
    gameTable.style.transition = "ease 0.5s";

    let playerMoveM = document.querySelector(".player-move > h1")
    playerMoveM.style.fontSize = "3rem";
    playerMoveM.style.transition = "ease 0.5s";
}



// remove field listeners function

var removeFieldListeners = function(){
    for (let i = 0; i < gameFields.length; i++) {
        const aa = gameFields[i];
        aa.removeEventListener('click', clickedOnField);  
    }
}



// remove svg elements from fields

var removeFieldElements = function(){

    let svvg = document.querySelectorAll("svg");

    for (let i = 0; i < svvg.length; i++) {
        const element = svvg[i];
        element.remove(); 
    }
}



// winner declaration function

var declareWinner = function(){

    let playerWinns = `<h1>Player    &nbsp ${playerOn.toUpperCase()} &nbsp    wins!</h1>`;

    playerMove.innerHTML = playerWinns;
}



// score check function

var checkModule = function(e){
    if(e.includes(1) && e.includes(2) && e.includes(3)){

        fieldOne.childNodes[0].style.fill = '#ae3737';
        fieldTwo.childNodes[0].style.fill = '#ae3737';
        fieldThree.childNodes[0].style.fill = '#ae3737';

        removeFieldListeners();
        declareWinner();
        winAnimation();

    }else if(e.includes(4) && e.includes(5) && e.includes(6)){

        fieldFour.childNodes[0].style.fill = '#ae3737';
        fieldFive.childNodes[0].style.fill = '#ae3737';
        fieldSix.childNodes[0].style.fill = '#ae3737';

        removeFieldListeners();
        declareWinner();
        winAnimation();

    }else if(e.includes(7) && e.includes(8) && e.includes(9)){

        fieldSeven.childNodes[0].style.fill = '#ae3737';
        fieldEight.childNodes[0].style.fill = '#ae3737';
        fieldNine.childNodes[0].style.fill = '#ae3737';

        removeFieldListeners();
        declareWinner();
        winAnimation();

    }else if(e.includes(1) && e.includes(5) && e.includes(9)){

        fieldOne.childNodes[0].style.fill = '#ae3737';
        fieldFive.childNodes[0].style.fill = '#ae3737';
        fieldNine.childNodes[0].style.fill = '#ae3737';

        removeFieldListeners();
        declareWinner();
        winAnimation();

    }else if(e.includes(7) && e.includes(5) && e.includes(3)){

        fieldSeven.childNodes[0].style.fill = '#ae3737';
        fieldFive.childNodes[0].style.fill = '#ae3737';
        fieldThree.childNodes[0].style.fill = '#ae3737';

        removeFieldListeners();
        declareWinner();
        winAnimation();

    }else if(e.includes(1) && e.includes(4) && e.includes(7)){

        fieldOne.childNodes[0].style.fill = '#ae3737';
        fieldFour.childNodes[0].style.fill = '#ae3737';
        fieldSeven.childNodes[0].style.fill = '#ae3737';

        removeFieldListeners();
        declareWinner();
        winAnimation();

    }else if(e.includes(2) && e.includes(5) && e.includes(8)){

        fieldTwo.childNodes[0].style.fill = '#ae3737';
        fieldFive.childNodes[0].style.fill = '#ae3737';
        fieldEight.childNodes[0].style.fill = '#ae3737';

        removeFieldListeners();
        declareWinner();
        winAnimation();

    }else if(e.includes(3) && e.includes(6) && e.includes(9)){

        fieldThree.childNodes[0].style.fill = '#ae3737';
        fieldSix.childNodes[0].style.fill = '#ae3737';
        fieldNine.childNodes[0].style.fill = '#ae3737';

        removeFieldListeners();
        declareWinner();
        winAnimation();
    } 
};



// RESTART BTN


var restartBtn = document.querySelector('#restart-btn');

restartBtn.addEventListener('click', ()=>{

    welcomeScreen.style.display = 'block';
    restartBtnS.style.display = 'none';
    gameTable.classList.remove("show-apperiance");

    playerOn = "";
    xElements = [];
    oElements = [];

    //remove animation on winner event 

    gameTable.style.height = "";
    gameTable.style.width = "";
    document.querySelector(".player-move > h1").style.transition = "";

    removeFieldListeners();
    removeFieldElements();
})