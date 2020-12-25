import { useState, createContext } from 'react';
import './App.css';
import {Input, Button, CommentsArea} from "./component"
import axios from "axios"

export const RenderContext = createContext()

function App() {
  const [userName,setUserName] = useState()
  const [message, setUserMessage] = useState()
  const [rendered, setRender] = useState(false)

  const render = () => setRender(s =>!s)

  const send = () =>{
     axios.post("http://localhost:8000/api",{
        user: userName,
        message: message
    })
    render()
  }
  return (
    <RenderContext.Provider value={{render, rendered}}>
      <div className="App">
        <CommentsArea />
        <div className="text-area">
            <Input userName = {(name) => setUserName(name)} userMessage={(message)=>setUserMessage(message)} />
            <Button onClick={send} />
        </div>
      </div>
    </RenderContext.Provider>
  );
}

export default App;
