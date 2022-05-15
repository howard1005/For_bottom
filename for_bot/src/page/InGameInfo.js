import React, { Component } from "react";
import {useState}from 'react'
import styles from '../style/InGameInfo.module.css';
import { Container } from '@mui/material';
import {Box} from '@mui/material';
import DenseTable from './Table.js'
import LetterAvatars from './Avatar.js'

function InGameInfo(){

  let [disadvantageRank, setDisadvantageRank] = useState('매우 불리');
  
  return (
    <>
    <div className={styles.ingame_font}>
      <h2>InGameInfo</h2>
    </div>
    <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white', width: '1000' ,height: '10vh' }}>
            <DenseTable></DenseTable>
        </Box>
        <LetterAvatars></LetterAvatars>
    </Container>
    </>
  )
}
  
  
  export default InGameInfo;