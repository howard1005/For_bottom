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
import Tooltip , {tooltipClasses}from '@mui/material/Tooltip';
import { blue } from "@mui/material/colors";
import Typography from '@mui/material/Typography';
import ReactHtmlParser from 'react-html-parser';

import create from 'zustand'



export const useStore = create((set) => ({
  abilityData: null,
  summonerSpellData: [],
  getSummonerSpellData: async ()=> {
    const response = await axios.get(`http://${global.serverAdress}/forbot/v1/summoner/all-url/`)
    set({ summonerSpellData: response.data.data })
    //어캐하는거야
  }
  
}));

// const planetNames = useStore((state) => state.planetNames);
// const setPlanetNames = useStore((state) => state.setPlanetNames);

// useEffect(() => {
//     const populatePlanetsFromAPI = async () => {
//         const planetsData = await (
//             await fetch("https://swapi.dev/api/planets")
//         ).json();
//         setPlanetNames(planetsData.results.map((pd: any) => pd.name));
//     };

//     populatePlanetsFromAPI();
// }, []);


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'Gray',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));



function ChampionInfo (){
    const location = useLocation();
    const data = location.state.champInfo;
    //const [abilityData, setAbilitydata] = useState(null);
    
    const {abilityData} = useStore();
    
    
    const {summonerSpellData} = useStore(state => state.getSummonerSpellData)

    useEffect(()=>{
      const apiCall = async () => {
        await axios.get(`http://${global.serverAdress}/forbot/v1/champion/ability/${data.id}`)
        .then((json) => useStore.setState({abilityData : json.data.data}))
        .catch(error => console.log(error))
      };
      apiCall();
    },[])

    // useEffect(()=>{
    //   const apiCall = async () => {
    //     await axios.get(`http://${global.serverAdress}/forbot/v1/summoner/all-url/`)
    //     .then((json) => JSON.parse(JSON.stringify(json.data.data))))) //useStore.setState({summonerSpellData = JSON.parse(JSON.stringify(json.data.data))}))
    //     .catch(error => console.log(error))
    //   };
      
    //   apiCall();
    // },[])

    const skillImages = () =>{
      const result = [];
      
      abilityData&&result.push(
      <HtmlTooltip title={
      <React.Fragment>
        <Typography color="Orange" sx={{ fontWeight: 'bold' }}>{ReactHtmlParser(abilityData.passive.name)} </Typography>
        <Typography color ="white" sx={{ fontFamily: 'Monospace'}, {fontSize: 12}}>{ReactHtmlParser(abilityData.passive.description)} </Typography>
      </React.Fragment>}>
        <img src= {abilityData.passive.image.full}></img>
      </HtmlTooltip>)
      for (let i = 0; i < 4; i++) {
      
      abilityData&&result.push(<HtmlTooltip title={
          <React.Fragment>
            <Typography color="Orange" sx={{ fontWeight: 'bold' }}>{ReactHtmlParser(abilityData.spells[i].name)} </Typography>
            <Typography color ="white" sx={{ fontFamily: 'Monospace'}, {fontSize: 12}}> {ReactHtmlParser(abilityData.spells[i].description)} </Typography>
          </React.Fragment>}>
          <span><img styled="vertical-align: middle;"key={i} src= {abilityData.spells[i].image.full}></img></span>
        </HtmlTooltip>
      )
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
            {useStore(state=>state.getSummonerSpellData)}
            <BasicTabs Information = {data}></BasicTabs>
            </section>
            
        </>
    );
}

export default ChampionInfo;