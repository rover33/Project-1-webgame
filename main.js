function spawnArrows() {
    console.log("HEYYYY");

} 

spawnArrows()

let container = document.getElementById("container");
let rightArrow = document.createElement("img")
rightArrow.setAttribute("src", "images/arrowright.svg")
rightArrow.height = "75";
container.appendChild(rightArrow);