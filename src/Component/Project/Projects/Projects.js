import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Project from '../Project';

function Projects() {
   let [projectData,updateProject]=useState([]);
   let [count,updateCount]=useState(1);

   function counter(){
      updateCount(count+1);
   }

   function projectDetails(params){
      updateProject([...projectData,params])
   }
   function showProject(){
      console.log(projectData)
   }
   return (
      <div>
         {[...Array(count)].map((_,index)=>{
            return <Project getData={projectDetails} key={index}></Project>
         })}
         <button onClick={counter}>Add</button>
         <button onClick={showProject}><Link to='/objective'>Save and proceed</Link></button>
      </div>
   )
}

export default Projects
