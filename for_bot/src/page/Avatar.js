import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function LetterAvatars() {
  return (
      <div className="circle_wrap">
        <Avatar sx={{ bgcolor: deepOrange[500],width: 300, height:300, position: 'realative',verticalalign: 'middle' }}>매우 불리</Avatar>
      </div>
  );
}