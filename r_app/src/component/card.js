import React from 'react'



export default function Card(props) {
  
  return (
    <>
    <div id="forc">
    <div className="card mb-3"  >

            
            <div className="row g-0 ">
              <div  id="cardimage1" style={{ backgroundImage: `url(${props.url})` }}>
              
              </div><br/>
              <div className="col-md-8">
                <div className="card-body">
                  <div id="cardtext"></div>
                  <p className="card-text"> 
                    {props.text} 
              

                  </p>
                  </div>
                </div>
              </div>
            </div>
    <div/> 
    </div>
    </>
  )
}
