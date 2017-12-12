var gameStarted = true; //this says start the game
setTimeout(function() {
    alert('game over') //when 1 minute has passed game will alert that its over.
    gameStarted = false;
},10 * 1000)
startGame()

var audio = new Audio('audio/minimale-animale.mp3') //audio for the game
audio.play();


function startGame(){

   

    function spawnRightArrow() {
        let container = document.getElementById("container");
        let rightArrow = document.createElement("img");
        rightArrow.setAttribute("src", "images/arrowright.svg");
        rightArrow.className = 'rightArrows';
        container.appendChild(rightArrow);
        
    TweenMax.fromTo(rightArrow, 5, //TweenMax means it is animating my variable rightArrow at the total time it takes to do the animatiion
        {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {rightArrow.remove()}, onUpdate:update}); //animating from -200px above the screen and then once it reaches the page it goes down 1000px. onComplete tell me when the animation is doen and then removes that arrow from the screen.

    
        function complete() {
        }

        function update() {
        }
    }

    function spawnUpArrow() {
    let container = document.getElementById("container");
    let upArrow = document.createElement("img");
    upArrow.setAttribute("src", "images/arrowup.svg")
    upArrow.className = 'upArrows';
    container.appendChild(upArrow);

    TweenMax.fromTo(upArrow, 5, //TweenMax means it is animating my variable upArrow at the total time it takes to do the animatiion
        {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {upArrow.remove()}, onUpdate:update}); //animating from -200px above the screen and then once it reaches the page it goes down 1000px. onComplete tell me when the animation is doen and then removes that arrow from the screen.

        function complete() {
        }
        function update() {
        }
    }

    function spawnLeftArrow() {
        let container = document.getElementById("container");
        let leftArrow = document.createElement("img");
        leftArrow.setAttribute("src", "images/arrowleft.svg")
        leftArrow.className = 'leftArrows';
        container.appendChild(leftArrow);
        
        TweenMax.fromTo(leftArrow, 5, //TweenMax means it is animating my variable leftArrow at the total time it takes to do the animatiion
            {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {leftArrow.remove()}, onUpdate:update}); //animating from -200px above the screen and then once it reaches the page it goes down 1000px. onComplete tell me when the animation is doen and then removes that arrow from the screen.
        
            function complete() {
            }
            function update() {
            }
        }



    var heartBeat = setInterval(function(){ // setting intervals bewteen arrow drops.
        if(!gameStarted) { clearInterval(heartBeat)} //if gamestarted is false then stop that interval
        var random = getRandom()
        switch(random){ //gives us a random number
            case 1: //if the random number is 1 then drop a right arrow.
                spawnRightArrow()
                break
            case 2: //if the random number is 2 then drop a up arrow.
                spawnUpArrow()
                break
            case 3: //if the random number is 3 then drop a left arrow.
                spawnLeftArrow()
                break
            default: //if 1-3 is selected then there will be a break between when the arrows are dropped. There is a 50% chance that no arrows will be dropped.
                break
        }
    }, 1000)


    function getRandom() { //get a random number to cycle through the arrows to randomize the drop.
        var number = Math.floor(Math.random() * ((6-1)+1) + 1);
        console.log(number)
        return number;
    }


}
