import { useEffect, useState } from "react";
import FetchData from "../helpers/FetchData"
import "./commentArea.css"

export const CommentsArea = () =>{
    const [data, setData] = useState()
    const [active, setActive]= useState(true)
    const [text, setText] = useState() 

    const fetch = async () =>{
        await FetchData("http://localhost:8000/api").then((data)=>{
            setData(data)
    })
    }

    useEffect(()=>{
        fetch()
    }, [])

    const Updated = () => setActive(s => !s)
    const textUpdated = (value) => setText(value) 

    return(
        <div className="comments-container">    
                <p className="comments">Comments: </p>
            {data?.map((item, i)=>{
                return(
                    <div className="message-container">
                        <div className="avatar-container" style={{backgroundColor:`#00${Math.ceil(Math.random()*10000)}`}}>
                            <p className="avatar">{item.user[0].toUpperCase()}</p>
                        </div>

                        {active 
                            ? 
                            <div className="message-box">
                                <p className="message">{item.message}</p>
                                <button onClick= {Updated}>update</button>
                            </div>
                            : 
                            <div>
                            <form method="POST" action="http://localhost:8000/api/update">
                                <input key={i} onChange={(x)=> textUpdated(x.target.value)} className="message-box" value={text ? text : item.message} />
                                <button type="submit">update</button>
                            </form>
                            </div>
                        } 
                    </div>
                )
            })
            }
        </div>
    )
}