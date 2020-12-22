import {  useState, useContext } from "react";
import "./MessageBox.css"
import UpdateMessage from "../helpers/UpdateMessage"
import axios from "axios"
import FetchData from "../helpers/FetchData"
import {RenderContext} from "../App"


export const MessageBox = ({item}) =>{
    const { render} = useContext(RenderContext)
    const [text, setText] = useState(item.message) 
    const [active, setActive]= useState(true)


    const activated = () => setActive(s => !s)
    const textUpdated = (value) => setText(value)
    
   const deleteMessage = () =>{
    FetchData(`http://localhost:8000/api/delete/${item._id}`)
    render()
   }

   const update = () =>{
    UpdateMessage(item, text)
    activated()
    render()
   }

    return(
        <div>
            {active 
                ? 
                <div>
                    <div className="message-box">
                        <p className="message">{item.message}</p>
                    </div>
                    <div className="message-box-button-container">
                        <button className="update-btn" onClick = {activated}>Update</button>
                        <button className="update-btn" type="submit" onClick={deleteMessage}>Delete</button>
                    </div>
                </div>
                : 
                <div>
                    <input onChange={(e)=> textUpdated(e.target.value)} className="message-box" value={text} />
                    <button className="update-btn active" type="submit" onClick={update}>Update Message</button>
                    <button className="update-btn active" type="submit" onClick={activated}>X</button>
                </div>
            } 
        </div>
    )
}