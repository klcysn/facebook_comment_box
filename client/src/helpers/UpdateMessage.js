import axios from "axios"


const UpdateMessage = (item, text) =>{
    
   return (axios.post(`http://localhost:8000/api/update/`, {
        id: item._id,
        user: item.user,
        message: text
    }))
}

export default UpdateMessage;