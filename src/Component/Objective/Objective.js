import React,{useState} from 'react'

function Objective() {

   let [objective,updateObjective]=useState({});
   function handler(e){
      updateObjective({
         object:e.target.value
      })
   }

   function showObjective(){
      console.log(objective)
   }
   return (
      <div>
         <input type='text' onChange={(e)=>handler(e)}></input>
         <button onClick={showObjective}>show</button>
      </div>
   )
}

export default Objective
