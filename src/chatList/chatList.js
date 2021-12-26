import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { Link, Outlet } from "react-router-dom";

function GutterlessList(props){
    return (
      <> 
      <div className='chat_list'>
        <List sx={{ width: '200px', maxWidth: 360, bgcolor: 'background.paper' }}>
        {props.chatList.map(({name, id}) => (
          <Link to={id} key={id}>
            <ListItem 
            disableGutters
            secondaryAction={
              <IconButton>
                <CommentIcon />
              </IconButton>
            }
          >
          <ListItemText primary={name}/> 
          </ListItem>
          </Link>
        ))}
        </List>
        <Outlet/>
        <button onClick={props.addChat}>add</button>
      </div>   
      
      </>
      
    );
  }
  export default GutterlessList;