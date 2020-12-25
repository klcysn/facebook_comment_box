import React from "react"
import "./button.css"


export const Button = (props) =>{
    
    return(
        <div className="button-container">
            <button onClick={props.onClick} className="submit-button" type="submit">Submit</button>
        </div>
    )
}