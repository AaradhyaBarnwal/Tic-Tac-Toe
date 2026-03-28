let boxTag = document.querySelectorAll(".box");
let resetBtn = document.querySelector('.Reset');
let winnerTag = document.querySelector('.winner');
let conTag = document.querySelector(".con");


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
    }else{
        box.innerText='O';
    //    box.innerHTML=`<h1>O</h1>`;
        turnO = true;
    }
    box.disabled = true;

    winner();

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
                        winnerTag.innerHTML=`<h2>${pos1val} player<h2>You won the game.</h2>
                        <h2>Congratulations</h2>
                          <img src="assets/cat.png" class="cats" alt=""> </h2>`
                        winnerTag.style.display="block";

                    }else{
                                     
                                      }
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
}

resetBtn.addEventListener("click",resetGame)