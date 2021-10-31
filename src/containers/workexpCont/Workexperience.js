import React,{useState}  from "react";
import WorkExp from "./../../Component/workExp/WorkExp";
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom';

export default function Workexperience() {

   const [arr,updateArr]=useState(0);
   const [workExpArr,updateExp]=useState([]);
 
   
   function increment(){
     updateArr(arr+1);
   }
   
   function execute(params){
     updateExp([...workExpArr,params])
   }
 
   function showData(){
     console.log(workExpArr)
   }
   return (
         <div>
           <button onClick={increment}>Add</button>
      {[...Array(arr)].map((_,index)=>{
        return <WorkExp parentCallBack={execute} key={index}></WorkExp>
      })}
      <button onClick={showData}><Link to='/education'>Show</Link></button>
      </div>
      
   )
}

