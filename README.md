# Project-1-webgame

[Work Flow/Trello Board](https://trello.com/b/TUdSicR5/project-board).

![WireFram](https://github.com/rover33/Project-1-webgame/blob/master/Screen%20Shot%202017-12-11%20at%2012.17.58%20PM.png)

### Game Instructions
This game is a head to head matchup. The winner is the person with the highest score after 60 seconds. Players get 10 points for each successful click in the strikezone. To play the players will use the AWD and left, right and up Arrow keys. Player 1 use AWD. A = left, W = up and D = right. Player 2 uses left, right and up arrow keys.


### Approach Taken
For this project I decided to make a version of Dance Dance Revoltuion. I started off by simply getting 1 arrow image to move from the top of the page to the bottom. Then I needed to get that arrow to start off screen and end off screen. Following this I had to create a function and variables to get the position of the arrow when it hit a strike area. I had to do a lot of research on how to find the the strikezone and make it click in the strikezone. I knew I needed a clock and a scorebaord but those came last in the project.

### Obstacles
My biggiest obstacles was using the element.getBoundingRect() in my Javascript. What this function does is get the positon of the top, left, right and bottom of an object. I used this information to get the position of the strike zones and then write a function so that when the arrow passed through and was clicked it would register.

### Unsolved Problems
I had issues with having in a startButton. I am having trouble with this because I am not sure where to put it and what code to move around so everything still works. I also wanted to have a music playlist and have the music change everytime you restarted the game.

### My own special twist
I created my own music for the game. I used ableton to make the song.

### Technologies used
For this project I used Greensock which is an animation platform. It makes the animation a lot more smooth. I had to learn a whole new set of terms to create the animations.

I also used normalize.css which makes the elements rendered more conisistant in the browser.

I also used an Audio tags to get music playing for the game and Video tags to get the looping background.

I made all of this game using HTML, CSS and Javascript with the Greensock CDN and Normalize.css.


### Installation

To install Greensock you can either download to your local computer, or you can use the CDN. Put the CDN right above the ending body tag in your HTML.
[GreenSock](https://greensock.com/)
 <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>    <!-- CDN for Greensock -->
    <script src="main.js"></script>


To install and uss Normalize.css you need to have Node downloaded and NPM install normalize.css inside the project folder you want to use it in. once installed make sure the tag looks like this in your header. 
[Normalize.css](https://necolas.github.io/normalize.css/)
<link rel="stylesheet" href="node_modules/normalize.css/normalize.css">




