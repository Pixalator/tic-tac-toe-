

let play_btn=document.getElementsByClassName("play_btn")
let turn_text=document.getElementsByClassName("turn-text")[0]
//Function to change the turn
var turn="X"
const changeTurn=()=>{
    return turn ==="X" ? "0":"X"
}

//FUnction to check wins

const CheckWin=()=>{
    let boxtext=document.getElementsByClassName("box-text")
    wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    wins.forEach((element)=>{
        if((boxtext[element[0]].innerText===boxtext[element[1]].innerText)&&(boxtext[element[0]].innerText===boxtext[element[2]].innerText)&&(boxtext[element[0]].innerText!=="")){
         let game_status=document.getElementsByClassName("status")[0]
         game_status.innerHTML=  turn +" WON"
        }
    })


}




let boxes=document.getElementsByClassName("box")

Array.from(boxes).forEach(
   (element,index)=>{
     let boxtext=document.getElementsByClassName("box-text")[index]
     console.log(boxtext)
     element.addEventListener("click",()=>{
     if(boxtext.innerText==""){
        console.log("working")
        boxtext.innerText=turn
        CheckWin()
        turn=changeTurn()
        turn_text.innerText="TURN FOR " + turn
    }
    else{
        console.log("Already occupied try another!!")
    }
    
         
     })
        
    }
)








