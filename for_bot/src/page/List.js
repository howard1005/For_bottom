import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export default function PinnedSubheaderList() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader>{`룰루 소환사 주문 ${sectionId}`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <img src='https://opgg-static.akamaized.net/images/lol/spell/SummonerHaste.png?image=q_auto,f_webp,w_84&v=1646907748425'
                width='42' height='42'></img>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
