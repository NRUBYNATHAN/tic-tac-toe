//import app.css
import "./App.css";
//import usestate
import {useState} from "react";
//import game.jsx
import { Game } from "./Game";
//import shower
import useWindowSize from 'react-use/lib/useWindowSize';
//import confetti
import Confetti from 'react-confetti';
//import button
import Button from '@mui/material/Button';



function App(){
  const { width, height } = useWindowSize();
  const [arr,setArr]=useState(Array(9).fill(null));
  
  const[isXTurn,setisXTurn]=useState(true) ;

  const HandClick=(index)=>{
    console.log(index);
    if(!win && arr[index]===null){
      const arrcopy=[...arr];
      arrcopy[index]=isXTurn ? "X" : "O"
      setArr(arrcopy);
      setisXTurn(!isXTurn)
    }}

  const WinningState=(arr)=>{
    const line=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [0,4,8],
    ];

    for(var i = 0;i<line.length;i++){
      const [a,b,c]=line[i]
      if(arr[a]!==null && arr[a]===arr[b] && arr[b]===arr[c]){
        console.log("winner",arr[a])
        return arr[a]
      }
     }
    return null
  };

  const restart=()=>{
    setArr(Array(9).fill(null));
    setisXTurn(true);
  }

const win=WinningState(arr)
      return(
           <div className="total" >
             {win ?  <Confetti  width={width} height={height} /> :null}
              <h1>TIC-TAC-TOE</h1>
             <div className="arr">
               {arr.map((val,index) =><Game  val={val} onPlayer={()=>HandClick(index)}/>)}
             </div>
             <Button onClick={restart} variant="contained">Restart</Button>
             {win ? <h1>the winner is: {win}</h1> : null }

           </div>
);
}


export default App;