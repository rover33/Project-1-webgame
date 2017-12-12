function spawnArrows() {
    let container = document.getElementById("container");
    let rightArrow = document.createElement("img");
    rightArrow.setAttribute("src", "images/arrowright.svg");
    rightArrow.className = 'arrows';
    container.appendChild(rightArrow);
    
   TweenMax.fromTo(rightArrow, 5, 
    {css:{top:'-200px'}},{css:{top:'1000px'}});
   
}

spawnArrows()



