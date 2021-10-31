import React from 'react'
import {Link} from 'react-router-dom';

function Basicinfo() {
   return (
      <div>
         <h2>Basic Infomation</h2>
         <input type='text' placeholder='fname'></input>
         <input type='text' placeholder='lname'></input>
         <input type='text' placeholder='fname'></input>
         <input type='date' placeholder=''></input>
         <button><Link to='/workexp'> Save and proceed</Link></button>
      </div>
   )
}

export default Basicinfo
