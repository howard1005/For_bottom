import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export default function YoutubeList() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 1000,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 1000,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {channels.map((n, i) => (
        <li key={channels[i]['id']}>
          <ul>
            <ListSubheader>{`${channels[i]['url']}`}</ListSubheader>
              <ListItem key={channels[i]['id']}>
                <img src={channels[i]['thumbnails']}
                width='100' height='100'></img>
                
              </ListItem>
          </ul>
        </li>
      ))}
    </List>
  );
}

const channels = [
    {
      id:'1',
      url: 'https://www.youtube.com/watch?v=gX0ddl-OGa4',
      thumbnails:'https://img.youtube.com/vi/gX0ddl-OGa4/maxresdefault.jpg'
    },
    {
      id: '2',
      url: 'https://www.youtube.com/watch?v=IBK5-vECGHs',
      thumbnails:'https://img.youtube.com/vi/IBK5-vECGHs/default.jpg'
    },
    {
      id: '3',
      url: 'https://www.youtube.com/watch?v=X-fi1ZbVyNs',
      thumbnails:'https://img.youtube.com/vi/X-fi1ZbVyNs/maxresdefault.jpg'
    },
    {
      id: '4',
      url: 'https://www.youtube.com/watch?v=b9lhp0FUq5Q',
      thumbnails:'https://img.youtube.com/vi/b9lhp0FUq5Q/maxresdefault.jpg'
    }
  ]
