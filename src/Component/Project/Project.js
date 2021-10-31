import React,{useState} from 'react'

function Project(props) {

   let [data,updateData]=useState({})
   function saveData(e){
      props.getData(data)
      console.log(data)
   }

   function handler(e){
      updateData({...data,[e.target.name]:e.target.value})
   }

  
   return (
      <div>
         <input type='text' placeholder='Project name' name='projectTitle' onChange={(e)=>handler(e)}>
         </input>
         <input type='text' placeholder='explanation' name='projectExplanation' onChange={(e)=>handler(e)}></input>
         <button onClick={saveData}>Save and show</button>
      </div>
   )
}

export default Project
