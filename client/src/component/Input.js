import React from "react"
import "./input.css"


export const Input = (props) =>{
    return(
        <div className="input-container">
            <input className="input-user" onChange={(e)=>{props.userName(e.target.value)}} type="text" id="user" name="user" placeholder="Your Name" />
            <input className="input" onChange={(e)=>{props.userMessage(e.target.value)}} type="text" id="message" name="message" placeholder="Say Something..." />
        </div>
    )
}