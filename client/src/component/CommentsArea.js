import { useContext, useEffect, useState } from "react";
import FetchData from "../helpers/FetchData"
import "./commentArea.css"
import {MessageBox} from "./MessageBox"
import {RenderContext} from "../App"

export const CommentsArea = () =>{
    const {rendered} = useContext(RenderContext)
    const [data, setData] = useState()
    // const [active, setActive]= useState(true)
    // const [text, setText] = useState() 

    const fetch = async () =>{
        await FetchData("http://localhost:8000/api").then((data)=>{
            setData(data)
    })
    }

    useEffect(()=>{
        fetch()
    }, [rendered])

    // const Updated = () => setActive(s => !s)
    // const textUpdated = (value) => setText(value) 

    return(
        <>
            <p className="comments">Comments: </p>
            <div className="comments-container">    
                {data?.map((item, i)=>{
                    return(
                        <div className="message-container">
                            <div className="avatar-container" style={{backgroundColor:`#000${Math.floor(Math.random()*1000)}`}}>
                                <p className="avatar">{item.user[0].toUpperCase()}</p>
                            </div>
                            <MessageBox item={item} />
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}