import React, { Component } from "react";
import {useState}from 'react'
import {useEffect} from 'react';
import styles from '../style/Mate.module.css';
import axios from 'axios';
import { motion } from "framer-motion";

import create from 'zustand'

export const champInfo = create((set) => ({
  champions: null,
}));

function Mate (){

  const {champions} = champInfo();
  const [searchField, setSearchfield] = useState("");
  const [mateId, setMateid] = useState("");
  let [mateImages, setMateimages] = useState([]);
  let [filterImages, setFilterimages] = useState([]);
  
  useEffect(()=>{
    const apiCall = async () => {
      await axios.get(`http://${global.serverAdress}/forbot/v1/champion/img/all-url`)
      .then((json) => champInfo.setState({champions : json}))//change_champions(res.data.champion_images))
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

  function Championimages(props){
    let champId = props.champ['id'];
    
    return(
      <>
        <img className={styles.mate_img} alt ={props.champ['id']} src = {props.champ['url']} height='50' width='50' onClick={()=>imageClick(champId)}></img>
      </>
    );
  }

  
  return(
      <>
        <div className={styles.mate_title}>
        <h2 animate={{fontSize:20, scale:1.5}}>Mate</h2>
        </div>
        <div className={styles.mate_title}>검색
          <input type ="search" placeholder="searchField" onChange={(e) => setSearchfield(e.target.value)}></input>
        </div>

        <div className = {styles.mate_rows}>
          {
            
            filterImages.map(function(n, i){
              return(
                <Championimages champ = {filterImages[i]} key={filterImages[i]['id']}/>
              )
            })
        }
        </div>

        <motion.div className={styles.recommend_container}>
        {
            
            mateImages.map(function(n, i){
              return(
                <Championimages champ = {mateImages[i]} key={mateImages[i]['id']}/>
              )
            })
        }
        </motion.div>

      </>
    )
}

export default Mate;