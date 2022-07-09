//pseudoCode
//Make an alert and prompt to add name of bug and to give rules of game. 

//Event Listeners-Make start button that starts the game/timer? 

//Create buttons to keep bug alive, hunger, play, sleep(lights on/off) with a 1-10 scale.  There will also be metrics keeping track of hunger, sleepiness, play/boredom, and age. 

//Create object with functions/methods with if/else if statements?

//Morphing will require bug to stay alive for how long?  Bug will die if hunger, play, and sleepiness hits 0.

//Create morphed bug? 2 or 3 stages with setAge function inside game object?

//What will you use to keep track of 120sec of life. setInterval() method calls a function at specified intervals(in milliseconds). The setInterval()method continues calling the function until the clearInterval() is called, or the window is closed. 1sec = 1000milliseconds.

//Game ends when bug dies. Alert bug has died.


//Parent Class - instantiate from parent class and make methods

class Bug{
    constructor(name, hunger, sleepiness, boredom, age){
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom;
        this.age = age;
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
        const timer = setInterval(() =>{
        hungerScore.innerText = bug.hunger
        bug.hunger --
        if(bug.hunger === 0){
            alert('Your bug died of starvation!')
            document.querySelector('.bug').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCc7Ktq4fSdl0OIrtoT30h7NAgVWWPhzMz8LXXSBI2TU5NDwY1Qr8eg0Obh-eaCdMSVU&usqp=CAU"
            clearInterval(timer)  //How to stop others stop running when one hits 0?
        }
    }, 1000)
    hungerButton.addEventListener('click', () =>{ //put eventlistener outside of setInterval function so it starts counting without having to click the button.
        bug.feed();
        //console.log(bug.hunger)
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1627655045499-9b1cdc0f25a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
})
},


setSleepiness(){
        const timer = setInterval(() =>{
       sleepinessScore.innerText = bug.sleepiness
        bug.sleepiness --
        if(bug.sleepiness === 0){
            alert('Your bug died from sleepiness!')
            clearInterval(timer)
          } 
    }, 1000) 
    sleepinessButton.addEventListener('click', () =>{
        bug.sleep();
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRNqaYiwPCb5rWeCmsOuEDCh7NL6M2j7N40PLeNU4L_dOmpHk4Y6Qg5wSrZCajFIrbEU&usqp=CAU')"   
})
},

setPlay(){
        const timer = setInterval(() =>{
        boredomScore.innerText = bug.boredom
        bug.boredom --
        if(bug.boredom === 0){
            alert('Your bug died from boredom!')
            document.querySelector('.bug').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzCc7Ktq4fSdl0OIrtoT30h7NAgVWWPhzMz8LXXSBI2TU5NDwY1Qr8eg0Obh-eaCdMSVU&usqp=CAU"
            clearInterval(timer)
            }
    }, 1000)
    playButton.addEventListener('click', () =>{
        bug.play();
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1627655045499-9b1cdc0f25a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
   
})
},

setAgeUp(){
const timer = setInterval(() =>{
        ageIncrease.innerText = bug.age
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
console.log(game)

//Link your functions together so they can all be called at once within your object with the startButton.

startButton.addEventListener('click', (event) =>{
    this.name = prompt('Welcome to Bugs Life! To keep your bug alive, click the buttons to feed, play or rest your little friend. The numbers will go down one point every few seconds.  If any of the buttons reaches 0 your bug will die. So the more you interact with your bug the greater the chance you will keep it alive! Some features of this game include your bug morphing when you reach a certain age. To proceed please type a name for your bug below and click ok.')
    alert(`Hello, ${this.name}!`)
    event.target.disabled = true; //turn off start button
    game.startGame()
})












