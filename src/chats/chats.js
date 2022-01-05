import React, {useState, useEffect,  } from 'react';
import Form from "../form/form";
import { AUTHORS } from "../utils/constants";
import {MessageList} from "../messageList/messageList";
import "../style/style.css";
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {addMessage} from "../redux/messages/actionsMessages"
import { selectMessages } from '../redux/messages/selectors';


function Chats(){
    const {chatId} = useParams();     // хитрый хук который вытаскивает chatId
    //const navigate = useNavigate();
    const dispatch = useDispatch();
    const messages = useSelector(selectMessages);
    

    const onAddMessage = (newMessage, chatId)=>{
      dispatch(addMessage(newMessage, chatId))
    }

    const handleSubmit = (text) => {
      const newMessage = { text, author: AUTHORS.HUMAN, id: `msg-${Date.now()}` };
      onAddMessage(newMessage, chatId);
    };
  
    useEffect(() => {
      let timeout;
      if (messages[chatId]?.[messages[chatId].length - 1]?.author === AUTHORS.HUMAN) {
        timeout = setTimeout(() => {
          onAddMessage({
            text: "Ой как интересно! Вы такой умный!",
            author: AUTHORS.BOT,
            id: `msg-${Date.now()}`,
          },chatId);
        }, 1500);
      }
  
      return () => {
        clearTimeout(timeout);
      };
    }, [messages]);

    // при введении неправильного адреса возвращает обратно к списку чатов
    if (!messages[chatId]) {
      return <Navigate to="/chats" replace />;
    }
    
    return (
        <React.Fragment>
            <div className="message_block">
                <h2>Ваше сообщение господину роботу:</h2>
                <Form onSubmit = {handleSubmit}/>
                <MessageList messages={messages[chatId]}/>
            </div>
            
        </React.Fragment>
        
    )
}
export default Chats;