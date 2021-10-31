import React,{useState} from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';

function WorkExp(props) {
   const [workExp,updateWork]=useState({})
   const [companyName,updateCname]=useState('');
   const [expInShort,updateExp]=useState('');

   function companyTitle(e){
      updateCname(e.target.value);
      updateWork({...workExp,companyName:e.target.value})
   }

   function expShort(e){
      updateExp(e.target.value);
      updateWork({...workExp,expInShort:e.target.value})
   }
   function displayText(){
      console.log(workExp);
      props.parentCallBack(workExp);
   }
   return (
      <div>
         <Router>
            <h1>work Exp</h1>
            <input type='text' placeholder='company name' onInput={(e)=>companyTitle(e)} value={companyName}></input>
            <input type='text' placeholder='exp in short' onInput={(e)=>expShort(e)} value={expInShort}></input>
            <span>make sure to save after flling details</span>
            <button onClick={displayText}>click</button>
         </Router>
         
      </div>
   )
}

export default WorkExp
