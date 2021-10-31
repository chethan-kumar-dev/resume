import React,{useState} from 'react'

function Skill(props) {
   let [data,updateData]=useState({});

   function handler(e){
      updateData({...data,[e.target.name]:e.target.value})
   }

   function sendData(){
      props.getData(data);
   }

   return (
      <div>
         <input type='text' onChange={(e)=>handler(e)} name='skillname'></input>
         <input type='radio' value='begin' onChange={(e)=>handler(e)} name='level'></input><label>beginner</label>
         <input type='radio' value='intermediate' onChange={(e)=>handler(e)} name='level'></input><label>intermeidate</label>
         <input type='radio' value='difficult' onChange={(e)=>handler(e)} name='level'></input><label>difficult</label>
         <button onClick={sendData}>Save</button>
      </div>
   )
}

export default Skill
