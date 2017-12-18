//this says start the game
//when 1 minute has passed game will delcare winner based on the score.
var gameStarted = true; 
setTimeout(function() {
   if(player1Score > player2Score){ 
        alert('Winner Player 1')
    } else if (player2Score > player1Score){
        alert('Winner Player 2')
    }
    gameStarted = false;
},60 * 1000)
startGame()



//timer
var timeLeft = 59;
var countDownTimer = setInterval(function(){
    document.getElementById('countDown').innerHTML = --timeLeft;
    if (timeLeft <= 0)
    {
     document.getElementById('countDown').innerHTML = "Game Over"; 
    }
}, 1000);

//audio auto play
var audio = document.getElementById('audio');
    setTimeout(function(){
        audio.pause()
    }, 60 * 1000);




//giving the box id's from html a variable on JS and then getting the position of the box on the page.
var box1 = document.getElementById('box1');
var rect = box1.getBoundingClientRect();

var box2 = document.getElementById('box2');
var square = box2.getBoundingClientRect();

var box3 = document.getElementById('box3');
var triangle = box3.getBoundingClientRect();

var box4 = document.getElementById('box4');
var pentagon = box4.getBoundingClientRect();

var box5 = document.getElementById('box5');
var trap = box5.getBoundingClientRect();

var box6 = document.getElementById('box6');
var hex = box6.getBoundingClientRect();


//player Scores
var player1ScoreDiv = document.getElementById('startingScore')
var player1Score = 0
var player2ScoreDiv = document.getElementById('startingScore2')
var player2Score = 0



function startGame(){
    window.onkeydown = function(run){ 
        var leftArrows = document.getElementsByClassName('leftArrows') // creating a new variable that is contains the class of arrows
        var upArrows = document.getElementsByClassName('upArrows') 
        var rightArrows = document.getElementsByClassName('rightArrows')
        var p2RightArrows = document.getElementsByClassName('p2RightArrows')
        var p2UpArrows = document.getElementsByClassName('p2UpArrows') 
        var p2LeftArrows = document.getElementsByClassName('p2LeftArrows')
        if(run.keyCode == 65){ //key presses for each arrow
                if (leftArrows){   
                    for (var i = 0; i < leftArrows.length; i++) { //runs through the array of arrows
                        console.log(leftArrows[i])
                        var arrowPositionLeft = leftArrows[i].getBoundingClientRect(); //giving the array position to a new variable
                        console.log(arrowPositionLeft)
                        console.log(rect.top)
                        if(arrowPositionLeft.top < (rect.top + 25) && arrowPositionLeft.top > (rect.top - 25)){ //saying when the arrow is basically in the box
                            player1Score += 10; //player score +10 each time you hit it correctly
                            player1ScoreDiv.innerHTML = player1Score;
                            leftArrows[i].remove(); // remove arrow if clicked
                        } 
                    }
                }
        } else if(run.keyCode == 87){ //key presses for each arrow
            if(upArrows){ 
                for (var i = 0; i < upArrows.length; i++) { //runs through the array of arrows
                    console.log(upArrows[i])
                    var arrowPositionUp = upArrows[i].getBoundingClientRect(); //giving the array position to a new variable
                    console.log(arrowPositionUp)
                    console.log(square.top)
                    if(arrowPositionUp.top < (square.top + 25) && arrowPositionUp.top > (square.top - 25)){ //saying when the arrow is basically in the box
                        player1Score += 10; //player score +10 each time you hit it correctly
                        player1ScoreDiv.innerHTML = player1Score; 
                        upArrows[i].remove(); // remove arrow if clicked
                    }
                } 
            }
        } else if(run.keyCode == 68){ //key presses for each arrow
            if(rightArrows){ 
                for (var i = 0; i < rightArrows.length; i++) { //runs through the array of arrows
                console.log(rightArrows[i])
                var arrowPositionRight = rightArrows[i].getBoundingClientRect(); //giving the array position to a new variable
                console.log(arrowPositionRight)
                console.log(triangle.top)
                if(arrowPositionRight.top < (triangle.top + 25) && arrowPositionRight.top > (triangle.top - 25)){ //saying when the arrow is basically in the box
                    player1Score += 10; //player score +10 each time you hit it correctly
                    player1ScoreDiv.innerHTML = player1Score;
                    rightArrows[i].remove(); // remove arrow if clicked
                    }
                } 
            }
        } else if(run.keyCode == 39){ //key presses for each arrow
            if(p2RightArrows){ 
                for (var i = 0; i < p2RightArrows.length; i++) { //runs through the array of arrows
                console.log(p2RightArrows[i])
                var p2Right = p2RightArrows[i].getBoundingClientRect(); //giving the array position to a new variable
                console.log(p2Right)
                console.log(pentagon.top)
                if(p2Right.top < (pentagon.top + 25) && p2Right.top > (pentagon.top - 25)){ //saying when the arrow is basically in the box
                    player2Score += 10; //player score +10 each time you hit it correctly
                    player2ScoreDiv.innerHTML = player2Score;
                    p2RightArrows[i].remove(); // remove arrow if clicked
                    }
                }
            }        

        } else if(run.keyCode == 38){ //key presses for each arrow
            if(p2UpArrows){ 
                for (var i = 0; i < p2UpArrows.length; i++) { //runs through the array of arrows
                console.log(p2UpArrows[i])
                var p2Up = p2UpArrows[i].getBoundingClientRect(); //giving the array position to a new variable
                console.log(p2Up)
                console.log(trap.top)
                if(p2Up.top < (trap.top + 25) && p2Up.top > (trap.top - 25)){ //saying when the arrow is basically in the box
                    player2Score += 10; //player score +10 each time you hit it correctly
                    player2ScoreDiv.innerHTML = player2Score;
                    p2UpArrows.remove(); // remove arrow if clicked
                    }
                }
            }
        }else if(run.keyCode == 37){ //key presses for each arrow
            if(p2LeftArrows){ 
                for (var i = 0; i < p2LeftArrows.length; i++) { //runs through the array of arrows
                console.log(p2LeftArrows[i])
                var p2Left = p2LeftArrows[i].getBoundingClientRect(); //giving the array position to a new variable
                console.log(p2Up)
                console.log(hex.top)
                if(p2Left.top < (hex.top + 25) && p2Left.top > (hex.top - 25)){ //saying when the arrow is basically in the box
                player2Score += 10; //player score +10 each time you hit it correctly
                player2ScoreDiv.innerHTML = player2Score;
                p2LeftArrows[i].remove(); // remove arrow if clicked
                }
            }
        }
    }
}    

    function spawnRightArrow() { 
        let container = document.getElementById("container"); //created a new element for container
        let rightArrow = document.createElement("img"); //creating a new element imgage
        rightArrow.setAttribute("src", "images/arrowright.svg"); //setting the image to the arrow
        rightArrow.className = 'rightArrows'; //giving the arrow a class
        container.appendChild(rightArrow);//appending that arrow to the container
   
    TweenMax.fromTo(rightArrow, 5, //TweenMax means it is animating my variable rightArrow at the total time it takes to do the animatiion
        {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {rightArrow.remove()}, onUpdate:update}); //animating from -200px above the screen and then once it reaches the page it goes down 1000px. onComplete tell me when the animation is doen and then removes that arrow from the screen.
        function complete() {
        }

        function update() {
        }
    }

    function spawnUpArrow() {
        let container = document.getElementById("container"); //created a new element for container
        let upArrow = document.createElement("img"); //creating a new element imgage
        upArrow.setAttribute("src", "images/arrowup.svg") //setting the image to the arrow
        upArrow.className = 'upArrows'; //giving the arrow a class
        container.appendChild(upArrow); //appending that arrow to the container

    TweenMax.fromTo(upArrow, 5, //TweenMax means it is animating my variable rightArrow at the total time it takes to do the animatiion
        {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {upArrow.remove()}, onUpdate:update}); //animating from -200px above the screen and then once it reaches the page it goes down 1000px. onComplete tell me when the animation is doen and then removes that arrow from the screen.
        function complete() {
        }
        function update() {
        }
    }

    function spawnLeftArrow() {
        let container = document.getElementById("container"); //created a new element for container
        let leftArrow = document.createElement("img"); //creating a new element imgage
        leftArrow.setAttribute("src", "images/arrowleft.svg") //setting the image to the arrow
        leftArrow.className = 'leftArrows'; //giving the arrow a class
        container.appendChild(leftArrow); //appending that arrow to the container
        
        TweenMax.fromTo(leftArrow, 5, //TweenMax means it is animating my variable rightArrow at the total time it takes to do the animatiion
            {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {leftArrow.remove()}, onUpdate:update}); //animating from -200px above the screen and then once it reaches the page it goes down 1000px. onComplete tell me when the animation is doen and then removes that arrow from the screen.
        
            function complete() {
            }
            function update() {
            }
        }

        function player2RightArrow() { 
            let container = document.getElementById("container"); //created a new element for container
            let p2RightArrow = document.createElement("img"); //creating a new element imgage
            p2RightArrow.setAttribute("src", "images2/arrowright.svg"); //setting the image to the arrow
            p2RightArrow.className = 'p2RightArrows'; //giving the arrow a class
            container.appendChild(p2RightArrow);//appending that arrow to the container
            
        TweenMax.fromTo(p2RightArrow, 5, //TweenMax means it is animating my variable rightArrow at the total time it takes to do the animatiion
            {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {p2RightArrow.remove()}, onUpdate:update}); //animating from -200px above the screen and then once it reaches the page it goes down 1000px. onComplete tell me when the animation is doen and then removes that arrow from the screen.
        
            function complete() {
            }
    
            function update() {
            }
        }
    
        function player2UpArrow() { 
            let container = document.getElementById("container"); //created a new element for container
            let p2UpArrow = document.createElement("img"); //creating a new element imgage
            p2UpArrow.setAttribute("src", "images2/arrowup.svg"); //setting the image to the arrow
            p2UpArrow.className = 'p2UpArrows'; //giving the arrow a class
            container.appendChild(p2UpArrow); //appending that arrow to the container
        
        TweenMax.fromTo(p2UpArrow, 5, //TweenMax means it is animating my variable rightArrow at the total time it takes to do the animatiion
            {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {p2UpArrow.remove()}, onUpdate:update}); //animating from -200px above the screen and then once it reaches the page it goes down 1000px. onComplete tell me when the animation is doen and then removes that arrow from the screen.
            function complete() {
            }
            function update() {
            }
        }
    
        function player2LeftArrow() {
            let container = document.getElementById("container"); //created a new element for container
            let p2LeftArrow = document.createElement("img"); //creating a new element imgage
            p2LeftArrow.setAttribute("src", "images2/arrowleft.svg"); //setting the image to the arrow
            p2LeftArrow.className = 'p2LeftArrows'; //giving the arrow a class
            container.appendChild(p2LeftArrow); //appending that arrow to the container
            
            TweenMax.fromTo(p2LeftArrow, 5, //TweenMax means it is animating my variable rightArrow at the total time it takes to do the animatiion
                {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {p2LeftArrow.remove()}, onUpdate:update}); //animating from -200px above the screen and then once it reaches the page it goes down 1000px. onComplete tell me when the animation is doen and then removes that arrow from the screen.
            
                function complete() {
                }
                function update() {
                }
            }
// setting intervals bewteen arrow drops.
//if gamestarted is false then stop that interval
//gives us a random number
//if the random number is 1 then drop a right arrow and player 2 left arrow
//if the random number is 2 then drop a up arrow and player2 right arrow
//if the random number is 3 then drop a left arrow and player 2 up arrow
//if 1-3 is selected then there will be a break between when the arrows are dropped. There is a 50% chance that no arrows will be dropped.
    var heartBeat = setInterval(function(){ 
        if(!gameStarted) { clearInterval(heartBeat)} 
        var random = getRandom()
        switch(random){ 
            case 1: 
                spawnRightArrow()
                player2LeftArrow()
                break
            case 2: 
                spawnUpArrow()
                player2RightArrow()
                break
            case 3: 
                spawnLeftArrow()
                player2UpArrow()
                break
            default: 
                break
        }
    }, 800)


    function getRandom() { //get a random number to cycle through the arrows to randomize the drop.
        var number = Math.floor(Math.random() * ((6-1)+1) + 1);
        return number;
    }

  
    
   
}


