
var gameStarted = true; //this says start the game
setTimeout(function() {
    alert('game over') //when 1 minute has passed game will alert that its over.
    gameStarted = false;
},60 * 1000)
startGame()

// var audio = new Audio('audio/minimale-animale.mp3') //audio for the game
// audio.play();
var box1 = document.getElementById('box1');
var rect = box1.getBoundingClientRect();
var box2 = document.getElementById('box2');
var square = box2.getBoundingClientRect();
var box3 = document.getElementById('box3');
var triangle = box3.getBoundingClientRect();


function startGame(){
    window.onkeydown = function(run){ 
        var leftArrows = document.getElementsByClassName('leftArrows')// creating a new variable that is contains the class leftArrows
        var upArrows = document.getElementsByClassName('upArrows') // creating new variable that contains class upArrows
        var rightArrows = document.getElementsByClassName('rightArrows')// creating variable that contains class rightArrows
            if(run.keyCode == 65){ //on pressing 'A' it will click the left arrow
                if (leftArrows){   //runs through the array of left arrows 
                    for (var i = 0; i < leftArrows.length; i++) {
                        console.log(leftArrows[i])
                        var arrowPositionLeft = leftArrows[i].getBoundingClientRect(); //giving the array position to a new variable
                        console.log(arrowPositionLeft)
                        console.log(rect.top)
                        if(arrowPositionLeft.top < (rect.top + 30) && arrowPositionLeft.top > (rect.top - 30)){ //saying when the arrow is basically in the box
                    alert('success')
                    } 
                }
            }
        }else if(run.keyCode == 87){ //on pressing 'W' it will click the left arrow
            if(upArrows){ //runs through the array of  arrows 
               for (var i = 0; i < upArrows.length; i++) {
                console.log(upArrows[i])
                var arrowPositionUp = upArrows[i].getBoundingClientRect();//giving the array position to a new variable
                console.log(arrowPositionUp)
                console.log(square.top)
                if(arrowPositionUp.top < (square.top + 30) && arrowPositionUp.top > (square.top - 30)){ //saying when the arrow is basically in the box
                    alert('up success')
                    }
                } 
            }

        } else if(run.keyCode == 68){ //on pressing 'D' it will click the left arrow
            if(rightArrows){ //runs through the array of right arrows 
               for (var i = 0; i < rightArrows.length; i++) {
                console.log(upArrows[i])
                var arrowPositionRight = rightArrows[i].getBoundingClientRect();//giving the array position to a new variable
                console.log(arrowPositionRight)
                console.log(triangle.top)
                if(arrowPositionRight.top < (triangle.top + 30) && arrowPositionRight.top > (triangle.top - 30)){ //saying when the arrow is basically in the box
                    alert('right success')
                    }
                } 
            }
        }

    }    

//    } else if(run.keyCode == 68) {
   
//    } else if(run.keyCode == 87){    

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
        // console.log(number)
        return number;
    }

  

   
}
