import React from 'react'
export default function Account(props) {
  
  return (
  
       <>
       
       <div id="abox">
       <div className='userimg'>
        </div>

        <div className="details">
          
         name:<div className='name'>{props.account_name}</div>
         email:<div className='email'>{props.account_email}</div>
         Address:<div className='address'></div>
        </div>

       </div>
       </>
  )}
