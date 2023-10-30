import React, { useState } from 'react'

export default function Account() {
    
     let [name,setname] = useState(localStorage.getItem("name"))
     let [email,setemail] = useState(localStorage.getItem("email"))
     let logout =()=>{
          console.log("logout")
          localStorage.clear('name')
          localStorage.clear('email')
          setname("null")
          setemail("null")
          alert("sucessfull logout")
          localStorage.setItem("login", "Login")
      
          
     }
     
  
  return (
  
       <>
       
       <div id="abox">
       <div className='userimg'>
        </div>

        <div className="details">
          
         <div  className='Id'>name:{name}</div>
         <div className='Id'>email:{email}</div>
         <button type="button" onClick={logout} id="lbtn" class="btn btn-success">log-out</button>
        </div>

       </div>
       </>
  )}
