import React, { Component } from "react";
import {useState, useRef}from 'react'
import {useEffect} from 'react';
import styles from '../style/Home.module.css';
import axios from 'axios';
import ImageView from './ImageList.js'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function Home (){

  let [champions, change_champions] = useState([]);
  const [searchField, setSearchfield] = useState("");
  const [mateId, setMateid] = useState("");
  let [mateImages, setMateimages] = useState([]);
  let [filterImages, setFilterimages] = useState([]);
  
  useEffect(()=>{
    const apiCall = async () => {
      await axios.get(`http://${global.serverAdress}/forbot/v1/champion/img/all-url`)
      .then(res => change_champions(res.data.champion_images))
      .catch(error => console.log(error))
    };
    apiCall();
  },[])

  useEffect(() => {
    setFilterimages(()=>
      champions.filter((c) => c.id.toLowerCase().includes(searchField.toLowerCase()))
    );
  }, [searchField, champions]);

  useEffect(() => {
    setMateimages(()=>
      champions.filter((c) => c.id.startsWith(mateId[0]))
      //champions.filter((c) => c.id.toLowerCase().includes(mateId.toLowerCase()))
    );
  }, [mateId]);

  function imageClick(id){
    console.log("click");
    console.log(id);

    setMateid(id);
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
            <TextField id="outlined-search" color = 'secondary' label="Search" type="search" onChange={(e) => setSearchfield(e.target.value)} />
          </Box>
         
          
        <div className = {styles.rows}>
          {

              <ImageView items ={filterImages}></ImageView>
            // filterImages.map(function(n, i){
            //   return(
            //       <Championimages champ = {filterImages[i]} key={filterImages[i]['id']}/>
            //   )
            // })
          }
        </div>
        
      </>
    )
}

export default Home;