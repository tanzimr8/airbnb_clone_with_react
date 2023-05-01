import { useState } from "react";

const Message = ()=>{
    const [messages,setMessages] = useState(["1","12"]);
    return (
        <>
        {messages.length === 0 ? 
        <h4>You have all caught up!</h4> :
         <h4>You have {messages.length} unread {messages.length === 1 ? 'message' : 'messages'}</h4>}
        </>
    )
}
export default Message;