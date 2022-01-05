import React, { useContext, useState } from "react";
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Chats from "./chats/chats";
import {Home} from "./home/home"
import { Page404 } from "./page404/page404";
import { Profile } from "./profile/profile";
import GutterlessList from "./chatList/chatList"


const App =()=>{

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
                <Route path="/" element={<Home />}>
                    <Route path=":chatId" element={<Chats />}/>
                </Route>
                <Route path="chats" element={<GutterlessList/>}>
                    <Route path=":chatId" element={<Chats />}/>
                </Route>

                <Route path="/profile" element={<Profile />}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
        
    );
}
export default App;


