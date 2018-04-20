# snackTime

[Live Version]()
![Imgur](https://i.imgur.com/yXWoyPl.gif)


# Description
SnackTime is an original game created by me in which a player controls a character that can change into either a dog, cat, monkey, or rabbit.  The goal of this game is to catch falling food items with the correct animal.  If the player fails to catch the food before it hits the floor or if they catch certain foods with the wrong animal, then they lose a life.  Once they run out of lives, the game is over.

[Wiki design documents](https://github.com/kevinyee1993/genius/wiki)


# Features
### Key Listeners
The player is able to control the animal character using the left and right cursor keys.  They can start/reset the game using the space key.  They can also mute/unmute the game by pressing "M".
### Animated Sprites
The animal sprites are animated.  Also, depending on what direction the player moves, the animal faces that way.
### Scoring System
Players increase their score when they successfully catch food.  
### Sound Effects
There are sound effects for when the player successfully catches food, when the player misses food, when the player ends the game with a bad score, and when the player ends the game with a good score. All sounds were taken from [zapsplat.com](https://www.zapsplat.com/).

### Mute Option
A game with sound effects that doesn't have a mute button is annoying.  By pressing "M", the player can mute all sound on the game.  When muted, there is text on the bottom left corner of the canvas to indicate that the game is muted.

### Game Over Screen
After the player loses, the animation frames are canceled and the player is shown a game over message.  This displays the player's score as well as a customized message and image depending on what score the player ended up with.



# Technologies
### Javascript
This game was primarily made with basic Javascript.  All the content within the canvas was created using Javascript.  

### HTML5/CSS3
CSS3 was used to style the rest of the website outside of the canvas.  I went with a more minimalistic design which I thought looked cleaner.  The colors chosen complemented the aesthetic of the game.  HTML's Canvas was used to draw shapes and text within the canvas. Other than Canvas, I utilized HTML's Image and Audio in order to implement pictures and sound effects. In addition, I used HTML's requestAnimationFrame and cancelAnimationFrame methods to create movement within the canvas.

### Piskel
[Piskel](https://www.piskelapp.com/) was used to create and animate the sprites used for the game.  

### Webpack
Webpack was used to bundle up and export all the files in the program.

# Future Direction
* Hope to add a system where there is a powerup bar that fills as players successfully collect food.  Once the bar is full, they can press a button to activate a mode where they can catch any type of food with any animal for a certain period of time.
* Bombs/poison that drops which would cause players to lose a life if they catch it.  
* Background music
* A level system rather than just increasing the amount of food that drops
* Hearts that drop that players can collect to increase their lives
* Possibly a system where if a player collects a certain amount of fruit in a row, they get an extra life
