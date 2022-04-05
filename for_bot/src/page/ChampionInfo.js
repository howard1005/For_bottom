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
      
      abilityData&&result.push(<Tooltip title={abilityData.passive.description}><img src= {abilityData.passive.image.full}></img></Tooltip>)
      for (let i = 0; i < 4; i++) {
        abilityData && result.push(<Tooltip title={abilityData.spells[i].description}><span><img styled="vertical-align: middle;"key={i} src= {abilityData.spells[i].image.full}></img></span></Tooltip>);
      }
      return result;
    }

    return (
        <>
            <section className={styles.info_section}>
                <img className={styles.champion_img} src={data.img_href}></img>
                {/* <img src = {abilityData.Aatrox.image.full}></img> */}
                {/* <div> {JSON.stringify(abilityData.image)}</div> */}
                <Stack direction="column"spacing={1} width={100}>
                    <Item> {data.id}</Item>
                    <Item>챔피언 티어</Item>
                    <Stack width={400}><Item>{skillImages()}</Item></Stack>
                </Stack>
                
            </section>
            <section>
            <BasicTabs></BasicTabs>
            </section>  
        </>
    );
}

export default ChampionInfo;