let boxTag = document.querySelectorAll(".box");
let resetBtn = document.querySelector('.Reset');

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
        box.innerText = 'O';
        turnO = false;
    }else{
        box.innerText = 'X';
        turnO = true;
    }
    box.disabled = true;

    winner();

    })
}) ;



console.log(1);
