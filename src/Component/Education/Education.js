import React,{Component} from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom';
class Education extends Component {

   constructor(props){
      super(props);
      this.state={
         eduDetails:{},
      };
   }
   
   execute = (e) =>{
      this.setState({
         eduDetails:{
            ...this.state.eduDetails,
            [e.target.name]:e.target.value
         }
      })
   }

   showStatus = (e)=>{
      const key=Object.keys(this.state.eduDetails);
      console.log(key)
     
   }
   render(){
      return(
         <div>
            <div>
            <h1>10th </h1>
            <input type='text' name='schoolname' placeholder='school name'  onChange={this.execute}></input>
            <input type='text' name='marks' placeholder='marks obtains in number' onChange={this.execute}></input>
         </div>
         <div>
            <h1>12th </h1>
            <input type='text' placeholder='college name' name='collegename'  onChange={this.execute}></input>
            <input type='text' placeholder='marks obtains in number' name='marksobtained'   onChange={this.execute}></input>
         </div>
         <div>
            <h1>degree</h1>
            <input type='text' placeholder='college name' name='degname'  onChange={this.execute}></input>
            <input type='text' placeholder='marks obtains in number' name='degmarks'  onChange={this.execute}></input>
         </div>
         <button onClick={this.showStatus}><Link to='/skills'>show</Link></button>
      </div>
      )
   }
}
 
export default Education
