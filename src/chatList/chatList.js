import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';

export default function GutterlessList(props) {
    return (
      <List sx={{ width: '200px', maxWidth: 360, bgcolor: 'background.paper' }}>
        {props.array.map(({name, id}) => (
          <ListItem
            key={id}
            disableGutters
            secondaryAction={
              <IconButton href="#">
                <CommentIcon />
              </IconButton>
            }
          >
            <ListItemText primary={name}/>
          </ListItem>
        ))}
      </List>
    );
  }