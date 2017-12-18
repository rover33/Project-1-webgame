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



// creating a new variable that is contains the class of arrows
// variable for players arrows
//key presses for each arrow
//runs through the array of arrows
//giving the array position to a new variable
//saying when the arrow is basically in the box
//player score +10 each time you hit it correctly
function startGame(){
    window.onkeydown = function(run){ 
        var leftArrows = document.getElementsByClassName('leftArrows')
        var upArrows = document.getElementsByClassName('upArrows') 
        var rightArrows = document.getElementsByClassName('rightArrows')
        var p2RightArrows = document.getElementsByClassName('p2RightArrows')
        var p2UpArrows = document.getElementsByClassName('p2UpArrows') 
        var p2LeftArrows = document.getElementsByClassName('p2LeftArrows')
            if(run.keyCode == 65){ 
                if (leftArrows){   
                    for (var i = 0; i < leftArrows.length; i++) {
                        console.log(leftArrows[i])
                        var arrowPositionLeft = leftArrows[i].getBoundingClientRect(); 
                        console.log(arrowPositionLeft)
                        console.log(rect.top)
                        if(arrowPositionLeft.top < (rect.top + 25) && arrowPositionLeft.top > (rect.top - 25)){ 
                            player1Score += 10; 
                            player1ScoreDiv.innerHTML = player1Score;
                    } 
                }
            }
        } else if(run.keyCode == 87){ 
            if(upArrows){ 
                for (var i = 0; i < upArrows.length; i++) {
                    console.log(upArrows[i])
                    var arrowPositionUp = upArrows[i].getBoundingClientRect();
                    console.log(arrowPositionUp)
                    console.log(square.top)
                    if(arrowPositionUp.top < (square.top + 25) && arrowPositionUp.top > (square.top - 25)){ 
                        player1Score += 10; 
                        player1ScoreDiv.innerHTML = player1Score;
                    }
                } 
            }
        } else if(run.keyCode == 68){ 
            if(rightArrows){ 
                for (var i = 0; i < rightArrows.length; i++) {
                console.log(rightArrows[i])
                var arrowPositionRight = rightArrows[i].getBoundingClientRect();
                console.log(arrowPositionRight)
                console.log(triangle.top)
                if(arrowPositionRight.top < (triangle.top + 25) && arrowPositionRight.top > (triangle.top - 25)){ 
                    player1Score += 10; 
                    player1ScoreDiv.innerHTML = player1Score;
                    }
                } 
            }
        } else if(run.keyCode == 39){ 
            if(p2RightArrows){ 
                for (var i = 0; i < p2RightArrows.length; i++) {
                console.log(p2RightArrows[i])
                var p2Right = p2RightArrows[i].getBoundingClientRect();
                console.log(p2Right)
                console.log(pentagon.top)
                if(p2Right.top < (pentagon.top + 25) && p2Right.top > (pentagon.top - 25)){ 
                    player2Score += 10; 
                    player2ScoreDiv.innerHTML = player2Score;
                    }
                }
            }        

        } else if(run.keyCode == 38){ 
            if(p2UpArrows){ 
                for (var i = 0; i < p2UpArrows.length; i++) {
                console.log(p2UpArrows[i])
                var p2Up = p2UpArrows[i].getBoundingClientRect();
                console.log(p2Up)
                console.log(trap.top)
                if(p2Up.top < (trap.top + 25) && p2Up.top > (trap.top - 25)){ 
                    player2Score += 10; 
                    player2ScoreDiv.innerHTML = player2Score;
                    }
                }
            }
        }else if(run.keyCode == 37){ 
            if(p2LeftArrows){ 
                for (var i = 0; i < p2LeftArrows.length; i++) {
                console.log(p2LeftArrows[i])
                var p2Left = p2LeftArrows[i].getBoundingClientRect();
                console.log(p2Up)
                console.log(hex.top)
                if(p2Left.top < (hex.top + 25) && p2Left.top > (hex.top - 25)){ 
                player2Score += 10; 
                player2ScoreDiv.innerHTML = player2Score;
                }
            }
        }
    }
}    
//created a new element for container
//creating a new element imgage
//setting the image to the arrow
//giving the arrow a class
//appending that arrow to the container
//TweenMax means it is animating my variable rightArrow at the total time it takes to do the animatiion
//animating from -200px above the screen and then once it reaches the page it goes down 1000px. onComplete tell me when the animation is doen and then removes that arrow from the screen.

    function spawnRightArrow() {
        let container = document.getElementById("container");
        let rightArrow = document.createElement("img");
        rightArrow.setAttribute("src", "images/arrowright.svg");
        rightArrow.className = 'rightArrows';
        container.appendChild(rightArrow);
    TweenMax.fromTo(rightArrow, 5, 
        {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {rightArrow.remove()}, onUpdate:update}); 

    
        function complete() {
        }

        function update() {
        }
    }

    function spawnUpArrow() {
    let container = document.getElementById("container");
    upArrow.setAttribute("src", "images/arrowup.svg")
    upArrow.className = 'upArrows';
    container.appendChild(upArrow);

    TweenMax.fromTo(upArrow, 5, 
        {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {upArrow.remove()}, onUpdate:update}); 
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
        
        TweenMax.fromTo(leftArrow, 5, 
            {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {leftArrow.remove()}, onUpdate:update}); 
        
            function complete() {
            }
            function update() {
            }
        }
        function player2RightArrow() {
            let container = document.getElementById("container");
            let p2RightArrow = document.createElement("img"); 
            p2RightArrow.setAttribute("src", "images2/arrowright.svg");
            p2RightArrow.className = 'p2RightArrows';
            container.appendChild(p2RightArrow);
            
        TweenMax.fromTo(p2RightArrow, 5, 
            {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {p2RightArrow.remove()}, onUpdate:update}); 
        
            function complete() {
            }
    
            function update() {
            }
        }
    
        function player2UpArrow() {
        let container = document.getElementById("container");
        p2UpArrow.setAttribute("src", "images2/arrowup.svg");
        p2UpArrow.className = 'p2UpArrows';
        container.appendChild(p2UpArrow);
        
        TweenMax.fromTo(p2UpArrow, 5, 
            {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {p2UpArrow.remove()}, onUpdate:update}); 
            function complete() {
            }
            function update() {
            }
        }
    
        function player2LeftArrow() {
            let container = document.getElementById("container"); 
            let p2LeftArrow = document.createElement("img");
            p2LeftArrow.setAttribute("src", "images2/arrowleft.svg");
            p2LeftArrow.className = 'p2LeftArrows';
            container.appendChild(p2LeftArrow);
            
            TweenMax.fromTo(p2LeftArrow, 5, 
                {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {p2LeftArrow.remove()}, onUpdate:update}); 
            
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


