import React, { Component } from "react";
import {useState, useRef}from 'react'
import {useEffect} from 'react';
import styles from '../style/Home.module.css';
import axios from 'axios';
import {Typography} from '@material-ui/core'



function Championimages(props){
  return(
    <>
        <img className={styles.home_img} key ={props.id} src ={props.champ['url']} height='50' width='50'></img>
    </>
  );
}

function Home (){

  let [champions, change_champions] = useState([]);
  const [searchField, setSearchfield] = useState("");
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

  return(
      <>

          <div className={styles.home_font}>검색
            <input placeholder="searchField" onChange={(e) => setSearchfield(e.target.value)}></input>
          </div>
          
        <div className = {styles.rows}>
          {
            filterImages.map(function(n, i){
              return(
                  <Championimages champ = {filterImages[i]} key={filterImages[i]['id']}/>
              )
            })
          }
        </div>
        
      </>
    )
}

export default Home;