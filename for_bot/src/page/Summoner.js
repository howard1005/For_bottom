import React, { Component } from "react";
import {useState, useRef}from 'react'
import {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

function MatchCard(){

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

  const matchCards = () =>{
    const result = [MatchCard(), MatchCard()];
  
    /*
      result MatchCard set
    */

    return result;
  }

  return(
      <>
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
          {matchCards()}
        </Box>
      </>
    )
}

  
  
  export default Summoner;