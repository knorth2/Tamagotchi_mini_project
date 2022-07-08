//pseudoCode
//Make an alert and prompt to add name of bug and to give rules of game. 

//Event Listeners-Make start button that starts the game/timer?

//Create buttons to keep bug alive, hunger, play, sleep(lights on/off) with a 1-10 scale.  There will also be metrics keeping track of hunger, sleepiness, play/boredom, and age. 

//Create object with functions/methods with if/else if statements?

//Morphing will require bug to stay alive for how long? 120secs? Bug will die if hunger, play, and sleepiness hits 10.

//Create morphed bug? 2 or 3 stages with setAge function inside game object?

//What will you use to keep track of 120sec of life. setInterval() method calls a function at specified intervals(in milliseconds). The setInterval()method continues calling the function until the clearInterval() is called, or the window is closed. 1sec = 1000milliseconds.

//Game ends when bug dies. Alert bug has died.

// Do i need Global variables?
// const startTime = 120;
// let time = startTime;


//Parent Class - instantiate from parent class and make methods

class Character{
    constructor(name, hunger, sleepiness, boredom, age){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
    }
 
}

class Bug extends Character{
    constructor(name, hunger, sleepiness, boredom, age){
        super(name, hunger, sleepiness, boredom, age)
        this.name = '';
        this.hunger = 10;
        this.sleepiness = 10;
        this.boredom = 10;
        this.age = 1;
    }
    feed(){
        this.hunger++
    }
    sleep(){
        this.sleepiness++
    }
    play(){
        this.boredom++
    }

     nameBug(){
        this.name 
    
    }
    
}

//Create instance
const bug = new Bug('', 10, 10, 10, 1)
//   console.log(bug)


 //Create variable using DOM Selections targeting class

let startButton = document.querySelector('.startButton');
let statsButton = document.querySelector('.statsBox')

let hungerButton = document.querySelector('.feedText');
let hungerScore = document.querySelector('.hungerScoreText');

let sleepinessButton = document.querySelector('.sleepText');
let sleepinessScore = document.querySelector('.sleepScoreText')

let playButton = document.querySelector('.playText');
let boredomScore = document.querySelector('.boredomScoreText');

let ageIncrease = document.querySelector('.ageText');


//---Add event listeners to buttons: start, hunger(feed me), sleepiness(nap time), boredom(play time) using variable created above.

const game = {  //created functions around events and put them in an object for easier accessibility. 


setHunger(){
hungerButton.addEventListener('click', () =>{
        bug.feed();
        const timer = setInterval(() =>{
         console.log(hungerScore.innerText = bug.hunger)
        bug.hunger --
        if(bug.hunger === 0){
            alert('Your bug died of starvation!')
            clearInterval(timer)  //How to stop others stop running when one hits 0?
            }
    }, 5000)
})
},

setSleepiness(){
sleepinessButton.addEventListener('click', () =>{
        bug.sleep();
        //document.body.style.backgroundImage = 
        const timer = setInterval(() =>{
        console.log(sleepinessScore.innerText = bug.sleepiness)
        bug.sleepiness --
        if(bug.sleepiness === 0){
            alert('Your bug died from sleepiness!')
            clearInterval(timer)
          } 
    }, 5000)    
})
},

setPlay(){
playButton.addEventListener('click', () =>{
        bug.play();
        const timer = setInterval(() =>{
        console.log(boredomScore.innerText = bug.boredom)
        bug.boredom --
        if(bug.boredom === 0){
            alert('Your bug died from boredom!')
            clearInterval(timer)
            }
    }, 5000)
   
})
},

setAgeUp(){
const timer = setInterval(() =>{
        ageIncrease.innerText = `${bug.age}`
        bug.age++
        if(bug.age == 8){
            alert('your caterpillar is now a chrysalis!')
            document.querySelector('.bug').src = "https://icon2.cleanpng.com/20180604/lbc/kisspng-butterfly-drawing-pupa-coloring-book-5b15945cbeb974.5614540115281408927812.jpg" 
        }
        if(bug.age == 15){
            alert('your chrysalis is now a butterfly!')
            document.querySelector('.bug').src = "https://png.pngitem.com/pimgs/s/129-1291141_happy-new-year-butterfly-hd-png-download.png"
        }
        else if(bug.boredom === 0 || bug.hunger === 0 || bug.sleepiness === 0) //stop age once bug dies
            clearInterval(timer)
}, 2000)
},

//call functions 

startGame(){
this.setHunger()
this.setSleepiness()
this.setPlay()
this.setAgeUp()
 }
}

//Link your functions together so they can all be called at once within your object with the startButton.
startButton.addEventListener('click', (event) =>{
    this.name = prompt('Welcome to Bugs Life! To keep your bug alive, click the buttons to feed, play or rest your little friend. The numbers will go down one point every few seconds.  If any of the buttons reaches 0 your bug will die. So the more you interact with your bug the greater the chance you will keep it alive! Some features of this game include your bug morphing when you reach a certain age. To proceed please type a name for your bug below and click ok.')
    alert(`Hello, ${this.name}!`)
    event.target.disabled = true; //turn off start button
    game.startGame()
})












