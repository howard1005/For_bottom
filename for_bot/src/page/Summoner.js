import React, { Component } from "react";
import {useState, useRef}from 'react'
import {useEffect} from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

function MatchCard(matchData){

  var message = "image skill status..."

  return(
    <>
      <StyledPaper
        sx={{
          my: 1,
          mx: 'auto',
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{message}</Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </>
  )
}

function Summoner(){

  const [searchField, setSearchfield] = useState("");
  const [matchDatas, setmatchDatas] = useState([{red:[1,2,3], blue:[4,5,6]}, {red:[1,2,3], blue:[4,5,6]}, {red:[1,2,3], blue:[4,5,6]}]);

  const searchMatchDatas = async () => {
    await axios.get(`http://${global.serverAdress}/forbot/v1/match/${searchField}`)
    .then(res => setmatchDatas(res))
    .catch(error => console.log(error))
  }

  const matchCards = () =>{
    const result = matchDatas.length>0 ? matchDatas.map(matchData => MatchCard(matchData)) : matchDatas
    
    return result;
  }

  return(
      <>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          textAlign='center'

        >
          <TextField id="outlined-search" color = 'secondary' label="Search Summoner Name" type="search" onChange={(e) => setSearchfield(e.target.value)} />
          <Button variant="contained" onClick={searchMatchDatas}>검색</Button>
        </Box>

        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
          {matchCards()}
        </Box>
      </>
    )
}

  
  
  export default Summoner;