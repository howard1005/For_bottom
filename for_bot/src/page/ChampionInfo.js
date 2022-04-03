import React, { Component } from "react";
import styles from '../style/ChampionInfo.module.css';
import BasicTabs from './Tabs.js'
import {useState, useRef}from 'react'
import {useEffect} from 'react';
import axios from 'axios';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useLocation } from 'react-router-dom';
import ImageView from './ImageList.js'
import Tooltip from '@mui/material/Tooltip';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ChampionInfo (){
    const location = useLocation();
    const data = location.state.champInfo;
    const [abilityData, setAbilitydata] = useState(null);

    useEffect(()=>{
      const apiCall = async () => {
        await axios.get(`http://${global.serverAdress}/forbot/v1/champion/ability/${data.id}`)
        .then((json) => setAbilitydata(json.data.data))
        .catch(error => console.log(error))
      };
      apiCall();
    },[])

    const skillImages = () =>{
      const result = [];
      for (let i = 0; i < 4; i++) {
        abilityData && result.push(<Tooltip title={abilityData.spells[i].description}><img key={i} src= {abilityData.spells[i].image.full}></img></Tooltip>);
      }
      return result;
    }

    return (
        <>
            <section className={styles.info_section}>
                <img className={styles.champion_img} src={data.img_href}></img>
                {/* <img src = {abilityData.Aatrox.image.full}></img> */}
                {/* <div> {JSON.stringify(abilityData.image)}</div> */}
                <Stack spacing={2} width={100}>
                    <Item> {data.id}</Item>
                    <Item>챔피언 티어</Item>
                    <span>{skillImages()}</span>
                    {/* <Item>{JSON.stringify(abilityData.Aatrox["image"])}</Item> */}
                    {/* <ImageView items ={abilityData.Aatrox.image.full}></ImageView> */}
                    {/* <ImageList sx={{ width: 200, height: 50 }} cols={4} >
                        {abilityData.map((item) => (
                          <></>
                            // <ImageListItem key={item.id}>
                            //     <img
                            //         src={item.img}
                            //         alt={item.title}
                            //     />
                            // </ImageListItem>
                      ))}
                    </ImageList> */}
                </Stack>
                
            </section>
            <section>
            <BasicTabs></BasicTabs>
            </section>  
        </>
    );
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    
  ];

export default ChampionInfo;