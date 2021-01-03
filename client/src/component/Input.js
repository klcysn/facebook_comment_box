import React from "react"
import "./input.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCog, faSmile} from '@fortawesome/free-solid-svg-icons'

export const Input = (props) =>{

    // openSettings = () =>{

    // }

    return(
        <div className="input-container">
            <div className="input">
                <input className="input-user" onChange={(e)=>{props.userName(e.target.value)}} type="text" id="user" name="user" placeholder="Your Name" />
                <input className="input-text" onChange={(e)=>{props.userMessage(e.target.value)}} type="text" id="message" name="message" placeholder="Say Something..." />
                <FontAwesomeIcon icon= {faSmile} className="emoji" size="lg" onClick="" />
                <FontAwesomeIcon icon= {faCog} className="settings" size="lg" onClick="" />
            </div>
           
        </div>
    )
}