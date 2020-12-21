import { useState } from 'react';
import './App.css';
import {Input, Button, CommentsArea} from "./component"
import axios from "axios"

function App() {
  const [userName,setUserName] = useState()
  const [message, setUserMessage] = useState()
  const send = () =>{
     axios.post("http://localhost:8000/api",{
        user: userName,
        message: message
    })
  }
  return (
    <div className="App">
      <CommentsArea />
      <div className="text-area">
          <Input userName = {(name) => setUserName(name)} userMessage={(message)=>setUserMessage(message)} />
          <Button onClick={send} />
      </div>
    </div>
  );
}

export default App;
