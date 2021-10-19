let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
let firstTurn = document.createTextNode(nextPlayer);
document.getElementById('next-lbl').appendChild(firstTurn);

// use the value stored in the nextPlayer variable to indicate who the next player is
let playerTurn = document.querySelector('b');
playerTurn.innerText = 'it is the turn of player: ';

//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   for(let i = 0; i < 9; i++){      // go through all 9 cells of the table
      let cellNumber = 'c' + (i + 1);  // to get the cell number

      var newBtn = document.createElement('button');    // to create the buttons in cells
      newBtn.setAttribute('id', 'b' + i);
      document.getElementById(cellNumber).appendChild(newBtn).innerHTML = ' [     ] ';  // to add the square brackets
    } 
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let buttons = document.querySelectorAll('button');
for (let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click', (event) => { takeCell(event)});   // event listener
}

var btnCounter = 0; 
// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    let clicked = event.target.id;
    document.getElementById(clicked).innerHTML = nextPlayer;
    document.getElementById(clicked).disabled = true;
 
    // to alternate which player's turn it is
    if(nextPlayer == 'X'){
        nextPlayer = 'O';
    } else {
        nextPlayer = 'X';
    }

    firstTurn.remove();
    firstTurn = document.createTextNode(nextPlayer);
    document.getElementById('next-lbl').appendChild(firstTurn);

    btnCounter++;

    // Check if the game is over
    if (isGameOver())
    {   
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let label = document.getElementById('game-over-lbl');
        let h1 = document.createElement('h1');   // create a new header
        h1.innerText = 'Game Over!';
        label.appendChild(h1);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let count = false;
    if(btnCounter == 9){
        count = true;
    } 
    return count;
   
}
