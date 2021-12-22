import React, {useState, useEffect } from 'react';
import GutterlessList from "./chatList/chatList";  // импорт списка чатов
import Form from "./form/form";
import { AUTHORS } from "./utils/constants";
import {MessageList} from "./messages/messages";
import "./style/style.css";



// список чатов
const chatList = [
    {name: "Комната чата 1", id: 11},
    {name: "Комната чата 2", id: 22},
    {name: "Комната чата 3", id: 33},
]


function App(){
    const [messageList, setMessageList] = useState([]);
    const handleAddMessage = (newMessage) => {
      setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
    };
  
    const handleSubmit = (text) => {
      const newMessage = { text, author: AUTHORS.HUMAN, id: `msg-${Date.now()}` };
      handleAddMessage(newMessage);
    };
  
    useEffect(() => {
      let timeout;
      if (messageList[messageList.length - 1]?.author === AUTHORS.HUMAN) {
        timeout = setTimeout(() => {
          handleAddMessage({
            text: "I agree with you",
            author: AUTHORS.BOT,
            id: `msg-${Date.now()}`,
          });
        }, 1500);
      }
  
      return () => {
        clearTimeout(timeout);
      };
    }, [messageList]);
    
    return (
        <React.Fragment>
            <div className='chat_list'>
                <GutterlessList array={chatList}/>
            </div>

            <div className="message_block">
                <h2>Ваше сообщение роботу:</h2>
                <Form onSubmit = {handleSubmit}/>
                <MessageList messages={messageList}/>
            </div>
            
        </React.Fragment>
        
    )
}
export default App;