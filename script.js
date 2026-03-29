let boxTag = document.querySelectorAll(".box");
let resetBtn = document.querySelector('.Reset');
let winnerTag = document.querySelector('.winner');
let conTag = document.querySelector(".con");
let playerTurnTag = document.querySelector('.abe');
let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxTag.forEach((box)=> {
    box.addEventListener('click', () =>{
        console.log(2);
    if(turnO){
        box.innerText="X";
//         box.innerHTML= `
// <img src="assets/cat.png" class="cats" alt="">
//         `;
        turnO = false;
            chalNa("O");
    }else{
        box.innerText='O';
    //    box.innerHTML=`<h1>O</h1>`;
        turnO = true;
        chalNa('X');
    }
    box.disabled = true;


    winner();
    draw();

    })
}) ;

const winner = () => {
    for(pattern of winPatterns){
        
        

                let pos1val = boxTag[pattern[0]].innerText;
                let pos2val = boxTag[pattern[1]].innerText;
                let pos3val = boxTag[pattern[2]].innerText;
            
                console.log(1);

                if (pos1val !== '' && pos2val !== '' && pos3val !== '') {
               console.log(2);
                 
                    if (pos1val === pos2val && pos2val === pos3val) {
                        console.log(3);
                        winnerTag.innerHTML=`<h2>${pos1val} player<h2>You won the game🌸</h2>
                        <h2>Congratulations</h2>
                          <img src="assets/cat.png" class="cats" alt=""> </h2>`
                        winnerTag.style.display="grid";
        disableAllBoxes();
                        damn();

                    }else {}


                }

            }
}
console.log(1);

const resetGame = () =>{
    turnO = true;

    boxTag.forEach(box =>{
            box.innerText='';
            box.disabled=false;
        
        });
        winnerTag.innerHTML=``;
        winnerTag.style.display='none';
            playerTurnTag.innerHTML=`<h3>X's player turn</h3>`;
        damn();

}

resetBtn.addEventListener("click",resetGame)

function gurl() {
    resetBtn.innerHTML=`<p>Reset</p>`
}

function damn () {
    if ( winnerTag.style.display==="grid") {
    resetBtn.innerHTML=`<p>New Game</p>`;
} else if(winnerTag.style.display==="none") {
    resetBtn.innerHTML=`<p>Reset</p>`;
}

}                       
const draw = () => {

    if (winnerTag.style.display === 'grid') {return;} 

    let allFilled = [...boxTag].every(box => box.innerText != '')

    if (allFilled) {
        winnerTag.innerHTML=`
        <h2>It's a Draw!🤝</h2>
        
        <h2>Try Again</h2>  
        
        `
        ;

        winnerTag.style.display = "grid";
        disableAllBoxes();
        damn();
    }


}

function chalNa(players) {
    playerTurnTag.innerHTML=`<h3>Player ${players}'s turn</h3>`;
}

const disableAllBoxes = () => {
boxTag.forEach(box => box.disabled = true);
};