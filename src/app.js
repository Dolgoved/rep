import React, { useState } from "react";
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Chats from "./chats/chats";
import {Home} from "./home/home"
import { Page404 } from "./page404/page404";
import { Profile } from "./profile/profile";
import GutterlessList from "./chatList/chatList"


// список чатов
let initialChats = [
    {name: "Комната чата 1", id: "chat1"},
    {name: "Комната чата 2", id: "chat2"},
    {name: "Комната чата 3", id: "chat3"},
]

// создание объекта с чатами
const initialMessages = initialChats.reduce( (prevArg,nextArg)=>{
    prevArg[nextArg.id]=[];
    return prevArg;
}, {})


const App =()=>{
    const[chats, setChats] = useState(initialChats); // для списка чатов ... 
    
    const handleAddChat=()=>{ // попытался сделать добавление чатов, не работает :((
        setChats(()=>{
            chats.push({name: `Комната чата ${chats.length + 1}`, id: `chat${chats.length + 1}`});
        })
    }

    const[messages, setMessages] = useState(initialMessages) // хук для отслеживания добавлений сообщений в чат

    // логика добавления сообшений в объект сообщений initialMessages
    const handleAddMessage = (newMessage, chatId) =>{
        setMessages((prevMess)=>({...prevMess,[chatId]:[...prevMess[chatId], newMessage],}));
    };

    return(
        <BrowserRouter>
            <ul>
                <li>
                <Link to="/">HOME</Link>
                </li>
                <li>
                <Link to="/chats">CHATS</Link>
                </li>
                <li>
                <Link to="/profile">PROFILE</Link>
                </li>
            </ul>
            

            <Routes>
                <Route path="/" element={<Home chatList={chats}/>}>
                    <Route path=":chatId" element={<Chats messages={messages} onAddMessage={handleAddMessage}/>}/>
                </Route>
                <Route path="chats" element={<GutterlessList chatList={chats} addChat={handleAddChat}/>}>
                    <Route path=":chatId" element={<Chats messages={messages} onAddMessage={handleAddMessage}/>}/>
                </Route>

                <Route path="/profile" element={<Profile/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;




















// import React, {useState, useEffect } from 'react';
// import GutterlessList from "./chatList/chatList";  // импорт списка чатов
// import Form from "./form/form";
// import { AUTHORS } from "./utils/constants";
// import {MessageList} from "./messages/messages";
// import "./style/style.css";



// // список чатов
// const chatList = [
//     {name: "Комната чата 1", id: 11},
//     {name: "Комната чата 2", id: 22},
//     {name: "Комната чата 3", id: 33},
// ]


// function App(){
//     const [messageList, setMessageList] = useState([]);
//     const handleAddMessage = (newMessage) => {
//       setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
//     };
  
//     const handleSubmit = (text) => {
//       const newMessage = { text, author: AUTHORS.HUMAN, id: `msg-${Date.now()}` };
//       handleAddMessage(newMessage);
//     };
  
//     useEffect(() => {
//       let timeout;
//       if (messageList[messageList.length - 1]?.author === AUTHORS.HUMAN) {
//         timeout = setTimeout(() => {
//           handleAddMessage({
//             text: "I agree with you",
//             author: AUTHORS.BOT,
//             id: `msg-${Date.now()}`,
//           });
//         }, 1500);
//       }
  
//       return () => {
//         clearTimeout(timeout);
//       };
//     }, [messageList]);
    
//     return (
//         <React.Fragment>
//             <div className='chat_list'>
//                 <GutterlessList array={chatList}/>
//             </div>

//             <div className="message_block">
//                 <h2>Ваше сообщение роботу:</h2>
//                 <Form onSubmit = {handleSubmit}/>
//                 <MessageList messages={messageList}/>
//             </div>
            
//         </React.Fragment>
        
//     )
// }
// export default App;