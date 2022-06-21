import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion";
import styles from '../style/youtube.module.css';
import YoutubeList from './YoutubeList.js'

export default function AlignItemsList() {
  return (
    <List sx={{ marginLeft: 30, width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://img.youtube.com/vi/gX0ddl-OGa4/maxresdefault.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="게시물1"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <a href="https://www.youtube.com/watch?v=gX0ddl-OGa4">게시물1</a>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://img.youtube.com/vi/IBK5-vECGHs/default.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="게시물2"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <a href="https://www.youtube.com/watch?v=IBK5-vECGHs">게시물2</a>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://img.youtube.com/vi/X-fi1ZbVyNs/maxresdefault.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="게시물3"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              <a href="https://www.youtube.com/watch?v=X-fi1ZbVyNs">게시물3</a>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}





