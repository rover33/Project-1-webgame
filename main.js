function spawnArrows() {
    let container = document.getElementById("container");
    let rightArrow = document.createElement("img");
    rightArrow.setAttribute("src", "images/arrowright.svg");
    rightArrow.className = 'arrows';
    container.appendChild(rightArrow);
    
   TweenMax.fromTo(rightArrow, 5, 
    {css:{top:'-200px'}},{css:{top:'1000px'}, onComplete:function() {rightArrow.remove()}, onUpdate:update});

   
    function complete() {
    }

    function update() {
    }
}

spawnArrows()

var x = getRandom()
console.log(x)

function getRandom() {
    Math.floor(Math.random() * ((10-2)+1) + 2);
    return Math.floor(Math.random() * ((10-2)+1) + 2);
}



