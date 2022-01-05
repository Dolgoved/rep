import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {addChat, deleteChat} from "../redux/chats/actionsChats";
import { selectChatList } from '../redux/chats/selectors';



function GutterlessList(){
  // через store
    const chats = useSelector(selectChatList);

    const dispatch = useDispatch();
    const onAddChat = () =>{
      const newId = `chat${chats.length + 1}`;
      const newChat = {
        name: `Комната чата ${chats.length + 1}`,
        id: newId,
      }
      dispatch(addChat(newChat));
      console.log(chats);
    };

    const onDeleteChat = ()=>{
      if(chats.length>0){
          chats.pop();
          dispatch(deleteChat())
      }
    }

    return (
      <> 
      <div className='chat_list'>

        <List sx={{ width: '200px', maxWidth: 360, bgcolor: 'background.paper' }}>
        {chats.map((chat) => (
          <Link to={`/chats/${chat.id}`} key={chat.id}>
            <ListItem 
            disableGutters
            secondaryAction={
              <IconButton>
                <CommentIcon />
              </IconButton>
            }
          >
          <ListItemText primary={chat.name}/> 
          </ListItem>
          </Link>
        ))}
        </List>
        <button onClick={onAddChat}>add chat</button>
        <button onClick={onDeleteChat}>delete chat</button>
        <Outlet/>
        
      </div>   
      
      </>
      
    );
  }
  export default GutterlessList;