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



setInterval(function(){
    setTimeout(function() {
        spawnRightArrow();
    }, getRandom()*1000)
    setTimeout(function() {
        spawnUpArrow();
    }, getRandom()*1000)
    setTimeout(function() {
        spawnLeftArrow();
    }, getRandom()*1000)
}, 1000)


function getRandom() {
    var number = Math.floor(Math.random() * ((20-2)+1) + 2);
    console.log(number)
    return number;
}



