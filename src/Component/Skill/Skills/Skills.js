import React,{Component} from 'react'
import Skill from './../Skill'
import {BrowserRouter as Router,Link} from 'react-router-dom';

class Skills extends Component {

   state={
      count:1,
      skillData:[]
      }

   custom = (params) =>{
      this.setState(()=>{
         return {skillData:[...this.state.skillData,params]}})
      console.log(this.state.skillData)
   }

   updateCount = () =>{
      this.setState({count:this.state.count+1})
   }

   showDetails = () =>{
      console.log(this.state.skillData)
   }

  
   render(){
      return (
         <div>
            {[...Array(this.state.count)].map((_,index)=>{
               return  <Skill  getData={this.custom} key={index}></Skill>
            })}
            <button onClick={this.updateCount}>Add {this.state.count}</button>
            <button onClick={this.showDetails}><Link to='/projects'>Show</Link></button>
         </div>
      )
   }
}

export default Skills
