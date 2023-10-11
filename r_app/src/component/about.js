import React from "react";
import oswin from "./images/oswin.jpg"
import shriya from "./images/shriya.jpg"
import swaraj from "./images/swaraj.jpg"
 export default function About(){
    return(
        <>
  
    <div className="dev container">
        <div className="developers">
            <div className="developer">
                <img className="imgs" src={oswin} alt="Developer 1"/>
                <h3>Developer 1</h3>
                <p>Oswin Alex</p>
                <a href="https://github.com/Alexoswin">Github</a>
                <p> oswinalex1@gmail.com</p>
                
                
            </div>
            <div className="developer">
                <img className="imgs" src={shriya} alt="Developer 2"/>
                <h3>Developer 2</h3>
                <p>Shriya Thakur</p>
                
                
            </div>
            <div className="developer">
                <img className="imgs" src={swaraj} alt="Developer 3"/>
                <h3>Developer 3</h3>
                <p>Swaraj Dhumal</p>
                <p>    </p>
               
                
            </div>
        </div>
    </div>
        </>
    )
 }