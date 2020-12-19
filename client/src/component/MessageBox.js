import {  useState } from "react";
import "./MessageBox.css"


export const MessageBox = ({item}) =>{
    const [text, setText] = useState(item.message) 

    const [active, setActive]= useState(true)
    const Updated = () => setActive(s => !s)
    const textUpdated = (value) => setText(value) 

    return(
        <div>
            {active 
                ? 
                <div>
                    <div className="message-box">
                        <p className="message">{item.message}</p>
                    </div>
                    <div className="message-box-button-container">
                        <button className="update-btn" onClick = {Updated}>Update</button>
                        <button className="update-btn" type="submit">Delete</button>
                    </div>
                </div>
                : 
                <div>
                    <form method="POST" action="http://localhost:8000/api/update">
                        <input onChange={(e)=> textUpdated(e.target.value)} className="message-box" value={text} />
                        <button className="update-btn active" type="submit">Update Message</button>
                        <button className="update-btn active" onClick={Updated}>X</button>
                    </form>
                </div>
            } 
        </div>
    )
}