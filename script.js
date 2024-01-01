const choices = document.querySelectorAll(".choice")

const player = document.querySelector(".user")
const comp = document.querySelector(".comp")

const winner = document.querySelector("#winner")


let user_score = 0 ;
let comp_score = 0 ;

const drawed = () =>{
console.log("draw");
winner.classList="draw";
winner.innerHTML="Game Drawed"
}



const comp_choice = () =>{
    const op = ["rock" , "paper" , "scissor"]
    let rand = Math.floor(Math.random()*3)
    return op[rand];
}

const whowin = (win) =>{
    if(win){
        winner.classList="win";
        winner.innerHTML="You Win The Game"
        user_score++
        player.innerHTML=user_score;
    }else{
        winner.classList="lose";
        winner.innerHTML="You Lose The Game"
        comp_score++;
        comp.innerHTML=comp_score;
    }
}

const play = (option) => {
    const pc = comp_choice();    

    if(option == pc){
        drawed();
    }else{
        let win = true;
        if(option==="rock"){
            win = pc==="paper"?false:true;
        }else if(option === "paper"){
            win = pc==="scissor"?false:true;
    }else{
        win = pc==="rock"?false:true;
    }

    whowin(win);
    }
    
}

choices.forEach((choise) =>{
    choise.addEventListener("click" , () => {
    let option = choise.getAttribute("id")
     play(option);
    })
})

